#!/bin/sh -e

OS_TYPE=""

if [[ "$OSTYPE" == "darwin"* ]]; then
    OS_TYPE="darwin"
elif [[ "$OSTYPE" == "linux"* ]]; then
    OS_TYPE="linux"
elif [[ "$OSTYPE" == "msys"* ]] || [[ "$OSTYPE" == "cygwin"* ]]; then
    OS_TYPE="win32"
fi

OS_ARCH=""

if [[ "$(getconf LONG_BIT)" == "32" ]]; then
    OS_ARCH="x32"
elif [[ "$(getconf LONG_BIT)" == "64" ]]; then
    OS_ARCH="x64"
else
    OS_ARCH="arm"
fi

curl https://cli-assets.heroku.com/heroku-cli/channels/stable/heroku-cli-${OS_TYPE}-${OS_ARCH}.tar.gz -o heroku.tar.gz
tar -xvzf heroku.tar.gz
rm heroku.tar.gz
mkdir -p /usr/local/lib /usr/local/bin
mv heroku-cli-* /usr/local/lib/heroku
ln -s /usr/local/lib/heroku/bin/heroku /usr/local/bin/heroku
