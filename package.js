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

Define (Object, "length", function (object) { var length = 0; for (var i in object) length ++; return length; });
Define (Object, "clone", function (object) { return JSON.parse (JSON.stringify (object)); });

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
Define.property (Array, "select", function (where) { var length = Object.length (where); return this.filter (function (data) { var count = 0; for (var i in where) { if (i.includes (".")) { var key = i.split ("."); for (var x in key) data = data [key [x]]; if (data === where [i]) count ++; } else if (data [i] === where [i]) count ++; } if (count === length) return true; else return false; }); });
Define.property (Array, "insert", function (offset, ... value) { return this.splice (offset, 0, ... value); });
Define.property (Array, "update", function (offset, ... value) { return this.splice (offset, 1, ... value); });
Define.property (Array, "delete", function (offset, length = 1) { return this.splice (offset, length); });
Define.property (Array, "shuffle", function () { return Array.shuffle (this); });
Define.property (Array, "index_of", function (value, offset) { return Array.index_of (this.indexOf (value, offset)); });
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

Define.property (String, "integer", function () { return parseInt (this); });
Define.property (String, "float", function () { return parseFloat (this); });
Define.property (String, "small", function () { return this.toLowerCase (); });
Define.property (String, "big", function () { return this.toUpperCase (); });
Define.property (String, "begin", function (input) { if (typeof input === "string") return this.startsWith (input); else return this.substr (input); });
Define.property (String, "end", function (input) { if (typeof input === "string") return this.endsWith (input); else return this.substr (this.length - input); });
Define.property (String, "reverse", function () { return this.split ("").reverse ().join (""); });
Define.property (String, "json", function () { return JSON.stringify (this); });
Define.property (String, "to_split", function (separator = " ", offset = 1) { var data = [], count = 0; for (var i in this) { data.push (this [i]), count ++; if (count >= offset) data.push (separator), count = 0; } if ((data = data.join ("")).endsWith (separator)) data = data.substr (0, data.length - separator.length); return data; });
Define.property (String, "to_replace", function (key, value) { if (typeof key === "object") { var data = this.concat (""); for (var i in key) { if (value) if (value.exclude) if (value.exclude.includes (i)) continue; else data = data.split ("{{ " + i + " }}").join (key [i]); else data = data.split ("{{ " + i + " }}").join (key [i]); else data = data.split ("{{ " + i + " }}").join (key [i]); } return data; } else return this.split (key).join (value); });
Define.property (String, "print_format", function (... format) { var data = this.split ("%s"); var index = - 1; for (var i in format) { index += 2; data.splice (index, 0, format [i]); } return data.join (""); });
Define.property (String, "descriptor", "function");
Define (String, "char", {small: function () { return "abcdefghijklmnopqrstuvwxyz"; }, big: function () { return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; }, alpha: {numeric: "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789"}, space: " ", underscore: "_", separator: {eol: "; ", coma: ", "}});

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
Define (Function, "option", function (option) { return option || {} });

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

function Time () { return Date.now (); }
Define (Time, "sleep", function (context, second = 1) { return setTimeout (context, (second * 1000)); });
Define (Time.sleep, "emit", function (context) { return setTimeout (context, 100); });
Define (Time.sleep, "clear", function (context) { return clearTimeout (context); });
Define (Time, "interval", function (context, second = 1) { return setInterval (context, (second * 1000)); });
Define (Time.interval, "clear", function (context) { return clearInterval (context); });

Function.timeout = function (context) { return setTimeout (context, (Function.timeout.sleep.value * 1000)); }
Function.timeout.sleep = function (value) { if (arguments.length) return Function.timeout.sleep.value = value; else return Function.timeout.sleep.value; }
Function.timeout.sleep.value = 10;

Function.timezone = function (timezone) {
	for (var i in Function.geo.data.timezone) {
		if ([Function.geo.data.timezone [i].id, Function.geo.data.timezone [i].code].includes (timezone)) {
			return Function.geo.data.timezone [i];
			}
		}
	return {}
	}

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
			protocol: parse.protocol.substr (0, parse.protocol.length - 1) || option.protocol,
			host: {reference: "", address: parse.host, name: parse.hostname, port: parse.port},
			domain: URL.domain.parse (parse.hostname),
			user: parse.username, password: parse.password,
			path: parse.pathname || "/",
			query: {},
			tag: parse.hash,
			}
		if (option.c) {}
		else {
			parse_url.client = {}
			parse_url.cross = {origin: false}
			}
		parse_url.base = {name: parse_url.domain.name || parse_url.host.name}
		if (parse.origin !== "null") parse_url.host.reference = parse.origin;
		if (parse.search) for (var [key, value] of parse.searchParams.entries ()) parse_url.query [key] = value;
		if (option.client) if (parse_url.client = URL.parse_url (option.client, {c: true})) parse_url.cross.origin = true;
		return parse_url;
		}
	catch (error) {
		if (option.retry) {}
		else if (option.retry = true) return URL.parse_url ((option.protocol || "http") + "://" + url, option);
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
			var sub = n.substr (0, (n.length - (name.length + 1)));
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

Define (URL.domain, "data", URL.domain.sort ([".com", ".net", ".org", ".info", ".xxx"]), {writable: true});

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
Define (Function.hash, "encode", function (input) { return btoa (input); }, {writable: true});
Define (Function.hash, "decode", function (input) { return atob (input); }, {writable: true});

Define (Function.hash, "crypto", function (algorithm, option) { return Function.hash.crypto.api.engine.createHash (algorithm, option); });
Define (Function.hash.crypto, "md", function (input) { return Function.hash.crypto.api.engine.createHash ("md5").update (input).digest ("hex"); });
Define (Function.hash.crypto, "sha", function (input) { return Function.hash.crypto.api.engine.createHash ("sha256").update (input).digest ("hex"); });
Define (Function.hash.crypto.sha, "one", function (input) { return Function.hash.crypto.api.engine.createHash ("sha1").update (input).digest ("hex"); });
Define (Function.hash.crypto, "api", function (engine) { if (engine) return Function.hash.crypto.api.engine = engine; else return Function.hash.crypto.api.engine = require ("crypto"); });
Define (Function.hash.crypto.api, "engine", null, {writable: true});

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Define (Function, "xml", function () {});

Define (Function, "serialize", function () {});

Define (Function, "json", function () {});
Define (Function.json, "encode", function (data) { return JSON.stringify (data); });
Define (Function.json, "decode", function (data, value) { if (data) return JSON.parse (data); else return value; });

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

Function.api.appwrite = class {
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
		this.client = new Function.api.appwrite.__client ().setEndpoint (this.url).setEndpointRealtime (this.socket).setProject (this.project.id);
		this.db = new Function.api.appwrite.database (this, this ["data:base"]);
		}
	database (db) {
		return new Function.api.appwrite.database (this, db);
		}
	}

Function.api.appwrite.database = class {
	constructor (appwrite, db) {
		this.appwrite = appwrite;
		this.client = new Function.api.appwrite.__databases (this.appwrite.client);
		this.name = db;
		this.snapshot = [];
		}
	collection (collection) {
		return new Function.api.appwrite.database.collection (this.appwrite, this, collection);
		}
	}

Function.api.appwrite.database.collection = class {
	constructor (appwrite, db, collection) {
		this.appwrite = appwrite;
		this.db = db;
		this.client = this.db.client;
		this.name = this.db.name;
		this.collection = collection;
		this.table = this.db.table [this.collection] || this.collection;
		}
	get (id) {
		var promise = function (resolve, reject) {
			this.db.client.getDocument (this.db.name, this.db.table, id).then (Function.api.appwrite.database.response.bind ({context: resolve}), reject);
			}
		return new Promise (promise.bind ({db: this}));
		}
	}

Function.api.appwrite.database.response = function (data) { this.context (Function.api.appwrite.database.doc_format (data)); }

Function.api.appwrite.database.doc_format = function (data) {
	data.id = data.$id;
	data.stamp = {
		insert: new Date (data.$createdAt).getTime (),
		update: new Date (data.$updatedAt).getTime (),
		delete: 0,
		}
	for (var i in data) if (i.startsWith ("$")) delete data [i];
	return data;
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
		timezone: {code: "GMT", name: "", offset: "+00:00"},
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
	data.timezone.code = timezone.code || data.timezone.code;
	data.timezone.name = timezone.name || data.timezone.name;
	data.timezone.offset = timezone.offset || Function.help.timezone (input.utc_offset) || data.timezone.offset;
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
Define (Function.path, "join", function (... path) { return Function.path.api.engine.join (... path); });
Define (Function.path, "api", function (engine) { if (engine) return Function.path.api.engine = engine; else return Function.path.api.engine = require ("path"); });
Define (Function.path.api, "engine", null, {writable: true});

Define (Function, "fs", function () {});
Define (Function.fs, "api", function (engine) { if (engine) return Function.fs.api.engine = engine; else return Function.fs.api.engine = require ("fs"); });
Define (Function.fs.api, "engine", null, {writable: true});

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
	window.browser = function () {
		var browser = {
			name: "", type: "", version: "", platform: "", model: "",
			device: {type: "computer", version: "", platform: "", model: "", mobile: false},
			}
		if (window.navigator.userAgentData) {
			if (window.navigator.userAgentData.brands.length) {
				var nav = window.navigator.userAgentData.brands [2] || window.navigator.userAgentData.brands [1] || window.navigator.userAgentData.brands [0];
				browser.device.platform = window.navigator.userAgentData.platform;
				browser.device.mobile = window.navigator.userAgentData.mobile;
				browser.version = nav.version;
				browser.name = browser.device.platform + " " + nav.brand + "/" + browser.version;
				}
			}
		else browser.name = window.navigator.userAgent;
		var agent = browser.name.toLowerCase ();
		if (agent.includes ("windows")) {
			browser.device.platform = "win";
			}
		if (agent.includes ("android")) {
			browser.device.model = "a";
			browser.device.platform = "android";
			if (agent.includes ("wv")) browser.model = "web-view";
			if (agent.includes ("mobile")) browser.device.type = "phone";
			else browser.device.type = "tablet";
			}
		if (agent.includes ("mac")) {
			browser.device.model = "i";
			browser.device.platform = "apple";
			if (agent.includes ("iphone")) browser.device.type = "phone";
			else if (agent.includes ("ipad")) browser.device.type = "tablet";
			else browser.device.type = "computer";
			}
		if (agent.includes ("firefox")) browser.platform = "mozilla";
		else if (agent.includes ("chrome")) browser.platform = "chrome";
		else if (agent.includes ("safari")) browser.platform = "safari";
		else browser.platform = "*";
		browser.type = (browser.device.type == "computer") ? "" : "mobile";
		return browser;
		}
	});

Define (Function, "document", function () {
	document.url = URL.parse_url (document.base_url = window.location.href);
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
	char: String.char, is_boolean: Object.is_boolean, is_object: Object.is_object, is_array: Object.is_array, is_string: Object.is_string, is_number: Object.is_number, is_nan: Object.is_nan, is_integer: Object.is_integer, is_finite: Object.is_finite, is_float: Object.is_float, is_function: Object.is_function, is_date: Object.is_date, is_regex: Object.is_regex, is_null: Object.is_null, is_set: Object.is_set, is_define: Object.is_define, un_define: Object.un_define, un_set: Object.un_set,
	url: URL, parse_url: URL.parse_url,
	hash: Function.hash, xml: Function.xml, serialize: Function.serialize, json: Function.json,
	dom: Function.dom,
	plugin: Function.plugin, api: Function.api,
	ip: Function.ip, geo: Function.geo,
	path: Function.path, fs: Function.fs,
	window: Function.window, document: Function.document,
	express: Function.express, angular: Function.angular, vue: Function.vue,
	help: Function.help, current: Function.current,
	}

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
