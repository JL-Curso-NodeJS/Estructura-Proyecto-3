// FUNCIONAMIENTO DE TODAS LAS RUTAS DE PACIENTE

const models = require("../database/models/index")
const errors = require("../const/errors")

module.exports = {

    listar: async (req, res, next) => {
        try {
            const pacientes = await models.paciente.findAll()

            res.json({
                success: true,
                data: {
                    pacientes: pacientes
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            const paciente = await models.paciente.findOne({
                where: {
                    id: req.params.idPaciente
                }
            })
            if (!paciente) return next(errors.PacienteInexistente)

            res.json({
                success: true,
                data: {
                    paciente: paciente
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    crear: async (req, res, next) => {
        try {
            const paciente = await models.paciente.create(req.body)

            res.json({
                success: true,
                data: {
                    id: paciente.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },

}