import EmployeeListItem from "./EmployeeListItem";
import { useContext } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";

/*
  Employee List Component - 
   - Display All or searched Employees
*/
function EmployeeList() {
  const { employeesData, searchTerm, loading} = useContext(EmployeeContext);

  const SearchValue = searchTerm.trim().toLowerCase();

  const filteredEmployees =
    SearchValue.length === 0
      ? employeesData
      : employeesData.filter((emp) => {
          const name = emp.name?.toLowerCase().includes(SearchValue);
          const dept = emp.department?.toLowerCase().includes(SearchValue);
          const role = emp.role?.toLowerCase().includes(SearchValue);
          return name || dept || role;
        });

  const NoMatchFound = SearchValue.length > 0 && filteredEmployees.length === 0;

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

      {/* display All or searched Employees  */}
      <div className="overflow-y-auto h-[calc(100vh-220px)] lg:h-[calc(90vh-240px)] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400">
        {NoMatchFound ? (
          <p className="text-center text-gray-500 mt-4">
            No employees match "<span className="font-semibold">{SearchValue}</span>"
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
