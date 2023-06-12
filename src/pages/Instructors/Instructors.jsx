

import { useQuery } from "@tanstack/react-query";
// import axios from 'axios';

import { motion } from "framer-motion";
import useAxios from "../../Hooks/useAxios";
import { Helmet } from "react-helmet-async";
const Instructors = () => {
    const [axiosSecure] = useAxios();
    const { refetch, data: users = [] } = useQuery({
      queryKey: ["users"],
  
      queryFn: async () => {
        const res = await axiosSecure(`/users`);
        console.log("res from axios", res);
        return res.data;
      },
    });
    const filterData = users.filter(item => item.role == "instructor" );
    return (

      <>
      <Helmet>
        <title>SummerCamp | Instructors</title>
      </Helmet>
      <div>
            <p className="md:text-5xl mb-2 p-2 bg-zinc-50 underline decoration-wavy decoration-cyan-300 text-3xl font-extrabold text-gray-900 text-center mt-14 py-10 md:mt-40">
          Instructors
        </p>
            <div className=" bg-zinc-50  md:px-36 p-14 grid  md:grid-cols-3 grid-cols-1 gap-10">
        {filterData.map((data,idx) => (
          <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
           <div>
      <div className=" h-75  rounded overflow-hidden shadow-xl border">
        {/* lazyload image  */}

        <img
          className=" rounded-3xl shadow-sm p-5  md:h-72 h-64 w-screen"
          src={data.image}
          alt={data.name}
          
        />

        <div className="px-6 grid justify-center py-4">
          <div className="font-bold text-center text-xl mb-2">{data.name}</div>
          <p className="text-gray-700 text-base mb-2">
             {data.email}
          </p>
         
        </div>
       
      </div>
    </div>
        </motion.div>
        ))}
           </div>
        </div>
      </>
       
    );
};

export default Instructors;