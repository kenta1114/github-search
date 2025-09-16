import { useState } from "react";

type Props={
    onSearch:(username:string)=>void;
};

export const SearchBar = ({ onSearch }:Props)=>{
    const [username, setUsername] = useState("");

    return(
        <div className="flex gap-2">
            <input
              type="text"
              placeholder="GitHubユーザー名を入力"
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
              className="border px-2 py-1 rounded-md w-64"
            />
            <button
              onClick={()=>onSearch(username)}
              className="bg-blue-500 text-white px-4 py-1 rounded-md"
            >
              検索
            </button>
        </div>
    )
}