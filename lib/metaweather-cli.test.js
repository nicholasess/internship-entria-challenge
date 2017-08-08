"use strict";

var metaweather = require("./metaweather");
var expected = [{
	latt_long: "-23.562880,-46.654659",
	location_type: "City",
	title: "São Paulo",
	woeid: 455827
}];

describe("Test of Metaweather", function () {
	test("Set city in url", function () {
		expect(metaweather.api("São Paulo")).toBe("https://www.metaweather.com/api/location/search/?query=São Paulo");
	});

	test("Has city in args at command-cli", function () {
		expect(metaweather.hasArgs("São Paulo")).toBe(true);
	});

	test("No has city in args at command-cli", function () {
		expect(metaweather.hasArgs(null)).toBe(false);
	});

	test("Test fetchApi", function () {
		metaweather.fetchApi("https://www.metaweather.com/api/location/search/?query=São Paulo").then(function (data) {
			expect(data).toEqual(expect.arrayContaining(expected));
		});
	});

	test("Test cli metaweather", function () {
		metaweather.execute({ city: "São Paulo" }).then(function (data) {
			expect(data).toEqual(expect.arrayContaining(expected));
		});
	});

	// test('Pretty console log', () => {
	// 	expect(metaweather.prettyJson({name: "Nicholas"})).toBe('string')
	// })
});