#!/usr/bin/env node
const argv = require('yargs').argv
const metaweather = require('./lib/metaweather')

metaweather.execute(argv);