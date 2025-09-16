import axios from "axios";
import { Repo } from "../types";

export const fetchRepos = async (username: string): Promise<Repo[]> => {
    if (!username) return [];
    const res = await axios.get(`https://api.github.com/users/${username}/repos`);
    return res.data;
}
