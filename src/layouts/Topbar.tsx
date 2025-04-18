import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#0074D9", color: "#fff" }}>
      <Link
        to="/"
        style={{ marginRight: "20px", color: "white", textDecoration: "none" }}
      >
        File 6
      </Link>
      <Link
        to="/import-excel"
        style={{ marginRight: "20px", color: "white", textDecoration: "none" }}
      >
        Nhập Excel
      </Link>
      <Link
        to="/file5"
        style={{ marginRight: "20px", color: "white", textDecoration: "none" }}
      >
        File 5
      </Link>
    </nav>
  );
};

export default Topbar;
