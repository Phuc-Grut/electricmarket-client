import React, { useEffect, useState } from "react";
import {
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
 
interface TableViewerProps {
    reloadKey?: number;
  }

const TableViewer = ({reloadKey} : TableViewerProps) => {
  const [tables, setTables] = useState<string[]>([]);
  const [selectedTable, setSelectedTable] = useState<string>("");
  const [tableData, setTableData] = useState<any[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get<string[]>("https://localhost:7028/api/excel/tables")
      .then((res) => setTables(res.data))
      .catch((err) => console.error("Lỗi khi lấy danh sách bảng:", err));
  }, [reloadKey]);

  useEffect(() => {
    if (!selectedTable) return;

    setLoading(true);
    axios
      .get<any[]>("https://localhost:7028/api/excel/data-table", {
        params: { tableName: selectedTable },
      })
      .then((res) => {
        setTableData(res.data);
        setColumns(res.data.length > 0 ? Object.keys(res.data[0]) : []);
      })
      .catch((err) => console.error("Lỗi khi lấy dữ liệu bảng:", err))
      .finally(() => setLoading(false));
  }, [selectedTable]);

  return (
    <Container sx={{ mt: 4 }}>

      <FormControl sx={{ mb: 3, width: "50%" }}>
        <InputLabel>Chọn bảng</InputLabel>
        <Select
          value={selectedTable}
          label="Chọn bảng"
          onChange={(e) => setSelectedTable(e.target.value)}
        >
          {tables.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {loading ? (
        <CircularProgress size={60} thickness={10} />
      ) : (
        tableData.length > 0 && (
          <TableContainer
            component={Paper}
            sx={{
              maxHeight: 500, // Giới hạn chiều cao bảng
              overflow: "auto", // Cho phép cuộn khi vượt quá
            }}
          >
            <Table size="small">
              <TableHead>
                <TableRow>
                  {columns.map((col) => (
                    <TableCell key={col} sx={{ borderRight: '1px solid #ccc', backgroundColor: 'aqua' }}>{col}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row, idx) => (
                  <TableRow key={idx}>
                    {columns.map((col) => (
                      <TableCell key={col} sx={{ borderRight: '1px solid #ccc' }}>{row[col]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      )}
    </Container>
  );
};

export default TableViewer;
