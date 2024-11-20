import getAllPosts from '../models/models.js';

async function listPosts(req, res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);    
};

export default listPosts;
