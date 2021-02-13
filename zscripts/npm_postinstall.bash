#!/bin/bash

set -e

echo ">>> copy git pre-commit hook <<<"
cp ./zscripts/git-pre-commit.sh ./.git/hooks/pre-commit
chmod +x ./.git/hooks/pre-commit

if [[ -d "./node_modules/@cpmech/rcomps/rcomps" ]]; then
    echo ">>> copy rcomps to src <<<"
    rm -rf ./src/rcomps
    cp -rf ./node_modules/@cpmech/rcomps/rcomps ./src/
fi
