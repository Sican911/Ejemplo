module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
        nombre: {
            type: Sequelize.STRING
        },
        apellido: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }
    });
    return Cliente;
};
