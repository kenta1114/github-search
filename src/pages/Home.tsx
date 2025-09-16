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
    <div className="border rounded-xl p-5 shadow-md bg-white hover:shadow-lg transition duration-200">
      <h2 className="font-bold text-xl text-gray-800 mb-2">{repo.name}</h2>
      <p className="text-sm text-gray-600 mb-3 min-h-[32px]">{repo.description || '説明なし'}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md text-sm font-semibold">
        GitHubで見る
      </a>
    </div>
  );
};

export const Home = ()=>{
    const [username, setUsername] = useState("");

    const {data, isLoading, isError} = useQuery({
        queryKey:["repos",username],
        queryFn:()=>fetchRepos(username),
        enabled: !!username,
    });

    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center py-10 px-4">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-8 tracking-tight">GitHub リポジトリ検索</h1>
            <div className="flex justify-center mb-8">
              <SearchBar onSearch={setUsername}/>
            </div>
            {isLoading && <p className="text-center text-gray-500">検索中...</p>}
            {isError && <p className="text-center text-red-500">検索に失敗しました</p>}
            {data && data.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {data.map((repo: any) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            )}
            {data && data.length === 0 && username && !isLoading && !isError && (
              <p className="mt-8 text-center text-gray-600">リポジトリが見つかりません</p>
            )}
          </div>
        </div>
    )
}

