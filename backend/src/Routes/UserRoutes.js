const express = require("express")
const router = express.Router()

// Controllers
const { addChar, getChar, delChar, updateChar } = require("../Controllers/UserControllers")


router.route("/users")
    .post(addChar)
    .get(getChar)

// With Params
router.route("/users/:id")
    .put(updateChar)
    .delete(delChar)

module.exports = router;
