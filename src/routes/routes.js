import express from "express";
import listPosts from "../controllers/controllers.js";

const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listPosts);
};

export default routes;
