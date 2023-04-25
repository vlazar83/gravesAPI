#! /bin/bash

mongoimport --host mongodb --db graves --username "root" --password "root" --authenticationDatabase=admin --collection graves --type json --file ./mongo-seed/init.json --jsonArray