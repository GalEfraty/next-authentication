import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MOONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.qn1uo.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(connectionString);
  return client;
}
