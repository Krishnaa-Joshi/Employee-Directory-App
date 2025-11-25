import ProfilePic from "../assets/icons/Avatar.svg";
import Edit from "../assets/icons/Edit.svg";
import Remove from "../assets/icons/delete.svg";
import cancel from "../assets/icons/cancel.svg";
import { useContext } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";

/* 
  EmployeeCard component- 
  - Displays employee detailed profile
*/

function EmployeeCard() {

  const {
  setIsViewingProfile,
  selectedEmployee,
  setIsEditing,
  setShowDeletePopup,
  setIsAddEmployeeModalOpen,
} = useContext(EmployeeContext);

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-xs z-10 flex justify-center items-center px-3 sm:px-4">
      {/* Model */}
      <div className="w-full max-w-sm sm:max-w-md bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg flex flex-col gap-5 popup">
        <div>
          {/* Cancel Button */}
          <div className="flex justify-end">
            <img
              src={cancel}
              alt="close"
              className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6"
              onClick={() => setIsViewingProfile(false)}
            />
          </div>

          {/* Employee Name and Photo */}
          <div className="flex justify-center items-center flex-col">
            <div className="p-1 mb-2">
              <img
                src={selectedEmployee.avatar || ProfilePic}
                alt={selectedEmployee.name}
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>
            <span className="noto-sans-medium font-bold text-lg sm:text-xl">
              {selectedEmployee.name}
            </span>
          </div>

          {/* Employee Details */}
          <div className="grid grid-cols-2 gap-y-3 sm:gap-y-4 mt-5 noto-sans-regular text-sm sm:text-base">
            {/* Employee ID */}
            <span className="font-medium">Employee ID</span>
            <span className="text-[#878787] text-right">
              {selectedEmployee.empId || selectedEmployee.id}
            </span>

            {/* Department */}
            <span className="font-medium">Department</span>
            <span className="text-[#878787] text-right">
              {selectedEmployee.department}
            </span>

            {/* Role */}
            <span className="font-medium">Role</span>
            <span className="text-[#878787] text-right">
              {selectedEmployee.role}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-3 sm:gap-2 mt-6">
            {/* Edit Info Button */}
            <button
              className="border-2 border-[#6941C5] text-[#6941C5] rounded-md w-full sm:w-56 flex justify-center items-center gap-2 px-4 py-2 cursor-pointer text-sm sm:text-base"
              onClick={() => {
                setIsEditing(true);
                setIsAddEmployeeModalOpen(true);
                setIsViewingProfile(false);
              }}
            >
              <img src={Edit} alt="" className="w-4 h-4" />
              <span>Edit Info</span>
            </button>

            {/* Remove Employee Button */}
            <button
              className="border-2 border-[#6941C5] text-[#6941C5] rounded-md w-full sm:w-56 flex justify-center items-center gap-2 px-4 py-2 cursor-pointer text-sm sm:text-base"
              onClick={() => setShowDeletePopup(true)}
            >
              <img src={Remove} alt="" className="w-4 h-4" />
              <span>Remove Employee</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
