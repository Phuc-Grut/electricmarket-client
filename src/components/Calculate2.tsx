import React from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";

interface CaculateProps {
  onSuccess: () => void;
}

const Calculate2 = ({ onSuccess }: CaculateProps) => {
  const handleCaculateCCFD = async (type: string) => {
    try {
      await axios.post(
        `https://localhost:7028/api/excel/caculate-ccfd/${type}`
      );
      onSuccess();
      alert("Tính CCFD thành công!");
    } catch (err: any) {
      console.error("Lỗi khi gọi API:", err);
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
          sx={{ p: 3, maxWidth: "30%", textAlign: "center" }}
        >
          <Typography variant="h6" gutterBottom>
            Tính CCFD-PM1
          </Typography>
          <Typography variant="caption" gutterBottom display="block">
            CCFD = QC x (PC - FMP) / 1000
          </Typography>
          <Button
            variant="contained"
            onClick={() => handleCaculateCCFD("pm1")}
            sx={{ mt: 1 }}
          >
            Caculate
          </Button>
        </Paper>

        {/* Ô tính Pm */}
        <Paper
          elevation={3}
          sx={{ p: 3, maxWidth: "30%", textAlign: "center" }}
        >
          <Typography variant="h6" gutterBottom>
            Tính CCFD-PM4
          </Typography>
          <Typography variant="caption" gutterBottom display="block">
            CCFD = QC x (PC - FMP) / 1000
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleCaculateCCFD("pm4")}
            sx={{ mt: 1 }}
          >
            Caculate
          </Button>
        </Paper>

        <Paper
          elevation={3}
          sx={{ p: 3, maxWidth: "30%", textAlign: "center" }}
        >
          <Typography variant="h6" gutterBottom>
            Tính CCFD-TB1
          </Typography>
          <Typography variant="caption" gutterBottom display="block">
            CCFD = QC x (PC - FMP) / 1000
          </Typography>
          <Button
            variant="contained"
            color="warning"
            onClick={() => handleCaculateCCFD("tb1")}
            sx={{ mt: 1 }}
          >
            Caculate
          </Button>
        </Paper>

        <Paper
          elevation={3}
          sx={{ p: 3, maxWidth: "30%", textAlign: "center" }}
        >
          <Typography variant="h6" gutterBottom>
            Tính CCFD-VT4
          </Typography>
          <Typography variant="caption" gutterBottom display="block">
            CCFD = QC x (PC - FMP) / 1000
          </Typography>
          <Button
            variant="contained"
            color="warning"
            onClick={() => handleCaculateCCFD("vt4")}
            sx={{ mt: 1 }}
          >
            Caculate
          </Button>
        </Paper>

        <Paper
          elevation={3}
          sx={{ p: 3, maxWidth: "30%", textAlign: "center" }}
        >
          <Typography variant="h6" gutterBottom>
            Tính CCFD-DH3
          </Typography>
          <Typography variant="caption" gutterBottom display="block">
            CCFD = QC x (PC - FMP) / 1000
          </Typography>
          <Button
            variant="contained"
            color="warning"
            onClick={() => handleCaculateCCFD("dh3")}
            sx={{ mt: 1 }}
          >
            Caculate
          </Button>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Calculate2;
