'use strict';

const mysql = require('mysql');
const db = mysql.createPoolCluster();

db.add('lolDuo', {
  host: '',
  user: 'root',
  password: '',
  database: 'lolDuo',
  port: 3306,
});

module.exports.db = db;
