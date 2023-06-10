import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { SlLike } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
const Classes = () => {
    const{user}=useAuth();
  const [isnotavailalbe, setIsnotavailabe] = useState(false);
  const [axiosSecure] = useAxios();
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes"],

    queryFn: async () => {
      const res = await axiosSecure(`/classes`);
      console.log("res from axios", res);
      return res.data;
    },
  });
  const filterData = classes.filter(item => item.status == "approved");
  return (
    <div>
        <p className="md:text-5xl mb-2 p-2 bg-zinc-50 underline decoration-wavy decoration-cyan-300 text-3xl font-extrabold text-gray-900 text-center mt-14 py-10 md:mt-40">
          Classes
        </p>
      <div className=" bg-zinc-50  md:p-36 p-14 grid  md:grid-cols-3 grid-cols-1 gap-10">
        {filterData.map((data, idx) => (
          <div>
            <div
              className={`${
                data.availableSeats === 0 ? "bg-red-500" : "bg-white"
              } h-75 rounded overflow-hidden shadow-xl border`}
            >
              <img
                className=" rounded-3xl shadow-sm p-5  md:h-80 h-64 w-screen"
                src={data.image}
                alt={data.name}
              />

              <div className="px-6 grid relative justify-center py-4">
                <div className="font-bold  text-xl mb-2">{data.name}</div>
                <p className="text-gray-700 text-sm mt-3 font-semibold mb-2">
                  Instructor name : {data.instructor}
                  <p className="text-gray-700 bg-gray-100 font-semibold rounded-sm absolute top-5 right-5 p-1 text-base mb-2">
                    {data.price}$
                  </p>
                </p>
                <p className="text-gray-700 text-md font-semibold text-center mb-2">
                  available seats: {data.availableSeats}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 d-flex  text-center  space-x-5">
                <button className=" rounded-md p-2 shadow-2xl border">
                  <span className="font-semibold ">Enrolled :</span>
                  <span className=" font-semibold">
                    {data.studentsEnrolled}
                  </span>
                </button>
                <Link to={``}>
                  <button
                    disabled={data.availableSeats === 0}
                    className={`${
                      data.availableSeats === 0 
                        ? "cursor-not-allowed"
                        : "hover:bg-blue-700"
                    } bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                  >
                    Select
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
