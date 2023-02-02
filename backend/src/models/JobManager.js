const AbstractManager = require("./AbstractManager");

class JobManager extends AbstractManager {
  constructor() {
    super({ table: "job" });
  }

  insert(job) {
    return this.connection.query(
      `insert into ${this.table} (id, title) values (?), (?)`[
        (job.id, job.title)
      ]
    );
  }

  update(job) {
    return this.connection.query(
      `update ${this.table} set id = ? set title = ?`[(job.id, job.title)]
    );
  }
}
module.exports = JobManager;
