#!/bin/sh

ssh -t -t ubuntu@ip-172-31-22-216 <<EOF
    echo "Let's change to repo Vegrren"
    cd ~/Vegreen
    echo "Let's pull the newest update from master branch"
    git pull origin master
    echo "Install and Test"
    npm install
    ec2 restart server.js
    exit
EOF
