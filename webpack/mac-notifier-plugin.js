/**
 * MacNotifierPlugin
 *
 * Native macOS build notifications via osascript. No dependencies,
 * no bundled binaries, so no Rosetta / architecture issues.
 *
 * Options:
 *   title         Notification title.                        Default: the
 *                 "name" from package.json, title-cased
 *                 (my-project -> My Project), else 'Webpack'
 *   errorsOnly    Only notify when a build fails.              Default: false
 *   notifyOnFix   With errorsOnly, still notify once when a
 *                 build recovers after a failure.              Default: true
 *   playSound     Play sounds with notifications.              Default: true
 *   sound         Sound for success notifications, or false
 *                 for a silent success.                        Default: 'Glass'
 *   errorSound    Sound for error notifications.               Default: 'Basso'
 *   alwaysNotify  Notify on every successful build, not just
 *                 the first one (ignored with errorsOnly).     Default: false
 *
 * Sound names are the ones in /System/Library/Sounds
 * (Basso, Blow, Bottle, Frog, Funk, Glass, Hero, Morse, Ping, Pop,
 * Purr, Sosumi, Submarine, Tink).
 *
 * A failing notification never breaks the webpack process.
 */
const { execFile } = require('child_process');
const fs = require('fs');
const path = require('path');

class MacNotifierPlugin {
  constructor(options = {}) {
    this.options = {
      title: null,
      errorsOnly: false,
      notifyOnFix: true,
      playSound: true,
      sound: 'Glass',
      errorSound: 'Basso',
      alwaysNotify: false,
      ...options,
    };
    this.lastBuildFailed = null; // null means no build yet
  }

  notify(title, message, sound) {
    if (process.platform !== 'darwin') return;

    const withSound = this.options.playSound && sound;

    // Title/message/sound are passed as argv, so no quote escaping needed.
    const body = withSound
      ? 'display notification (item 2 of argv) with title (item 1 of argv) sound name (item 3 of argv)'
      : 'display notification (item 2 of argv) with title (item 1 of argv)';

    const args = ['-e', 'on run argv', '-e', body, '-e', 'end run', title, message, withSound || ''];

    execFile('osascript', args, (err) => {
      if (err) console.warn(`[MacNotifierPlugin] could not show notification: ${err.message}`);
    });
  }

  apply(compiler) {
    if (!this.options.title) {
      this.options.title = projectName(compiler.context) || 'Webpack';
    }

    compiler.hooks.done.tap('MacNotifierPlugin', (stats) => {
      const failed = stats.hasErrors();
      const { title, sound, errorSound, alwaysNotify, errorsOnly, notifyOnFix } = this.options;

      if (failed) {
        const firstError = stats.compilation.errors[0];
        this.notify(`${title}: build failed`, firstLine(firstError), errorSound);
      } else if (this.lastBuildFailed === true) {
        if (!errorsOnly || notifyOnFix) {
          this.notify(title, 'Build fixed', sound);
        }
      } else if (!errorsOnly && (alwaysNotify || this.lastBuildFailed === null)) {
        this.notify(title, 'Build successful', sound);
      }

      this.lastBuildFailed = failed;
    });
  }
}

function projectName(dir) {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8'));
    if (!pkg.name) return null;
    return pkg.name
      .replace(/^@[^/]+\//, '') // drop npm scope
      .split(/[-_\s]+/)
      .filter(Boolean)
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(' ');
  } catch (e) {
    return null;
  }
}

function firstLine(error) {
  const raw = (error && (error.message || String(error))) || 'Unknown error';
  const line = raw
    .replace(/\u001b\[[0-9;]*m/g, '') // strip ANSI colours
    .split('\n')
    .map((l) => l.trim())
    .find(Boolean);
  return (line || 'Unknown error').slice(0, 200);
}

module.exports = MacNotifierPlugin;
