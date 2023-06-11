import { useQuery } from "@tanstack/react-query";

import useAxios from "../../../Hooks/useAxios";
import { useState } from "react";

const ManageClass = () => {
 
  const [disableButtons, setDisableButtons] = useState([]);
  
  const [axiosSecure] = useAxios();

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes"],

    queryFn: async () => {
      const res = await axiosSecure(`/classes`);

      return res.data;
    },
  });

  const handleStatusUpdate = async (classItem, status) => {
      try {
          await axiosSecure.patch(`/classes/${classItem._id}`, { status });
          // Update the status locally in the classes array
          refetch();

      const updatedClasses = classes.map(item => {
        item._id === classItem._id ? { ...item, status } : item;
      });
      setDisableButtons(prev => [...prev, classItem._id]);
      // You can also update the classes array directly using refetch or setState if required
    } catch (error) {
      console.error("Failed to update class status", error);
    }
  };
  return (
    <div className="overflow-x-auto bg-slate-300 md:py-20">
      <div className="inline-block min-w-full overflow-hidden">
        <table className="table w-full whitespace-nowrap ">
          {/* head */}
          <thead className="  overflow-hidden">
            <tr className="bg-white">
              <th className="py-1 px-2 text-center">Profile</th>
              <th className="py-1 px-2 text-center">Email</th>
              <th className="py-1 px-2 text-center">Price</th>
              <th className="py-1 px-2 text-center">Available Seats</th>
              <th className="py-1 px-2 text-center">Status</th>
              <th className="py-1 px-2 text-center">Approve</th>
              <th className="py-1 px-2  text-center">Deny</th>
              <th className="py-1 px-2  text-center">Feedback</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem, idx) => (
              <tr key={idx}>
                <td className="py-1 px-2">
                  <div className="flex items-center space-x-1">
                    <div className="avatar">
                      <div className="mask mask-squircle w-8 h-8">
                        <img
                          src={classItem.image}
                          alt="Avatar Tailwind CSS Component"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-sm">{classItem.name}</div>
                      <div className="text-xs font-semibold opacity-50">
                        {classItem.instructor}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center py-1 px-2">
                  <span className="badge mx-auto font-semibold badge-ghost badge-xs">
                    {classItem.instructorEmail}
                  </span>
                </td>
                <td className="text-center py-1 px-2">
                  <span className="badge font-semibold badge-ghost badge-xs">
                    {classItem.price}$
                  </span>
                </td>
                <td className="text-center py-1 px-2">
                  <span className="badge font-semibold badge-ghost badge-xs">
                    {classItem.availableSeats}
                  </span>
                </td>
                <td className="text-center py-1 px-2">
                  <span className="badge font-semibold badge-ghost badge-xs">
                    {classItem.status}
                  </span>
                </td>
                <td className="text-center ">
                  <button
                    onClick={() => handleStatusUpdate(classItem, "approved")}
                    className={`btn btn-ghost bg-blue-900 btn-xs ${
                      disableButtons.includes(classItem._id)
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={disableButtons.includes(classItem._id)}
                  >
                    Approve
                  </button>
                </td>
                <td className="">
                  <button
                    onClick={() => handleStatusUpdate(classItem, "denied")}
                    className={`btn btn-ghost text-left m-0 bg-red-600 btn-xs ${
                      disableButtons.includes(classItem._id)
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={disableButtons.includes(classItem._id)}
                  >
                    Deny
                  </button>
                  
                </td>
                <td>
                <button className="btn btn-ghost bg-white btn-xs">
                    Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
