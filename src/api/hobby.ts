import axios from "axios";
import { getEnv } from "../env";

const appServerURL = "127.0.0.1"

export const listHobby = () => {
    return axios.get("http://" + getEnv().API_URL + "/hobbies")
  }

export const createHobby = () => {
    return axios.post("http://" + getEnv().API_URL + "/hobbies")
  }