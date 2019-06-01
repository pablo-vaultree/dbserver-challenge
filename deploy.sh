#!/bin/bash
git pull origin master && docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
chmod +x deply.sh
export PATH=$PWD/deply.sh
