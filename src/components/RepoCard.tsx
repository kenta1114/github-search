import { Repo } from "../types";

type Props = {repo:Repo};

export const RepoCard = ({ repo }:Props)=>{
    <div className="border p-4 rounded-lg shadow-sm">
        <a
          href={repo.html_url}
          target="_blank"
          rel = "noopener noreferrer"
          className = "text-lg font-bold text-blue-600"
        >
          {repo.name}
        </a>
        <p className="text-sm text-gray-600">{repo.description}</p>
        <p className="text-yellow-600">⭐{repo.stargazers_count}</p>
    </div>
} 