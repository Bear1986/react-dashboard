import "./Navbar.css";
import avatar from "../../assets/avatar-lg.png";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar__left">
        <a href="#">Users</a>
        <a href="#">Tracks</a>
        <a href="#">Admin</a>
      </div>
      <div className="navbar__right">
        <a href="#">
          <i className="fa fa-search"></i>
        </a>
        <a href="#">
          <i className="fa fa-clock-o"></i>
        </a>
        <a href="#">
          <img width="25" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
