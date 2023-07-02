import { connectToDb } from "./db/helpers.ts";
import { uri } from "./constants/index.ts";
import {
  create,
  findAll,
  findById,
  findOneByUsernameOrEmail,
} from "./users/service.ts";

/**
 * {
    _id: ObjectId("64a172a6786d049497fb9d8d"),
    username: 'Lura Brock',
    email: 'ga@tivi.in',
    __v: 0,
    createdAt: ISODate("2023-07-02T12:50:46.507Z"),
    updatedAt: ISODate("2023-07-02T12:50:46.507Z")
  },
*/

if (import.meta.main) {
  await connectToDb({ uri });

  try {
    // await create({ email: "xyz@abc.com", username: "xyz abc" });
    // await findAll();
    // await findById("64a172a6786d049497fb9d8d");
    // await findOneByUsernameOrEmail("Lura Brock");
    // await findOneByUsernameOrEmail("ga@tivi.in");
  } catch (error) {
    console.error(error.message);
  }
}
