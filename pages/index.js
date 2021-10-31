import headerImage from "../images/bg-header-desktop.svg";
import Image from "next/image";
import companyImage from "../images/insure.svg";
import dataJson from "../data.json";
import account from "../images/account.svg";
import eyecam from "../images/eyecam-co.svg";
import faceit from "../images/faceit.svg";
import manage from "../images/manage.svg";
import loopstudios from "../images/loop-studios.svg";
import myhome from "../images/myhome.svg";
import photosnap from "../images/photosnap.svg";
import shortly from "../images/shortly.svg";
import theair from "../images/the-air-filter-company.svg";
import { useState } from "react";
import uniqid from "uniqid";

const Header = () => {
  return (
    <>
      <div className=" bg-desaturatedCyan h-40 relative mb-16">
        <Image src={headerImage} layout="fill" priority={true}></Image>
      </div>
    </>
  );
};

const FilterDiv = (props) => {
  return (
    <div className="relative transition-all">
      {props.filters.length > 0 && (
        <div className="bg-white shadow-md rounded-md w-full relative px-10 py-5 -top-24 flex flex-wrap items-center  gap-2 transition-all">
          {props.filters.map((c) => {
            return (
              <div
                className="text-desaturatedCyan rounded-md flex items-center max-w-max bg-lightGrayishCyanFilterTablets"
                key={uniqid()}
              >
                <span className=" font-bold text-sm px-1">{c}</span>
                <span
                  onClick={() => props.update(c)}
                  className=" rounded-tr-md rounded-br-md text-white bg-desaturatedCyan cursor-pointer transition-all hover:text-white hover:bg-black py-1 px-2 font-bold"
                >
                  X
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const JobCard = (props) => {
  const data = props.jobs;
  const images = [
    photosnap,
    manage,
    account,
    myhome,
    loopstudios,
    faceit,
    shortly,
    companyImage,
    eyecam,
    theair,
  ];
  return (
    <>
      {data.map((j, idx) => {
        if (j.show === false) return;
        return (
          <div
            className="py-3 px-1 shadow-md rounded-md mb-10 relative bg-white"
            key={uniqid()}
          >
            {j.featured === true && (
              <span className="overflow-hidden">
                <span className="absolute top-0 left-0 rounded-tl-2xl rounded-bl-2xl bg-desaturatedCyan h-full w-1 inline "></span>
              </span>
            )}
            <div className=" mb-10 md:mb-0 md:flex justify-between space-x-5 items-center px-5 py-5">
              <div>
                <div className=" min-w-max md:flex justify-between items-center space-x-4 ">
                  <div className="relative left-5 -top-12 md:top-0 md:left-0">
                    <div className=" absolute md:relative w-14 md:min-w-max">
                      <Image
                        src={images[idx]}
                        alt="company logo"
                        priority={true}
                      ></Image>
                    </div>
                  </div>
                  <div className="space-y-1 md:py-0 py-5 min-w-max">
                    <div className="flex items-center gap-1 flex-wrap">
                      <span className=" font-bold text-sm text-desaturatedCyan">
                        {j.company}
                      </span>
                      {j.new && (
                        <span className=" font-bold text-white text-xs bg-desaturatedCyan pt-2 pb-1  px-3 rounded-xl">
                          <label>NEW!</label>
                        </span>
                      )}
                      {j.featured && (
                        <span className="  font-bold text-white text-xs bg-veryDarkishCyan pt-2 pb-1 px-3 rounded-xl">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <p className=" font-bold cursor-pointer hover:text-desaturatedCyan">
                      {j.position}
                    </p>
                    <div className=" text-base text-opacity-50 text-veryDarkishCyan">
                      <ul>
                        <li className="inline">
                          {j.postedAt}
                          <span aria-hidden="true" className=" font-bold mx-2">
                            ·
                          </span>
                        </li>
                        <li className="inline">
                          {j.contract}
                          <span aria-hidden="true" className=" font-bold mx-2">
                            ·
                          </span>
                        </li>
                        <li className="inline">{j.location}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border-t-[1px] border-gray-300 pt-5 md:pt-0 md:border-t-0 justify-start flex flex-wrap text-desaturatedCyan font-bold gap-y-2 ">
                {j.role && (
                  <span
                    className="transition-all hover:bg-desaturatedCyan hover:text-white bg-lightGrayishCyanFilterTablets  px-2 py-1 rounded-md cursor-pointer mr-2"
                    onClick={() => {
                      props.update(j.role);
                    }}
                  >
                    {j.role}
                  </span>
                )}
                {j.level && (
                  <span
                    className="transition-all hover:bg-desaturatedCyan hover:text-white bg-lightGrayishCyanFilterTablets px-2 py-1 rounded-md cursor-pointer mr-2"
                    onClick={() => {
                      props.update(j.level);
                    }}
                  >
                    {j.level}
                  </span>
                )}
                {j.languages.map((c, idx) => {
                  return (
                    <span
                      className="transition-all hover:bg-desaturatedCyan hover:text-white bg-lightGrayishCyanFilterTablets px-2 py-1 rounded-md cursor-pointer mr-2"
                      onClick={() => {
                        props.update(c);
                      }}
                      key={uniqid()}
                    >
                      {c}
                    </span>
                  );
                })}
                {j.tools.map((c, idx) => {
                  return (
                    <span
                      className=" transition-all hover:bg-desaturatedCyan hover:text-white bg-lightGrayishCyanFilterTablets px-2 py-1 rounded-md cursor-pointer mr-2"
                      onClick={() => {
                        props.update(c, 4);
                      }}
                      key={uniqid()}
                    >
                      {c}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default function Home() {
  const [data, setData] = useState(dataJson);

  const [filters, setFilters] = useState([]);

  const removeFilter = (filter) => {
    let index = filters.indexOf(filter);
    if (index !== -1) filters.splice(index, 1);
    setFilters([...filters]);
    updateFilters();
  };

  const addFilter = (filter) => {
    if (filters.indexOf(filter) === -1) filters.push(filter);
    setFilters([...filters]);
    updateFilters();
  };

  const updateFilters = () => {
    const data = dataJson.map((j) => {
      const data = JSON.stringify(j);
      for (let i = 0; i < filters.length; i++) {
        if (data.includes(filters[i]) === false) return { ...j, show: false };
      }
      return { ...j, show: true };
    });
    setData([...data]);
  };

  return (
    <>
      <Header></Header>
      <main className=" text-base bg-lightGrayishCyanBackground min-h-screen h-full px-5 xl:px-40">
        <section>
          <FilterDiv filters={filters} update={removeFilter}></FilterDiv>
        </section>
        <JobCard filters={filters} update={addFilter} jobs={data}></JobCard>
      </main>
    </>
  );
}
