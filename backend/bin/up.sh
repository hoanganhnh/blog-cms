#!/bin/bash
set -e

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)
DIR=$(dirname "$SCRIPT_DIR")
WORK_DIR=$(dirname "$DIR")

if docker compose version > /dev/null 2>&1; then
  	DOCKER_COMPOSE="docker compose"
else
  	DOCKER_COMPOSE="docker-compose"
fi

WORK_DIR="$WORK_DIR" \
	DOCKER_UID="$(id -u)" \
	DOCKER_GID="$(id -g)" \
	$DOCKER_COMPOSE -f $DIR/environments/docker-compose.yml up -d --remove-orphans
