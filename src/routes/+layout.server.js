
import { saker } from '../db/saker.js'

export const load = async function() {
    const data = saker.find({})
    console.log("Data:", data)
    return saker.data
}