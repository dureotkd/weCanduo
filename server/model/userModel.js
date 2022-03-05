'use strict';
const Core = require('./core');

class UserModel extends Core {
  constructor(props) {
    super(props);

    this.table = 'user';
    this.core = new Core();
  }

  getData() {}

  getRow() {}

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

const userModel = new UserModel();

module.exports = userModel;
