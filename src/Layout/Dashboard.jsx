import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import useCart from "../Hooks/useCart";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on Data
  // const isAdmin = true;
  const isAdmin = false;

  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-[#004567]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu text-white  p-4  font-bold w-80">
          {isAdmin ? (
            <>
              <li className="border-y-2 border-sky-600 pb-2 rounded-md hover:bg-[#012f46]">
                <NavLink to="/dashboard/adminhome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li className="border-y-2 border-sky-600 pb-2 rounded-md hover:bg-[#012f46]">
                <NavLink to="/dashboard/addItem">
                  {" "}
                  <FaUtensils></FaUtensils> Add an Item
                </NavLink>
              </li>
              <li className="border-y-2 border-sky-600 pb-4 rounded-md hover:bg-[#012f46]">
                <NavLink to="/dashboard/manageitems">
                  <FaWallet></FaWallet> Manage Items
                </NavLink>
              </li>
              <li className="border-y-2 border-sky-600 pb-2 rounded-md hover:bg-[#012f46]">
                <NavLink to="/">
                  <FaBook></FaBook> Manage Bookings(not implemented)
                </NavLink>
              </li>
              <li className="border-y-2 border-sky-600 pb-4 rounded-md hover:bg-[#012f46]">
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="border-y-2 border-sky-600 pb-4 rounded-md hover:bg-[#012f46]">
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li className="border-y-2 border-sky-600 pb-4 rounded-md hover:bg-[#012f46]">
                <NavLink to="/">
                  <FaCalendarAlt></FaCalendarAlt> Reservations
                </NavLink>
              </li>
              <li className="border-y-2 border-sky-600 pb-4 rounded-md hover:bg-[#012f46]">
                <NavLink to="/">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li className="border-y-2 border-sky-600 pb-4 rounded-md hover:bg-[#012f46]">
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart> My Cart
                  <span className="badge inl bg-white font-bold badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li className=" border-y-2 border-sky-600 rounded-md hover:bg-[#012f46]">
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li className="border-y-2 border-sky-600 rounded-md hover:bg-[#012f46]">
            <NavLink to="/menu"> Our Menu</NavLink>
          </li>
          <li className="border-y-2 border-sky-600 rounded-md hover:bg-[#012f46]">
            <NavLink to="/order/salad">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
