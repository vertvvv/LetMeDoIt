/**
 * Created by Ilya on 21.04.2017.
 */

var JsonDB = require('node-json-db');

var database = new JsonDB('data', true, true);

module.exports = database;