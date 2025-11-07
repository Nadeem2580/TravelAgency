import React, { useEffect, useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Chip, CircularProgress } from "@mui/material";
import axios from "axios";
import toaster, { BASE_URL } from "../utils/utils";
import AllRoutes from "../All Api's";

const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Get All Users
  const getAllUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}${AllRoutes.all_users}`);
      setUsers(res.data.data || []);
      console.log(res)

    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Toggle Active / Inactive
  const toggleStatus = async (userId, currentStatus) => {
    try {
      const newStatus = !currentStatus;
      await axios.patch(`${BASE_URL}${AllRoutes.update_users}/${userId}`, { status: newStatus });

      setUsers((prev) =>
        prev.map((u) =>
          u._id === userId ? { ...u, status: newStatus } : u
        )
      );

      toaster({
        message: `User status updated to ${newStatus ? "Active" : "Inactive"}`,
        type: "success"
      })

    } catch (error) {
      console.error("Error updating user status:", error);
      toaster.error("Failed to update user status");
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2,color:"#ef6c57" }}>
        👥 Manage Users
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#ef6c57" }}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>IsVerify</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No users found
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => (
                  <TableRow key={user._id} hover>
                    <TableCell>{user.fullName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.isVerified == true ? "Verified" : "No verified"}</TableCell>
                    <TableCell>
                      <Chip
                        label={user.status === true ? "Active" : "Inactive"}
                        color={user.status === true ? "success" : "default"}
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        sx={{ fontSize: "10px", fontWeight: "bold", backgroundColor:user.status === true ? "#f50e34ff" :"#ef6c57" }}
                        color={user.status === "active" ? "error" : "success"}
                        onClick={() => toggleStatus(user._id, user.status)}
                      >
                        {user.status === true ? "Deactive" : "Active"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default AdminUser;
