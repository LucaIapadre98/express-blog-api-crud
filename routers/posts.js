const express = require("express");
let{posts} = require("../data/db")
const router = express.Router();

// #INDEX
router.get("/", (req, res) =>{
    res.json({
        messagge:"Lettura della lista dei post",
        data: posts
    })
});
// #SHOW
router.get("/:id", (req, res) =>{
    const id = req.params.id;
    res.json({
        messagge:"Lettura al dettaglio del post" + id,
        data: posts
    });
});
// #STORE
router.post("/", (req, res) =>{
    res.json({
        messagge:"Creo un nuovo post",
        data: posts
    });
});
// #UPDATE
router.put("/:id", (req, res) =>{
    const id = req.params.id;
    res.json({
        messagge:"Sostituzione di un post" + id,
        data: posts
    });
});
// #MODIFY
router.patch("/:id", (req, res) =>{
    const id = req.params.id;
    res.json({
        messagge:"Modifica di un post" + id,
        data: posts
    });
});
// #DESTROY
router.delete("/:id", (req, res) =>{
    const id = req.params.id;
    res.json({
        messagge:"Eliminazione di un post" + id,
        data: posts
    });
});



module.exports = router;