import axios from "axios";
import { getEnv } from "../env";

export const infoPictureURL = getEnv().API_ENDPOINT + "/infos/picture"
export const getInfoName = () => {
    return axios.get(getEnv().API_ENDPOINT + "/infos/name")
}

