module.exports = (sequelize, Sequelize) => {
    const Trabajadores = sequelize.define("trabajadores", {
        nombre: {
            type: Sequelize.STRING
        },
        apellido: {
            type: Sequelize.STRING  
        },
        edad : {
            type: Sequelize.INTEGER
        },
        fecha_de_nacimiento : {
            type: Sequelize.DATE
        }
    });
    return Trabajadores;
};