import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { GoBell } from "react-icons/go";
import image from "./assets/admin.jpg";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import data from "./Data";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-200 sm:px-7 pt-5 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center p-2 border-2 rounded-xl bg-white">
        <div>
          <h1>
            <CiMenuBurger />
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xl mt-2 md:mt-0">
          <div className="flex justify-center items-center gap-2 border p-1 rounded-2xl w-full sm:w-auto">
            <h1 className="text-xl">
              <CiSearch />
            </h1>
            <input
              type="text"
              placeholder="Try to searching..."
              className="text-sm outline-none w-full sm:w-auto"
            />
          </div>

          <CiDark />
          <CiDark />
          <GiShoppingCart />
          <GoBell />

          <img src={image} alt="" width={50} className="rounded-full" />
          <div className="text-center sm:text-left">
            <h1 className="text-xs font-semibold">Mike nileson</h1>
            <h1 className="text-xs">Admin</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 bg-white p-4 rounded-xl">
        <h1 className="font-semibold text-lg sm:text-xl">Product List</h1>
        <div className="flex gap-4 text-xs sm:text-md ">
          <h1>Dashboard</h1>
          <h1>productlist</h1>
        </div>
      </div>

      <div className="bg-white mt-8 rounded-xl">
        <h1 className="pl-2 font-semibold text-lg sm:text-xl p-3">Product List</h1>
        <hr />
        <div className="flex flex-col md:flex-row px-5 mt-3 justify-between">
          <div className="flex justify-center items-center border rounded-lg w-full md:w-auto">
            <input type="text" placeholder="search" className="p-1 w-auto" />
            <h1 className="text-xl">
              <CiSearch />
            </h1>
          </div>
          <button className="bg-blue-400 p-1 rounded-md mt-2 md:mt-0">Add new item</button>
        </div>
        <div className="pt-10 px-5 overflow-x-auto">
          <table className="min-w-full px-10">
            <thead>
              <tr className="border-b font-semibold ">
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>Product Image</th>
                <th>Product</th>
                <th>Date</th>
                <th>Status</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.id} className="text-center border-b ">
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        <img
                          src={item.productimage}
                          alt=""
                          width={50}
                        />
                        <div>
                          <h1 className="font-semibold">{item.productname}</h1>
                          <h1 className="text-sm">{item.category}</h1>
                        </div>
                      </div>
                    </td>
                    <td>{item.product}</td>
                    <td>{item.date}</td>
                    <td>{item.stock}</td>
                    <td>{item.price}</td>
                    <td className="flex justify-center pt-8 gap-2">
                      <button className="text-blue-500 ">
                        <BiEdit />
                      </button>
                      <button className="text-red-500">
                        <RiDeleteBin6Line />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pl-24 mt-4">
        <div className="flex items-center gap-2">
          <h1>Items per page:</h1>
          <select name="" id="" className="p-1 border rounded-md">
            <option>1</option>
            <option>2</option>
            <option>5</option>
          </select>
        </div>
        <h1>1-5 of 7</h1>
      </div>
    
    </div>
  );
};

export default App;
