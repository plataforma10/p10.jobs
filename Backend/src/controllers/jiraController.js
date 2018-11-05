const router = require("express").Router();
const jiraService = require('../service/jiraService');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        const extFile = path.extname(file.originalname);
        const fileName = path.basename(file.originalname, extFile);
        const name = `${fileName}-${Date.now()}${extFile}`
        cb(null, name);
    },
});

const upload = multer({
    storage,
    limits: { fileSize: 1024 },
    fileFilter: function (req, file, cb) {
        var filetypes = /doc|docx|pdf|txt|text\/plain/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (!mimetype || !extname) {
            return cb(new Error("Error: File upload only supports the following filetypes - " + filetypes));
        }
        return cb(null, true);
    }
});

router.post('/crearissue', upload.single("file"), async function (req, res, next) {
    try {
        await jiraService.CrearIssue(
            req.body.nombre,
            req.body.apellido,
            req.body.email,
            req.body.area,
            req.body.posicion,
            req.file
        );
        res.sendStatus(200);
    }
    catch (err) {
        next(err);
    }
});

module.exports = router; 