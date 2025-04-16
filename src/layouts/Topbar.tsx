import { Link } from 'react-router-dom';

const Topbar = () => {
  
    return (
        <nav style={{ padding: '10px', background: '#0074D9', color: '#fff' }}>
        <Link to="/" style={{ marginRight: '20px', color: 'white', textDecoration: 'none' }}>Trang chủ</Link>
        <Link to="/import-excel" style={{ color: 'white', textDecoration: 'none' }}>Nhập Excel</Link>
      </nav>
    )
}

export default Topbar;