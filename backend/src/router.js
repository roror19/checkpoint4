const express = require("express");

const router = express.Router();

const equipmentControllers = require("./controllers/EquipmentControllers");
const crewControllers = require("./controllers/CrewController");
const jobControllers = require("./controllers/Jobcontroller");

router.get("/equipments", equipmentControllers.browse);
router.get("/equipments/:id", equipmentControllers.read);
router.put("/equipments/:id", equipmentControllers.edit);
router.post("/equipments", equipmentControllers.add);
router.delete("/equipments/:id", equipmentControllers.destroy);

router.get("/crews", crewControllers.browse);
router.get("/crews/:id", crewControllers.read);
router.put("/crews/:id", crewControllers.edit);
router.post("/crews", crewControllers.add);
router.delete("/crews/:id", crewControllers.destroy);

router.get("/jobs", jobControllers.browse);
router.get("/jobs/:id", jobControllers.read);
router.put("/jobs/:id", jobControllers.edit);
router.post("/jobs", jobControllers.add);
router.delete("/jobs/:id", jobControllers.destroy);

module.exports = router;
