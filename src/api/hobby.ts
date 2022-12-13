import axios from "axios";
import { getEnv } from "../env";

export const listHobby = () => {
    return axios.get(getEnv().API_ENDPOINT + "/hobbies")
  }

export const createHobby = () => {
    return axios.post(getEnv().API_ENDPOINT + "/hobbies")
  }