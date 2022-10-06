#!/usr/bin/env sh

rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:origami0227/bigScreen-website.git &&
git push -f -u origin main &&
cd ..
echo https://origami0227.github.io/bigScreen-website/index.html#/