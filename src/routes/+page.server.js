
// Kode fra: https://github.com/gustavocadev/mongoose-sveltekit-example/blob/main/src/routes/%2Bpage.server.ts

import { dbConnect, dbDisconnect } from '../utils/db'


export const load = async () => {
  await dbConnect();
  console.log("Hey hey!")
  await dbDisconnect();
  console.log("Ho ho!")
  return {
    message: "Data fra databasen kommer her"
  }
}