
import { hemmelig } from "../lib/server/secrets";

export function load() {
    const d = { 
        navn: 'TJ',
        melding: hemmelig
    }
    return d
}