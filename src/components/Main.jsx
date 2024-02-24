import React from "react";

const Main = () => {
  return (
    <div className=" flex flex-col items-center justify-center mt-5">
      <div className="flex flex-col items-center w-[50%] gap-3">
        <p className="text-xl font-bold">Quate of the Day</p>
        <p className=" font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          exercitationem enim laborum! Magnam mollitia sint nisi cumque,
          voluptatem illo nihil nesciunt ipsa, dignissimos dolor voluptates
          quisquam expedita! Sequi, ducimus sed.
        </p>
      </div>
      <div className=" flex flex-col w-[70%] justify-center items-center h-[45vh] bg-orange-200 mt-10 px-10 gap-5 rounded-2xl pb-5 text-white">
        <p className="text-xl font-semibold">Today's Task </p>
        <div className="flex w-full bg-orange-500 justify-between px-10 h-12 items-center font-medium text-white rounded-lg">
          <p>Task 1</p>
          <div className="flex gap-2">
            <button className="border w-20 h-8 text-sm rounded-lg bg-blue-600">
              view more
            </button>
            <button className="border w-20 h-8 text-sm rounded-lg bg-green-600">
              done
            </button>
          </div>
        </div>
        <div className="flex w-full bg-orange-500 justify-between px-10 h-12 items-center font-medium text-white rounded-lg">
          <p>Task 2</p>
          <div className="flex gap-2">
            <button className="border w-20 h-8 text-sm rounded-lg bg-blue-600">
              view more
            </button>
            <button className="border w-20 h-8 text-sm rounded-lg bg-green-600">
              done
            </button>
          </div>
        </div>
        <div className="flex w-full bg-orange-500 justify-between px-10 h-12 items-center font-medium text-white rounded-lg">
          <p>Task 3</p>
          <div className="flex gap-2">
            <button className="border w-20 h-8 text-sm rounded-lg bg-blue-600">
              view more
            </button>
            <button className="border w-20 h-8 text-sm rounded-lg bg-green-600">
              done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
