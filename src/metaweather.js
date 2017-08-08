"use strict";
// @flow
/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

import "babel-polyfill";
import fetch from "node-fetch";
const err_message = {
	title: "Not has city!"
};

export const prettyJson = (data: { title: string }) => {
	let json = JSON.stringify(data, null, 2);
	console.log(json);
	return json;
};

export const api = (city: string) => {
	return `https://www.metaweather.com/api/location/search/?query=${city}`;
};

export const hasArgs = (city: string) => {
	return city !== null && city.length > 0;
};

export const fetchApi = async (url: string) => {
	let data = await fetch(url);
	return data.json();
};

export const execute = async (argv: { city: string }) => {
	if (hasArgs(argv.city)) {
		let url = api(argv.city);
		let data = await fetchApi(url);
		data.length > 0 ? prettyJson(data) : prettyJson(err_message);
		return data;
	} else {
		prettyJson(err_message);
	}
};
