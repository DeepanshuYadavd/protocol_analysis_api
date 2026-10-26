import { QdrantClient } from "@qdrant/js-client-rest";
import dotenv from "dotenv";
dotenv.config();

const qdrantClient = new QdrantClient({
  url: process.env.QDRANT_CLUSTER_ENDPOINT,
  apiKey: process.env.QDRANT_API_KEY,
});

//  schemas:(collections)

try {
  const res = await qdrantClient.getCollections();
  console.log("vector db connected", res.collections.length);
} catch (err) {
  console.log(err.message);
}
export default qdrantClient;
