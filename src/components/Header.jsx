import { useState } from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  const [selected, setSelected] = useState("summary");

  const items = [
    { id: "summary", icon: "ph:chart-pie-slice-fill", text: "Summary" },
    { id: "sales", icon: "mdi:tag", text: "Sales" },
    { id: "chats", icon: "fluent:chat-28-filled", text: "Chats" },
  ];


  return (
    <div className="w-full h-16 sm:h-[94px] bg-white flex border-b border-[#DCDFE4]">
      <ul className="w-full flex justify-start items-center ml-2 sm:ml-6 gap-1 sm:gap-4">
        {items.map((item) => (
          <li
            key={item.id}
            className={`flex flex-row items-center h-10 sm:h-[46px] px-2 sm:px-4 cursor-pointer rounded-full transition-colors ${
              selected === item.id ? "bg-[#CCFBEF] text-[#212636]" : "text-[#8A94A6]"
            }`}
            onClick={() => setSelected(item.id)}
          >
            <Icon
              icon={item.icon}
              className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-3"
            />
            <span className="text-sm sm:text-lg font-medium whitespace-nowrap ">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;