import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { GoBell } from "react-icons/go";
import image from "./assets/admin.jpg";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import dataitem from "./Data";

const App = () => {
  const [data, setdata] = useState(dataitem);
  const [show, setShow] = useState(false);
  const [itemTodelete, setItemTodelete] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null); 
  const [editFormData, setEditFormData] = useState({});

  const [isAdding, setIsAdding] = useState(false);
  const [newItem, setNewItem] = useState({
    productname: "",
    category: "",
    price: "",
    date: new Date().toLocaleDateString(),
    stock: "In Stock",
  });
  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  //Add items
  const addNewItem = () => {
    const newItemWithId = { ...newItem, id: Date.now() }; 
    setdata((prevData) => [...prevData, newItemWithId]);
    setIsAdding(false); 
  };

  const cancelAdd = () => {
    setIsAdding(false);
  };

//delete item
  const handleDeleteitem = (id) => {
    setItemTodelete(id);
    setShow(true);
  };
  const confirmDelete = () => {
    setdata(data.filter((item) => item.id !== itemTodelete));
    setShow(false);
  };

  const cancelDelete = () => {
    setShow(false);
    setItemTodelete(null);
  };

  //edit item:-
  const handleEditItem = (item) => {
    setItemToEdit(item);
    setEditFormData(item);
    setIsEditing(true);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
    console.log(editFormData);
    
  };

  const saveEdit = () => {
    setdata((prevData) =>
      prevData.map((item) =>
        item.id === itemToEdit.id ? { ...item, ...editFormData } : item
      )
    );
    setIsEditing(false); 
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setItemToEdit(null);
  };

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
        <h1 className="pl-2 font-semibold text-lg sm:text-xl p-3">
          Product List
        </h1>
        <hr />
        <div className="flex flex-col md:flex-row px-5 mt-3 justify-between">
          <div className="flex justify-center items-center border rounded-lg w-full md:w-auto">
            <input type="text" placeholder="search" className="p-1 w-auto" />
            <h1 className="text-xl">
              <CiSearch />
            </h1>
          </div>
          <button className="bg-blue-400 p-1 rounded-md mt-2 md:mt-0" onClick={() => setIsAdding(true)} >
            Add new item
          </button>
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
                        <img src={item.productimage} alt="" width={50} />
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
                      <button className="text-blue-500 " onClick={() => handleEditItem(item)} >
                        <BiEdit />
                      </button>
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteitem(item.id)}
                      >
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
      
      {/* delete a item */}
      {show && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-45">
          <div className="bg-white p-5 space-y-5 rounded-lg ">
            <h1 className="font-semibold">
              Are you sure you want to delete this item?
            </h1>
            <div className="flex justify-center space-x-3 ">
              <button
                className="bg-red-400 p-1 rounded-lg"
                onClick={cancelDelete}
              >
                Cancel
              </button>
              <button
                className="p-1 px-4 rounded-lg bg-blue-400"
                onClick={confirmDelete}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}

      {/* edit a item */}
      {isEditing && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-5 space-y-5 rounded-lg">
            <h1 className="font-semibold">Edit Item</h1>
            <div className="space-y-3">
              <input
                type="text"
                name="productname"
                placeholder="Product Name"
                value={editFormData.productname}
                onChange={handleEditFormChange}
                className="border p-1 w-full"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={editFormData.category}
                onChange={handleEditFormChange}
                className="border p-1 w-full"
              />
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={editFormData.price}
                onChange={handleEditFormChange}
                className="border p-1 w-full"
              />
              <div className="flex justify-end space-x-3">
                <button className="bg-red-400 p-1 rounded-lg" onClick={cancelEdit}>
                  Cancel
                </button>
                <button className="p-1 px-4 rounded-lg bg-blue-400" onClick={saveEdit}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add item */}
      {isAdding && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-5 space-y-5 rounded-lg">
            <h1 className="font-semibold">Add New Item</h1>
            <div className="space-y-3">
              <input
                type="text"
                name="productname"
                placeholder="Product Name"
                value={newItem.productname}
                onChange={handleNewItemChange}
                className="border p-1 w-full"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={newItem.category}
                onChange={handleNewItemChange}
                className="border p-1 w-full"
              />
               <input
                type="text"
                name="product"
                placeholder="product"
                value={newItem.product}
                onChange={handleNewItemChange}
                className="border p-1 w-full"
              />


              <input
                type="text"
                name="price"
                placeholder="Price"
                value={newItem.price}
                onChange={handleNewItemChange}
                className="border p-1 w-full"
              />
              <div className="flex justify-end space-x-3">
                <button className="bg-red-400 p-1 rounded-lg" onClick={cancelAdd}>
                  Cancel
                </button>
                <button className="p-1 px-4 rounded-lg bg-blue-400" onClick={addNewItem}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
