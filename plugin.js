var library = require ("library.min.js/src");

library.path.api ();
library.path.regex.api ();
library.path.separator (library.path.api.engine.sep);
library.file.system.api ();
library.url.api ();
library.hash.crypto.api ();
library.ip.initialize ("default"), library.ip.initialize ();
library.geo.initialize ("default"), library.geo.initialize ();

var {MD5, SHA256, SHA1} = library.hash.require ();
library.hash.require (MD5, SHA256, SHA1);

var {pathToRegexp, match, parse, compile} = library.path.regex.require ();
library.path.regex.require (pathToRegexp, match, parse, compile);

var {Client, Databases, Query, ID} = library.appwrite.require ();
library.appwrite.require (Client, Databases, Query, ID);

library.mongo.api ();

module.exports = exports = library;
