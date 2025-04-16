import React from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";

interface CaculateProps {
  onSuccess: () => void;
}

const Caculate = ({ onSuccess }: CaculateProps) => {
  const handleCaculateFmp = async () => {
    try {
      await axios.post("https://localhost:7028/api/excel/caculate-fmp");
      alert("Tính FMP thành công!");
      onSuccess();
    } catch (err: any) {
      const errorMessage = err.response?.data?.error || "Lỗi không xác định";
      alert(` ${errorMessage}`);
    }
  };

  const handleCaculatePm = async () => {
    try {
      await axios.post("https://localhost:7028/api/excel/calculate-pm");
      alert("Tính Pm thành công!");
      onSuccess();
    } catch (err: any) {
      console.error(" Lỗi khi tính Pm:", err);
      const errorMessage = err.response?.data?.error || "Lỗi không xác định";
      alert(` ${errorMessage}`);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Stack direction="row" spacing={4} justifyContent={"center"}>
        {/* Ô tính FMP */}
        <Paper
          elevation={3}
          sx={{ p: 3, maxWidth: "50%", textAlign: "center" }}
        >
          <Typography variant="h6" gutterBottom>
            Tính FMP
          </Typography>
          <Typography variant="caption" gutterBottom display="block">
            GIÁ THỊ TRƯỜNG TOÀN PHẦN : FMP = SMP + CAN
          </Typography>
          <Button
            variant="contained"
            onClick={handleCaculateFmp}
            sx={{ mt: 1 }}
          >
            Caculate
          </Button>
        </Paper>

        {/* Ô tính Pm */}
        <Paper
          elevation={3}
          sx={{ p: 3, maxWidth: "50%", textAlign: "center" }}
        >
          <Typography variant="h6" gutterBottom>
            Tính Pm
          </Typography>
          <Typography variant="caption" gutterBottom display="block">
            FMP = Giá thị trường toàn phần (FMP) - Giá A0 công bố (FMP)
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCaculatePm}
            sx={{ mt: 1 }}
          >
            Caculate
          </Button>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Caculate;
