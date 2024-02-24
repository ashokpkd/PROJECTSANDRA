import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const ChallengesPage = () => {
    return <div className=" flex">
    <Sidebar />
    <div className=" w-full">
            <Navbar />
            <div>21 challenges♣</div>
    </div>
  </div>
};

export default ChallengesPage;
