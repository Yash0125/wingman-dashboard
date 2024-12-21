import { useState } from "react";
import { Icon } from "@iconify/react";

const Order = () => {
  const [orders] = useState([
    {
      id: 1,
      product: "Product A",
      date: "24 Apr ’2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120.21",
      commission: "$55",
    },
    {
      id: 2,
      product: "Product C",
      date: "25 Apr ’2024",
      time: "11:30 AM",
      duration: "3h 10m",
      value: "$200.50",
      commission: "$70",
    },
    {
      id: 3,
      product: "Product B",
      date: "23 Apr ’2024",
      time: "2:15 PM",
      duration: "1h 30m",
      value: "$150.00",
      commission: "$60",
    },
    {
      id: 4,
      product: "Product E",
      date: "22 Apr ’2024",
      time: "4:00 PM",
      duration: "2h 0m",
      value: "$90.75",
      commission: "$45",
    },
    {
      id: 5,
      product: "Product D",
      date: "21 Apr ’2024",
      time: "1:00 PM",
      duration: "1h 50m",
      value: "$110.99",
      commission: "$50",
    },
    {
      id: 6,
      product: "Product F",
      date: "20 Apr ’2024",
      time: "9:30 AM",
      duration: "2h 30m",
      value: "$130.10",
      commission: "$60",
    },
    {
      id: 7,
      product: "Product G",
      date: "19 Apr ’2024",
      time: "3:40 PM",
      duration: "1h 45m",
      value: "$105.30",
      commission: "$50",
    },
    {
      id: 8,
      product: "Product H",
      date: "18 Apr ’2024",
      time: "5:00 PM",
      duration: "2h 10m",
      value: "$220.99",
      commission: "$80",
    },
    {
      id: 9,
      product: "Product I",
      date: "17 Apr ’2024",
      time: "7:30 AM",
      duration: "1h 40m",
      value: "$180.45",
      commission: "$65",
    },
    {
      id: 10,
      product: "Product J",
      date: "16 Apr ’2024",
      time: "12:10 PM",
      duration: "2h 15m",
      value: "$140.60",
      commission: "$55",
    },
    {
      id: 11,
      product: "Product K",
      date: "15 Apr ’2024",
      time: "10:00 AM",
      duration: "3h 5m",
      value: "$210.75",
      commission: "$75",
    },
    {
      id: 12,
      product: "Product L",
      date: "14 Apr ’2024",
      time: "4:50 PM",
      duration: "2h 25m",
      value: "$250.30",
      commission: "$90",
    },
  ]);

  const [page, setPage] = useState(1);
  const [sortField, setSortField] = useState("product"); // Default sorting by product
  const [sortDirection, setSortDirection] = useState("asc"); // Default ascending

  const rowsPerPage = 4;

  // Sorting logic
  const sortedOrders = [...orders].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (sortDirection === "asc") {
      if (typeof aValue === "string" && typeof bValue === "string") {
        return aValue.localeCompare(bValue);
      }
      return aValue - bValue;
    } else {
      if (typeof aValue === "string" && typeof bValue === "string") {
        return bValue.localeCompare(aValue);
      }
      return bValue - aValue;
    }
  });

  // Paginate sorted data
  const paginatedOrders = sortedOrders.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleSort = (field) => {
    if (field === sortField) {
      // If already sorted by this field, toggle direction
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // If a new field is clicked, sort by that field in ascending order
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-white p-4 md:p-6">
      <div className="flex flex-row items-center justify-between w-full mb-6">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800">
          Orders
        </h2>
      </div>
      <div className="overflow-x-auto shadow-md rounded-md border border-[#DCDFE4]">
        <table className="w-full border-collapse bg-white text-left shadow-md rounded-lg">
          <thead className="bg-[#F9FAFB] h-[54px] border border-[#DCDFE4]">
            <tr>
              <th
                className="py-2 px-4 text-[#667085] font-normal cursor-pointer"
                onClick={() => handleSort("product")}
              >
                Product{" "}
                {sortField === "product" &&
                  (sortDirection === "asc" ? "↓" : "↑")}
              </th>
              <th
                className="py-2 px-4 text-[#667085] font-normal cursor-pointer"
                onClick={() => handleSort("date")}
              >
                Date{" "}
                {sortField === "date" && (sortDirection === "asc" ? "↓" : "↑")}
              </th>
              <th
                className="py-2 px-4 text-[#667085] font-normal cursor-pointer"
                onClick={() => handleSort("duration")}
              >
                Time spent{" "}
                {sortField === "duration" &&
                  (sortDirection === "asc" ? "↓" : "↑")}
              </th>
              <th
                className="py-2 px-4 text-[#667085] font-normal cursor-pointer"
                onClick={() => handleSort("value")}
              >
                Order Value{" "}
                {sortField === "value" && (sortDirection === "asc" ? "↓" : "↑")}
              </th>
              <th
                className="py-2 px-4 text-[#667085] font-normal cursor-pointer"
                onClick={() => handleSort("commission")}
              >
                Commission{" "}
                {sortField === "commission" &&
                  (sortDirection === "asc" ? "↓" : "↑")}
              </th>
              <th className="py-2 px-4 text-[#667085] font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 flex items-center text-left font-inter text-base font-normal leading-6 tracking-tightest text-[#212636]">
                  <img
                    src="https://via.placeholder.com/40"
                    alt={order.product}
                    className="w-8 h-8 mr-3 rounded-md"
                  />
                  {order.product}
                </td>
                <td className="py-2 px-4">
                  {order.date} <br />
                  <span className="text-sm text-gray-500">{order.time}</span>
                </td>
                <td className="py-2 px-4">{order.duration}</td>
                <td className="py-2 px-4">{order.value}</td>
                <td className="py-2 px-4 text-gray-600 font-inter font-bold text-base leading-6 tracking-tight">
                  {order.commission}
                </td>
                <td className="py-2 px-4 text-[#8A94A6] cursor-pointer flex items-center">
                  View Chat{" "}
                  <Icon
                    icon="ep:top-right"
                    height={20}
                    width={20}
                    className="ml-2"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md disabled:opacity-50"
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          Page {page} of {Math.ceil(orders.length / rowsPerPage)}
        </span>
        <button
          onClick={() =>
            setPage((prev) =>
              prev < Math.ceil(orders.length / rowsPerPage) ? prev + 1 : prev
            )
          }
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md disabled:opacity-50"
          disabled={page === Math.ceil(orders.length / rowsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Order;
