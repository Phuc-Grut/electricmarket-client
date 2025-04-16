import {
  Box,
  Button,
  Container,
  Input,
  Stack,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const ImportExcelView: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [sheetNames, setSheetNames] = useState<string[]>([]);
  const [selectedSheet, setSelectedSheet] = useState<string>("");
  const [headerRow, setHeaderRow] = useState<number>();
  const [startRow, setStartRow] = useState<number>();
  const [tableName, setTableName] = useState<string>("");
  // const [endRow, setEndRow] = useState<number>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setSheetNames([]);
    setSelectedSheet("");
  };

  const handleNext = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post<string[]>(
        "https://localhost:7028/api/excel/excel",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const names = response.data;
      setSheetNames(names);
      setSelectedSheet(names[0] || "");
    } catch (error) {
      console.error("Lỗi khi lấy danh sách sheet:", error);
    }
  };

  const handleImportSheet = async () => {
    if (!file || !selectedSheet) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        `https://localhost:7028/api/excel/import-sheet?selectedSheet=${encodeURIComponent(
          selectedSheet
        )}&headerRow=${headerRow}&startRow=${startRow}&sheetName=${encodeURIComponent(
          tableName
        )}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Import thành công:", res.data);
      alert(`Đã import sheet "${selectedSheet}" thành công.`);
    } catch (err: any) {
      const errorMessage = err.response?.data?.error || "Lỗi không xác định";
      alert(` ${errorMessage}`)
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ mt: 5, p: 4, bgcolor: "#fafafa", borderRadius: 2, boxShadow: 2 }}
    >
      <Typography variant="h5" mb={3}>
        Import Excel File
      </Typography>

      <Stack spacing={3}>
        <Box display="flex" alignItems="center" gap={2}>
          <Input
            type="file"
            id="excelFile"
            inputProps={{ accept: ".xlsx" }}
            onChange={handleFileChange}
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        </Box>

        {sheetNames.length > 0 && (
          <Box>
            <Typography variant="subtitle1" mb={1}>
              Chọn sheet để import:
            </Typography>
            <Select
              fullWidth
              value={selectedSheet}
              onChange={(e) => setSelectedSheet(e.target.value)}
              sx={{ mb: 2 }}
            >
              {sheetNames.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>

            <Input
              type="text"
              value={tableName}
              onChange={(e) => setTableName(e.target.value)}
              placeholder="Tên bảng (bỏ trống để dùng tên sheet)"
              fullWidth
              sx={{ mb: 2 }}
            />

            <Button
              variant="contained"
              color="success"
              onClick={handleImportSheet}
              disabled={!selectedSheet || !file}
            >
              Import
            </Button>
            <Box display="flex" gap={2} mb={2}>
              <Input
                type="number"
                value={headerRow}
                onChange={(e) => setHeaderRow(Number(e.target.value))}
                placeholder="Dòng tiêu đề (VD: 4)"
                fullWidth
              />
              <Input
                type="number"
                value={startRow}
                onChange={(e) => setStartRow(Number(e.target.value))}
                placeholder="Dòng bắt đầu (VD: 6)"
                fullWidth
              />
              {/* <Input
                type="number"
                value={endRow}
                onChange={(e) => setEndRow(Number(e.target.value))}
                placeholder="Dòng kết thúc (tuỳ chọn)"
                fullWidth
              /> */}
            </Box>
          </Box>
        )}
      </Stack>
    </Container>
  );
};

export default ImportExcelView;
