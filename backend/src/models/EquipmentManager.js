const AbstractManager = require("./AbstractManager");

class EquipmentManager extends AbstractManager {
  constructor() {
    super({ table: "equipement" });
  }

  insert(equipment) {
    return this.connection.query(
      `insert into ${this.table} (type, name, image) values (?), (?), (?)`,
      [equipment.type, equipment.name, equipment.image]
    );
  }

  update(equipment) {
    return this.connection.query(
      `update ${this.table} set type = ? set name = ? set image = ? where id = ?`,
      [equipment.type, equipment.name, equipment.image, equipment.id]
    );
  }
}
module.exports = EquipmentManager;
