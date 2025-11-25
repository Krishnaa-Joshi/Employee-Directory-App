import axios from "axios";

/* 
  Employee Service -
    - API calls for Employee CRUD operations
*/

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Fetch all employees
export const getEmployees = async () => {
  const res = await api.get("/employees");
  return res.data; 
};

// Add new employee
export const createEmployee = async (employeeData) => {
  const res = await api.post("/employees", employeeData);
  return res.data;
};

// Update employee
export const updateEmployee = async (id, employeeData) => {
  const res = await api.put(`/employees/${id}`, employeeData);
  return res.data;
};

// Remove employee
export const deleteEmployee = async (id) => {
  const res = await api.delete(`/employees/${id}`);
  return res.data;
};
