import axios from "axios";
import { getEnv } from "../env";

export const getDebugRegion = () => {
    return axios.get(getEnv().API_ENDPOINT + "/debugs/region")
}

export const getDebugVersion = () => {
    return axios.get(getEnv().API_ENDPOINT + "/debugs/version")
} 