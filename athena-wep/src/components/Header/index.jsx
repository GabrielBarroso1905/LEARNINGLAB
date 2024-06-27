import { LogOut } from "lucide-react";
import "./styles.css";
import { useEffect, useState } from "react";

function Header() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const userStoraged = localStorage.getItem("athena:user");
    setCurrentUser(JSON.parse(userStoraged));
  }, []);

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-infor">
          <span>{currentUser?.name}</span>
          <span>{currentUser?.email}</span>
        </div>

        <div className="profile-preview">{currentUser?.name?.slice(0, 2)}</div>

        <button className="button-logout">
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
}

export default Header;
