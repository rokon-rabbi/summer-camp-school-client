import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user, loading } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    instructor: "",
    instructorEmail: "",
    availableSeats: 0,
    price: 0,
    status: "pending",
    TotalEnrolledStudents:0,
  });

  const handleChange = e => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Sending data to the server using Fetch API
    fetch("https://summer-camp-school-server-tau.vercel.app/classes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        setFormData({
          name: "",
          image: "",
          instructor: "",
          instructorEmail: "",
          availableSeats: 0,
          price: 0,
          status: "pending",
          TotalEnrolledStudents:0,
        });
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class Added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          alert("Not inserted");
        }
      })
      .catch(error => {
        // Handle error if any
        console.error(error);
      });
  };

  return (
    <>
      {loading ? (
        <div className="">
          <p>Loading..</p>
        </div>
      ) : (
        <div className="bg-slate-200 p-20">
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md"
          >
            <p className="text-3xl text-slate-900 underline text-center font-bold">
              Add a Class
            </p>
            <div className="mb-4">
              <label
                htmlFor="className"
                className="block mb-2 font-semibold text-sm  text-gray-700"
              >
                Class Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
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
                id="image"
                name="image"
                value={formData.image}
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
                id="instructor"
                name="instructor"
                value={(formData.instructor = user.displayName)}
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
                value={(formData.instructorEmail = user.email)}
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
        </div>
      )}
    </>
  );
};

export default AddClass;
