# NoodleSoup

Front-end starter kit by Fat Pixel.

## What this front-end starter kit is

A collection of scripts, styles and a yarn / webpack bundler for your projects.

No HTML, just the styles and scripts. 

## Getting it up-and-running

I use [Yarn](https://yarnpkg.com/) as my package manager. In your terminal, run `yarn install` to get the necessary packages. 

Source files in the `src` folder, bundled files in the `dist` folder. Some static assets (like images) in the `assets` folder.

Some notes:

- With the command `yarn start` you'll run webpack and watch the files for changes. 
- The SVG's in `/design/assets/svg/` are also watched and if changed, optimized with `svgo` and copied to `/assets/images/svg/`. 
- When you want to build the minified styles, run `yarn build`, it'll run patch so the version number gets incremented.
- There is also a `yarn deploy` task, it'll merge the main branch with a production branch. Using the script in `/bin/`. Read more on that below.

## Deploy setup

This starter comes with a ready-to-use GitHub Actions deploy that **does nothing**
until you deliberately activate it. There are two flavours — pick one per project.

### How it works

- The deploy triggers on a push to the **`production`** branch.
- In a fresh project that branch doesn't exist yet, so the deploy is inactive by default.
- You work and push on `main` as usual (nothing goes live).
- You deploy by merging `main` into `production` — by hand or via `yarn deploy`.

### Which variant?

- **FTPS** (`deploy-ftps.yml`) — active by default. For hosts without SSH access.
- **rsync/SSH** (`deploy-rsync.yml.disabled`) — the more robust option, but requires
  SSH access on the host. Disabled by default (`.disabled` extension).

Only ever use one. If you choose rsync, delete or rename the FTPS workflow so you
don't end up with a double deploy.

---

### Activating — FTPS variant

1. Set repository secrets (Settings → Secrets and variables → Actions → Secrets):
   - `FTP_HOST`
   - `FTP_USER`
   - `FTP_PASSWORD`
2. Set a repository variable (Settings → Secrets and variables → Actions → Variables):
   - `DEPLOY_PATH` — theme path on the server, e.g. `/httpdocs/wp-content/themes/my-theme/` (end with `/`)
3. Create and push the production branch:
   ```bash
   git checkout main
   git branch production
   git push -u origin production
   ```
4. Done. From now on every merge to `production` deploys.

---

### Activating — rsync/SSH variant

1. Rename `deploy-rsync.yml.disabled` to `deploy-rsync.yml` and delete `deploy-ftps.yml`.
2. Generate an SSH key pair:
   ```bash
   ssh-keygen -t ed25519 -C "github-deploy" -f ./deploy_key
   ```
3. Add the public key (`deploy_key.pub`) to `~/.ssh/authorized_keys` on the server.
4. Add the private key (`deploy_key`) as repository secret `DEPLOY_KEY`.
5. Set repository variables: `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_PATH` (path ends with `/`).
6. Create and push the production branch (see step 3 above).

Note: `--delete-after` makes the server an exact mirror of your repo. Anything on
the server that isn't in the repo (and isn't excluded) gets deleted.

---

### The deploy script (yarn deploy)

`bin/deploy.sh` handles the merge ritual for you: it merges your current branch into
`production`, pushes (which triggers the deploy) and then returns to your starting branch.

Make it executable once:
```bash
chmod +x bin/deploy.sh
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "./bin/deploy.sh"
}
```

Use it:
```bash
yarn deploy
```

**Important:** build and commit your assets (`yarn build`, then commit `dist/` on
`main`) before you deploy — otherwise you'll merge a stale build into production.
The script deliberately keeps the build separate, so you stay in control of it.

---

### Maintenance: the exclude list

Both workflows exclude folders that don't belong on the server (`src/`, `design/`,
`bin/`, `node_modules/`, the webpack configs, etc.). This list easily falls behind
your project structure.

**Whenever you add a new top-level folder, check whether it should go into the deploy.**
Think of `tests/`, `.vscode/`, `docs/`, or a `vendor/`/`composer.json` if you ever add
Composer. If the folder doesn't belong on the server, add it to the exclude list in the
workflow you're using (in both, if you keep both around).

## Why NoodleSoup?

I know. It's a silly name. If you really need to know the reason why such a silly name for a front-end starter kit, here goes. The name of my one-man web studio is Fat Pixel. I figured the starter kit should be something dinner related. So because it's a 'starter', let's give it the name of an entree. And also because of:

![Friends, season 5, Joey says: Mmmmm Noodlesoup](https://i.ytimg.com/vi/VBvFCWTMp18/sddefault.jpg)

So there's that: Noodle Soup. A silly name.

## Credits and thanks

Truckloads of thanks to my former colleague [Jonathan van Wunnik](https://github.com/jolantis) for the inspiration!
