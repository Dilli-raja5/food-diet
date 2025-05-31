import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


export default function TopNav() {
  const navigate = useNavigate();
  const { logout } = useAuth();


  const handleLogout = () => {
    alert("Are you sure you want to logout?");
    logout();
    navigate("/login");
  };

  return (
    <section className="h-[10vh] w-full px-2 bg-page-bg lg:p-2 flex justify-between items-center">
      {/* Logo Section */}
      <Link
        to={"/home/view-leads"}
        className="flex items-center cursor-pointer"
      >
        <div className="w-[15vw] lg:w-[10vw] h-auto flex items-center">
          <img
            className="object-contain w-full h-full"
            src="/icons/medical.png"
            alt="logo"
          />
        </div>
      </Link>
      {/* Logout Section */}
      <Link
        to={"/login"}
        onClick={handleLogout}
        className="w-[4vw] h-full flex justify-center items-center cursor-pointer"
      >
        <img
          className="object-contain lg:w-[2vw]"
          src="/icons/logout.png"
          alt="logout"
        />
      </Link>
    </section>
  );
}
