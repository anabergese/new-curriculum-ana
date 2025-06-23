#!/usr/bin/env bash

set -o errexit

bundle install
yarn install
yarn build
yarn build:css
bin/rails assets:precompile
bin/rails assets:clean