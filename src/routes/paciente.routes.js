// RUTAS DE MEDICOS

const router = require("express").Router(); // importar express.Router()
const pacienteController = require('../controllers/paciente.controller') // importar el archivo de controladores de usuarios


router.get('/', pacienteController.listar)
router.post('/', pacienteController.crear)
router.get('/:idPaciente', pacienteController.listarInfo)


module.exports = router;