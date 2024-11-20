import dbConnect from "../dataBase/dbConfig.js";

const conected  = await dbConnect(process.env.MONGO_URI);

async function getAllPosts() {
    const db = conected.db("imersao-backend");
    const data = db.collection("posts");
    return data.find().toArray();
};

export default getAllPosts;