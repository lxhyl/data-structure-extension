#!/bin/sh  
# author lxhyl 
# date 2021-12-26 

# This shell file to build docs.   
# $1  catalogue  

# eg:
# build.sh typescript

# will make typescript's documents


echo "build start"

rootDir=$(pwd)

cd $1
dir=$(ls -l ./ |awk '/^d/ {print $NF}')
rm -r $rootDir/docs/$1/docs.md
for item in $dir
do
cd $item
cat docs.md >> $rootDir/docs/$1/docs.md
done

echo "\033[32mbuild $1 documents finish\033[0m"
exit 0
