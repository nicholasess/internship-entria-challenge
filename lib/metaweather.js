"use strict";
/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.prettyJson = exports.execute = exports.fetchApi = exports.hasArgs = exports.api = undefined;

require("babel-polyfill");

var _nodeFetch = require("node-fetch");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var err_message = {
	"err": "Not has city!"
};

var prettyJson = function prettyJson(data) {
	var json = JSON.stringify(data, null, 2);
	console.log(json);
	return json;
};

var api = function api(city) {
	return "https://www.metaweather.com/api/location/search/?query=" + city;
};

var hasArgs = function hasArgs(city) {
	return city !== null && city.length > 0;
};

var fetchApi = function () {
	var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(url) {
		var data;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return (0, _nodeFetch2.default)(url);

					case 2:
						data = _context.sent;
						return _context.abrupt("return", data.json());

					case 4:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function fetchApi(_x) {
		return _ref.apply(this, arguments);
	};
}();

var execute = function () {
	var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(argv) {
		var url, data;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						if (!hasArgs(argv.city)) {
							_context2.next = 9;
							break;
						}

						url = api(argv.city);
						_context2.next = 4;
						return fetchApi(url);

					case 4:
						data = _context2.sent;

						prettyJson(data);
						return _context2.abrupt("return", data);

					case 9:
						prettyJson(err_message);

					case 10:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function execute(_x2) {
		return _ref2.apply(this, arguments);
	};
}();

exports.api = api;
exports.hasArgs = hasArgs;
exports.fetchApi = fetchApi;
exports.execute = execute;
exports.prettyJson = prettyJson;