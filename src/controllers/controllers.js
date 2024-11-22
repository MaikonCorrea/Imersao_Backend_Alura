import { getAllPosts, createPost } from '../models/models.js';

export async function listPosts(req, res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);    
};

export async function createNewPost(req, res) {
   const newpost = req.body;
   try {
    const post = await createPost(newpost);
    res.status(201).json(post);
   } catch (error) {
    console.error(error.message);
    res.status(500).json({"Erro":"Internal Server Error"});
   }
};

export async function uploadImage(req, res) {
   const newpost = req.body;
    try {
     const post = await createPost(newpost);
     res.status(201).json(post);
    } catch (error) {
     console.error(error.message);
     res.status(500).json({"Erro":"Internal Server Error"});
    }
}





