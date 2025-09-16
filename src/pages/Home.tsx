import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchRepos } from "../api/github";
import { SearchBar } from "../components/SearchBar";

interface RepoCardProps {
  repo: {
    id: number;
    name: string;
    description: string;
    html_url: string;
  };
}

export const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="font-bold text-lg">{repo.name}</h2>
      <p className="text-sm text-gray-600">{repo.description}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm">
        View on GitHub
      </a>
    </div>
  );
};

export const Home = ()=>{
    const [username, setUsername] = useState("");

    const {data, isLoading, isError} = useQuery({
        queryKey:["repos",username],
        queryFn:()=>fetchRepos(username),
        enabled: !username,
    });

    return(
        <div className="p-6 max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Github リポジトリ検索</h1>
          <SearchBar onSearch={setUsername}/>

          {isLoading && <p>読み込み中...</p>}
          {isError && <p className="text-red-500">エラーが発生しました。</p>}

          <div className="grid gap-4 mt-4">
            {data?.map((repo)=>(
              <RepoCard key={repo.id} repo={repo}/>
            ))}
          </div>
        </div>
    )
}

