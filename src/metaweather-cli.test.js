const metaweather = require('./metaweather')

describe('Test of Metaweather', () => {
	test('Set city in url', () => {
  		expect(metaweather.api("São Paulo"))
  		.toBe("https://www.metaweather.com/api/location/search/?query=São Paulo");
	});

	test('Has city in args at command-cli', () => {
		expect(metaweather.hasArgs('São Paulo')).toBe(true)
	})

	test('No has city in arg at command-cli', () => {
		expect(metaweather.hasArgs(null)).toBe(false)
	})
})



