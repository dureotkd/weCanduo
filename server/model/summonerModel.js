'use strict';
const Core = require('./core');

class SummonerModel extends Core {
  constructor(props) {
    super(props);

    this.table = 'summoner';
    this.core = new Core();
  }

  getData() {}

  getRow(obj) {
    const column = Object.keys(obj)[0];
    const value = Object.values(obj)[0];
    const sql = `SELECT * FROM lolDuo.${this.table} a WHERE a.${column} = '${value}'`;

    const row = this.core.excute({
      database: 'lolDuo',
      sql: sql,
      type: 'row',
    });

    return row;
  }

  getRowByPk(seq) {
    const sql = `SELECT * FROM lolDuo.${this.table} a WHERE a.draftSeq = '${seq}'`;

    const row = this.core.excute({
      database: 'lolDuo',
      sql: sql,
      type: 'row',
    });

    return row;
  }

  getAll() {
    const sql = 'SELECT * FROM lolDuo.`draftDetail`';

    const res = this.core.excute({
      database: 'lolDuo',
      sql: sql,
      type: 'all',
    });

    return res;
  }

  save(data) {
    const sql = this.core.getInsertQuery({table: this.table, data});

    const res = this.core.excute({
      database: 'lolDuo',
      sql: sql,
      type: 'exec',
    });

    return res;
  }

  update(data, where) {
    const sql = this.core.getUpdateQuery({table: this.table, data, where});

    const res = this.core.excute({
      database: 'lolDuo',
      sql: sql,
      type: 'exec',
    });

    return res;
  }
}

const summonerModel = new SummonerModel();

module.exports = summonerModel;
