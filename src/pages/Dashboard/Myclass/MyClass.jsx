import { useQuery } from "@tanstack/react-query";

import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";

const MyClass = () => {
  const { user, loading } = useAuth();

  const [axiosSecure] = useAxios();
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(
        `/instructorClasses?instructorEmail=${user?.email}`
      );
      console.log("res from axios", res.data);
      return res.data;
    },
  });
  console.log(classes);
  return (
    <div className="overflow-x-auto bg-slate-300 md:py-20">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr className="bg-white">
            <th className="py-2">Name</th>
            <th className="py-2">Price</th>
            <th className="py-2">Available Seats</th>
            <th className="py-2">Status</th>
            <th className="py-2">TotalEnrolledStudents</th>
            <th className="py-2">Update</th>
            <th className="py-2">Feedback</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem, idx) => (
            <tr key={idx}>
              <td className="py-3">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={classItem.image}
                        alt="Avatar Tailwind CSS Component"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{classItem.name}</div>
                    <div className="text-sm opacity-50">
                      {classItem.instructor}
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-center py-3">
                <span className="badge font-semibold badge-ghost badge-sm">
                  {classItem.price}$
                </span>
              </td>
              <td className="text-center py-3">
                <span className="badge font-semibold badge-ghost badge-sm">
                  {classItem.availableSeats}
                </span>
              </td>
              <td className="text-center py-3">
                <span className="badge font-semibold badge-ghost badge-sm">
                  {classItem.status}
                </span>
              </td>
              <td className="text-center py-3">
                <span className="badge font-semibold badge-ghost badge-sm">
                  {classItem.TotalEnrolledStudents}
                </span>
              </td>
              <td className="text-center py-3">
                <button
                  onClick={() => handleDelete(classItem)}
                  className="btn btn-ghost bg-white btn-xs"
                >
                  Update
                </button>
              </td>
              <td className="text-center py-3"></td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default MyClass;
