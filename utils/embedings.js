import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();
const hf = new HfInference(process.env.HUGGING_FACE_API_KEY);

/**
 *
 * @param {string}
 * @returns {Promise<number[]>}
 */

export const generateEmbedding = async (text) => {
  try {
    const response = await hf.featureExtraction({
      model: "sentence-transformers/all-MiniLM-L6-v2",
      inputs: text,
    });
    return response;
  } catch (error) {
    console.error("error while generating embeddings", error);
  }
};
