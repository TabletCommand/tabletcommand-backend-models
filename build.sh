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

NODE_VERSION="v10.15.3"

nvm install $NODE_VERSION
nvm use $NODE_VERSION;
npm install;
npm test;
