#!/bin/bash


[ -z "`which convert`" ] && echo "Missing convert" && exit 1
[ -z "`which optipng`" ] && echo "Missing optipng" && exit 1
[ -z "`which jpegoptim`" ] && echo "Missing jpegoptim" && exit 1
for i in *.png; do convert $i -resize '100>' out.png; cp out.png $i; done
for i in *.jpg; do convert $i -resize '100>' out.jpg; cp out.jpg $i; done
rm out.png out.jpg
parallel --bar 'optipng -o9 {}' ::: *.png
parallel --bar 'jpegoptim -s {}' ::: *.jpg
