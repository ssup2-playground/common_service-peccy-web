import axios from "axios";
import { getEnv } from "../env";

export const listHobby = () => {
  return axios.get(getEnv().API_ENDPOINT + "/hobbies")
}

export const createHobby = (name: string) => {
  return axios.post(getEnv().API_ENDPOINT + "/hobbies", {
    name: name
  })
}

export const deleteHobby = (id: number) => {
  return axios.delete(getEnv().API_ENDPOINT + "/hobbies/" + id)
}

export const getRegion = () => {
  return axios.get(getEnv().API_ENDPOINT + "/debugs/region")
}

export const getVersion = () => {
  return axios.get(getEnv().API_ENDPOINT + "/debugs/version")
} 