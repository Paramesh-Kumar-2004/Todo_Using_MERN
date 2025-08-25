import axios from "axios"
import { data } from "react-router-dom"

const api = axios.create({
    baseURL: "http://localhost:2004/api/v1"
})


async function createChar(data) {
    const response = await api.post("/users", data)
    return response.data
}

async function getChars() {
    const response = await api.get("/users")
    return response.data.data
}

async function delChar(id) {
    const response = await api.delete(`/users/${id}`)
    return response.data
}

export { getChars, delChar, createChar };