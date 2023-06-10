import React from 'react';
import useAxios from '../../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../../Hooks/useAuth';
// import axios from 'axios';

import { motion } from 'framer-motion';
const PopularClass = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxios();
    const { refetch,isLoading, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/classes`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    if (isLoading) {
      return <div>Loading...</div>;
    }
  

  
    // Sort the data based on studentsEnrolled field
    const sortedData = classes.sort((a, b) => b.studentsEnrolled - a.studentsEnrolled);
  
    // Get the top six classes
    const topSixClasses = sortedData.slice(0, 6);
    return (
         <div className="flex flex-wrap -mx-4">
      {topSixClasses.map((card,idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/3 p-4"
        >
          <div className="bg-white rounded-lg shadow-lg">
            <img src={card.image} alt={card.name} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{card.name}</h2>
              <p className="text-gray-600">{card.studentsEnrolled}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
      
    );
};

export default PopularClass;