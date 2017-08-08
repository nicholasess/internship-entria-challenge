"use strict";
/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

import "babel-polyfill";
import fetch from "node-fetch";
const err_message = {
	err: "Not has city!"
};

let prettyJson = data => {
	let json = JSON.stringify(data, null, 2);
	console.log(json);
	return json;
};

let api = city => {
	return `https://www.metaweather.com/api/location/search/?query=${city}`;
};

let hasArgs = city => {
	return city !== null && city.length > 0;
};

let fetchApi = async url => {
	let data = await fetch(url);
	return data.json();
};

let execute = async argv => {
	if (hasArgs(argv.city)) {
		let url = api(argv.city);
		let data = await fetchApi(url);
		prettyJson(data);
		return data;
	} else {
		prettyJson(err_message);
	}
};

export { api, hasArgs, fetchApi, execute, prettyJson };
