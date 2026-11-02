import { QdrantClient } from "@qdrant/js-client-rest";
import dotenv from "dotenv";
dotenv.config();

const qdrantClient = new QdrantClient({
  url: process.env.QDRANT_CLUSTER_ENDPOINT,
  apiKey: process.env.QDRANT_API_KEY,
});

//  schemas:(collections)
const initFrameworkCollection = async () => {
  const collectionName = "frameworks";
  try {
    const res = await qdrantClient.getCollections();
    const exist = res.collections.some((c) => c.name === collectionName);
    if (!exist) {
      await qdrantClient.createCollection(collectionName, {
        vectors: {
          size: 384,
          distance: "Cosine",
        },
      });
      await qdrantClient.createPayloadIndex(collectionName, {
        field_name: "frameworkId",
        field_schema: "keyword",
      });
      console.log(`Quadrant collection ${collectionName} created successfully`);
    } else {
      console.log(`${collectionName} collection is already exist`);
    }
  } catch (err) {
    console.log("Error via vector db", err);
  }
};

try {
  const res = await qdrantClient.getCollections();
  console.log("vector db connected", res.collections.length);
  await initFrameworkCollection();
} catch (err) {
  console.log(err.message);
}
export default qdrantClient;
