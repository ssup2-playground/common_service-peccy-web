import axios from "axios";

const appServerURL = "127.0.0.1"

export const listHobby = () => {
    return axios.get("http://" + appServerURL + "/hobbies")
  }

export const createHobby = () => {
    return axios.post("http://" + appServerURL + "/hobbies")
  }