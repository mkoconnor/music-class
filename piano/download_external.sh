#!/bin/bash
set -e -u -o pipefail

basedir=$(readlink -f $(dirname $0))

mkdir -p $basedir/external
mkdir -p $basedir/external/audiosynth

tmprepo=$(mktemp -d)
git clone https://github.com/keithwhor/audiosynth.git $tmprepo
cd $tmprepo
git archive master | tar -x -C $basedir/external/audiosynth
rm -rf $tmprepo

cd $basedir/external
mkdir audiosynth-website
cd audiosynth-website

curl -O 'http://www.keithwhor.com/music/audiosynth.view.js'
curl -O 'http://www.keithwhor.com/music/index.html'
