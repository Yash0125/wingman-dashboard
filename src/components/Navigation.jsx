import Logo from "./../assets/Logo.png";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [selectedIcon, setSelectedIcon] = useState("home");

  const navIcons = [
    {
      id: "home",
      icon: "material-symbols:home-rounded",
      label: "Home",
    },
    {
      id: "messages",
      icon: "mage:message-round-fill",
      label: "Messages",
    },
    {
      id: "groups",
      icon: "ic:outline-groups",
      label: "Groups",
    },
  ];

  useEffect(() => {
    if (currentPage === "chats") {
      setSelectedIcon("messages");
    } else {
      setSelectedIcon("home");
    }
  }, [currentPage]);

  const handleIconClick = (id) => {
    setSelectedIcon(id);
    if (id === "messages") {
      setCurrentPage("chats");
    } else {
      setCurrentPage("home");
    }
  };

  return (
    <div className="flex flex-col bg-[#115E56] h-screen w-14 justify-between items-center">
      <div className="flex flex-col items-center">
        <div className="p-2">
          <img src={Logo} alt="" className="h-10 w-10 bg-cover" />
        </div>

        <div className="h-[1px] w-10 bg-[#134E48] border-t border-[#134E48] my-5 mx-1" />
        <div className="mt-2 flex flex-col gap-[22px]">
          {navIcons.map((item) => (
            <div
              key={item.id}
              onClick={() => handleIconClick(item.id)}
              className={`h-[36px] w-[36px] rounded-[8px] flex justify-center items-center cursor-pointer transition-all duration-200 ${
                selectedIcon === item.id ? "bg-white" : ""
              }`}
            >
              <Icon
                icon={item.icon}
                width="20"
                height="20"
                className={
                  selectedIcon === item.id ? "text-[#115E56]" : "text-[#CCFBEF]"
                }
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className={`h-[36px] w-[36px] rounded-[8px] flex justify-center items-center cursor-pointer p-2 pb-10`}
      >
        <Icon
          icon="icon-park-solid:setting"
          width="20"
          height="20"
          className="text-[#CCFBEF]"
        />
      </div>
    </div>
  );
};

export default Navigation;
