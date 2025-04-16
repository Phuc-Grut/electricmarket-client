import { Box, Divider, Typography } from "@mui/material";
import Caculate from "../components/Caculate";
import TableViewer from "../components/TableView";
import { useState } from "react";

const Home = () => {
  const [reloadKey, setReloadKey] = useState(0);

  // Hàm gọi từ Caculate khi tính xong
  const handleReload = () => {
    setReloadKey((prev) => prev + 1); // đổi key → trigger reload
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Phần tính toán */}
      <Typography variant="h5" mb={0}>
        🔢 Tính toán dữ liệu
      </Typography>
      <Caculate onSuccess={handleReload} />

      <Divider sx={{ my: 4 }} />

      {/* Phần xem dữ liệu */}
      <Typography variant="h5" mb={0}>
        📊 Xem dữ liệu bảng
      </Typography>
      <TableViewer reloadKey={reloadKey} />
    </Box>
  );
};

export default Home;
