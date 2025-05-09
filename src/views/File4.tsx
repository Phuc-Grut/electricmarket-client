import { Box, Divider, Typography } from "@mui/material";
import TableViewer from "../components/TableView";
import { useState } from "react";

const File4 = () => {
  const [reloadKey, setReloadKey] = useState(0);

  const handleReload = () => {
    setReloadKey((prev) => prev + 1);
  };
  return (
    <Box sx={{ p: 4 }}>
      {/* Phần tính toán */}
      <Typography variant="h5" mb={0}>
        🔢 Tính toán dữ liệu
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Phần xem dữ liệu */}
      <Typography variant="h5" mb={0}>
        📊 Xem dữ liệu bảng
      </Typography>
      <TableViewer reloadKey={reloadKey} />
    </Box>
  );
};

export default File4;
