
import { saker } from '../db/saker.js'


export async function load() {
    return {
      d: await saker.dbName
    }
  }
