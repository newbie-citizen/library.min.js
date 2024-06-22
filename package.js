/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

function Define ($, key, value, option = {}) { if (key) Object.defineProperty ($, key, {enumerable: option.enumerable || false, configurable: option.configurable || false, writable: option.writable || false, value}); else return new Define.properties ($); }
Define.property = function ($, key, value, option = {}) { Define ($.prototype, key, value, option); }
Define.properties = class {
	constructor (property) {
		this.property = property;
		}
	export (data) {
		return this.property.exports = data;
		}
	}

/**
 * object
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Object, "type", function (input) { return typeof input; });
Define (Object.type, "array", function (input) { if (arguments.length) return input instanceof Array || typeof input === "array"; else return Array; });
Define (Object.type, "boolean", function (input) { if (arguments.length) return input instanceof Boolean || typeof input === "boolean"; else return Boolean; });
Define (Object.type, "date", function (input) { if (arguments.length) return input instanceof Date || typeof input === "date"; else return Date; });
Define (Object.type, "error", function (input) { if (arguments.length) return input instanceof Error || typeof input === "error"; else return Error; });
Define (Object.type, "function", function (input) { if (arguments.length) return input instanceof Function || typeof input === "function"; else return Function; });
Define (Object.type, "number", function (input) { if (arguments.length) return input instanceof Number || typeof input === "number"; else return Number; });
Define (Object.type, "object", function (input) { if (arguments.length) return input instanceof Object || typeof input === "object"; else return Object; });
Define (Object.type, "regex", function (input) { if (arguments.length) return input instanceof RegExp || typeof input === "regex"; else return RegExp; });
Define (Object.type, "promise", function (input) { if (arguments.length) return input instanceof Promise || typeof input === "promise"; else return Promise; });
Define (Object.type, "string", function (input) { if (arguments.length) return input instanceof String || typeof input === "string"; else return String; });

Define (Object, "type_of", function (input) { return Object.prototype.toString.call (input); });
Define (Object.type_of, "array", function (input) { if (arguments.length) return Object.type_of (input) === "[object Array]"; else return "[object Array]"; });
Define (Object.type_of, "boolean", function (input) { if (arguments.length) return Object.type_of (input) === "[object Boolean]"; else return "[object Boolean]"; });
Define (Object.type_of, "date", function (input) { if (arguments.length) return Object.type_of (input) === "[object Date]"; else return "[object Date]"; });
Define (Object.type_of, "function", function (input) { if (arguments.length) return Object.type_of (input) === "[object Function]"; else return "[object Function]"; });
Define (Object.type_of, "null", function (input) { if (arguments.length) return Object.type_of (input) === "[object Null]"; else return "[object Null]"; });
Define (Object.type_of, "number", function (input) { if (arguments.length) return Object.type_of (input) === "[object Number]"; else return "[object Number]"; });
Define (Object.type_of, "object", function (input) { if (arguments.length) return Object.type_of (input) === "[object Object]"; else return "[object Object]"; });
Define (Object.type_of, "regex", function (input) { if (arguments.length) return Object.type_of (input) === "[object RegExp]"; else return "[object RegExp]"; });
Define (Object.type_of, "string", function (input) { if (arguments.length) return Object.type_of (input) === "[object String]"; else return "[object String]"; });

Define (Object, "is_boolean", Object.type_of.boolean);
Define (Object, "is_object", Object.type_of.object);
Define (Object, "is_array", Array.isArray);
Define (Object, "is_string", Object.type_of.string);
Define (Object, "is_number", Object.type_of.number);
Define (Object, "is_nan", Number.isNaN);
Define (Object, "is_integer", Number.isInteger);
Define (Object, "is_finite", Number.isFinite);
Define (Object, "is_float", function (input) { if (Object.type_of.number (input)) return input.toString ().split (Number.float.separator).length === 2; else return false; });
Define (Object, "is_function", Object.type_of.function);
Define (Object, "is_date", Object.type_of.date);
Define (Object, "is_regex", Object.type_of.regex);
Define (Object, "is_null", Object.type_of.null);
Define (Object, "is_set", function (input) { return ! Object.is_null (input) || ! Object.un_define (input); });
Define (Object, "is_define", function (input) { return ! Object.un_define (input); });
Define (Object, "un_define", function (input) { return input === undefined; });
Define (Object, "un_set", function (input) { return input === undefined || input === null; });

Define (Object, "to_string", function (input) { if (Object.is_set (input)) return input.toString (); else return ""; });
Define (Object, "to_number", function (input) { if (Object.is_set (input)) return Number (input); else return 0; });

Define (Object, "length", function (object) { var length = 0; for (var i in object) length ++; return length; });
Define (Object, "clone", function (object) { return JSON.parse (JSON.stringify (object)); });
Define (Object, "exclude", function (object, exclude) { var data = Object.clone (object); for (var i in exclude) delete data [exclude [i]]; return data; });
Define (Object, "key", function (object) { return Object.keys (object); }); Define (Object.key, "convert", function (object, key) { var data = object, split = key.split ("."); for (var i in split) data = data [split [i]]; return data; });
Define (Object, "value", Object.values);
Define (Object, "delimiter", function (key, value, delimiter) { return key + (delimiter || "=") + value; });

/**
 * array
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define.property (Array, "string", function () { return this.toString (); });
Define.property (Array, "clone", function () { return JSON.parse (JSON.stringify (this)); });
Define.property (Array, "begin", function (value) { for (var i in this) return this [i]; return value; });
Define.property (Array, "end", function (value) { for (var i in this) value = this [i]; return value; });
Define.property (Array, "exist", function (value, offset) { if (Array.isArray (value)) { for (var i in value) if (this.includes (value [i])) return true; return false; } else return this.includes (value, offset); });
Define.property (Array, "max", function () { return Math.max (... this); });
Define.property (Array, "min", function () { return Math.min (... this); });
Define.property (Array, "next", function (offset) { return this [Number (offset) + 1]; });
Define.property (Array, "previous", function (offset) { return this [Number (offset) - 1]; });
Define.property (Array, "unique", function (type) { if (type === "set") return new Set (this); else return Array.from (new Set (this)); });
Define.property (Array, "json", function (type) { return this.map (function (data) { if (type === "encode") return JSON.stringify (data); else if (type === "decode") return JSON.parse (data); else return data; }); });
Define.property (Array, "select", function (query) { var length = Object.length (query); return this.filter (function (data) { var count = 0; for (var i in query) { if (i.includes (".")) { var key = i.split ("."); for (var x in key) data = data [key [x]]; if (data === query [i]) count ++; } else if (data [i] === query [i]) count ++; } if (count === length) return true; else return false; }); });
Define.property (Array, "insert", function (offset, ... value) { return this.splice (offset, 0, ... value); });
Define.property (Array, "update", function (offset, ... value) { return this.splice (offset, 1, ... value); });
Define.property (Array, "delete", function (offset, length = 1) { return this.splice (offset, length); });
Define.property (Array, "shuffle", function () { return Array.shuffle (this); });
Define.property (Array, "index_of", function (value, offset) { return Array.index_of (this.indexOf (value, offset)); });
Define.property (Array, "offset", function (offset, limit) { var data = [], count = 0, counter = 0; if (arguments.length === 1) for (var i in this) { count ++; data.push (this [i]); if (count >= offset) break; } else for (var i in this) { if (counter >= offset) { count ++; data.push (this [i]); if (count >= limit) break; } counter ++; } return data; });
Define.property (Array, "order_by", function (... sort) { var data = this.clone (); for (var i in sort) { for (var x in sort [i]) { if (sort [i][x] === "ascending") data.sort (function (a, b) { if (Object.key.convert (a, this.key) < Object.key.convert (b, this.key)) return 0 - 1; else return 0; }.bind ({key: x})); if (sort [i][x] === "descending") data.sort (function (a, b) { if (Object.key.convert (a, this.key) > Object.key.convert (b, this.key)) return 0 - 1; else return 0; }.bind ({key: x})); } } return data; });
Define.property (Array, "descriptor", "function");
Define (Array, "shuffle", function (array, data = []) { if (array.length) { var i = Number.random (array.length - 1); data.push (array [i]); array.delete (i); Array.shuffle (array, data); } return data; });
Define (Array, "index_of", function (input) { if (input >= 0) return input; });

/**
 * string
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define.property (String, "string", function () { return this.toString (); });
Define.property (String, "number", function () { return Number (this); });
Define.property (String, "integer", function () { return parseInt (this); });
Define.property (String, "float", function () { return parseFloat (this); });
Define.property (String, "small", function () { return this.toLowerCase (); });
Define.property (String, "big", function () { return this.toUpperCase (); });
Define.property (String, "begin", function (input = 1) { if (typeof input === "string") return this.startsWith (input); else return this.substr (input); });
Define.property (String, "end", function (input = 1) { if (typeof input === "string") return this.endsWith (input); else return this.substr (this.length - input); });
Define.property (String, "after", function (input, offset) { if ((offset = this.indexOf (input, offset)) >= 0) return this.substr (offset + input.length); else return ""; });
Define.property (String, "before", function (input, offset) { if ((offset = this.indexOf (input, offset)) >= 0) return this.substr (0, offset); else return ""; });
Define.property (String, "exist", function (input, offset) { return this.includes (input, offset); });
Define.property (String, "reverse", function () { return this.split ("").reverse ().join (""); });
Define.property (String, "json", function (data) { if (this) return JSON.parse (this); else return data; });
Define.property (String, "to_split", function (separator = " ", offset = 1) { var data = [], count = 0; for (var i in this) { data.push (this [i]), count ++; if (count >= offset) data.push (separator), count = 0; } if ((data = data.join ("")).endsWith (separator)) data = data.substr (0, data.length - separator.length); return data; });
Define.property (String, "to_replace", function (key, value) { if (typeof key === "object") { var data = this.concat (""); for (var i in key) { if (value) if (value.exclude) if (value.exclude.includes (i)) continue; else data = data.split ("{{ " + i + " }}").join (key [i]); else data = data.split ("{{ " + i + " }}").join (key [i]); else data = data.split ("{{ " + i + " }}").join (key [i]); } return data; } else return this.split (key).join (value); });
Define.property (String, "to_param", function (param) {
// var data = this.toString ();
// for (var i in param) data = data.to_replace (":" + i, param [i]);
// return data;
var data = this.toString ();
for (var i in param) {
	var value = param [i];
	var key = ":" + i;
	var index = data.indexOf (key);
	var length = index + key.length;
	data = data.substr (0, index) + value + data.substr (length);
	}
return data;
});
Define.property (String, "print_format", function (... format) { var data = this.split ("%s"); var index = - 1; for (var i in format) { index += 2; data.splice (index, 0, format [i]); } return data.join (""); });
Define.property (String, "descriptor", "function");

Define (String, "char", {
	small: "abcdefghijklmnopqrstuvwxyz",
	big: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	alpha: {numeric: "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789"},
	space: " ",
	underscore: "_",
	c: ":",
	separator: {eol: "; ", coma: ", ", c: ": "},
	});

/**
 * number math
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define.property (Number, "string", function () { return this.toString (); });
Define.property (Number, "number", function () { return Number (this); });
Define.property (Number, "integer", function () { return parseInt (this); });
Define.property (Number, "float", function () { return parseFloat (this); });
Define.property (Number, "byte", function (option) { return Number.byte.parse (this, option); });
Define (Number, "zero", 0);
Define (Number, "one", 1);
Define (Number, "char", "0123456789");
Define (Number, "random", function (number) { return Math.floor (Math.random () * (number + 1)); });
Define (Number, "byte", function () {});
Define (Number.byte, "parse", function (number, option = {}) { if (option.decimal) { option.decimal.length = option.decimal.length || 3; option.decimal.separator = option.decimal.separator || Number.float.separator; } else { option.decimal = {length: 3, separator: Number.float.separator} } option.separator = option.separator || Number.separator; option.thousand = option.thousand || 3; var unit_of, unit = {log: Number.byte.unit.log.clone ().reverse (), name: Number.byte.unit.name.clone ().reverse ()}, size = 0; for (var i in unit.log) if ((size = number / Number [unit.log [i]] ()) >= 1) if (unit_of = unit.log [i]) break; var split = size.toString ().split (Number.float.separator); var integer = split [0], decimal = (split [1] || "").substr (0, option.decimal.length); var size_of = [integer.reverse ().to_split (option.separator, option.thousand).reverse ()]; if (decimal) size_of.push (option.decimal.separator, decimal); size_of = size_of.join ("") + " " + unit_of; return {size, size_of, integer, decimal, unit: {log: unit_of, name: unit.name [i]}} });
Define (Number.byte, "unit", {log: ["B", "KB", "MB", "GB", "TB"], name: ["Byte", "KiloByte", "MegaByte", "GigaByte", "TeraByte"], "B": "Byte", "KB": "KiloByte", "MB": "MegaByte", "GB": "GigaByte", "TB": "TeraByte"});
Define (Number, "B", function (number = 1) { return number; });
Define (Number, "KB", function (number = 1) { return number * (1024); });
Define (Number, "MB", function (number = 1) { return number * (1024 * 1024); });
Define (Number, "GB", function (number = 1) { return number * (1024 * 1024 * 1024); });
Define (Number, "TB", function (number = 1) { return number * (1024 * 1024 * 1024 * 1024); });
Define (Number, "float", function () {});
Define (Number.float, "separator", (1 / 2).toString ().substr (1, 1));

/**
 * function
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define.property (Function, "string", function () { return this.toString (); });

Define (Function, "context", function (context) { return context || function () {} });
Define (Function, "option", function (option, value) { return Object.assign (value || {}, option); });

Define (Function, "query", function () {});
Define (Function.query, "limit", function (limit) {
	if (arguments.length) {
		if (limit === "single") return 1;
		else if (limit === "default") return 1024;
		else if (limit === "medium") return 10000;
		else if (limit === "large") return 100000;
		else return limit;
		}
	else return 1000000;
	});

/**
 * promise
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Promise, "context", class {
	constructor (promise) {
		this.promise = new Promise (promise);
		}
	then (context = function () {}) {
		this.context = context;
		if (this.error) return this.promise.then (this.context).catch (this.error);
		return this;
		}
	catch (context = function () {}) {
		this.error = context;
		if (this.context) return this.promise.then (this.context).catch (this.error);
		return this;
		}
	emit (context) {
		return this.then (context).catch (Function.context (this.error));
		}
	});

/**
 * date time
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define.property (Date, "string", function () { return this.toString (); });

Define (Date, "time", class {
	constructor (... option) {
		this.help = new Date.time.help (this);
		if (typeof option [0] === "object") this.start (), this.timezone (option [0]);
		else if (typeof option [0] === "string" && option [0].includes ("/")) this.start (), this.timezone (option [0]);
		else if (typeof option [0] === "number" && option [0] > 10000) this.start (option [0]);
		else this.start (... option);
		}
	start (... option) {
		var date = new Date (... option);
		var get = new Date.time.get (date);
		var format = this.help.format (get.year (), get.month (), get.day (), get.hour (), get.minute (), get.second (), get.ms ());
		this.universal = new Date (format);
		this.utc = this.gmt = new Date.time.get (this.universal);
		return this;
		}
	timezone (timezone) {
		if (typeof timezone === "string") {
			var timezone = Function.timezone.data.select ({identifier: timezone});
			if (timezone.length) timezone = timezone.begin ().canonical;
			else timezone = {}
			}
		this.param = this.help.param (timezone);
		this.calc = this.help.calc (this.param);
		this.current = new Date ((this.utc || this.gmt).stamp () + this.calc);
		this.date = new Date.time.get (this.current);
		return this;
		}
	format (format) {
		var to_format = this.help.format ();
		var date = [];
		var split = format.split ("");
		for (var i in split) date.push (to_format [split [i]] || split [i]);
		return date.join ("");
		}
	year () { return this.date.year (); }
	month (type) { return this.date.month (type); }
	day (type) { return this.date.day (type); }
	hour (type) { return this.date.hour (type); }
	minute () { return this.date.minute (); }
	second () { return this.date.second (); }
	ms () { return this.date.ms (); }
	week () { return this.date.week (); }
	stamp () { return this.date.stamp (); }
	day_night () { return this.date.day_night (); }
	});

Define (Date.time, "get", class {
	constructor (date) { this.date = date; }
	year () { return (this.date.getUTCFullYear () + 0).toString (); }
	month (type) { if (type === "name") return Date.time.month.name [this.week ()]; else return (this.date.getUTCMonth () + Date.time.month.log).toString ().padStart (2, "0"); }
	day (type) { if (type === "name") return Date.time.day.name [this.week ()]; else return (this.date.getUTCDate () + 0).toString ().padStart (2, "0"); }
	hour (type) { if (type === "day-night") { var hour = this.date.getUTCHours () - 12; if (hour === 0) hour = 12; return hour.toString ().padStart (2, "0"); } else return (this.date.getUTCHours () + 0).toString ().padStart (2, "0"); }
	minute () { return (this.date.getUTCMinutes () + 0).toString ().padStart (2, "0"); }
	second () { return (this.date.getUTCSeconds () + 0).toString ().padStart (2, "0"); }
	ms () { return (this.date.getUTCMilliseconds () + 0).toString ().padStart (3, "0"); }
	week () { return (this.date.getUTCDay () + 0).toString ().padStart (2, "0"); }
	stamp () { return this.date.getTime (); }
	day_night () { if (this.date.getUTCHours () > 11) return "PM"; else return "AM"; }
	});

Define (Date.time, "help", class {
	constructor (date) { this.date = date; }
	param (option = {}) { return {day: (option.day || 0) * 86400000, hour: (option.hour || 0) * 3600000, minute: (option.minute || 0) * 60000, second: (option.second || 0) * 1000, } }
	calc (option) { return option.day + option.hour + option.minute + option.second; }
	format (year, month, day, hour, minute, second, ms) {
		if (arguments.length) {
			var D = [year, month, day].join ("-");
			var T = "T" + [hour, minute, second].join (":") + "." + ms;
			return D + T + "Z";
			}
		else {
			return {
				"Y": this.date.year (),
				"M": this.date.month (), "F": this.date.month ("name"),
				"D": this.date.day (), "L": this.date.day ("name"),
				"H": this.date.hour (), "J": this.date.hour ("day-night"),
				"I": this.date.minute (),
				"S": this.date.second (),
				"X": this.date.ms (),
				"A": this.date.day_night (),
				}
			}
		}
	});

Define (Date.time, "expire", function (stamp, expire) {
	return Date.now () > new Date.time (Object.to_number (stamp) || Date.now ()).timezone (expire).stamp ();
	});

Define (Date.time, "month", {log: 1, name: {"01": "January", "02": "February", "03": "March", "04": "April", "05": "May", "06": "June", "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December"}});
Define (Date.time, "day", {log: 0, name: {"01": "Monday", "02": "Tuesday", "03": "Wednesday", "04": "Thursday", "05": "Friday", "06": "Saturday", "07": "Sunday"}});

function Time () { return Date.now (); }
Define (Time, "stamp", function () { return Date.now (); });
Define (Time, "sleep", function (context, second = 1) { return setTimeout (context, (second * 1000)); });
Define (Time.sleep, "emit", function (context) { return setTimeout (context, 100); });
Define (Time.sleep, "clear", function (context) { return clearTimeout (context); });
Define (Time, "interval", function (context, second = 1) { return setInterval (context, (second * 1000)); });
Define (Time.interval, "clear", function (context) { return clearInterval (context); });

Function.timeout = function (context) { return setTimeout (context, (Function.timeout.sleep.value * 1000)); }
Function.timeout.sleep = function (value) { if (arguments.length) return Function.timeout.sleep.value = value; else return Function.timeout.sleep.value; }
Function.timeout.sleep.value = 10;

Function.timezone = function (timezone) {
	for (var i in Function.timezone.data) {
		if ([Function.timezone.data [i].id, Function.timezone.data [i].identifier].includes (timezone)) {
			return Function.timezone.data [i];
			}
		}
	return {}
	}

Function.timezone.offset = function () {}
Function.timezone.offset.format = function (timezone) {
	if ((timezone = timezone || "").includes (":")) return timezone;
	else return [timezone.substr (0, 3), timezone.substr (3)].join (":");
	}

Function.timezone.data = [
	{id: "", identifier: "Asia/Jakarta", name: "", embed: "", offset: "+07:00", canonical: {hour: 7, minute: 0}},
	{id: "", identifier: "GMT", name: "Greenwich Mean Time", embed: "", offset: "+00:00", canonical: {hour: 0, minute: 0}},
	{id: "", identifier: "UTC", name: "Universal", embed: "", offset: "+00:00", canonical: {hour: 0, minute: 0}},
	]

/**
 * url
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (URL, "encode", function () {});
Define (URL, "decode", function (url) { return decodeURI (url); });
Define (URL, "get", function (url, option = {}) { if (Array.isArray (url)) url = url.join (""); return new URL.ajax (url, {method: "get", ... option}); });
Define (URL, "post", function (url, data = {}, option = {}) { if (Array.isArray (url)) url = url.join (""); return new URL.ajax (url, {method: "post", data, ... option}); });
Define (URL, "api", function (engine) { if (engine) return URL.api.engine = engine; else return URL.api.engine = require ("axios"); });
Define (URL.api, "engine", null, {writable: true});

Define (URL, "format", function (url, option) {
	option = Function.option (option);
	if (option.protocol) url = [option.protocol, "://", url];
	if (option.query) url = [url, URL.query (option.query)].join ("?");
	return url.join ("");
	});

Define (URL, "query", function (query) {
	var data = [];
	for (var i in query) data.push (i + "=" + query [i]);
	return data.join ("&");
	});

Define (URL, "ajax", class {
	constructor (url, option = {}) {
		this.url = url;
		this.option = option;
		}
	then (context = function () {}) {
		this.context = context;
		if (this.error) return this.exec ();
		return this;
		}
	catch (context = function () {}) {
		this.error = context;
		if (this.context) return this.exec ();
		return this;
		}
	emit (context) {
		return this.then (context).catch ();
		}
	exec () {
		var url, header;
		if (this.option.gateway) {
			if (URL.parse_url.header.data === {}) {}
			header = URL.parse_url.header.data;
			}
		url = {
			url: this.url,
			method: this.option.method || "get",
			headers: {... this.option.header, ... header},
			}
		if (this.option.method === "post") url.data = this.option.data;
		return URL.api.engine (url).then (this.context).catch (Function.context (this.error));
		}
	});

Define (URL, "parse_url", function parse_url (url, option = {}) {
	try {
		var parse = new URL (url);
		var parse_url = {
			reference: parse.href,
			referer: "",
			protocol: parse.protocol.substr (0, parse.protocol.length - 1) || option.protocol,
			host: {reference: "", address: parse.host, name: parse.hostname, port: parse.port},
			domain: URL.domain.parse (parse.hostname),
			user: parse.username, password: parse.password,
			path: parse.pathname || "/",
			query: {},
			tag: parse.hash,
			}
		parse_url.domain.sub = parse_url.domain.sub || "www";
		if (option.x) {}
		else {
			parse_url ["cross-origin"] = false
			parse_url.cross = {origin: {}}
			}
		parse_url.base = {name: parse_url.domain.name || parse_url.host.name}
		if (parse.origin !== "null") parse_url.host.reference = parse.origin;
		if (parse.search) for (var [key, value] of parse.searchParams.entries ()) parse_url.query [key] = value;
		if (option ["cross-origin"]) if (parse_url.cross.origin = URL.parse_url (option ["cross-origin"], {x: true})) parse_url ["cross-origin"] = true;
		return parse_url;
		}
	catch (error) {
		if (option.retry) {}
		else if (option.retry = true) return URL.parse_url (((option.protocol || "http") + "://" + url), option);
		}
	});

Define (URL.parse_url, "header", function () {});
Define (URL.parse_url.header, "data", {}, {writable: true});
Define (URL.parse_url.header, "insert", function (key, value) { return URL.parse_url.header.data [key] = value; });

Define (URL, "domain", function (data) {
	if (data) URL.domain.data = URL.domain.sort (data);
	});

Define (URL.domain, "parse", function (host) {
	for (var i in URL.domain.data) {
		if (host.endsWith (URL.domain.data [i])) {
			var n = host.substr (0, (host.length - URL.domain.data [i].length));
			var name = n.split (".").end ();
			var sub = n.substr (0, (n.length - (name.length + 1))) || "www";
			var extension = URL.domain.data [i];
			return {name: name.concat (extension), base: {name}, extension, sub, reference: sub.split (".").reverse ().join (".")}
			break;
			}
		}
	return {name: "", extension: "", sub: "", reference: ""}
	});

Define (URL.domain, "sort", function (domain) {
	var tld = [], sub = [];
	for (var i in domain) if (domain [i].split (".").length > 2) sub.push (domain [i]);
	else tld.push (domain [i]);
	return [... sub, ... tld];
	});

Define (URL.domain, "data", URL.domain.sort ([
	".com", ".net", ".org", ".info",
	".io", ".app", ".site", ".blog", ".cloud", ".space", ".ninja",
	".co",
	".xxx", ".xyz",
	".local", ".tmp",
	]), {writable: true});

Define (URL, "protocol", {
	scheme: {"http": "http://", "http:secure": "https://"},
	});

Define (URL, "is_protocol", function (input) {});

Define (URL, "header", function () {});
Define (URL.header, "status", {
	OK: 200, success: 200,
	error: {request: 400, forbidden: 403, found: 404, timeout: 408, legal: 451, internal: 500},
	code: {
		100: "Continue",
		101: "Switching Protocols",
		102: "Processing",
		200: "OK",
		201: "Created",
		202: "Accepted",
		203: "Non-authoritative Information",
		204: "No Content",
		205: "Reset Content",
		206: "Partial Content",
		207: "Multi-Status",
		208: "Already Reported",
		226: "IM Used",
		300: "Multiple Choices",
		301: "Moved Permanently",
		302: "Found",
		303: "See Other",
		304: "Not Modified",
		305: "Use Proxy",
		307: "Temporary Redirect",
		308: "Permanent Redirect",
		400: "Bad Request",
		401: "Unauthorized",
		402: "Payment Required",
		403: "Forbidden",
		404: "Not Found",
		405: "Method Not Allowed",
		406: "Not Acceptable",
		407: "Proxy Authentication Required",
		408: "Request Timeout",
		409: "Conflict",
		410: "Gone",
		411: "Length Required",
		412: "Precondition Failed",
		413: "Payload Too Large",
		414: "Request-URI Too Long",
		415: "Unsupported Media Type",
		416: "Requested Range Not Satisfiable",
		417: "Expectation Failed",
		418: "I'm a teapot",
		421: "Misdirected Request",
		422: "Unprocessable Entity",
		423: "Locked",
		424: "Failed Dependency",
		426: "Upgrade Required",
		428: "Precondition Required",
		429: "Too Many Requests",
		431: "Request Header Fields Too Large",
		444: "Connection Closed Without Response",
		451: "Unavailable For Legal Reasons",
		499: "Client Closed Request",
		500: "Internal Server Error",
		501: "Not Implemented",
		502: "Bad Gateway",
		503: "Service Unavailable",
		504: "Gateway Timeout",
		505: "HTTP Version Not Supported",
		506: "Variant Also Negotiates",
		507: "Insufficient Storage",
		508: "Loop Detected",
		510: "Not Extended",
		511: "Network Authentication Required",
		599: "Network Connect Timeout Error",
		},
	});

/**
 * hash
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Function, "hash", function () {});

Define (Function.hash, "encode", function (input) { if (input) return btoa (input); else return ""; }, {writable: true});
Define (Function.hash, "decode", function (input) { if (input) return atob (input); else return ""; }, {writable: true});
Define (Function.hash, "md", function (input) { return Function.hash.__md (input).toString (); });
Define (Function.hash, "sha", function (input) { return Function.hash.__sha (input).toString (); });
Define (Function.hash.sha, "one", function (input) { return Function.hash.__sha_one (input).toString (); });

Define (Function.hash, "crypto", function (algorithm, option) { return Function.hash.crypto.api.engine.createHash (algorithm, option); });
Define (Function.hash.crypto, "md", function (input) { return Function.hash.crypto.api.engine.createHash ("md5").update (input).digest ("hex"); });
Define (Function.hash.crypto, "sha", function (input) { return Function.hash.crypto.api.engine.createHash ("sha256").update (input).digest ("hex"); });
Define (Function.hash.crypto.sha, "one", function (input) { return Function.hash.crypto.api.engine.createHash ("sha1").update (input).digest ("hex"); });
Define (Function.hash.crypto, "api", function (engine) { if (engine) return Function.hash.crypto.api.engine = engine; else return Function.hash.crypto.api.engine = require ("crypto"); });
Define (Function.hash.crypto.api, "engine", null, {writable: true});

Define (Function.hash, "require", function (md, sha, sha_one) {
	if (arguments.length) Function.hash.__md = md, Function.hash.__sha = sha, Function.hash.__sha_one = sha_one;
	else return require ("crypto-js");
	});

Function.hash.require (Function.hash.crypto.md, Function.hash.crypto.sha, Function.hash.crypto.sha.one);

/**
 * xml
 * serialize
 * json
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Function, "xml", function () {});

Define (Function, "serialize", function () {});

Define (JSON, "encode", function (data) { return JSON.stringify (data); });
Define (JSON, "decode", function (data, value) { if (Object.is_array (data)) return data; else if (Object.is_object (data)) return data; else if (data) return JSON.parse (data); else return value; });

JSON.file = class {
	constructor (config) {
		if (config) {
			this.config = config;
			this.start ();
			}
		}
	start (config) {
		if (config) this.config = config;
		this.db = new JSON.file.database (this);
		return this;
		}
	}

JSON.file.database = class {
	constructor (api) {
		this.api = api;
		this.snapshot = [];
		}
	collection (collection) {
		return new JSON.file.database.collection (this.api, this, collection);
		}
	name (file) {
		return [this.api.config.directory, (file + Function.file.extension.json)].join (Function.path.separator ());
		}
	}

JSON.file.database.collection = class {
	constructor (api, db, collection) {
		this.api = api;
		this.db = db;
		this.collection = collection;
		this.table = this.db.table [this.collection] || this.collection;
		this.file = this.db.name (this.table);
		try {
			if (true) {
				this.stringify = "";
				this.data = (this.require = require (this.file)).data;
				}
			else {
				this.stringify = Function.fs.file_read (this.file);
				this.data = JSON.parse (this.stringify);
				}
			}
		catch (e) {
			this.e = true;
			}
		}
	extra () {
		return this.require.extra;
		}
	get (id) {
		var promise = function (resolve, reject) {
			resolve ({});
			}
		return new Promise.context (promise.bind ({db: this}));
		}
	select (query = {}) {
		var promise = function (resolve, reject) {
			if (this.db.e) reject ({code: 404, message: "not-found", collection: this.db.collection});
			var data = this.db.data.filter (function (data) { if ("id" in data) return true; else return false; });
			if (query.equal) data = data.select (query.equal);
			if (query.sort) data = data.order_by (... query.sort);
			if (query.limit) if (query.offset) data = data.offset (query.offset, Function.query.limit (query.limit));
			else data = data.offset (Function.query.limit (query.limit));
			var total = data.length;
			resolve ({data, total});
			}
		return new Promise.context (promise.bind ({db: this}));
		}
	insert (data) {
		var promise = function (resolve, reject) {
			resolve ({});
			}
		return new Promise.context (promise.bind ({db: this}));
		}
	update (query, data) {
		var promise = function (resolve, reject) {
			resolve ({});
			}
		return new Promise.context (promise.bind ({db: this}));
		}
	delete (data) {
		var promise = function (resolve, reject) {
			resolve ({});
			}
		return new Promise.context (promise.bind ({db: this}));
		}
	}

JSON.bin = class {
	constructor (config) {
		if (config) {
			this.config = config;
			this.start ();
			}
		}
	start (config) {
		if (config) this.config = config;
		this.config = this.config || {}
		this.config.url = this.config.url || "default";
		this.config.url = JSON.bin.url [this.config.url] || this.config.url;
		this.db = new JSON.bin.database (this);
		return this;
		}
	}

JSON.bin.database = class {
	constructor (api) {
		this.api = api;
		this.snapshot = [];
		}
	collection (collection) {
		return new JSON.bin.database.collection (this.api, this, collection);
		}
	}

JSON.bin.database.collection = class {
	constructor (api, db, collection) {
		this.api = api;
		this.db = db;
		this.collection = collection;
		this.table = this.db.table [this.collection] || this.collection;
		this.client = URL.get (this.api.config.url.print_format (this.table));
		}
	get (id) {
		var promise = function (resolve, reject) {
			resolve ({});
			}
		return new Promise.context (promise.bind ({db: this}));
		}
	select (query = {}) {
		var promise = function (resolve, reject) {
			this.db.client.catch (reject).then (function (respond) {
				var data = respond.data.select (query);
				if (query.equal) data = data.select (query.equal);
				if (query.sort) data = data.order_by (... query.sort);
				if (query.limit) if (query.offset) data = data.offset (query.offset, Function.query.limit (query.limit));
				else data = data.offset (Function.query.limit (query.limit));
				var total = 0;
				resolve ({data, total});
				});
			}
		return new Promise.context (promise.bind ({db: this}));
		}
	insert (data) {
		var promise = function (resolve, reject) {
			resolve ({});
			}
		return new Promise.context (promise.bind ({db: this}));
		}
	update (query, data) {
		var promise = function (resolve, reject) {
			resolve ({});
			}
		return new Promise.context (promise.bind ({db: this}));
		}
	delete (data) {
		var promise = function (resolve, reject) {
			resolve ({});
			}
		return new Promise.context (promise.bind ({db: this}));
		}
	}

JSON.bin.url = {
	"n-point": "https://api.npoint.io/",
	"keeper": "https://jsonkeeper.com/b/",
	"git": "",
	}

/**
 * dom document
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Function.dom = function (element) { return new Function.dom.document (element); }
Function.dom.document = class {
	constructor (element) { this.dom = $ (this.element = element); }
	attribute (... attribute) { return this.dom.attr (... attribute); }
	}

Function.dom.style = function (style) {
	var attribute = [];
	for (var i in style) attribute.push (i + ": " + style [i]);
	return attribute.join ("; ");
	}

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Function, "plugin", function () {});

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Function, "api", function () {});

Function.appwrite = class {
	constructor (config) {
		if (config) {
			this.config = config;
			this.start ();
			}
		}
	start (config) {
		if (config) this.config = config;
		this.url = this.config.url;
		this.socket = this.config.socket;
		this.project = {id: this.config.project}
		this ["data:base"] = this.config.db;
		this.client = new Function.appwrite.__client ().setEndpoint (this.url).setEndpointRealtime (this.socket).setProject (this.project.id);
		this.db = new Function.appwrite.database (this, this ["data:base"]);
		}
	database (db) {
		return new Function.appwrite.database (this, db);
		}
	}

Function.appwrite.database = class {
	constructor (appwrite, db) {
		this.appwrite = appwrite;
		this.client = new Function.appwrite.__database (this.appwrite.client);
		this.name = db;
		this.snapshot = [];
		}
	collection (collection) {
		return new Function.appwrite.database.collection (this.appwrite, this, collection);
		}
	}

Function.appwrite.database.collection = class {
	constructor (appwrite, db, collection) {
		this.appwrite = appwrite;
		this.db = db;
		this.client = this.db.client;
		this.name = this.db.name;
		this.collection = collection;
		this.table = this.db.table [this.collection] || this.collection;
		this.data = {}
		this.query = [];
		}
	get (id) {
		var promise = function (resolve, reject) {
			var doc = Function.appwrite.database.document.bind ({context: resolve});
			this.db.client.getDocument (this.db.name, this.db.table, id).then (doc, reject);
			}
		return new Promise.context (promise.bind ({db: this}));
		}
	select (query) {
		this.queries (query);
		var promise = function (resolve, reject) {
			var doc = Function.appwrite.database.document.array.bind ({context: resolve});
			if (this.db.query.length) this.db.client.listDocuments (this.db.name, this.db.table, this.db.query).then (doc, reject);
			else this.db.client.listDocuments (this.db.name, this.db.table).then (doc, reject);
			}
		return new Promise.context (promise.bind ({db: this}));
		}
	insert (data) {
		if (data.id) if (this.id = data.id) delete data.id;
		else this.id = Function.appwrite.__ID.unique ();
		else this.id = Function.appwrite.__ID.unique ();
		for (var i in data) {
			if (Array.isArray (data [i])) continue;
			else if (typeof data [i] === "object") data [i] = JSON.stringify (data [i]);
			}
		this.data = data;
		var promise = function (resolve, reject) {
			var doc = Function.appwrite.database.document.bind ({context: resolve});
			this.db.client.createDocument (this.db.name, this.db.table, this.db.id, this.db.data).then (doc, reject);
			}
		return new Promise.context (promise.bind ({db: this}));
		}
	update (query, data) {
		if (typeof query === "string") this.id = query;
		else this.id = query.id;
		this.data = data;
		var promise = function (resolve, reject) {
			var doc = Function.appwrite.database.document.bind ({context: resolve});
			this.db.client.updateDocument (this.db.name, this.db.table, this.db.id, this.db.data).then (doc, reject);
			}
		return new Promise.context (promise.bind ({db: this}));
		}
	delete (query) {
		if (typeof query === "string") this.id = query;
		else this.id = (query = query || {}).id;
		this.limit = query.limit || 1024;
		var promise = function (resolve, reject) {
			var doc = Function.appwrite.database.document.bind ({context: resolve});
			if (this.db.id) this.db.client.deleteDocument (this.db.name, this.db.table, this.db.id).then (doc, reject);
			else this.db.client.listDocuments (this.db.name, this.db.table, [Function.appwrite.__query.limit (this.db.limit)]).then (function (db) { for (var i in db.documents) this.db.client.deleteDocument (this.db.name, this.db.table, db.documents [i].$id).then (Function.context, Function.context); }.bind ({db: this.db}), reject);
			}
		return new Promise.context (promise.bind ({db: this}));
		}
	queries (query = {}) {
		if (typeof query === "string") this.query.push (Function.appwrite.__query.equal ("$id", query));
		else {
			if (query.id) this.query.push (Function.appwrite.__query.equal ("$id", query.id));
			if (query.limit) this.query.push (Function.appwrite.__query.limit (Function.query.limit (query.limit)));
			if (query.offset) this.query.push (Function.appwrite.__query.offset (query.offset));
			if (query.sort) {
				for (var i in query.sort) {
					for (var x in query.sort [i]) {
						var sort;
						if (["$insert", "stamp.insert"].includes (x)) sort = "$createdAt";
						else sort = x;
						if (query.sort [i][x] === "ascending") this.query.push (Query.orderAsc (sort));
						if (query.sort [i][x] === "descending") this.query.push (Query.orderDesc (sort));
						}
					}
				}
			if (query.equal) {
				if (Array.isArray (query.equal)) {}
				else if (typeof query.equal === "object") query.equal = [query.equal];
				for (var i in query.equal) {
					for (var x in query.equal [i]) {
						this.query.push (Function.appwrite.__query.equal (x, query.equal [i][x]));
						}
					}
				}
			}
		}
	}

Function.appwrite.database.document = function (data) { this.context (Function.appwrite.database.doc (data)); }
Function.appwrite.database.document.array = function (data) { this.context ({total: data.total, data: data.documents.map (function (data) { return Function.appwrite.database.doc (data); })}); }
Function.appwrite.database.doc = function (data) {
	data.id = data.$id;
	data.stamp = {
		insert: new Date (data.$createdAt).getTime (),
		update: new Date (data.$updatedAt).getTime (),
		delete: 0,
		}
	for (var i in data) if (i.startsWith ("$")) delete data [i];
	return data;
	}

Function.appwrite.require = function (client, database, query, ID) {
	if (arguments.length) {
		Function.appwrite.__client = client;
		Function.appwrite.__database = database;
		Function.appwrite.__query = query;
		Function.appwrite.__ID = ID;
		}
	else return require ("appwrite");
	}

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Function.ip = function (data) {
	if (data) Function.ip.data = data;
	else Function.ip.initialize ();
	}

Function.ip.reserve = function (ip) {
	if (ip === "local") return "127.0.0.1";
	else if (ip === "sub") return "255.255.255.0";
	else return "0.0.0.0";
	}

Function.ip.parse = function (ip, input = {}) {
	var ip_reserve = Function.ip.reserve ();
	var ip_local = Function.ip.reserve ("local");
	var data = {
		ip: {address: (ip || ip_local), network: "", mask: "", version: 4},
		internet: {service: {code: "", name: "", provider: ""}},
		country: Function.geo.country (), region: {code: "", name: ""}, city: {code: "", name: ""},
		timezone: {identifier: "UTC", offset: "+00:00"},
		language: [],
		coordinate: {latitude: 0, longitude: 0},
		}
	if (data.ip.address === ("::ffff:" + ip_local)) data.ip.address = ip_local;
	if (data.ip.address.includes (":")) data.ip.version = 6;
	else data.ip.version = 4;
	data.ip.network = input.network || data.ip.network;
	data.internet.service.code = (input.as || "").split (" ") [0] || input.asn || data.internet.service.code;
	data.internet.service.name = input.asname || data.internet.service.name;
	data.internet.service.provider = input.isp || input.org || data.internet.service.provider;
	data.country = Function.geo.country (input.country_code, {exclude: ["region", "city"]});
	data.region.code = input.region_code || "";
	data.region.name = input.region || "";
	data.city.code = input.city_code || "";
	data.city.name = input.city || "";
	var timezone = Function.timezone (input.timezone);
	data.timezone.identifier = timezone.identifier || data.timezone.identifier;
	data.timezone.offset = timezone.offset || Function.timezone.offset.format (input.utc_offset) || data.timezone.offset;
	data.coordinate.latitude = input.latitude || data.coordinate.latitude;
	data.coordinate.longitude = input.longitude || data.coordinate.longitude;
	return data;
	}

Function.ip.initialize = function (data) {
	if (data) Function.ip (require ("./node_packages/ip.json"));
	}

Function.ip.trace = function () {}
Function.ip.trace.url = "https://ipapi.co/%s/json/";
Function.ip.url = "https://api.ipify.org/?format=json";

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Function.geo = function (data) {
	if (data) Function.geo.data = data;
	else Function.geo.initialize ();
	}

Function.geo.country = function (code, option = {}) {
	var country = Function.geo.country.data [code] || {
		code: "",
		name: "",
		capital: {code: "", name: "", coordinate: {latitude: "", longitude: ""}},
		region: {data: {}, city: {data: {}}},
		coordinate: {latitude: "", longitude: ""},
		currency: {code: "", name: ""},
		population: 0,
		language: [],
		domain: [],
		}
	country = Object.clone (country);
	if (option.exclude) for (var i in option.exclude) delete country [option.exclude [i]];
	return country;
	}

Function.geo.country.region = function () {}
Function.geo.country.region.city = function () {}

Function.geo.data = {}
Function.geo.country.data = {}
Function.geo.country.region.data = {}
Function.geo.country.region.city.data = {}

Function.geo.initialize = function (data) {
	if (data) Function.geo (require ("./node_packages/geo.json"));
	else {
		for (var i in Function.geo.data.country.data) {
			Function.geo.country.data [Function.geo.data.country.data [i].code] = Function.geo.data.country.data [i];
			for (var x in Function.geo.data.country.region.data) {
				if (Function.geo.data.country.region.data [x].id) {
					if (Function.geo.data.country.region.data [x].country === Function.geo.data.country.data [i].id) {
						Function.geo.country.data [Function.geo.data.country.data [i].code].region.data [Function.geo.data.country.region.data [x].code] = Function.geo.data.country.region.data [x];
						for (var o in Function.geo.data.country.region.city.data) {
							if (Function.geo.data.country.region.city.data [o].id) {
								if (Function.geo.data.country.region.city.data [o].country === Function.geo.data.country.data [i].id) {
									if (Function.geo.data.country.region.city.data [o].region === Function.geo.data.country.region.data [x].id) {
										Function.geo.country.data [Function.geo.data.country.data [i].code].region.city.data [Function.geo.data.country.region.city.data [o].code] = Function.geo.data.country.region.city.data [o];
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Function.manifest = function () {}
Function.manifest.json = function (data) {
	data = Function.option (data, {
		"icon": ["192x192.png", "512x512.png"],
		"url:start": ".",
		"display": "standalone",
		"theme:color": "#000000",
		"background:color": "#ffffff",
		});
	return {
		"short_name": data ["channel"] || "Manifest",
		"name": data ["name"] || "Manifest",
		"icons": [
			{"src": data ["icon"][0], "sizes": "192x192", "type": "image/png"},
			{"src": data ["icon"][1], "sizes": "512x512", "type": "image/png"},
			],
		"start_url": data ["url:start"],
		"display": data ["display"],
		"theme_color": data ["theme:color"],
		"background_color": data ["background:color"],
		}
	}

Function.robot = function () {}
Function.robot.txt = function (data, sitemap) {
	data = (data || []).map (function (data) {
		var robot = ["User-agent: " + data.agent];
		for (var i in data.resolve) robot.push ("Allow: " + data.resolve [i]);
		for (var i in data.reject) robot.push ("Disallow: " + data.reject [i]);
		return robot.join ("\n");
		});
	if (sitemap) {
		var robot = [];
		for (var i in sitemap) robot.push ("Sitemap: " + sitemap [i]);
		data.push (robot.join ("\n"));
		}
	return data.join ("\n\n");
	}

Function.sitemap = function () {}
Function.sitemap.frequency = {daily: "Daily", weekly: "Weekly", monthly: "Monthly", yearly: "Yearly"}
Function.sitemap.xml = function (data, option) {
	var xml = ['<?xml version="1.0" encoding="UTF-8"?>'];
	if (option.type === "index") {
		xml.push ('<?xml-stylesheet type="text/xsl" href="' + Function ["sitemap.xsl:index"] + '?feature=priority:frequency"?>');
		xml.push ('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
		for (var i in data) {
			xml.push ('\t<sitemap>');
			xml.push ('\t\t<loc>' + data [i].url + '</loc>');
			xml.push ('\t\t<lastmod>' + Function.sitemap.last_modified (data [i].last_modified) + '</lastmod>');
			xml.push ('\t\t<priority>' + (data [i].priority || "") + '</priority>');
			xml.push ('\t\t<changefreq>' + (Function.sitemap.frequency [data [i].change_frequency] || "") + '</changefreq>');
			xml.push ('\t</sitemap>');
			}
		xml.push ('</sitemapindex>');
		}
	else if (option.type === "news") {
		xml.push ('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">');
		for (var i in data) {
			xml.push ('\t<url>');
			xml.push ('\t\t<loc>' + data [i].url + '</loc>');
			xml.push ('\t\t<news:news>');
			xml.push ('\t\t\t<news:publication>');
			xml.push ('\t\t\t\t<news:name>' + data [i].name + '</news:name>');
			xml.push ('\t\t\t\t<news:language>' + (data [i].language || "") + '</news:language>');
			xml.push ('\t\t\t</news:publication>');
			xml.push ('\t\t\t<news:publication_date>' + Function.sitemap.last_modified (data [i].last_modified) + '</news:publication_date>');
			xml.push ('\t\t\t<news:title>');
			xml.push ('\t\t\t\t<![CDATA[ ' + (data [i].title || "") + ' ]]>');
			xml.push ('\t\t\t</news:title>');
			xml.push ('\t\t\t<news:keywords>');
			xml.push ('\t\t\t\t<![CDATA[ ' + (data [i].keyword || "") + ' ]]>');
			xml.push ('\t\t\t</news:keywords>');
			xml.push ('\t\t</news:news>');
			xml.push ('\t</url>');
			}
		xml.push ('</urlset>');
		}
	else {
		xml.push ('<?xml-stylesheet type="text/xsl" href="' + Function ["sitemap.xsl"] + '"?>');
		xml.push ('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">');
		for (var i in data) {
			xml.push ('\t<url>');
			xml.push ('\t\t<loc>' + data [i].url + '</loc>');
			xml.push ('\t\t<lastmod>' + Function.sitemap.last_modified (data [i].last_modified) + '</lastmod>');
			if (data [i].priority) xml.push ('\t\t<priority>' + data [i].priority + '</priority>');
			if (data [i].image) {
				xml.push ('\t\t<image:image>');
				xml.push ('\t\t\t<image:loc>' + data [i].image.url + '</image:loc>');
				if (data [i].image.title) xml.push ('\t\t\t<image:title>' + data [i].image.title + '</image:title>');
				if (data [i].image.caption) xml.push ('\t\t\t<image:caption>' + data [i].image.caption + '</image:caption>');
				xml.push ('\t\t</image:image>');
				}
			xml.push ('\t</url>');
			}
		xml.push ('</urlset>');
		}
	return xml.join ("\n");
	}

Function ["sitemap.xsl"] = null;
Function ["sitemap.xsl:index"] = null;
Function.sitemap.xsl = function (key, value) {
	if ((key = key || {}) === "path") return Function ["sitemap.xsl"] = value;
	if ((key = key || {}) === "path:index") return Function ["sitemap.xsl:index"] = value;
	key.client = key.client || {}
	key.generator = key.generator || {name: "Newbie Citizen", channel: "NEWBIZEN", url: "https://developer.newbizen.com"}
	key.generator = key.generator.name || {name: "Newbie Citizen", channel: "NEWBIZEN", url: "https://developer.newbizen.com"}
	var xsl = ['<?xml version="1.0" encoding="UTF-8"?>'];
	xsl.push ('<xsl:stylesheet version="2.0" xmlns:html="http://www.w3.org/TR/REC-html40" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">');
	xsl.push ('\t<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>');
	xsl.push ('\t<xsl:template match="/">');
	xsl.push ('\t\t<html xmlns="http://www.w3.org/1999/xhtml">');
	xsl.push ('\t\t\t<head>');
	xsl.push ('\t\t\t\t<title>XML SiteMap Index</title>');
	xsl.push ('\t\t\t\t<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>');
	xsl.push ('\t\t\t\t<style type="text/css">body { font: 14px "Roboto", "Segoe UI", Helvetica, Arial, sans-serif; margin: 0; } a { color: #3498db; text-decoration: none; } h1 { margin: 0; } #description { background-color: #f1f1f1; color: #333333; padding: 30px 30px 20px; } #description a { color: #008710; } #content { padding: 10px 30px 30px; background: #fff; } a:hover { border-bottom: 1px solid; } th, td { font-size: 12px; } th { text-align: left; border-bottom: 1px solid #ccc; } th, td { padding: 10px 15px; } .odd { background: linear-gradient(159.87deg, #f6f6f4 7.24%, #f7f4ea 64.73%, #ddedd5 116.53%); } #footer { margin: 20px 30px; font-size: 12px; color: #999; } #footer a { color: inherit; } #description a, #footer a { border-bottom: 1px solid; } img { max-height: 100px; max-width: 100px; }</style>');
	xsl.push ('\t\t\t</head>');
	xsl.push ('\t\t\t<body>');
	xsl.push ('\t\t\t\t<div id="description">');
	xsl.push ('\t\t\t\t\t<h1>XML SiteMap Index</h1>');
	xsl.push ('\t\t\t\t\t<xsl:choose><xsl:when test="not(sitemap:sitemapindex/sitemap:sitemap)"><p><strong></strong></p></xsl:when></xsl:choose>');
	xsl.push ('\t\t\t\t\t<p>This is an XML SiteMap Index generated by <a href="' + key.generator.url + '">' + key.generator.channel + '</a>, meant to be consumed by search engine\'s like <a href="https://www.google.com">Google</a> or <a href="https://www.bing.com">Bing</a>.</p>');
	xsl.push ('\t\t\t\t\t<p>You can find more information on XML sitemap\'s at <a href="https://sitemaps.org">sitemaps.org</a></p>');
	xsl.push ('\t\t\t\t</div>');
	xsl.push ('\t\t\t\t<div id="content">');
	xsl.push ('\t\t\t\t\t<table>');
	xsl.push ('\t\t\t\t\t\t<tr>');
	xsl.push ('\t\t\t\t\t\t\t<th>#</th>');
	xsl.push ('\t\t\t\t\t\t\t<th>URL</th>');
	if (key.extra) {
		xsl.push ('\t\t\t\t\t\t\t<th>Priority</th>');
		xsl.push ('\t\t\t\t\t\t\t<th>Change Frequency</th>');
		}
	xsl.push ('\t\t\t\t\t\t\t<th>Last Modified</th>');
	xsl.push ('\t\t\t\t\t\t</tr>');
	if (key.index) xsl.push ('\t\t\t\t\t\t<xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">');
	else xsl.push ('\t\t\t\t\t\t<xsl:for-each select="sitemap:urlset/sitemap:url">');
	xsl.push ('\t\t\t\t\t\t\t<tr>');
	xsl.push ('\t\t\t\t\t\t\t\t<xsl:choose><xsl:when test="position() mod 2 != 1"><xsl:attribute name="class"></xsl:attribute></xsl:when></xsl:choose>');
	xsl.push ('\t\t\t\t\t\t\t\t<td><xsl:value-of select="position()"/></td>');
	xsl.push ('\t\t\t\t\t\t\t\t<td><xsl:variable name="itemURL"><xsl:value-of select="sitemap:loc"/></xsl:variable><a href="{$itemURL}"><xsl:value-of select="sitemap:loc"/></a></td>');
	if (key.extra) {
		xsl.push ('\t\t\t\t\t\t\t\t<td><xsl:value-of select="sitemap:priority"/></td>');
		xsl.push ('\t\t\t\t\t\t\t\t<td><xsl:value-of select="sitemap:changefreq"/></td>');
		}
	xsl.push ('\t\t\t\t\t\t\t\t<td><xsl:value-of select="sitemap:lastmod"/></td>');
	xsl.push ('\t\t\t\t\t\t\t</tr>');
	xsl.push ('\t\t\t\t\t\t</xsl:for-each>');
	xsl.push ('\t\t\t\t\t</table>');
	xsl.push ('\t\t\t\t</div>');
	xsl.push ('\t\t\t\t<div id="footer">');
	if (key.client.name) xsl.push ('\t\t\t\t\t<p>Generated by <a href="' + key.generator.url + '">' + key.generator.name + '</a> for ' + key.client.name + '</p>');
	else xsl.push ('\t\t\t\t\t<p>Generated by <a href="' + key.generator.url + '">' + key.generator.name + '</a></p>');
	xsl.push ('\t\t\t\t</div>');
	xsl.push ('\t\t\t</body>');
	xsl.push ('\t\t</html>');
	xsl.push ('\t</xsl:template>');
	xsl.push ('</xsl:stylesheet>');
	return xsl.join ('\n');
	}

Function.sitemap.last_modified = function (stamp) {
	var date = new Date (stamp || Date.now ());
	var year = date.getUTCFullYear ().toString ();
	var month = date.getUTCMonth ().toString ().padStart (2, "0");
	var day = date.getUTCDate ().toString ().padStart (2, "0");
	var hour = date.getUTCHours ().toString ().padStart (2, "0");
	var minute = date.getUTCMinutes ().toString ().padStart (2, "0");
	var second = date.getUTCSeconds ().toString ().padStart (2, "0");
	var last_modified_date = [year, month, day];
	var last_modified_time = [hour, minute, second];
	var last_modified_zone = ["00", "00"];
	var last_modified = [last_modified_date.join ("-"), last_modified_time.join (":")].join ("T");
	last_modified = [last_modified, last_modified_zone.join (":")].join ("+");
	return last_modified;
	}

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Function.help = function () {}
Function.help.timezone = function (timezone) { timezone = timezone || ""; if (timezone.includes (":")) return timezone; else return timezone.to_split (":", 3); }
Function.help.host = function () {}
Function.help.host.check = function (host, check) { return host.endsWith ("/" + check) || host.endsWith ("." + check) || ("#" + host).endsWith ("#" + check); }
Function.help.taxonomy = function () {}
Function.help.taxonomy.child = function () {}
Function.help.taxonomy.child.recursive = function (taxonomy, request, response) { for (var i in taxonomy) if ((taxonomy [i].child = request.db.taxonomy.select ({reference: taxonomy [i].id})).length) Function.help.taxonomy.child.recursive (taxonomy [i].child, request); }
Function.help.db = function () {}
Function.help.db.child = function () {}
Function.help.db.child.recursive = function (collection, base) { for (var i in collection) if ((collection [i].child = base.select ({reference: collection [i].id})).length) Function.help.db.child.recursive (collection [i].child, base); }

Function.current = function (input) { return "./" + input; }

Function ["favorite.ico"] = "favicon.ico";

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Function, "path", function () {});
Define (Function.path, "separator", function (separator) { if (separator) return Function.path.separator.value = separator; else return Function.path.separator.value; });
Define (Function.path, "join", function (... path) { return Function.path.api.engine.join (... path); });
Define (Function.path, "api", function (engine) { if (engine) return Function.path.api.engine = engine; else return Function.path.api.engine = require ("path"); });
Define (Function.path.api, "engine", null, {writable: true});
Define (Function.path, "regex", function (path, regex) { if (regex) { var data = {}, key = []; var regexp = Function.path.regex.__regex (regex, key); var param = regexp.exec (path); if (param) { for (var i = 1; i < param.length; i ++) data [key [i - 1].name] = param [i]; return data; } } });
Define (Function.path.regex, "require", function (regex, match, parse, compile) { if (arguments.length) Function.path.regex.__regex = regex, Function.path.regex.__match = match, Function.path.regex.__parse = parse, Function.path.regex.__compile = compile; else return require ("path-to-regexp"); });
Define (Function.path.regex, "api", function (engine) { if (engine) return Function.path.regex.api.engine = engine; else return Function.path.regex.api.engine = require ("path-to-regexp"); });
Define (Function.path.regex.api, "engine", null, {writable: true});

Define (Function, "fs", function () {});
Define (Function.fs, "api", function (engine) { if (engine) return Function.fs.api.engine = engine; else return Function.fs.api.engine = require ("fs"); });
Define (Function.fs.api, "engine", null, {writable: true});

Define (Function, "file", function () {});
Define (Function.file, "extension", {
	html: ".html",
	css: ".css",
	js: ".js",
	json: ".json",
	xml: ".xml",
	ini: ".ini",
	image: {
		gif: ".gif",
		jpg: ".jpg",
		jpeg: ".jpeg",
		png: ".png",
		},
	});

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Function.express = function () {}

Function.vue = function () {}

Function.vue.session = class {
	constructor (session) { this.session = session; }
	config (... option) { return this.session.config (... option); }
	set (key, value, ... option) { return this.session.set (this.key (key), Function.hash.encode (value), ... option); }
	get (key) { if (key) return Function.hash.decode (this.session.get (this.key (key))); else { var data = {}, session = this.key (); for (var i in session) data [session [i]] = Function.hash.decode (this.session.get (session [i])); return data; } }
	exist (key) { return this.session.isKey (this.key (key)); }
	key (key) { if (key) return key.to_replace (":", "_"); else return this.session.keys (); }
	register (key, value, context, ... option) {
		if (this.exist (key) === false) {
			if (context) context (this);
			return this.set (key, value, ... option);
			}
		}
	}

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Function, "window", function () {
	window.scroll = function () {}
	window.scroll.smooth = function (id) { return document.getElementById (id).scrollIntoView ({behavior: "smooth"}); }
	window.size = function () { return {width: window.innerWidth, height: window.innerHeight} }
	window.on = function (key, value) {
		if (key === "scroll") window.onscroll = value;
		if (["size:change", "size change"].includes (key)) window.onresize = value;
		}
	window.agent = function () {
		var browser = {
			name: "", type: "", version: "", platform: "", model: "",
			device: {type: "computer", version: "", platform: "", model: "", mobile: false},
			}
		var device = {type: "computer", version: "", platform: "", model: "", mobile: false}
		if (window.navigator.userAgentData) {
			if (window.navigator.userAgentData.brands.length) {
				var nav = window.navigator.userAgentData.brands [2] || window.navigator.userAgentData.brands [1] || window.navigator.userAgentData.brands [0];
				device.platform = window.navigator.userAgentData.platform;
				device.mobile = window.navigator.userAgentData.mobile;
				browser.version = nav.version;
				browser.name = device.platform + " " + nav.brand + "/" + browser.version;
				}
			}
		else browser.name = window.navigator.userAgent;
		var agent = browser.name.toLowerCase ();
		if (agent.includes ("windows")) {
			device.platform = "win";
			}
		if (agent.includes ("android")) {
			device.model = "a";
			device.platform = "android";
			if (agent.includes ("wv")) browser.model = "web-view";
			if (agent.includes ("mobile")) device.type = "phone";
			else device.type = "tablet";
			}
		if (agent.includes ("mac")) {
			device.model = "i";
			device.platform = "apple";
			if (agent.includes ("iphone")) device.type = "phone";
			else if (agent.includes ("ipad")) device.type = "tablet";
			else device.type = "computer";
			}
		if (agent.includes ("firefox")) browser.platform = "mozilla";
		else if (agent.includes ("chrome")) browser.platform = "chrome";
		else if (agent.includes ("safari")) browser.platform = "safari";
		else browser.platform = "*";
		browser.type = (device.type == "computer") ? "" : "mobile";
		return {browser, device}
		}
	});

Define (Function, "document", function () {
	document.url = URL.parse_url (document.base_url = window.location.href.toString ());
	document.url.reload = function () { window.location.reload (); }
	});

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Symbol.library = {
	define: Define, context: Function.context,
	function: Function, object: Object, array: Array, string: String, number: Number, math: Math, infinity: Infinity, date: Date, time: Time, timeout: Function.timeout, timezone: Function.timezone,
	url: URL, parse_url: URL.parse_url, promise: Promise,
	data: Function.data, hash: Function.hash, xml: Function.xml, serialize: Function.serialize, json: JSON,
	dom: Function.dom,
	char: String.char, is_boolean: Object.is_boolean, is_object: Object.is_object, is_array: Object.is_array, is_string: Object.is_string, is_number: Object.is_number, is_nan: Object.is_nan, is_integer: Object.is_integer, is_finite: Object.is_finite, is_float: Object.is_float, is_function: Object.is_function, is_date: Object.is_date, is_regex: Object.is_regex, is_null: Object.is_null, is_set: Object.is_set, is_define: Object.is_define, un_define: Object.un_define, un_set: Object.un_set,
	plugin: Function.plugin, api: Function.api, firebase: Function.firebase, appwrite: Function.appwrite,
	ip: Function.ip, geo: Function.geo,
	path: Function.path, file: Function.file, fs: Function.fs,
	window: Function.window, document: Function.document,
	express: Function.express, angular: Function.angular, vue: Function.vue,
	help: Function.help, current: Function.current,
	manifest: Function.manifest, robot: Function.robot, sitemap: Function.sitemap, "sitemap.xsl": Function ["sitemap.xsl"],
	}

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
