import { connectToDb } from "./db/helpers.ts";
import { uri } from "./constants/index.ts";
import { create, findAll, findOneByUsernameOrEmail } from "./users/service.ts";

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

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  await connectToDb({ uri });

  try {
    // await findAll();
  } catch (error) {
    console.error(error.message);
  }
}
