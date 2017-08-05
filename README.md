# Repository about test Internship Entria

For study, i wrote the challenge of Entria, if you want to see project own, click [https://github.com/entria/jobs/blob/master/internship/challenge.md](here)

## Internship Challenge

- [x] choose one or more of these public APIs - https://github.com/toddmotto/public-apis.
- [x] create a simple command line interface to access this api (I recommend to use [yargs](https://github.com/yargs/yargs))
- [x] it should use **fetch** to request data from an API
- [x] it should be open sourced on your github repo

## Extras
- [ ] configure babel
- [ ] configure eslint
- [ ] configure prettier
- [ ] use async await
- [x] transform response to something more readable
- [ ] configure and use flowtype
- [x] add tests

Install

`npm install`

Example of usage:

Allow sh file with `chmod +x ./metaweather-cli.sh` in Unix OS

`./metaweather-cli --city "São Paulo"`

```
[
  {
    "title": "São Paulo",
    "location_type": "City",
    "woeid": 455827,
    "latt_long": "-23.562880,-46.654659"
  }
]
```

Test

`npm test`



