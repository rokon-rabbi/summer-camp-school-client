import React from "react";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
  const [cart, refetch] = useCart();
  const handleDelete = cart => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://summer-camp-school-server-tau.vercel.app/carts/${cart._id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto md:py-20">
      <table className="table ">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Available Seats</th>
            <th>Payment</th>
            <th>Delete</th>
            <th>Payment</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cart, idx) => (
            <tr key={idx}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={cart.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{cart.name}</div>
                    <div className="text-sm font-bold opacity-50">{cart.instructor}</div>
                  </div>
                </div>
              </td>
              <td className="text-center">
                <span className="badge  font-semibold badge-ghost badge-sm">
                  {cart.price}$
                </span>
              </td>
              <td className="text-center  rounded-md">
                <span className="badge  font-semibold badge-ghost badge-sm">
                  {cart.availableSeats}
                </span>
              </td>
              <td className="text-center">
                <span className="badge  font-semibold badge-ghost badge-sm">
                  {cart.paymentStatus}
                </span>
              </td>
              <th className="text-center">
                <button
                  onClick={() => handleDelete(cart)}
                  className="btn btn-ghost bg-white btn-xs"
                >
                  delete
                </button>
              </th>
              <th className="text-center">
                <Link to={"/dashboard/payment"}>
                <button className="btn btn-ghost  bg-white btn-xs">pay</button>
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default MySelectedClass;
