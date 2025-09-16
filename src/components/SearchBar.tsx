import { useState } from "react";

type Props={
    onSearch:(username:string)=>void;
};

export const SearchBar = ({ onSearch }:Props)=>{
    const [username, setUsername] = useState("");

    return(
        <form
          className="flex gap-3 w-full max-w-md"
          onSubmit={e => {e.preventDefault(); onSearch(username);}}
        >
            <input
              type="text"
              placeholder="GitHubユーザー名を入力"
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-300 text-lg"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-r-md font-semibold text-lg shadow"
              disabled={!username.trim()}
            >
              検索
            </button>
        </form>
    )
}