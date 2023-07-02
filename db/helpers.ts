import { connect, ConnectOptions } from "npm:mongoose";
import process from "node:process";

export interface dbConnectionOptions {
  uri: string;
  options?: ConnectOptions;
}

export async function connectToDb({ uri, options }: dbConnectionOptions) {
  try {
    await connect(uri, options);
    console.info("connected to db..");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
