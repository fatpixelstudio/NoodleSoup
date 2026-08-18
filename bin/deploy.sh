#!/usr/bin/env bash
#
# Deploy-script: merget je huidige branch naar production en pusht,
# waarna production-push je GitHub Action triggert.
#
# Gebruik:  ./bin/deploy.sh   (of via package.json:  yarn deploy)
#
# Veilig omdat:
#   - set -euo pipefail : stopt meteen bij de eerste fout
#   - trap ... EXIT     : keert ALTIJD terug naar je startbranch, ook bij fouten
#   - --ff-only         : weigert een rommelige merge als de branches niet
#                         netjes op één lijn liggen (vroege waarschuwing)
#
# LET OP: bouw eerst je assets (yarn build) en commit dist/ voordat je deployt,
# anders merge je een verouderde build naar production.

set -euo pipefail

# Onthoud waar je nu staat
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Keer altijd terug naar je startbranch, wat er ook gebeurt
trap 'git checkout "$CURRENT_BRANCH"' EXIT

echo "→ Deploying $CURRENT_BRANCH naar production..."
git checkout production
git merge --ff-only "$CURRENT_BRANCH"
git push
echo "✓ Gedeployed. Terug naar $CURRENT_BRANCH."
