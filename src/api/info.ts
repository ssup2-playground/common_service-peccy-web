import axios from "axios";
import { getEnv } from "../env";

export const getInfoName = () => {
    return axios.get(getEnv().API_ENDPOINT + "/infos/name")
}

export const infoPictureURL = getEnv().API_ENDPOINT + "/infos/picture"

export const putInfoPicture = (pictureForm: FormData) => {
    return axios.put(getEnv().API_ENDPOINT + "/infos/picture", pictureForm, { "headers": { "content-type": "multipart/form-data" } })
}
