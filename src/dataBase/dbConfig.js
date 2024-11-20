import { MongoClient } from "mongodb";

export default async function dbConnect(stringConexao) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(stringConexao);
    console.log("Conectando ao cluster do banco de dados...");
    await mongoClient.connect();
    console.log("Conectado ao Mongo Atlas com sucesso!");
    return mongoClient;
  } catch (error) {
    console.log("Erro ao conectar ao Mongo Atlas", error);
    process.exit();
  }
}
