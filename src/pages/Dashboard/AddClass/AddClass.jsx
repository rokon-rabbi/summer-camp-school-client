import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const AddClass = () => {
    const {user,loading}=useAuth();
  const [formData, setFormData] = useState({
    className: "",
    classImage: "",
    instructorName: "",
    instructorEmail: "",
    availableSeats: 0,
    price: 0,
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Sending data to the server using Fetch API
    fetch("http://your-server-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log(data);
      })
      .catch(error => {
        // Handle error if any
        console.error(error);
      });
  };

  return (
    <>
    {
 loading?(
    <div className=""><p>Loading..</p></div>
):(<div className="bg-slate-200">
<form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md"
    >
        <p className="text-3xl font-bold">Add a Claa</p>
      <div className="mb-4">
        <label
          htmlFor="className"
          className="block mb-2 font-semibold text-sm  text-gray-700"
        >
          Class Name
        </label>
        <input
          type="text"
          id="className"
          name="className"
          value={formData.className}
          onChange={handleChange}
          className="w-full px-3 py-2 text-slate-900 font-semibold bg-slate-300 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="classImage"
          className="block mb-2 text-sm font-semibold text-gray-700"
        >
          Class Image
        </label>
        <input
          type="text"
          id="classImage"
          name="classImage"
          value={formData.classImage}
          onChange={handleChange}
          className="w-full px-3 py-2 border text-slate-900 font-semibold bg-slate-300  rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="instructorName"
          className="block mb-2 text-sm font-semibold text-gray-700"
        >
          Instructor Name
        </label>
        <input
          type="text"
          id="instructorName"
          name="instructorName"
          value={user.displayName}
          onChange={handleChange}
          className="w-full px-3 py-2 border text-slate-900 font-semibold bg-slate-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="instructorEmail"
          className="block mb-2 text-sm font-semibold text-gray-700"
        >
          Instructor Email
        </label>
        <input
          type="email"
          id="instructorEmail"
          name="instructorEmail"
          value={user.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border text-slate-900 font-semibold bg-slate-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="availableSeats"
          className="block mb-2 text-sm font-semibold text-gray-700"
        >
          Available Seats
        </label>
        <input
          type="number"
          id="availableSeats"
          name="availableSeats"
          value={formData.availableSeats}
          onChange={handleChange}
          className="w-full px-3 py-2 border text-slate-900 font-semibold bg-slate-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-semibold text-gray-700"
        >
          Price
        </label>
        <input
          type="number"
          id="price"
          step="0.01"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-3 py-2 border text-slate-900 font-semibold bg-slate-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white font-semibold bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Add
      </button>
    </form>
</div>)
    }
   
    
    </>

   
  );
};

export default AddClass;
