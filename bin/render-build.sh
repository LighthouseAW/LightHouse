#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
# bundle exec rake assets:precompile
# bundle exec rake assets:clean

npm i --prefix lighthouse-fe && npm run build --prefix client

cp -a lighthouse-fe/out/. public/


bundle exec rake db:migrate
bundle exec rake db:seed