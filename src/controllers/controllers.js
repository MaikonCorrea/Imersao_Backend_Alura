import fs from "fs";
import { getAllPosts, createPost, updatePost } from "../models/models.js";
import generateDescriptionGemini from "../services/geminiService.js";

export async function listPosts(req, res) {
  const posts = await getAllPosts();
  res.status(200).json(posts);
}

export async function createNewPost(req, res) {
  const newpost = req.body;
  try {
    const post = await createPost(newpost);
    res.status(201).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Erro: "Internal Server Error" });
  }
}

export async function uploadImage(req, res) {
  const newpost = {
    descricao: "",
    alt: "",
    imgUrl: req.file.originalname,
  };
  try {
    const post = await createPost(newpost);
    const newImage = `uploads/${post.insertedId}.png`;
    fs.renameSync(req.file.path, newImage);
    res.status(201).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Erro: "Internal Server Error" });
  }
};

export async function updateNewPost(req, res) {
  const id = req.params.id;
  const urlImage = `http://localhost:3000/${id}.png`;  
  try {
    const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
    const descricao = await generateDescriptionGemini(imgBuffer);
    const newpost = {
      imgUrl: urlImage,
      descricao: descricao,
      alt: req.body.alt,
    }
    const post = await updatePost(id, newpost);
    res.status(201).json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ Erro: "Internal Server Error" });
  }
}
