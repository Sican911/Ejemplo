module.exports = app => {
    const trabajadores = require("../controllers/trabajador.contoller.js");
    var router = require("express").Router();
    router.post("/create/", trabajadores.create);
    router.get("/", trabajadores.findAll);
    router.get("/:id", trabajadores.findOne);
    router.put("/:id", trabajadores.update);
    router.delete("/:id", trabajadores.delete);
    router.delete("/", trabajadores.deleteAll);
    app.use('/api/trabajadores', router);
}