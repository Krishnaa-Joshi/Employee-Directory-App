import EmployeeListItem from "./EmployeeListItem";
import { useContext } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";

/*
  Employee List Component - 
   - Display All or searched Employees
*/
function EmployeeList() {
  const { employeesData, searchTerm, loading, error  } = useContext(EmployeeContext);

  const safeEmployees = Array.isArray(employeesData) ? employeesData : [];

  const term = searchTerm.trim().toLowerCase();

  const filteredEmployees =
    term.length === 0
      ? safeEmployees
      : safeEmployees.filter((emp) => {
          const nameMatch = emp.name?.toLowerCase().includes(term);
          const deptMatch = emp.department?.toLowerCase().includes(term);
          const roleMatch = emp.role?.toLowerCase().includes(term);
          return nameMatch || deptMatch || roleMatch;
        });

  const showNoMatch = term.length > 0 && filteredEmployees.length === 0;

  return (
    <>
      {/* header */}
      <div className="hidden lg:grid grid-cols-4 p-4 border-b mx-4 my-6">
        <span className="noto-sans-medium font-bold">Name</span>
        <span className="noto-sans-medium text-[#878787]">Employee Id</span>
        <span className="noto-sans-medium text-[#878787]">Department</span>
        <span className="noto-sans-medium text-[#878787]">Role</span>
      </div>

      {/* loading or error Message*/}
      {loading && (
        <p className="text-center text-gray-500 mt-4">Loading employees...</p>
      )}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* display All or searched Employees  */}
      <div className="overflow-y-auto h-[calc(100vh-220px)] lg:h-[calc(90vh-240px)] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400">
        {showNoMatch ? (
          <p className="text-center text-gray-500 mt-4">
            No employees match "<span className="font-semibold">{term}</span>"
          </p>
        ) : (
          filteredEmployees.map((emp) => (
            <EmployeeListItem key={emp.id} employee={emp} />
          ))
        )}
      </div>
    </>
  );
}

export default EmployeeList;
