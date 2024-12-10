
let posts = [
    { id: 1,title: 'post one' },
    { id: 2,title: 'post two' },
    { id: 3,title: 'post three' },
]

//@desc Get all posts
// @route GET /api/posts
export const getPosts = (req,res, next)=>{
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0){
        return res.status(200).json(posts.slice(0,limit));
    }

    res.status(200).json(posts);
}


//@desc get single post
//route GET /api/post/:id
export const getPost =  (req,res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id == id);

    if(!post){
       const error = new Error(`No id found`);
       error.status = 404; //if you don't specify explicitly, it will throw 500(refer error.js file)
       return next(error);
    }

    res.status(200).json(post);
}


//@desc create new post
//route POST /api/posts

export const createPost = (req,res,next) =>{
    console.log('res', req.body)

    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }

    if(!newPost.title){
        return res.status(201).json({msg: "Please include a title"});
    }

    posts.push(newPost);
    return res.status(201).json(posts);
}


//@desc update post
//route PUT /api/post/:id
export const updatePost = (req,res,next) =>{
    const id = parseInt(req.params.id);
    const isIdFound = posts.find((post)=> post.id == id)
    console.log('====', isIdFound)
    if(!isIdFound){
        return res.status(404).json({msg: 'id not found'});
    }

    isIdFound.title = req.body.title;
    res.status(200).json(posts);
}


//@desc delete post
//route DELETE /api/post/:id
export const deletePost = (req,res,next) =>{
    const id = parseInt(req.params.id);
    const isIdFound = posts.find((post => post.id == id))

    if(!isIdFound){
        return res.status(404).json({ msg: 'id not found'});
    }

    posts = posts.filter((post => post.id != id));
    return res.status(200).json(posts);
}