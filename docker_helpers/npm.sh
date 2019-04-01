#!/bin/bash
if [ -z "$1" ]
then
    echo "$BASH_SOURCE <npm command with optional parameters>"
else
    docker-compose exec client npm "$@"
fi
