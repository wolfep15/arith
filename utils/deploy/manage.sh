#!/bin/bash

# import env variables if not set
if [[ ! $RDS_HOSTNAME ]] ; then
  sudo sh -c 'cat /opt/elasticbeanstalk/deployment/env > .env'
fi

pipenv run python jumboSmash/manage.py "$@"

EXIT_CODE=$?
if [ $EXIT_CODE != 0 ] ; then
  echo
  echo "+---------------------------------------------+"
  echo "|                                             |"
  echo "| MAKE SURE THE VIRTUAL ENV IS INSTALLED      |"
  echo "| THIS SCRIPT MUST BE RUN AT THE PROJECT ROOT |"
  echo "|                                             |"
  echo "+---------------------------------------------+"
  exit $EXIT_CODE
fi
