import { useState } from "react";
import Glance from "./Glance";
import Header from "./Header";
import Insights from "./Insights";
import Order from "./Order";
import Chat from "./Chat";

const Body = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="flex-1 h-full">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex flex-col h-[80vh] m-11 bg-white shadow-lg rounded-lg overflow-hidden no-scrollbar">
        <div className="flex flex-col flex-1 overflow-y-scroll p-6 no-scrollbar">
          {currentPage === "home" && (
            <>
              <Glance />
              <Insights />
              <Order />
            </>
          )}
          {currentPage === "chats" && <Chat />}
        </div>
      </div>
    </div>
  );
};

export default Body;
