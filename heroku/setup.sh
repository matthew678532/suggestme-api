#!/bin/sh -e

OS_TYPE=""

if [[ "$OSTYPE" == "darwin"* ]]; then
    OS_TYPE="darwin"
elif [[ "$OSTYPE" == "msys"* ]] || [[ "$OSTYPE" == "cygwin"* ]]; then
    OS_TYPE="win32"
else
    OS_TYPE="linux"
fi

OS_ARCH="x$(getconf LONG_BIT)"

curl https://cli-assets.heroku.com/heroku-cli/channels/stable/heroku-cli-${OS_TYPE}-${OS_ARCH}.tar.gz -o heroku.tar.gz
tar -xvzf heroku.tar.gz
rm heroku.tar.gz
mkdir -p /usr/local/lib /usr/local/bin
mv heroku-cli-* /usr/local/lib/heroku
ln -s /usr/local/lib/heroku/bin/heroku /usr/local/bin/heroku
