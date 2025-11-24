import { createContext, useState, useEffect } from "react";
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/EmployeeService";

import toast from "react-hot-toast";

/*
  Employee Context-  
    - for State management
*/

// eslint-disable-next-line react-refresh/only-export-components
export const EmployeeContext = createContext(null);

function EmployeesContext({ children }) {

  const [isViewingProfile, setIsViewingProfile] = useState(false); 
  const [selectedEmployee, setSelectedEmployee] = useState(null);  
  const [isEditing, setIsEditing] = useState(false);
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
  const [employeesData, setEmployeesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getEmployees();
      setEmployeesData(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load employees");
      toast.error("Unable to load employees");
    } finally {
      setLoading(false);
    }
  };

  const addEmployee = async (employee) => {
    const newEmp = await createEmployee(employee);
    setEmployeesData((prev) => [...prev, newEmp]);
  };

  const editEmployee = async (id, updated) => {
    const updatedEmp = await updateEmployee(id, updated);
    setEmployeesData((prev) =>
      prev.map((emp) => (emp.id === id ? updatedEmp : emp))
    );
  };

  const removeEmployee = async (id) => {
    await deleteEmployee(id);
    setEmployeesData((prev) => prev.filter((emp) => emp.id !== id));
  };

  return (
    <EmployeeContext.Provider
      value={{
        isViewingProfile,
        setIsViewingProfile,
        selectedEmployee,
        setSelectedEmployee,
        isEditing,
        setIsEditing,
        employeesData,
        setEmployeesData,
        loading,
        setLoading,
        isAddEmployeeModalOpen,
        setIsAddEmployeeModalOpen,
        fetchEmployees,
        addEmployee,
        editEmployee,
        removeEmployee,
        showDeletePopup,
        setShowDeletePopup,
        searchTerm,
        setSearchTerm,
        error,
        setError,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeesContext;
