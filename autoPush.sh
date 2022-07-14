#!/bin/bash

time=`date +%y-%m-%d@%H:%M:%S`

git add *
git commit -m "auto task on $time"

git push origin main
