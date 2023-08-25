#!/bin/bash
set -e

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)
DIR=$(dirname "$SCRIPT_DIR")

if docker compose version > /dev/null 2>&1; then
  	DOCKER_COMPOSE="docker compose"
else
  	DOCKER_COMPOSE="docker-compose"
fi

if [ -z "$1" ] 
then
	$DOCKER_COMPOSE -f $DIR/environments/docker-compose.yml restart
else
	$DOCKER_COMPOSE -f $DIR/environments/docker-compose.yml restart $@
fi