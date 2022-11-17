import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const path = useLocation();
  const pathname = path.pathname;

  return (
    <ul className="list-group">
      <li
        className={
          pathname === "/users" ? "list-group-item active" : "list-group-item"
        }
      >
        <Link to="/users">Users </Link>
      </li>
      <li
        className={
          pathname === "/roles" ? "list-group-item active" : "list-group-item"
        }
      >
        <Link to="/roles">Roles</Link>
      </li>
      <li
        className={
          pathname === "/permissions"
            ? "list-group-item active"
            : "list-group-item"
        }
      >
        <Link to="/permissions">Permissions</Link>
      </li>
    </ul>
  );
}
