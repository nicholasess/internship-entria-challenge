"use strict";
// @flow
/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

import "babel-polyfill";
import fetch from "node-fetch";
const err_message = {
	title: "Not has city!"
};

let prettyJson = (data: { title: string }) => {
	let json = JSON.stringify(data, null, 2);
	console.log(json);
	return json;
};

let api = (city: string) => {
	return `https://www.metaweather.com/api/location/search/?query=${city}`;
};

let hasArgs = (city: string) => {
	return city !== null && city.length > 0;
};

let fetchApi = async (url: string) => {
	let data = await fetch(url);
	return data.json();
};

let execute = async (argv: { city: string }) => {
	if (hasArgs(argv.city)) {
		let url = api(argv.city);
		let data = await fetchApi(url);
		data.length > 0 ? prettyJson(data) : prettyJson(err_message);
		return data;
	} else {
		prettyJson(err_message);
	}
};

export { api, hasArgs, fetchApi, execute, prettyJson };
