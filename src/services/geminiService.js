import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function generateDescriptionGemini(imageBuffer) {
    const prompt = "Gere uma descrição em português do Brasil para a seguinte imagem"; 
    try {
        const image =  {
            inlineData: {
                data: imageBuffer.toString('base64'),
                mimeType: "image/png",
            },
        };
        const res = await model.generateContent([ prompt, image ]);
        console.log("Resposta do Gemini:", res);
        return res.response.text() || "Descrição não disponível.";
     } catch (error) {
     console.error("Erro ao obter descrição:", error.message, error);
     throw new Error("Erro ao obter a descrição do Gemini.");   
    }
}