import { Icon } from "@iconify/react";

const Glance = () => {
  const glanceData = [
    {
      id: 1,
      title: "CONSULTATIONS",
      value: "24",
      icon: "mage:message-round-fill",
      increase: true,
      percentage: 15,
    },
    {
      id: 2,
      title: "ORDERS PLACED",
      value: "12",
      icon: "mdi:tag",
      increase: false,
      percentage: 15,
    },
    {
      id: 3,
      title: "CONVERSION",
      value: "50%",
      icon: "arcticons:simpletask",
      increase: false,
      percentage: 15,
    },
    {
      id: 4,
      title: "TOTAL SALES VALUE",
      value: "$2,400",
      icon: "ph:coins-fill",
      increase: true,
      percentage: 15,
    },
    {
      id: 5,
      title: "AVG ORDER VALUE",
      value: "$240",
      icon: "ph:coin-fill",
      increase: true,
      percentage: 15,
    },
    {
      id: 6,
      title: "COMMISSION PAID",
      value: "$240",
      icon: "ph:piggy-bank-fill",
      increase: true,
      percentage: 15,
    },
  ];

  return (
    <div
      className="flex flex-col h-full w-full
    justify-start items-start border"
    >
      <div className="flex flex-row items-center justify-between w-full p-4">
        <h2 className="text-3xl font-medium">At a glance</h2>
        <select className="bg-white border border-[#DCDFE4] rounded-md shadow-sm px-3 py-2">
          <option value="7days">7 days</option>
          <option value="1month">1 month</option>
          <option value="3months">3 months</option>
          <option value="6months">6 months</option>
        </select>
      </div>

      {/* <div className="flex flex-row h-full w-full flex-wrap  py-12 p-4 border border-red-400">
      {glanceData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col h-[156px] w-96 shadow-md overflow-auto rounded-[20px] border border-yellow-400">         
        
          <div className="flex flex-row items-center justify-between p-4">            
            <div className="flex flex-row items-center">
              <Icon
                icon={item.icon}
                className="h-8 w-8 mr-2 text-yellow-400"
              />
              <h2 className="text-2xl font-medium">{item.title}</h2>            
            </div>
            <div className="flex flex-row items-center">
              <h2 className="text-2xl font-medium">{item.value}</h2>
              <Icon
                icon="material-symbols:arrow-upward-rounded"
                className="h-8 w-8 text-yellow-400"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between p-4">            
            <div className="flex flex-row items-center">
              <h2 className="text-2xl font-medium">{item.percentage}%</h2>
              <Icon
                icon="material-symbols:arrow-upward-rounded"
                className="h-8 w-8 text-yellow-400"
              />
            </div>
            <div className="flex flex-row items-center">
              <h2 className="text-2xl font-medium">{item.value}</h2>
              <Icon
                icon="material-symbols:arrow-upward-rounded"
                className="h-8 w-8 text-yellow-400"
              />
            </div>
          </div>
        </div>
      ))
      }
      </div> */}
      {/* <div className="flex flex-col h-[156px] w-96 shadow-md overflow-auto rounded-[20px] border border-yellow-400">

        </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-4">
        {glanceData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col p-4 bg-white rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-3 text-[#667085]">
              <Icon
                icon={item.icon}
                height={16}
                width={16}
                className="w-4  h-4 rounded-full"
              />
              <span className="text-gray-600 text-sm font-medium uppercase tracking-wide">
                {item.title}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-semibold">{item.value}</span>
              </div>

              <div className="flex items-center gap-2">
                <Icon
                  icon={
                    item.increase
                      ? "material-symbols:trending-up"
                      : "material-symbols:trending-down"
                  }
                  className={`w-5 h-5 ${
                    item.increase ? "text-[#15B79F]" : "text-[#F04438]"
                  }`}
                />
                <span
                  className={`text-sm font-medium text-[#667085]`}
                >
                 <span className={` ${
                    item.increase ? "text-[#15B79F]" : "text-[#F04438]"
                  }`}> {item.percentage}% </span>{item.increase ? "increase" : "decrease"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glance;
