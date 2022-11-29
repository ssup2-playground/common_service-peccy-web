import axios from "axios";

const appServerURL = "127.0.0.1"

export const infoPictureURL = "http://" + appServerURL + "/infos/picture"
export const getInfoName = () => {
    return axios.get("http://" + appServerURL + "/infos/name")
}
