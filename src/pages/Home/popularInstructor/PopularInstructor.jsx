
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Fade } from 'react-awesome-reveal';
const PopularInstructor = () => {
    // const { user, loading } = useAuth();
   
    const [axiosSecure] = useAxios();
    const { refetch, data: users = [] } = useQuery({
      queryKey: ["users"],
  
      queryFn: async () => {
        const res = await axiosSecure(`/users`);
        console.log("res from axios", res);
        return res.data;
      },
    });
  

    console.log(" hi users"+users);
    const filterData =users.filter((item) => item.role == "instructor");
    // Get the top six classes
    const topSixInstructor = filterData.slice(0, 6);
    return (
       <div className="">
         <div className="grid grid-cols-1 p-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {topSixInstructor.map((user, index) => (
          <Fade cascade triggerOnce duration={3000} key={index}>
            <div className="bg-white cursor-pointer shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-56 object-cover" src={user.image} alt={user.name} />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold mb-2">{user.name}</h3>
              <p className="text-gray-600 font-semibold bg-blue-50 p-2  rounded">{user.email}</p>
            </div>
          </div>
          </Fade>
        ))}
      </div>
       </div>
    );
  };

export default PopularInstructor;