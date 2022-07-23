import { useState } from "react";
import dataJson from "/data.json";
import uniqid from "uniqid";

const Header = () => {
  return (
    <header>
      <div className="relative h-[9.75rem] mb-16 bg-desaturatedCyan">
        <img
          className="hidden object-cover w-full h-full md:block"
          src="/assets/images/bg-header-desktop.svg"
          alt="header background image"
        />
        <img
          className="object-cover w-full h-full md:hidden"
          src="/assets/images/bg-header-mobile.svg"
          alt="header background image"
        />
      </div>
    </header>
  );
};

const FilterDiv = (props) => {
  return (
    <div className="relative transition-all w-full max-w-[69.375rem]">
      {props?.filters?.length > 0 && (
        <div className="flex">
          <div className="relative flex flex-wrap items-center w-full gap-2 px-10 py-5 transition-all bg-white rounded-md shadow-md -top-24">
            {props.filters.map((c) => {
              return (
                <div
                  className="flex items-center rounded-md text-desaturatedCyan max-w-max bg-lightGrayishCyanFilterTablets gap-x-2"
                  key={uniqid()}
                >
                  <span className="px-1 text-sm font-bold ">{c}</span>
                  <span
                    onClick={() => props.update(c)}
                    className="px-2 py-1 font-bold text-white transition-all cursor-pointer rounded-tr-md rounded-br-md bg-desaturatedCyan hover:text-white hover:bg-[hsla(180,14%,20%,1)]"
                  >
                    X
                  </span>
                </div>
              );
            })}
          </div>
          {/* {props?.filters?.length > 0 && (
            <button className="relative text-xs font-bold -top-24 right-20 text-desaturatedCyan hover:underline">
              Clear
            </button>
          )} */}
        </div>
      )}
    </div>
  );
};

const JobCard = (props) => {
  const data = props.jobs;
  return (
    <ul className="flex flex-col items-center gap-6">
      {data.map((j) => {
        if (j.show === false) return;
        return (
          <li className="w-full md:max-w-[69.375rem]">
            <div
              className="relative w-full rounded-md shadow-md"
              key={uniqid()}
            >
              {j.featured === true && (
                <span className="overflow-hidden">
                  <span className="absolute top-0 left-0 inline w-[5px] h-full rounded-tl-2xl rounded-bl-2xl bg-desaturatedCyan "></span>
                </span>
              )}
              <div className="items-center justify-between px-6 py-8 mb-10 md:px-10 md:mb-0 md:flex">
                <div>
                  <div className="items-center justify-between gap-x-6 min-w-max md:flex">
                    <div className="relative -top-14 md:top-0 md:left-0">
                      <div className="absolute md:relative md:h-[5.5rem] md:w-[5.5rem] md:min-w-max w-12 h-12">
                        <img
                          src={`assets${j.logo}`}
                          alt={`${j.company} logo`}
                        />
                      </div>
                    </div>
                    <div className="py-5 space-y-1 md:py-0 min-w-max">
                      <div className="flex flex-wrap items-center">
                        <span className="mr-4 text-sm font-bold text-desaturatedCyan">
                          {j.company}
                        </span>
                        {j.new && (
                          <span className="px-2  mr-2 text-[0.688rem] font-bold text-white bg-desaturatedCyan rounded-xl">
                            <label>NEW!</label>
                          </span>
                        )}
                        {j.featured && (
                          <span className="px-2  text-[0.688rem] font-bold text-white bg-veryDarkishCyan rounded-xl">
                            FEATURED
                          </span>
                        )}
                      </div>
                      <p className="font-bold text-[1.125rem] cursor-pointer hover:text-desaturatedCyan">
                        {j.position}
                      </p>
                      <div className="text-base text-opacity-50 text-veryDarkishCyan">
                        <ul>
                          <li className="inline">
                            {j.postedAt}
                            <span
                              aria-hidden="true"
                              className="mx-2 font-bold "
                            >
                              ·
                            </span>
                          </li>
                          <li className="inline">
                            {j.contract}
                            <span
                              aria-hidden="true"
                              className="mx-2 font-bold "
                            >
                              ·
                            </span>
                          </li>
                          <li className="inline">{j.location}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" border-t-[1px] border-[hsla(180,10%,74%,1)] pt-4 md:pt-0 md:border-t-0 md:justify-end flex flex-wrap text-desaturatedCyan w-full font-bold gap-y-2 gap-x-4">
                  {[j?.role, j?.level, ...j?.languages, ...j?.tools].map((c) => {
                    return (
                      <span
                        className="px-2 py-1 transition-all rounded-md cursor-pointer text-[0.813rem] hover:bg-desaturatedCyan hover:text-white bg-lightGrayishCyanFilterTablets"
                        onClick={() => {
                          props.update(c);
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
          </li>
        );
      })}
    </ul>
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
    setData([
      ...dataJson.map((j) => {
        const stringData = JSON.stringify(j);
        for (const element of filters) {
          if (stringData.includes(element) === false)
            return { ...j, show: false };
        }
        return { ...j, show: true };
      }),
    ]);
  };

  return (
    <>
      <Header></Header>
      <main className="h-full min-h-screen px-5 text-base bg-lightGrayishCyanBackground">
        <section className="flex justify-center">
          <FilterDiv filters={filters} update={removeFilter}></FilterDiv>
        </section>
        <JobCard filters={filters} update={addFilter} jobs={data}></JobCard>
      </main>
    </>
  );
}
