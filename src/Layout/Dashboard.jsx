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
import { CgProfile } from "react-icons/cg";
import useCart from "../Hooks/useCart";
import useCheckRole from "../Hooks/useCheckRole";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  const [role, isRoleLoading] = useCheckRole();
  let roleRender;

  if (role === "admin") {
    roleRender = (
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
    );
  } else if (role === "user") {
    roleRender = (
      <>
        <li className="border-y-2 border-sky-600 pb-4 rounded-md hover:bg-[#012f46]">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "active-dashboard" : "default-dashboard"
            }
          >
            <CgProfile></CgProfile> Profile
          </NavLink>
        </li>
        <li className="border-y-2 border-sky-600 pb-4 rounded-md hover:bg-[#012f46]">
          <NavLink
            to="/dashboard/myclass"
            className={({ isActive }) =>
              isActive ? "active-dashboard" : "default-dashboard"
            }
          >
            <FaShoppingCart></FaShoppingCart> My Selected Classes
            <span className="badge inl bg-white font-bold badge-secondary">
              +{cart?.length || 0}
            </span>
          </NavLink>
        </li>

        <li className="border-y-2 border-sky-600 pb-4 rounded-md hover:bg-[#012f46]">
          <NavLink
            to="/dashboard/enrolledclass"
            className={({ isActive }) =>
              isActive ? "active-dashboard" : "default-dashboard"
            }
          >
            <FaCalendarAlt></FaCalendarAlt> My Enrolled Classes
          </NavLink>
        </li>
        <li className="border-y-2 border-sky-600 pb-4 rounded-md hover:bg-[#012f46]">
          <NavLink
            to="/dashboard/payment"
            className={({ isActive }) =>
              isActive ? "active-dashboard" : "default-dashboard"
            }
          >
            <FaWallet></FaWallet> Payment History
          </NavLink>
        </li>
      </>
    );
  } else {
    <>
      <li className="border-y-2 border-sky-600 pb-4 rounded-md hover:bg-[#012f46]">
        <NavLink
          to="/dashboard/userhome"
          className={({ isActive }) =>
            isActive ? "active-dashboard" : "default-dashboard"
          }
        >
          <CgProfile></CgProfile> Profile
        </NavLink>
      </li>
      <li className="border-y-2 border-sky-600 pb-4 rounded-md hover:bg-[#012f46]">
        <NavLink
          to="/dashboard/myclass"
          className={({ isActive }) =>
            isActive ? "active-dashboard" : "default-dashboard"
          }
        >
          <FaShoppingCart></FaShoppingCart> My Selected Classes
          <span className="badge inl bg-white font-bold badge-secondary">
            +{cart?.length || 0}
          </span>
        </NavLink>
      </li>

      <li className="border-y-2 border-sky-600 pb-4 rounded-md hover:bg-[#012f46]">
        <NavLink
          to="/dashboard/enrolledclass"
          className={({ isActive }) =>
            isActive ? "active-dashboard" : "default-dashboard"
          }
        >
          <FaCalendarAlt></FaCalendarAlt> My Enrolled Classes
        </NavLink>
      </li>
      <li className="border-y-2 border-sky-600 pb-4 rounded-md hover:bg-[#012f46]">
        <NavLink
          to="/dashboard/payment"
          className={({ isActive }) =>
            isActive ? "active-dashboard" : "default-dashboard"
          }
        >
          <FaWallet></FaWallet> Payment History
        </NavLink>
      </li>
    </>;
  }

  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-[#004567]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu text-white  p-4  font-bold w-80">
          {roleRender}

          <div className="divider"></div>
          <li className=" border-y-2 border-sky-600 rounded-md hover:bg-[#012f46]">
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li className="border-y-2 border-sky-600 rounded-md hover:bg-[#012f46]">
            <NavLink to="/instructors">Instructors </NavLink>
          </li>
          <li className="border-y-2 border-sky-600 rounded-md hover:bg-[#012f46]">
            <NavLink to="/classes">Classes</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
