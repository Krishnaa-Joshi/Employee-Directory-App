import { useContext } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";
import AddEmployeesIcon from "../assets/icons/AddEmployees.svg";

/*  
    Add Employees Component -
      - Heading and Add employee button
*/

function AddEmployee() {
  const { setIsAddEmployeeModalOpen, setIsEditing, setSelectedEmployee } =
    useContext(EmployeeContext);

  const handleAddEmployee = () => {
    setIsEditing(false);
    setSelectedEmployee(null);
    setIsAddEmployeeModalOpen(true);
  };

  return (
    <div className="flex items-center justify-between mx-4 my-6 flex-wrap gap-3">
      {/* heading */}
      <span className="font-semibold text-lg">Employees</span>

      {/* divider */}
      <div className="flex-1 hidden sm:block mx-4">
        <div className="w-full h-px bg-gray-300"></div>
      </div>

      {/* Add Employees Button */}
      <button
        className="flex items-center bg-[#6941C5] text-white px-4 py-2 rounded-md gap-2 cursor-pointer"
        onClick={handleAddEmployee}
      >
        <img src={AddEmployeesIcon} alt="" />
        <span className="noto-sans-regular">Add Employees</span>
      </button>
    </div>
  );
}

export default AddEmployee;
