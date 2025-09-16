import axios from "axios";
import { Repo } from "../types";

export const fetchRepos = async(username:string):Promise<Repo[]>=>{
    const res = await axios.get(`https://api.github/users/${username}/repos`);
    return res.data;
}
