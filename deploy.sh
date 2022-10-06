#!/usr/bin/env sh

rm -rf dist &&
yarn build --base ./ &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git remote add origin git@github.com:origami0227/bigScreen-website-1.git &&
git branch -M main &&
git push -f -u origin main &&
cd ..
echo https://origami0227.github.io/bigScreen-website-1/index.html#/