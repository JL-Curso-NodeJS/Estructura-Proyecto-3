// RUTAS DE MEDICOS

const router = require("express").Router(); // importar express.Router()
const medicoController = require('../controllers/medico.controller') // importar el archivo de controladores de usuarios


router.get('/', medicoController.listar)
router.post('/', medicoController.crear)
router.get('/:idMedico', medicoController.listarInfo)


module.exports = router;