const router = require("express").Router();


router.post('/', (req, res) => {
    // Aquí no hacemos nada todavía
     res.send('Pago procesado correctamente');
    res.sendStatus(200); // Puedes devolver solo un OK por ahora
});
module.exports=router;
