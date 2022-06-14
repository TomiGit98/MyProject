import SideBarItem from "../SideBarItem/SideBarItem";
import { ReactComponent as HomeIcon } from "../../svgs/home.svg";
import { ReactComponent as UsersIcon } from "../../svgs/users.svg";
import { ReactComponent as FireIcon } from "../../svgs/fire.svg";



import "./SideBar.css";

const SideBar = () => (
    <div className="sidebar-container">
        <SideBarItem text="Home" icon={<HomeIcon />} />
        <SideBarItem text="Users" icon={<UsersIcon />} />
        <SideBarItem text="Trendings" icon={<FireIcon />} />
        <div className="sidebar-container-separator">
            <hr />
        </div>
        <SideBarItem text="Home" icon={<HomeIcon />} />
        <SideBarItem text="Users" icon={<UsersIcon />} />
        <SideBarItem text="Trendings" icon={<FireIcon />} />
        <div className="sidebar-container-separator">
            <hr />
        </div>
        <SideBarItem text="Home" icon={<HomeIcon />} />
        <SideBarItem text="Users" icon={<UsersIcon />} />
        <SideBarItem text="Trendings" icon={<FireIcon />} />
        <div className="sidebar-container-separator">
            <hr />
        </div>
        <SideBarItem text="Home" icon={<HomeIcon />} />
        <SideBarItem text="Users" icon={<UsersIcon />} />
        <SideBarItem text="Trendings" icon={<FireIcon />} />
        <div className="sidebar-container-separator">
            <hr />
        </div>
        <SideBarItem text="Home" icon={<HomeIcon />} />
        <SideBarItem text="Users" icon={<UsersIcon />} />
        <SideBarItem text="Trendings" icon={<FireIcon />} />
        <div className="sidebar-container-separator">
            <hr />
        </div>
        <SideBarItem text="Home" icon={<HomeIcon />} />
        <SideBarItem text="Users" icon={<UsersIcon />} />
        <SideBarItem text="Trendings" icon={<FireIcon />} />
        <div className="sidebar-container-separator">
            <hr />
        </div>
    </div>
);

export default SideBar;