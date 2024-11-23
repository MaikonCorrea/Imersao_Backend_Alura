import 'dotenv/config';
import { ObjectId } from "mongodb";
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

export async function updatePost(id, newpost) {
    const db = conected.db("imersao-backend");
    const data = db.collection("posts");
    const objId = ObjectId.createFromHexString(id);
    return data.updateOne({ _id: new ObjectId(objId) }, { $set: newpost });
};



