import express from "express";
import multer from "multer";
import cors from "cors";

const corsOptions = {
    origin: ["http://localhost:8000", "https://imersaobackendalura.netlify.app"],
    optionsSuccessStatus: 200,
};

import { listPosts, createNewPost, uploadImage, updateNewPost } from "../controllers/controllers.js";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));
    app.get("/posts", listPosts);
    app.post("/posts", createNewPost);
    app.post("/upload", upload.single("image"), uploadImage);
    app.put("/upload/:id", updateNewPost);
   
};

export default routes;
