
import { saker } from '../db/saker.js'


export async function load() {
    return {
      d: await saker.find({}).toArray()[1]
    }
  }

/*
export async function load() {
    const d = saker.find({}, {limit: 2}).toArray()
        .then( (innhold) => {
            console.log("Data:", innhold[0].tittel)
            }
        )
    }
 */
