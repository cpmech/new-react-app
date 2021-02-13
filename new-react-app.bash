#!/bin/bash

set -e

# check required tools
echo "yarn --version"
yarn --version
echo "npm --version"
npm --version
echo "npm-check-updates --version"
npm-check-updates --version

# options
PRESENTATION=${1:-"OFF"}

# constants
TEMPLATE="`dirname \"$0\"`"
APPSRC="$TEMPLATE/src"

# fix 'sad' command in macOS
sad() { 
  sed "$@"
}
unamestr=`uname`
if [[ "$unamestr" == 'Darwin' ]]; then
    sad() { 
        gsed "$@"
    }
    echo "Remember to:"
    echo "brew install gnu-sed"
fi

# pkg commands
USE_NPM="false"
pkg_create() {
    if [ "$USE_NPM" = "true" ]; then
        npx create-react-app $PROJ --template typescript
    else
        yarn create react-app $PROJ --template typescript
    fi
}
pkg_i() {
    if [ "$USE_NPM" = "true" ]; then
        npm install
    else
        yarn
    fi
}
pkg_add() {
    if [ "$USE_NPM" = "true" ]; then
        npm install $1
    else
        yarn add $1
    fi
}
pkg_add_dev() {
    if [ "$USE_NPM" = "true" ]; then
        npm install -D $1
    else
        yarn add -D $1
    fi
}
pkg_test() {
    if [ "$USE_NPM" = "true" ]; then
        npm run test
    else
        yarn test
    fi
}

# define message function
message(){
    echo
    echo ">>> $1 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
    echo
}

# check input
if [[ $# == 0 ]]; then
    echo
    echo "usage:"
    echo "       ./`basename $0` myapp"
    echo
    exit 1
fi
PROJ=$1

# create project
message "🚀 create react app"
pkg_create
cd $PROJ
echo ".eslintcache" >> .gitignore
echo "src/rcomps" >> .gitignore

# copy configuration files
message "📜 copy configuration files"
cp -av $TEMPLATE/.eslintignore .
cp -av $TEMPLATE/.prettierrc .
cp -av $TEMPLATE/jest.config.js .
cp -rvf $TEMPLATE/.vscode .
cp -rvf $TEMPLATE/zscripts .

# fix package.json
message "📝 fix package.json"
sad -i '/"eject":/i\    "type-check": "tsc",' package.json
sad -i '/"eject":/i\    "lint": "eslint --ignore-path .eslintignore . --ext ts --ext tsx --quiet --fix",' package.json
    if [ "$USE_NPM" = "true" ]; then
        sad -i '/"eject":/i\    "lint:fix": "npm run lint --fix",' package.json
    else
        sad -i '/"eject":/i\    "lint:fix": "yarn lint --fix",' package.json
    fi
sad -i '/"eject":/i\    "postinstall": "bash ./zscripts/npm_postinstall.bash"' package.json
sad -i '/"eject":/d' package.json

# copy src files
message "copy src files"
cp -avf $TEMPLATE/src/App.test.tsx ./src/
cp -avf $TEMPLATE/src/App.tsx ./src/
cp -avf $TEMPLATE/src/cssHtml.ts ./src/
cp -avf $TEMPLATE/src/index.tsx ./src/
cp -rvf $TEMPLATE/src/components ./src/
cp -rvf $TEMPLATE/src/pages ./src/

# update dependencies
message "🆕 update dependencies"
npm-check-updates -u
pkg_i

# add dependencies
message "✨ add dependencies"
DEPS="@cpmech/basic @cpmech/util @cpmech/react-icons @cpmech/rcomps \
    @emotion/react react-responsive"
pkg_add $DEPS

# add dev dependencies
message "✨ add dev dependencies"
DEVDEPS="eslint-config-prettier eslint-plugin-prettier \
    @types/react-responsive"
pkg_add_dev $DEPS

# run tests
message "🔥 run tests"
CI=true pkg_test

# git commit changes
message "👍 git commit changes"
git add .gitignore yarn.lock .eslintignore jest.config.js .prettierrc \
    .vscode/settings.json zscripts/npm_postinstall.bash package.json src \
    && git commit -m "Re-Init"

# print success
message "🎉 success!"
