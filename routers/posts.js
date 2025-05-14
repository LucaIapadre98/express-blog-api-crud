const express = require("express");
let {posts} = require("../database/db");

const postController = require("../controller/controller");
const router = express.Router();

router.get("/", postController.index);
router.get("/:id", postController.show);
router.post("/", postController.store);
router.put("/:id", postController.update);
router.patch("/:id", postController.modify);
router.delete("/:id", postController.destroy);



module.exports = router;