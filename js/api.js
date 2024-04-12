import { getDate } from "./dom.js";
let API = "http://localhost:3000/data"

async function get(){
    try {
        let respones = await fetch(API)
        let data = await respones.json()
        getDate(data)
    } catch (error) {
        console.log(error);
    }
}
export {get}