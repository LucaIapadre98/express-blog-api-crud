const posts = require("../database/db");

const index = (req, res) => {
    const filterTags = req.query.tags;
    let fileteredPosts = [...posts];

    if(filterTags){
        fileteredPosts = fileteredPosts.filter( post => post.tags.includes(filterTags));
    }
    res.json({
        data: fileteredPosts, 
        status : 200
    });
};
const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);
    if(!post){
        res.status(404);
        res.json({
            error:'404 Not Found',
            messagge: 'Post non trovato'
        });
        return;
    }
    res.json({
        data: post,
        status: 200
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
const destroy = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);

        res.json({
            error: '404',
            messagge:'Post non trovato'
        });
        return;
    }
    const postIndex = posts.indexOf(post);
    posts.splice(postIndex, 1);

    res.sendStatus(204);
}


module.exports = { 
    index,
    show,
    store, 
    update, 
    modify, 
    destroy 
}