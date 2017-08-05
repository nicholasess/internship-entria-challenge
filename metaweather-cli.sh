#!/usr/bin/env node
const argv = require('yargs').argv
const metaweather = require('./src/metaweather')

metaweather.execute(argv);