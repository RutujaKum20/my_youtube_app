import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/AppSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/Constants";
import { chacheResult } from "../Utils/SearchSlice";

const Head = () => {
  const [searchText, setSearchText] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggeestions, setShowsuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);

    // update cache
    displatch(
      chacheResult({
        [searchText]: json[1],
      })
    );
  };

  const displatch = useDispatch();

  const ToggleMenuHandler = () => {
    displatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => ToggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png"
        />
        <img
          className="h-12 mx-3"
          alt="youtube-Logo"
          src="https://images.moneycontrol.com/static-mcnews/2018/09/youtube.jpg"
        />
      </div>
      <div className="col-span-10 text-center">
        <div>
          <input
            className=" px-5 border border-gray-400 rounded-l-full w-1/2 p-2"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowsuggestions(true)}
            onBlur={() => setShowsuggestions(false)}
          />
          <button className="border border-gray-400 bg-gray-200 rounded-r-full px-5 py-2">
            🔍
          </button>
        </div>
        {showSuggeestions && (
          <div className="fixed bg-white ml-[15rem] px-2 py-3 w-[34rem] shadow-lg rounded-lg">
            <ul className="text-left">
              {suggestions.map((s) => (
                <li key={s} className="py-2 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
