const metaweather = require('./metaweather')
const expected = [{"latt_long": "-23.562880,-46.654659", "location_type": "City", "title": "São Paulo", "woeid": 455827}]


describe('Test of Metaweather', () => {
	test('Set city in url', () => {
  		expect(metaweather.api("São Paulo"))
  		.toBe("https://www.metaweather.com/api/location/search/?query=São Paulo");
	});

	test('Has city in args at command-cli', () => {
		expect(metaweather.hasArgs('São Paulo')).toBe(true)
	})

	test('No has city in args at command-cli', () => {
		expect(metaweather.hasArgs(null)).toBe(false)
	})

	test('Test fetchApi', () => {
		metaweather
		.fetchApi("https://www.metaweather.com/api/location/search/?query=São Paulo")
		.then((data) => {
			expect(data).toEqual(expect.arrayContaining(expected));
		})
		
	})
})



