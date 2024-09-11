import React, { useState } from "react";
import projectData from "../Data/projects.json";
import { IoInformationCircle, IoAdd } from "react-icons/io5";
import { FaChevronUp, FaChevronDown, FaQuestion } from "react-icons/fa";
import {
  BsArrow90DegRight,
  BsArrow90DegLeft,
  BsThreeDots,
} from "react-icons/bs";
import { TiArrowMove } from "react-icons/ti";
import { LuArrowRight } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { MdAdd } from "react-icons/md";

import icon1 from "../image/icon1.png";
import icon2 from "../image/icon2.png";
import icon3 from "../image/icon3.png";
import icon4 from "../image/icon4.png";
import icon5 from "../image/icon5.png";
import icon6 from "../image/icon6.png";

const Body = () => {
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [addNotice, setAddNotice] = useState([]);
  const [noticeText, setNoticeText] = useState("");
  const [name , setName] = useState("User Name");
  const [thread1 , setThread1] = useState("");
  const [thread2 , setThread2] = useState("");
  const [threadA , setThreadA] = useState("");
  const [content, setContent] = useState("");

  const handleShow = (panel) => {
    if (panel === "left") {
      setShowLeft(!showLeft);
    } else if (panel === "right") {
      setShowRight(!showRight);
    }
  };

  const addNoticeinArr = () => {
    const time = new Date().toLocaleTimeString();
    const obj = { name, noticeText, time };
    setAddNotice((prev) => [obj, ...prev]);
    setNoticeText("");
  };

  return (
    <div className="relative mt-24 w-full flex items-center justify-center z-10">
      <div className="w-full sm:w-9/12 flex flex-col mt-4 gap-5 sm:gap-10 pb-8 ">
        <div className="flex flex-wrap sm:flex-nowrap gap-2 items-center justify-between overflow-hidden">
          <div className="text-[#0029FF] text-2xl font-semibold sm:text-3xl sm:font-bold">
            {projectData?.title}
          </div>
          <div className="px-2 py-1 sm:px-4 sm:py-2 sm:font-medium text-md sm:text-xl rounded-md bg-[#0029FF] text-white cursor-pointer">
            Submit task
          </div>
        </div>
        <div className="bg-[#E9ECEF] rounded-[5px] p-2">
          <div className="text-xl sm:text-2xl font-semibold sm:font-bold">
            {projectData?.tasks[0]?.task_title}
          </div>
          <div className="sm:text-xl font-medium mt-2">
            {projectData?.tasks[0]?.task_description}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-7 sm:gap-14 ">
          {projectData?.tasks[0]?.assets.map((item, index) => (
            <div
              className="w-full sm:w-[500px] sm:h-[690px]  overflow-hidden rounded-b-lg shadow-lg  border-2 border-green-500"
              key={item?.asset_id}
            >
              <div className="bg-black text-lg sm:text-xl font-medium text-center text-white rounded-t-2xl p-2 flex items-center justify-between">
                <div className="w-full">{item?.asset_title}</div>
                <div className="p-2 cursor-pointer">
                  <IoInformationCircle size={30} />
                </div>
              </div>
              <div className="pb-7">
                <div className="px-3 py-3 sm:py-5 font-medium sm:text-lg flex items-center sm:h-32 border-b border-gray-300 shadow-lg tracking-wide">
                  <div>
                    <span className="text-black font-semibold sm:font-bold sm:text-xl">
                      Description:{" "}
                    </span>
                    {item?.asset_description}
                  </div>
                </div>
                {item.asset_type === "display_asset" && index === 0 && (
                  <div className="w-full">
                    <div
                      className="relative overflow-hidden"
                      style={{ paddingTop: "56.25%" }}
                    >
                      <iframe
                        src={item?.asset_content}
                        title="YouTube video player"
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
                {item.asset_type === "input_asset" && index === 1 && (
                  <div className="flex flex-col gap-7 overflow-auto h-[496px] ">
                    <div className="bg-[#FEFFC033] p-2 text-xl sm:text-2xl font-semibold flex items-center">
                      <FaChevronUp />
                      <h2 className="ml-2">Thread A</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-5 px-2 ">
                      <div className="w-full sm:w-[220px] h-[120px] rounded-lg shadow-md bg-gray-200 overflow-hidden">
                        <h2 className="sm:text-lg font-medium p-1 px-5">
                          Sub thread 1
                        </h2>
                        <textarea
                          placeholder="Enter Text here"
                          value={thread1}
                          onChange={(e)=>{setThread1(e.target.value)}}
                          className="w-full h-4/6 rounded-lg outline-none p-2 resize-none overflow-auto"
                          />
                      </div>
                      <div className="w-full sm:w-[220px] h-[120px] rounded-lg shadow-md bg-gray-200 overflow-hidden">
                        <h2 className="sm:text-lg font-medium p-1 px-5">
                          Sub thread 2
                        </h2>
                        <textarea
                          placeholder="Enter Text here"
                          value={thread2}
                          onChange={(e)=>{setThread2(e.target.value)}}
                          className="w-full h-4/6 rounded-lg outline-none p-2 resize-none overflow-auto"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-end gap-2 px-2 sm:px-0">
                      <div className="flex items-center justify-end text-black gap-2">
                        <img src={icon1} className="w-3 sm:w-4" />
                        <img src={icon2} className="w-3 sm:w-4" />
                        <img src={icon3} className="w-3 sm:w-4" />
                        <img src={icon4} className="w-3 sm:w-4" />
                      </div>
                      <div className="mt-2 sm:mt-0 flex items-center gap-2 px-2 sm:px-4 py-1 sm:py-2 text-lg sm:text-xl font-medium rounded-md cursor-pointer shadow-md">
                        <h2>Set category</h2>
                        <FaChevronDown className="w-3 sm:w-5" />
                      </div>
                      <div className="mt-2 sm:mt-0 flex items-center gap-2 px-2 sm:px-4 py-1 sm:py-2 text-lg sm:text-xl font-medium rounded-md cursor-pointer shadow-md">
                        <h2>Select Process</h2>
                        <FaChevronDown className="w-3 sm:w-5" />
                      </div>
                    </div>
                    <div className="px-8 cursor-pointer">
                      <div className="flex items-center gap-3 w-36 sm:w-48 p-2 sm:p-4 sm:text-xl font-medium rounded-lg bg-[#0029FF] text-white">
                        <IoAdd size={30} />
                        <h2>Sub-thread</h2>
                      </div>
                    </div>
                    <div className="px-8 w-full">
                      <div className="w-full  h-[120px] rounded-lg shadow-md bg-gray-200 overflow-hidden ">
                        <h2 className="sm:text-lg font-medium p-1 px-5">
                          Summary Of thread A
                        </h2>
                        <textarea
                          placeholder="Enter Text here"
                          value={threadA}
                          onChange={(e)=>{setThreadA(e.target.value)}}
                          className="w-full h-4/6 rounded-lg outline-none p-2 resize-none overflow-auto"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {item.asset_type === "input_asset" && index === 2 && (
                  <div className="mt-7 px-4 sm:px-7 overflow-auto">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-semibold">
                        Title
                      </h2>
                      <input className="w-full text-lg sm:text-xl font-medium px-2 py-4 mt-3 outline-none rounded-lg shadow-md" />
                    </div>
                    <div className="mt-7">
                      <h2 className="text-2xl sm:text-3xl font-semibold">
                        Content
                      </h2>
                      <div className="rounded-lg shadow-lg mt-7">
                        <div className="border-2 border-b-gray-500 text-gray-500">
                          <ul className="flex flex-wrap items-center justify-around text-md font-normal px-2 py-3">
                            <li className="cursor-pointer">File</li>
                            <li className="cursor-pointer">Edit</li>
                            <li className="cursor-pointer">View</li>
                            <li className="cursor-pointer">Insert</li>
                            <li className="cursor-pointer">Format</li>
                            <li className="cursor-pointer">Tools</li>
                            <li className="cursor-pointer">Table</li>
                            <li className="cursor-pointer">Help</li>
                          </ul>
                          <div className="flex gap-4 px-4 font-medium">
                            <BsArrow90DegLeft className="cursor-pointer" />
                            <BsArrow90DegRight className="cursor-pointer" />
                            <TiArrowMove className="cursor-pointer" />
                            <input
                              className="w-32 text-center px-2 bg-gray-300 text-gray-500 font-medium"
                              value={"Paragraph"}
                            />
                            <BsThreeDots
                              size={20}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                        <div>
                          <textarea
                            rows={5}
                            value={content}
                            onChange={(e)=>{setContent(e.target.value)}}
                            className="w-full p-2 outline-none resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {item.asset_type === "display_asset" && index === 3 && (
                  <div className="px-4 sm:px-8  h-[494px] overflow-auto">
                    <div>
                      <div className="bg-[#F2F2F2] p-2 text-xl sm:text-2xl font-bold flex items-center gap-5">
                        <FaChevronUp />
                        <h2>Introduction</h2>
                      </div>
                      <h2 className="h-36 p-2 text-lg font-normal">
                        The 4SA Method, How to bring an idea into progress?
                      </h2>
                      <div className="w-full flex justify-end">
                        <button className="text-lg font-medium text-[#606161] cursor-pointer">
                          Show More
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="border-2 border-[#F2F2F2] p-2 text-xl sm:text-2xl font-bold flex items-center gap-5 rounded-md">
                        <FaChevronUp />
                        <h2>Thread A</h2>
                      </div>
                      <h2 className="h-36 p-2 text-lg font-normal">
                        How are you going to develop your strategy? Which method
                        are you going to use to develop a strategy? What if the
                        project is lengthy?
                      </h2>
                      <div className="w-full flex justify-end">
                        <button className="text-lg font-medium text-[#606161] cursor-pointer">
                          Show More
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="w-full sm:w-11/12">
                        <h2 className="border-2 border-[#F2F2F2] p-2 text-xl sm:text-2xl font-bold flex items-center rounded-md">
                          Example
                        </h2>
                        <div className="text-lg font-light h-[67px]">
                          <h2>
                            You have a concept, How will you put it into
                            progress?
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex flex-col items-center justify-center w-16  text-white  space-y-4">
        <div className="w-8 sm:w-16 h-8 sm:h-16 bg-[#0029FF] flex items-center justify-center rounded-full cursor-pointer">
          <FaQuestion  className="w-6 sm:w-8 sm:h-8 "/>
        </div>
        <div className="w-8 sm:w-16 h-8 sm:h-16 bg-[#0029FF] flex items-center justify-center rounded-full cursor-pointer">
          <img src={icon6} className="w-5 sm:w-8 sm:h-8" />
        </div>
        <div className="w-8 sm:w-16 h-8 sm:h-16 bg-[#0029FF] flex items-center justify-center rounded-full cursor-pointer">
          <img src={icon5} className="w-5 sm:w-8 sm:h-8" />
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 ${
          showLeft ? "w-36 sm:w-96" : "w-20"
        } h-[690px] rounded-br-2xl shadow-lg bg-white transform transition-all duration-500 `}
      >
        <div
          className={`flex items-center ${
            showLeft ? "justify-between" : "justify-end"
          } bg-black text-xl font-medium text-white rounded-tr-2xl p-2 h-12`}
        >
          {showLeft && (
            <div className="text-white text-xl font-medium">
              Journey Board
            </div>
          )}
          <div
            className={`cursor-pointer hover:scale-90 transform transition-all duration-400 bg-white text-black rounded-full ${
              showLeft ? "rotate-180" : ""
            }`}
            onClick={() => handleShow("left")}
          >
            <LuArrowRight size={25} />
          </div>
        </div>
        {showLeft && (
          <div className="w-full h-[643px]  flex flex-col items-center ">
            <ul className="mt-4 flex flex-col items-start sm:pl-9 gap-4 list-disc w-full ">
              <li className="sm:text-lg text-xl font-semibold">
                Explore the world of management
              </li>
              <div className="ml-5">
                <li className="sm:text-lg text-xl mt-2 font-normal">
                  Technical Project Management
                </li>
                <li className="sm:text-lg text-xl mt-2 font-normal">Threadbuild</li>
                <li className="sm:text-lg text-xl mt-2 font-normal">
                  Structure your pointers
                </li>
                <li className="sm:text-lg text-xl mt-2 font-normal">4SA Method</li>
              </div>
            </ul>
          </div>
        )}
      </div>
      <div
        className={`absolute top-0 right-0 flex h-[500px] rounded-s-2xl overflow-hidden ${
          showRight ? "w-40 sm:w-96" : "w-20"
        } transform transition-all duration-700 shadow-lg`}
      >
        <div className="relative flex flex-col items-center w-16 gap-5 py-4 px-2 bg-black text-white">
          <div className="absolute top-0 right-0 bg-red-700 w-6 text-center aspect-square text-xl font-medium rounded-full">
            {addNotice.length}
          </div>
          <div onClick={() => handleShow("right")}>
            <RxCross1 size={40} className="cursor-pointer hover:scale-90" />
          </div>
          <div className="text-xl font-semibold">
            {"Notice".split("").map((char, idx) => (
              <h2 key={idx}>{char}</h2>
            ))}
          </div>
          <div className="text-xl font-semibold">
            {"Board".split("").map((char, idx) => (
              <h2 key={idx}>{char}</h2>
            ))}
          </div>
        </div>
        <div className="relative w-full bg-white">
          {showRight && addNotice.length > 0 && (
            <div className="flex flex-col gap-3 h-3/4 overflow-y-auto px-2 py-4">
              {addNotice.map((item, index) => (
                <div
                  className="rounded-md px-4 py-2 shadow-lg"
                  key={index}
                >
                  <div className="flex items-center justify-between text-lg font-medium">
                    <h2 className="text-black">{item.name}</h2>
                    <p className="text-gray-600">{item.time}</p>
                  </div>
                  <p className="mt-2 text-xl font-medium text-gray-800">
                    {item.noticeText}
                  </p>
                </div>
              ))}
            </div>
          )}
          {showRight && (
            <div className="absolute bottom-0 left-0 w-full">
              <textarea
                cols={45}
                className="w-full h-32 resize-none p-2 outline-none border-t"
                value={noticeText}
                onChange={(e) => setNoticeText(e.target.value)}
              />
              <button className="absolute right-4 -top-8 rounded-full group">
                <div className="rounded-full" onClick={addNoticeinArr}>
                  <MdAdd
                    size={40}
                    className="text-white cursor-pointer bg-[#0029FF] rounded-full hover:scale-110"
                  />
                </div>
                <div className="absolute -left-16 mt-3 text-white bg-black font-medium w-24 hidden group-hover:flex justify-center">
                  Add Notice
                  <div className="absolute w-3 aspect-square rotate-45 bg-black -top-2 right-1"></div>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
