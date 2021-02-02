#!/bin/bash

set -e

if [[ -d "./node_modules/@cpmech/rcomps/rcomps" ]]; then
    echo ">>> moving rcomps to src <<<"
    rm -rf ./src/rcomps
    mv ./node_modules/@cpmech/rcomps/rcomps ./src/
fi
