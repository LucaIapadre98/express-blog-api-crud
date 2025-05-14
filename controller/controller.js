const posts = require("../database/db");


const index = (req, res) => {
    const filterTags = req.query.tags;
    console.log(filterTags);

    let fileteredPosts = [...posts];
    if(filterTags){
        fileteredPosts = fileteredPosts.filter( post => post.tags.includes(filterTags));
    }
 
    res.json({
        data: posts, 
        status : 200
    });
};
const show = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);
    res.json({
        messagge:"Lettura al dettaglio del post" + id,
        data: posts
    });
};
const store = (req, res) =>{
    res.json({
        messagge:"Creo un nuovo post",
        data: posts
    });
};
const update = (req, res) =>{
    const id = req.params.id;
    res.json({
        messagge:"Sostituzione di un post" + id,
        data: posts
    });
};
const modify = (req, res) =>{
    const id = req.params.id;
    res.json({
        messagge:"Modifica di un post" + id,
        data: posts
    });
};
const destroy = (req, res) =>{
    const id = req.params.id;
    res.json({
        messagge:"Eliminazione di un post" + id,
        data: posts
    });
}

module.exports = { index, show, store, update, modify, destroy };