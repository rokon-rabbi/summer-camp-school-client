import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useCheckRole from "../../Hooks/useCheckRole";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const { user } = useAuth();
  const[role, isRoleLoading]= useCheckRole();
  const navigate = useNavigate();
  const location = useLocation();
  const [axiosSecure] = useAxios();

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes"],

    queryFn: async () => {
      const res = await axiosSecure(`/classes`);

      return res.data;
    },
  });
  const filterData = classes.filter(item => item.status === "approved");

  const handleSelect = data => {
    if (user && user.email) {
        
      const cartCourse = {
        cartId: data._id,
        name:data.name,
        image:data.image,
        price:data.price,
        instructorEmail: user.email,
        studentsEnrolled:data.studentsEnrolled,
        instructor:data.instructor,
        availableSeats:data.availableSeats,
        paymentStatus:"pending"
      };
      console.log(cartCourse)
      
      fetch("https://summer-camp-school-server-tau.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartCourse),
      })
        .then(res => res.json())
        .then(data => {

          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Course added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then(result => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <>
    <Helmet>
        <title>SummerCamp | Classes</title>
      </Helmet>
      <div>
      <p className="md:text-5xl mb-2 p-2 bg-zinc-50 underline decoration-wavy decoration-cyan-300 text-3xl font-extrabold text-gray-900 text-center mt-14 py-10 md:mt-40">
        Classes
      </p>
      <div className=" bg-zinc-50  md:px-36 p-14 grid  md:grid-cols-3 grid-cols-1 gap-10">
        {filterData.map((data, idx) => (
          <div key={idx}>
            <div
              className={`${
                data.availableSeats === 0 ? "bg-red-500" : "bg-white"
              } h-75 rounded overflow-hidden shadow-xl border`}
            >
              <img
                className=" rounded-3xl shadow-sm p-5  md:h-72 h-64 w-screen"
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

                <button
                  onClick={() => handleSelect(data)}
                  disabled={data.availableSeats === 0 ||role==="admin" || role ==="instructor"}
                  className={`${
                    data.availableSeats  === 0 ||role==="admin" || role ==="instructor"
                      ? "cursor-not-allowed"
                      : "hover:bg-blue-700"
                  } bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
   
  );
};

export default Classes;
