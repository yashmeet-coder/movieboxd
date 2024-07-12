"use client";
import React, { useEffect, useState } from "react";
import { Credits, Movie } from "./MovieDetails";

type CrewObject = {
  adult: boolean;
  gender: string;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};

const FilmTab = ({ movie, credits }: { movie: Movie; credits: Credits }) => {
  const [tabs, setTabs] = useState([
    { name: "Cast", active: false },
    { name: "Crew", active: false },
    { name: "Details", active: false },
    { name: "Genres", active: false },
  ]);
  const ref = React.useRef<HTMLSpanElement>(null);

  const [activeTab, setActiveTab] = useState("");
  const [crew, setCrew] = useState<{ [key: string]: CrewObject[] }>({});
  const [details, setDetails] = useState<{ [key: string]: [] }>({});

  useEffect(() => {
    // console.log(credits.cast);

    const presentTabs: any = [];
    if (credits?.cast?.length > 0) {
      presentTabs.push("Cast");
    }

    if (credits?.crew?.length > 0) {
      presentTabs.push("Crew");
    }

    const groupedCrew: any = {};

    credits?.crew?.forEach((crew: CrewObject) => {
      if (!groupedCrew[crew.job]) {
        groupedCrew[crew.job] = [];
      }
      groupedCrew[crew.job].push(crew);
    });

    if (Object.keys(groupedCrew).length > 0) {
      presentTabs.push("Crew");
    }

    setCrew(groupedCrew);

    const detailsData: any = {};

    console.log(movie);

    if (movie?.production_companies?.length > 0) {
      detailsData["Studios"] = movie?.production_companies;
    }

    if (movie?.production_countries?.length > 0) {
      detailsData["Countries"] = movie?.production_countries;
    }

    if (movie?.spoken_languages?.length > 0) {
      detailsData["Languages"] = movie?.spoken_languages;
    }

    if (Object.keys(detailsData).length > 0) {
      presentTabs.push("Details");
    }

    setDetails(detailsData);

    if (movie?.genres?.length > 0) {
      presentTabs.push("Genres");
    }

    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        active: presentTabs.includes(tab.name),
      }))
    );

    console.log(detailsData);
    
  }, []);

  useEffect(() => {
    const activeTab = tabs.find((tab) => tab.active)?.name;
    setActiveTab(activeTab || "");
  }, [tabs]);

  const tabItems = (
  <div>
    <div className="flex gap-2 border-b-2 border-[#456] mb-[1rem]">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`tab ${activeTab===tab.name ? "active text-white border-b-2 border-white" : "text-green-500"} uppercase`}
          onClick={() => {console.log(tab.name);setActiveTab(tab.name)}}
        >
          {tab.name}
        </button>
      ))}
    </div>
      {/* <hr className="w-[160px] h-[2px]"></hr> */}
    </div>
  );

  const castSection = (
    <div className="flex flex-wrap md:max-w-xl gap-2 text-white">
      {credits?.cast?.map((cast) => (
        <div
          className="bg-[#283038] rounded-md px-[6px] py-[3px] text-[#9ab] font-Graphik text-[12px]"
          key={cast.id}
        >
          <p>{cast.name}</p>
        </div>
      ))}
    </div>
  );

  const crewSection = (
    <div className="max-w-xl">
      {Object.keys(crew).map((job) => (
        <div className="flex gap-[15px] items-baseline mb-[1rem]" key={job}>
          <div className="w-[156px] flex-wrap shrink-0 border-b-2 border-dotted border-[#456]">
            <p className="inline-flex bg-[#14181C] text-[#789] max-w-[75%] font-GraphikRegular text-[0.75rem] tracking-widest uppercase relative top-[3px]">{job}</p>
          </div>
          <div className="flex flex-wrap max-w-sm gap-2">
            {crew[job].map((crew) => (
              <div
                className="bg-[#283038] rounded-md px-[6px] py-[3px] text-[#9ab] font-Graphik text-[12px]"
                key={crew.id}
              >
                <p className="font-GraphikRegular text-[12.6px]">{crew.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const detailsSection = ( 
    <div className="max-w-xl">
    {Object.keys(details).map((detail) => (
      <div className="flex gap-[15px] items-baseline mb-[1rem]" key={detail}>
        <div className="w-[156px] flex-wrap shrink-0 border-b-2 border-dotted border-[#456]">
          <p className="inline-flex bg-[#14181C] text-[#789] max-w-[75%] font-GraphikRegular text-[0.75rem] tracking-widest uppercase relative top-[3px]">{detail}</p>
        </div>
        <div className="flex flex-wrap max-w-sm gap-2">
          {details[detail].map((names:any) => (
            <div
              className="bg-[#283038] rounded-md px-[6px] py-[3px] text-[#9ab] font-Graphik text-[12px]"
              key={names.id}
            >
              <p className="font-GraphikRegular text-[12.6px]">{names.name}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
  )

  const genresSection = (
    <div>
      <div className="flex gap-2">
        {movie?.genres?.map((genre) => (
          <div
            className="bg-[#283038] rounded-md px-[6px] py-[3px] text-[#9ab] font-GraphikRegular text-[12px]"
            key={genre.id}
          >
            <p>{genre.name}</p>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="flex flex-col">
      {tabItems}
      {activeTab === "Cast" && castSection}
      {activeTab === "Crew" && crewSection}
      {activeTab === "Details" && detailsSection}
      {activeTab === "Genres" && genresSection}
    </div>
  );
};

export default FilmTab;
