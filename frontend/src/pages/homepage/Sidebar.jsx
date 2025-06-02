import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
// import { useAuth } from "../../lib/Auth";

export default function SideNav() {
    //   const { user } = useAuth();
    //   const isSuperAdmin = user?.role === "super_admin";
    const isSuperAdmin = "admin";

    // console.log('sidebar user',user.role);

    const [isOpen, setIsOpen] = useState(false);
    const [isSubNavOpen, setIsSubNavOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubNav = () => {
        setIsSubNavOpen(!isSubNavOpen);
    };

    const isSelected = (path) => {
        // return location.pathname === path;
        return location.pathname === `/home/${path}` || location.pathname === path;
    };

    return (
        <div>
            <div className="lg:hidden p-4">
                <MenuIcon className="text-3xl cursor-pointer" onClick={toggleSidebar} />
            </div>

            <div
                className={`fixed inset-0 bg-gray-600 bg-opacity-50 z-40 transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="bg-custom-purple h-full w-64 shadow-lg flex flex-col">
                    <div className="flex justify-between p-4">
                        <h2 className="text-xl font-semibold text-white">Menu</h2>
                        <CloseIcon
                            className="text-white cursor-pointer"
                            onClick={toggleSidebar}
                        />
                    </div>
                    <nav className="flex-grow">
                        {isSuperAdmin && (
                            <>
                                <Link
                                    to="dietition-home"
                                    className={`flex items-center p-4 text-white hover:bg-gray-800 hover:rounded-l-full ${isSelected("/view-leads") ? "underline-white" : ""
                                        }`}
                                >
                                    <MedicationLiquidIcon
                                        fontSize="small"
                                        sx={{ color: "inherit" }}
                                    />
                                    <span className="ml-3">Dashboard </span>
                                </Link>
                                 {/* upload-diet  */}
                                <Link
                                    to="upload-diet"
                                    className={`flex items-center p-4 text-white hover:bg-gray-800 hover:rounded-l-full ${isSelected("/upload-diet") ? "underline-white" : ""
                                        }`}
                                >
                                    
                                <DriveFolderUploadIcon
                                    fontSize="small"
                                    sx={{ color: "inherit" }}
                                />
                                <span className="ml-3">Uploaded Plans</span>
                                </Link>
                                {/* Profile Settings  */}
                                <Link
                                    to="profile"
                                    className={`flex items-center p-4 text-white hover:bg-gray-800 hover:rounded-l-full ${isSelected("/profile") ? "underline-white" : ""
                                        }`}
                                >
                                    
                                <DriveFileRenameOutlineIcon
                                    fontSize="small"
                                    sx={{ color: "inherit" }}
                                />
                                <span className="ml-3">Profile Settings</span>
                                </Link>
                            </>
                        )}
                        {!isSuperAdmin && (
                            <>
                                <Link
                                    to="admin-dashboard"
                                    className={`flex items-center p-4 text-white hover:bg-gray-800  hover:rounded-l-full ${isSelected("/admin-dashboard") ? "underline-white" : ""
                                        }`}
                                >
                                    <HomeIcon fontSize="small" sx={{ color: "white" }} />
                                    <span className="ml-3">Your leads</span>
                                </Link>
                                {/* <div>
                      <div
                        className="flex items-center justify-between p-4 text-white hover:bg-gray-800 cursor-pointer hover:rounded-l-full"
                        onClick={toggleSubNav}
                      >
                        <div className="flex items-center">
                          <img
                            className="w-6"
                            src="/images/tab/leads.png"
                            alt="createLeads"
                          />
                          <span className="ml-3">Create Leads</span>
                        </div>
                        {isSubNavOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </div>
                      {isSubNavOpen && (
                        <div className="pl-8">
                          {subNavItems.map((item, index) => (
                            <Link
                              key={index}
                              to={item.path}
                              className={`flex items-center p-4 text-white hover:bg-gray-800 hover:bg-gray-800 hover:rounded-l-full ${
                                isSelected(item.path) ? "underline-white" : ""
                              }`}
                            >
                              <img
                                className="w-6"
                                src={item.icon}
                                alt={item.name}
                              />
                              <span className="ml-3">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div> */}
                                <Link
                                    to="listBde"
                                    className={`flex items-center p-4 text-white hover:bg-gray-800  hover:rounded-l-full ${isSelected("/listBde") ? "underline-white" : ""
                                        }`}
                                >
                                    <GroupIcon fontSize="small" sx={{ color: "white" }} />
                                    <span className="ml-3">BDE</span>
                                </Link>
                                <Link
                                    to="createBde"
                                    className={`flex items-center p-4 text-white hover:bg-gray-800  hover:rounded-l-full ${isSelected("/createBde") ? "underline-white" : ""
                                        }`}
                                >
                                    <PersonAddAltIcon
                                        fontSize="small"
                                        sx={{ color: "white" }}
                                    />
                                    <span className="ml-3">Create BDE</span>
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>

            {isSuperAdmin && (
                <>
                    <div className="hidden lg:block fixed h-full overflow-auto w-64 bg-green-100 shadow-lg">
                        <nav className="flex-grow ml-2 mt-2 ">
                            <Link
                                to="dietition-home"
                                className={`flex items-center p-2 text-gray-800 hover:bg-gray-800 hover:text-white hover:rounded-l-full ${isSelected("/dietition-home") ? "underline-white" : ""
                                    }`}
                            >
                                <MedicationLiquidIcon
                                    fontSize="small"
                                    sx={{ color: "inherit" }}
                                />
                                <span className="ml-3">Dashboard </span>
                            </Link>
                            {/* <div>
                <div
                  className="flex items-center justify-between p-4 text-white hover:bg-gray-800 cursor-pointer hover:rounded-l-full"
                  onClick={toggleSubNav}
                >
                  <div className="flex items-center">
                    <img
                      className="w-6"
                      src="/images/tab/leads.png"
                      alt="createLeads"
                    />
                    <span className="ml-3">Create Leads</span>
                  </div>
                  {isSubNavOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </div>
                {isSubNavOpen && (
                  <div className="pl-8">
                    {subNavItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className={`flex items-center p-4 text-white hover:bg-gray-800 hover:bg-gray-800 hover:rounded-l-full ${
                          isSelected(item.path) ? "underline-white" : ""
                        }`}
                      >
                        <img className="w-6" src={item.icon} alt={item.name} />
                        <span className="ml-3">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div> */}
                            <Link
                                to="upload-diet"
                                className={`flex items-center p-2 text-gray-800  hover:bg-gray-800 hover:text-white hover:rounded-l-full ${isSelected("/upload-diet") ? "underline-white" : ""
                                    }`}
                            >
                                <DriveFolderUploadIcon
                                    fontSize="small"
                                    sx={{ color: "inherit" }}
                                />
                                <span className="ml-3">Uploaded Plans</span>
                            </Link>
                            {/* create source of lead */}

                            <Link
                                to="profile"
                                className={`flex items-center p-2 text-gray-800  hover:bg-gray-800 hover:text-white hover:rounded-l-full ${isSelected("/profile") ? "underline-white" : ""
                                    }`}
                            >
                                <DriveFileRenameOutlineIcon
                                    fontSize="small"
                                    sx={{ color: "inherit" }}
                                />
                                <span className="ml-3">Profile Settings</span>
                            </Link>
                        </nav>
                    </div>
                </>
            )}
            {!isSuperAdmin && (
                <>
                    <div className="hidden lg:block fixed h-full overflow-auto w-64 bg-custom-purple shadow-lg">
                        <nav className="flex-grow ml-2 mt-2">
                            <Link
                                to="admin-dashboard"
                                className={`flex items-center p-4 text-white hover:bg-gray-800  hover:rounded-l-full ${isSelected("/admin-dashboard") ? "underline-white" : ""
                                    }`}
                            >
                                <HomeIcon fontSize="small" sx={{ color: "white" }} />
                                <span className="ml-3">Your leads</span>
                            </Link>
                            <div>
                                <div
                                    className="flex items-center justify-between p-4 text-white hover:bg-gray-800 cursor-pointer hover:rounded-l-full"
                                    onClick={toggleSubNav}
                                >
                                    <div className="flex items-center">
                                        <img
                                            className="w-6"
                                            src="/images/tab/leads.png"
                                            alt="createLeads"
                                        />
                                        <span className="ml-3">Create Leads</span>
                                    </div>
                                    {isSubNavOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </div>
                                {isSubNavOpen && (
                                    <div className="pl-8">
                                        {subNavItems.map((item, index) => (
                                            <Link
                                                key={index}
                                                to={item.path}
                                                className={`flex items-center p-4 text-white hover:bg-gray-800 hover:rounded-l-full ${isSelected(item.path) ? "underline-white" : ""
                                                    }`}
                                            >
                                                <img className="w-6" src={item.icon} alt={item.name} />
                                                <span className="ml-3">{item.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <Link
                                to="listBde"
                                className={`flex items-center p-4 text-white hover:bg-gray-800  hover:rounded-l-full ${isSelected("/listBde") ? "underline-white" : ""
                                    }`}
                            >
                                <GroupIcon fontSize="small" sx={{ color: "white" }} />
                                <span className="ml-3">BDE</span>
                            </Link>
                            <Link
                                to="createBde"
                                className={`flex items-center p-4 text-white hover:bg-gray-800  hover:rounded-l-full ${isSelected("/createBde") ? "underline-white" : ""
                                    }`}
                            >
                                <PersonAddAltIcon fontSize="small" sx={{ color: "white" }} />
                                <span className="ml-3">Create BDE</span>
                            </Link>
                        </nav>
                    </div>
                </>
            )}
        </div>
    );
}

const subNavItems = [
    {
        name: "School",
        path: "create-school-lead",
        icon: "/images/Leads/schoolIcon.png",
    },
    {
        name: "Franchise",
        path: "create-franchise",
        icon: "/images/Leads/franchise.png",
    },
    {
        name: "School Agent",
        path: "create-school-agent",
        icon: "/images/Leads/agent.png",
    },
    {
        name: "Franchise Agent",
        path: "create-franchise-agent",
        icon: "/images/Leads/agent1.png",
    },
    {
        name: "REP",
        path: "create-rep",
        icon: "/images/Leads/schoolIcon.png",
    },
    {
        name: "B2C",
        path: "create-b2c",
        icon: "/images/Leads/schoolIcon.png",
    },
];
