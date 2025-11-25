import { useContext, useEffect, useState } from "react";
import Employee from "../assets/icons/PurpleEmployee.svg";
import cancel from "../assets/icons/cancel.svg";
import { EmployeeContext } from "../Context/EmployeeContext";
import toast from "react-hot-toast";

/* 
  Employee Form Component -
    - Form to Add or Edit employee details
*/

function EmployeeForm() {
  const {
    isEditing,
    setIsEditing,
    isAddEmployeeModalOpen,
    setIsAddEmployeeModalOpen,
    selectedEmployee,
    setSelectedEmployee,
    addEmployee,
    editEmployee,
  } = useContext(EmployeeContext);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    if (isEditing && selectedEmployee) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setName(selectedEmployee.name ?? "");
      setRole(selectedEmployee.role ?? "");
      setDepartment(selectedEmployee.department ?? "");
    } else {
      setName("");
      setRole("");
      setDepartment("");
    }
  }, [isEditing, selectedEmployee]);

  if (!isAddEmployeeModalOpen && !isEditing){
    return null
  }

  const handleClose = () => {
    setIsAddEmployeeModalOpen(false);
    setIsEditing(false);
    setSelectedEmployee(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !role.trim() || !department.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    const payload = { name, role, department };

    try {
      if (isEditing && selectedEmployee) {
        await editEmployee(selectedEmployee.id, payload);
        toast.success(`${name} updated successfully`);
      } else {
        await addEmployee(payload);
        toast.success(`${name} added successfully`);
      }

      handleClose();
    } catch (err) {
      console.error("Error saving employee:", err);
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-xs z-10 flex justify-center items-center px-3 sm:px-4">
      {/* Modal */}
      <div className="w-full max-w-sm sm:max-w-md bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl gap-6 flex flex-col popup shadow-lg">
        {/* Heading */}
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <img src={Employee} alt="" className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="text-[#6941C5] font-bold text-lg sm:text-xl noto-sans-medium">
              {isEditing ? "Edit Employee" : "Add Employee"}
            </span>
          </div>

          {/* Cancel button */}
          <img
            src={cancel}
            alt="close"
            className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6"
            onClick={handleClose}
          />
        </div>

        {/* Form */}
        <form className="flex flex-col gap-3 sm:gap-4" onSubmit={handleSubmit}>
          {/* Name */}
          <label className="flex flex-col gap-1">
            <span className="label noto-sans-medium text-sm sm:text-base">
              Name
            </span>
            <input
              type="text"
              className="border-2 border-[#F2F2F2] rounded-md px-2 h-9 text-sm sm:text-base"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          {/* Role */}
          <label className="flex flex-col gap-1">
            <span className="label noto-sans-medium text-sm sm:text-base">
              Role
            </span>
            <input
              type="text"
              className="border-2 border-[#F2F2F2] rounded-md px-2 h-9 text-sm sm:text-base"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </label>

          {/* Department */}
          <label className="flex flex-col gap-1">
            <span className="label noto-sans-medium text-sm sm:text-base">
              Department
            </span>
            <input
              type="text"
              className="border-2 border-[#F2F2F2] rounded-md px-2 h-9 text-sm sm:text-base"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </label>

          {/* Add or Save button */}
          <div className="flex justify-center items-center mt-3 sm:mt-4">
            <button
              type="submit"
              className="bg-[#6941C5] text-white px-4 py-2 cursor-pointer rounded-md w-full sm:w-44 text-center text-sm sm:text-base"
            >
              {isEditing ? "Save Changes" : "Add Employee"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;
