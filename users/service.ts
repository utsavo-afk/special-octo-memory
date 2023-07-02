import { IUser } from "./interface.ts";
import { User } from "./model.ts";

async function create(userObj: IUser) {
  const user = new User(userObj);
  const result = await user.save();
  console.log(result);

  return result;
}

async function findAll() {
  const found = await User.find({});
  console.log(found);

  return found;
}

async function findById(id: string) {
  const found = await User.findOne({ _id: id });

  if (found) {
    console.log(found);
    return found;
  }

  throw new Error("user not found");
}

async function findOneByUsernameOrEmail(unique: string) {
  const found = await User.findOne({
    $or: [{ email: unique }, { username: unique }],
  });

  if (found) {
    console.log(found);
    return found;
  }

  throw new Error("user not found");
}

export { create, findAll, findById, findOneByUsernameOrEmail };
