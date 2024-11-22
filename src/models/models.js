import dbConnect from "../dataBase/dbConfig.js";

const conected  = await dbConnect(process.env.MONGO_URI);

export async function getAllPosts() {
    const db = conected.db("imersao-backend");
    const data = db.collection("posts");
    return data.find().toArray();
};

export async function createPost(newpost) {
    const db = conected.db("imersao-backend");
    const data = db.collection("posts");
    return data.insertOne(newpost);
};



