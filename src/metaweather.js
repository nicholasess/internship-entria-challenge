'use strict';

const fetch = require('node-fetch')
const err_message = {
	"err": "Not has city!"
}

let prettyJson = (data) => {
	return JSON.stringify(data, null, 2)
}

let api = (city) => {
	return `https://www.metaweather.com/api/location/search/?query=${city}`
}

let hasArgs = (city) => {
	return city !== null && city.length > 0
}

let fetchApi = (url) =>{
	return fetch(url).then((data) => {
		return data.json()
	})
}

let execute = (argv) => {

if(hasArgs(argv.city)){
	let url = api(argv.city)
	fetchApi(url).then((data) => {
		console.log(prettyJson(data))
	})	
}else{
	console.log(prettyJson(err_message))
}

}

exports.api = api
exports.hasArgs = hasArgs
exports.fetchApi = fetchApi
exports.execute = execute