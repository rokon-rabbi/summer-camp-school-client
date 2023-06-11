import React, { useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const ManageUser = () => {
  const [disableButtons, setDisableButtons] = useState([]);

  const [axiosSecure] = useAxios();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],

    queryFn: async () => {
      const res = await axiosSecure(`/users`);

      return res.data;
    },
  });
  const handleStatusUpdate = async (user, status) => {
    try {
        await axiosSecure.patch(`/users/${user._id}`, { status });
        // Update the status locally in the classes array
        refetch();

    const updatedClasses = users.map(item => {
      item._id === user._id ? { ...item, status } : item;
    });
    setDisableButtons(prev => [...prev, user._id]);
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
          <thead className=" text-center overflow-hidden">
            <tr className="bg-white">
              <th className="py-1 px-2">Profile</th>
              <th className="py-1 px-2">Email</th>
              <th className="py-1 px-2">Instructor</th>
              <th className="py-1 px-2">Admin</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td className="py-1 px-2">
                  <div className="flex items-center space-x-1">
                    <div className="avatar">
                      <div className="mask mask-squircle w-8 h-8">
                        <img
                          src={user.image}
                          alt="Avatar Tailwind CSS Component"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-sm">{user.name}</div>
                      <div className="text-sm font-bold ">{user.role}</div>
                    </div>
                  </div>
                </td>
                <td className="text-center py-1 px-2">
                  <span className="badge   font-semibold badge-ghost badge-xs">
                    {user.email}
                  </span>
                </td>

                <td className="text-center ">
                  <button
                    onClick={() => handleStatusUpdate(user, "instructor")}
                    className={`btn btn-ghost bg-blue-900 btn-xs ${
                      disableButtons.includes(user._id)
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={disableButtons.includes(user._id)}
                  >
                    Make Instructor
                  </button>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleStatusUpdate(user, "admin")}
                    className={`btn btn-ghost bg-green-700 btn-xs ${
                      disableButtons.includes(user._id)
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={disableButtons.includes(user._id)}
                  >
                    Make Admin
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

export default ManageUser;
