const express = require("express");
const itemsController = require("../../controllers/itemsController");

const router = express.Router();

router.get("/", itemsController.getAllItems);

router.get("/:itemsId", itemsController.getOneItems);

router.post("/", itemsController.createNewItems);

router.patch("/:itemsId", itemsController.updateOneItems);

router.delete("/:itemsId", itemsController.deleteOneItems);

module.exports = router;
