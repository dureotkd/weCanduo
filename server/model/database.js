'use strict';

const mysql = require('mysql');
const db = mysql.createPoolCluster();

db.add('lolDuo', {
  host: '52.79.106.68',
  user: 'root',
  password: '@Slsksh671201@',
  database: 'lolDuo',
  port: 3306,
});

module.exports.db = db;
