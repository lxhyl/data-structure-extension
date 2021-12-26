#!/bin/sh  
# author lxhyl 
# date 2021-12-26 

# This shell file to build docs.   
# $1  catalogue  

# eg:
# build.sh typescript

# will make typescript's documents  


if !(test -n "${1}");then 
  echo "\033[31m Error:Build must have a param to assgin language folder \033[0m"
  exit 0
fi

echo "build start"

rootDir=$(pwd)

cd $1
dir=$(ls -l ./ |awk '/^d/ {print $NF}' | grep -v 'node_modules')
rm -r $rootDir/docs/$1/docs.md
for item in $dir
do
cd $item 
mkdir $rootDir/docs/$1
cat docs.md >> $rootDir/docs/$1/docs.md
done

echo "\033[32mbuild $1 documents finish\033[0m"
exit 0
