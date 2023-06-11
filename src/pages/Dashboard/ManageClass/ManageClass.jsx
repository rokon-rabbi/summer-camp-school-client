import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";

const ManageClass = () => {
  const { user } = useAuth();

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
      const updatedClasses = classes.map((item) =>
        item._id === classItem._id ? { ...item, status } : item
      );
      setDisableButtons((prev) => [...prev, classItem._id]);
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
          <thead className=" overflow-hidden">
            <tr className="bg-white">
              <th className="py-1 px-2">Name</th>
              <th className="py-1 px-2">Email</th>
              <th className="py-1 px-2">Price</th>
              <th className="py-1 px-2">Available Seats</th>
              <th className="py-1 px-2">Status</th>
              <th className="py-1 px-2">Approve</th>
              <th className="py-1 px-2">Deny</th>

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
                      <div className="text-xs opacity-50">
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
                    onClick={() => handleDelete(classItem)}
                    className="btn btn-ghost bg-blue-900 btn-xs "
                  >
                    Approve
                  </button>
                </td>
                <td className="text-center">
                  <button className="btn btn-ghost bg-red-600 btn-xs">
                    Deny
                  </button>
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
