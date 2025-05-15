const { posts } = require("../database/db");

const index = (req, res) => {
    const filterTags = req.query.tags;
    let fileteredPosts = posts;
    
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
            messagge: 'Post not found'
        });
        return;
    }

    res.json({
        data: post,
        status: 200
    });
};
const store = (req, res) =>{
    const {title, content, image,tags} = req.body;
    let maxId = 0;

    for (const post of posts){
        if(post.id > maxId) maxId = post.id;
    }

    const postId = maxId + 1;
    const newPost = {id:maxId + 1, title, content, image,tags};
    posts.push(newPost);

    res.status(201).json(newPost)
};
const update = (req, res) =>{
    const {title, content, image, tags } = req.body;
    const postId = parseInt(req.params.id);
    const post = posts.find((post) => post.id === postId);

    if(!post){
        res.status(404);

        res.json({
            error:"404 No Found",
            messagge:"post not found"
        })
        return;
    }

    const updatetPost = { id: postId, title, content, image, tags };

    const postIndex = posts.indexOf(post);
    console.log(postIndex);
    
    posts.splice(postIndex, 1, updatetPost);
    res.json(updatetPost);
    console.log(updatetPost);
    
};
const modify = (req, res) =>{
    const postId = parseInt(req.params.id);
    const originalPost = posts.find((post) => post.id === postId);

      if(!originalPost){
        res.status(404);

        res.json({
            error:"404 No Found",
            messagge:"post not found"
        })
        return;
    }
    
    const {title, content, image, tags } = req.body;

    if(title){
        originalPost.title = title;
    }

    if(content){
        originalPost.content= content;
    }

    if(tags){
        originalPost.tags = tags;
    }
    res.json(originalPost);

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