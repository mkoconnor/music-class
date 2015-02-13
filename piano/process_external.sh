#!/bin/bash

base=$(readlink -f $(dirname $0))
ext=$base/external

mkdir -p $ext/processed

head -n 65 $ext/audiosynth-website/index.html | tail -n 53 | grep -F -v 'background:url' > $ext/processed/index.css

tail -n 117 $ext/audiosynth/audiosynth.js | sed 's/name: '\''\(.*\)'\'',/var \1 = { name: '\''\1'\'',/' | sed 's/^},/};/' | sed 's/^})/}/' | sed 's/^{$//' > $ext/processed/instruments.js
