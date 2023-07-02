import { IUser } from "../users/interface.ts";
// @deno-types="npm:@types/chance"
import { Chance } from "npm:chance";
import { User } from "../users/model.ts";
import process from "node:process";
import { connect } from "npm:mongoose";
import { uri } from "../constants/index.ts";
const chance = new Chance();

const users: IUser[] = [
  {
    username: chance.name(),
    email: chance.email(),
  },
  {
    username: chance.name(),
    email: chance.email(),
  },
  {
    username: chance.name(),
    email: chance.email(),
  },
  {
    username: chance.name(),
    email: chance.email(),
  },
  {
    username: chance.name(),
    email: chance.email(),
  },
];

async function seedUsers(users: IUser[]) {
  try {
    const db = await connect(uri);
    await db.connection.dropCollection("users");
    console.info("users collection deleted..");
    await User.insertMany(users);
    console.info("users collection seeded..");
    await db.connection.close();
    console.info("connection to db closed..");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedUsers(users);
