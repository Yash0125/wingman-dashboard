import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Order = () => {
  const [orders] = useState([
    {
      id: 1,
      product: "Product 1",
      date: "24 Apr ’2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120.21",
      commission: "$55",
    },
    {
      id: 2,
      product: "Product 2",
      date: "24 Apr ’2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120.21",
      commission: "$55",
    },
    {
      id: 3,
      product: "Product 3",
      date: "24 Apr ’2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120.21",
      commission: "$55",
    },
    {
      id: 4,
      product: "Product 4",
      date: "24 Apr ’2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120.21",
      commission: "$55",
    },
    {
      id: 5,
      product: "Product 5",
      date: "24 Apr ’2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120.21",
      commission: "$55",
    },
    {
      id: 6,
      product: "Product 6",
      date: "24 Apr ’2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120.21",
      commission: "$55",
    },
    {
      id: 7,
      product: "Product 7",
      date: "24 Apr ’2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120.21",
      commission: "$55",
    },
    {
      id: 8,
      product: "Product 8",
      date: "24 Apr ’2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120.21",
      commission: "$55",
    },
    {
      id: 9,
      product: "Product 9",
      date: "24 Apr ’2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120.21",
      commission: "$55",
    },
    {
      id: 10,
      product: "Product 10",
      date: "24 Apr ’2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120.21",
      commission: "$55",
    },
    {
      id: 11,
      product: "Product 11",
      date: "24 Apr ’2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120.21",
      commission: "$55",
    },
    {
      id: 12,
      product: "Product 12",
      date: "24 Apr ’2024",
      time: "10:24 AM",
      duration: "2h 5m",
      value: "$120.21",
      commission: "$55",
    },
  ]);

  const [page, setPage] = useState(1);

  const rowsPerPage = 4;
  const paginatedOrders = orders.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

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
              <th className="py-2 px-4 text-[#667085] font-normal">Product</th>
              <th className="py-2 px-4 text-[#667085] font-normal">Date</th>
              <th className="py-2 px-4 text-[#667085] font-normal">
                Time spent
              </th>
              <th className="py-2 px-4 text-[#667085] font-normal">
                Order Value
              </th>
              <th className="py-2 px-4 text-[#667085] font-normal">
                Commission
              </th>
              <th className="py-2 px-4 text-[#667085] font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 flex items-center text-left font-inter text-base font-normal leading-6 tracking-tightest text-[#212636] ">
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
