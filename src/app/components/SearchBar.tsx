"use client";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div>
      <form
        action={`/search/${search.split(" ").join("-").toLowerCase()}`}
        method="GET"
      >
        {!isMobile ? (
          <div className="flex gap-2">
            <input
              className="lg:w-[10rem] text-[13px] relative text-black rounded-full bg-[hsla(0,0%,100%,.8)] outline-none px-4 py-[0.25rem]"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></input>
            <button type="submit">
              <FaSearch className=" text-gray-500"></FaSearch>
            </button>
          </div>
        ) : (
          <div className="w-screen p-4 bg-black flex gap-2 justify-center items-center relative z-20">
            <input className="w-[85%] bg-black border-b-2 border-white outline-none"  onChange={(e) => {
                setSearch(e.target.value);
              }}></input>
            <button type="submit">
              <FaSearch className="text-white"></FaSearch>
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
