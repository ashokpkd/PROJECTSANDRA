import React from "react";
import { FaHome } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { GiBrain } from "react-icons/gi";
import { BsJournalText } from "react-icons/bs";
import logo from "../assets/ikigai-img.webp";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-[20%] h-screen bg-blue-900 flex flex-col items-center ">
      <div className=" h-[20%] w-full ">
        <img src={logo} alt="" className=" object-cover w-full h-full" />
      </div>
      <div className="h-[80%] w-full flex flex-col justify-evenly px-3 ">
        <div
          className=" border rounded-lg h-28 flex flex-col items-center hover:bg-cyan-300 justify-center text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          <FaHome size={35} />
          <p>Home</p>
        </div>
        <div
          className="border rounded-lg h-28 flex flex-col items-center hover:bg-cyan-300 justify-center text-white cursor-pointer"
          onClick={() => navigate("/todo")}
        >
          <LuListTodo size={35} />
          <p>To Do</p>
        </div>
        <div
          className="border h-28 rounded-lg flex flex-col items-center hover:bg-cyan-300 justify-center text-white cursor-pointer"
          onClick={() => navigate("/challenges")}
        >
          <GiBrain size={35} />
          <p>Challenges</p>
        </div>
        <div
          className="border h-28 rounded-lg flex flex-col items-center hover:bg-cyan-300 justify-center text-white cursor-pointer"
          onClick={() => navigate("/journal")}
        >
          <BsJournalText size={35} />
          <p>Journal</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
