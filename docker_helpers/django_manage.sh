#!/bin/bash
if [ -z "$1" ]
then
    echo "$BASH_SOURCE <management command with optional parameters>"
else
    docker-compose exec server python manage.py "$@"
fi
