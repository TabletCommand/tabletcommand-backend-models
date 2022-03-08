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

NODE_VERSION="v16.13.2"

nvm use $NODE_VERSION || nvm install $NODE_VERSION

npm install;
echo "--- test"
npm test;
echo "--- type coverage"
npx type-coverage;
