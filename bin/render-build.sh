#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
# bundle exec rake assets:precompile
# bundle exec rake assets:clean

npm i --prefix client && npx next build --prefix client
cp -a client/.next/. public/


bundle exec rake db:migrate
bundle exec rake db:seed