const AbstractManager = require("./AbstractManager");

class CrewManager extends AbstractManager {
  constructor() {
    super({ table: "crew" });
  }

  insert(crew) {
    return this.connection.query(
      `insert into ${this.table} (id, genre, firstname, picture, biography) values (?), (?), (?), (?), (?)`[
        (crew.id, crew.genre, crew.firstname, crew.picture, crew.biography)
      ]
    );
  }

  update(crew) {
    return this.connection.query(
      `update ${this.table} set type = ? set name = ? set image = ? where id = ?`[
        (crew.type, crew.name, crew.image, crew.id)
      ]
    );
  }
}
module.exports = CrewManager;
