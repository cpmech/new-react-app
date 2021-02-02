#!/bin/bash

set -e

# check required tools
yarn --version
npm-check-updates --version

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
yarn create react-app $PROJ --template typescript
cd $PROJ
echo ".eslintcache" >> .gitignore
echo "src/rcomps" >> .gitignore

# copy configuration files
message "📜 copy configuration files"
cp -av $TEMPLATE/.eslintignore .
cp -av $TEMPLATE/.huskyrc .
cp -av $TEMPLATE/.lintstagedrc .
cp -av $TEMPLATE/.prettierrc .
cp -av $TEMPLATE/jest.config.js .
cp -rvf $TEMPLATE/.vscode .
cp -rvf $TEMPLATE/zscripts .

# fix package.json
message "📝 fix package.json"
sad -i '/"eject":/i\    "type-check": "tsc",' package.json
sad -i '/"eject":/i\    "lint": "eslint --ignore-path .eslintignore . --ext ts --ext tsx --quiet --fix",' package.json
sad -i '/"eject":/i\    "lint:fix": "yarn lint --fix",' package.json
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
yarn install

# add dependencies
message "✨ add dependencies"
yarn add @cpmech/basic @cpmech/util @cpmech/react-icons @cpmech/rcomps \
    @emotion/react react-responsive @reach/router react-helmet-async

# add dev dependencies
message "✨ add dev dependencies"
yarn add -D husky lint-staged prettier \
    eslint-config-prettier eslint-plugin-prettier \
    @types/react-responsive @types/reach__router @types/react-helmet-async \
    @storybook/addon-essentials @storybook/preset-create-react-app @storybook/react

# run tests
message "🔥 run tests"
CI=true yarn test

# git commit changes
message "👍 git commit changes"
git add .gitignore yarn.lock .eslintignore .huskyrc jest.config.js .lintstagedrc .prettierrc \
    .vscode/settings.json zscripts/npm_postinstall.bash package.json src \
    && git commit -m "Re-Init"

# print success
message "🎉 success!"
