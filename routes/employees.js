const express = require("express");

const { auth } = require("../middleware/auth");
const { all, add } = require("../controllers/employees");
const router = express.Router();

// /api/employees
router.get("/", auth, all);

// /api/employees/:id
router.get("/:id", auth, () => console.log("get employee by id"));

// /api/employees/add
router.post("/add", auth, add);

// /api/employees/remove/:id
router.post("/remove/:id", auth, () => console.log("remove employee"));

// /api/employees/edit/:id
router.put("/edit/:id", auth, () => console.log("edit employee"));

module.exports = router;
