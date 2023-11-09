#!/bin/bash

set -e

if [ -f ~/.bash_profile ]; then
    source ~/.bash_profile
fi

if [ -f ~/.profile ]; then
    source ~/.profile
fi

# MacOS
if hash brew 2>/dev/null; then
    if [ -f  $(brew --prefix nvm)/nvm.sh ]; then
      source  $(brew --prefix nvm)/nvm.sh
    fi
fi

NODE_VERSION="v16.19.0"

nvm use $NODE_VERSION || nvm install $NODE_VERSION

npm install
echo "--- spelling"
npx cspell
echo "--- type coverage"
npx type-coverage
echo "--- lint"
npm run lint
echo "--- test"
npm test
