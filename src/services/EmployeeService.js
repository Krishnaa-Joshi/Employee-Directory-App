import axios from "axios";

/* 
  Employee Service -
    - API calls for Employee CRUD operations
*/

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// GET all employees
export const getEmployees = async () => {
  const res = await api.get("/employees");
  return res.data; 
};

// POST new employee
export const createEmployee = async (employeeData) => {
  const res = await api.post("/employees", employeeData);
  return res.data;
};

// PUT update employee
export const updateEmployee = async (id, employeeData) => {
  const res = await api.put(`/employees/${id}`, employeeData);
  return res.data;
};

// DELETE employee
export const deleteEmployee = async (id) => {
  const res = await api.delete(`/employees/${id}`);
  return res.data;
};
