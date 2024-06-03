/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
// dinhdn218
// ZTWNNNlIPBB1HQzz

const MONGODB_URI =
  'mongodb+srv://dinhdn218:ZTWNNNlIPBB1HQzz@cluster0.fi6xls7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const DB_NAME = 'trello-app'

import { MongoClient, ServerApiVersion } from 'mongodb'

let trelloDatabaseInstance = null

const mongoClientInstance = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()

  trelloDatabaseInstance = mongoClientInstance.db(DB_NAME)
}

export const GET_DB = () => {
  if (!trelloDatabaseInstance)
    throw new Error('Must connect to Database first!')
  return trelloDatabaseInstance
}
