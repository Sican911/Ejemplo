const db = require("../models");
const Trabajador = db.trabajadores;
const Op = db.Sequelize.Op;

// Create and Save a new Trabajador
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Trabajador
    const trabajador = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        fecha_de_nacimiento: req.body.fecha_de_nacimiento
        // Puedes agregar más campos aquí si es necesario
    };

    // Save Trabajador in the database
    Trabajador.create(trabajador)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Trabajador."
            });
        });
};

// Retrieve all Trabajadores from the database.
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Trabajador.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving trabajadores."
            });
        });
};

// Find a single Trabajador with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Trabajador.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Trabajador with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Trabajador with id=" + id
            });
        });
};

// Update a Trabajador by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Trabajador.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Trabajador was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Trabajador with id=${id}. Maybe Trabajador was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Trabajador with id=" + id
            });
        });
};

// Delete a Trabajador with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Trabajador.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Trabajador was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Trabajador with id=${id}. Maybe Trabajador was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting Trabajador with id=" + id
            });
        });
};

// Delete all Trabajadores from the database.
exports.deleteAll = (req, res) => {
    Trabajador.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Trabajadores were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all trabajadores."
            });
        });
};

// Find all Trabajadores with a specific status (if you have a status field)
// Note: This assumes you have a 'status' field in your trabajadores model
exports.findAllStatus = (req, res) => {
    // You can modify this to filter by any field you want, for example 'activo'
    Trabajador.findAll({ where: { status: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving trabajadores."
            });
        });
};