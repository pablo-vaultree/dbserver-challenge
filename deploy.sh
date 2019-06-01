#!/bin/bash
git pull origin master && docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
chmod +x deploy.sh
alias deploy.sh='sh deploy.sh'
export PATH=$PATH:$PWD/deploy.sh
