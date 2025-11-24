import { useContext } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";
import toast from "react-hot-toast";

/*  
    Remove Employee Popup Component -
      - Confirmation message before removing employee
*/

function RemoveEmployeeWarning() {
  const {
    showDeletePopup,
    setShowDeletePopup,
    selectedEmployee,
    removeEmployee,
    setIsViewingProfile,
    setSelectedEmployee,
  } = useContext(EmployeeContext);

  if (!showDeletePopup) return null;
  if (!selectedEmployee) return null;

  const handleDelete = () => {
    removeEmployee(selectedEmployee.id);
    toast.success(`${selectedEmployee.name} removed successfully`);
    setShowDeletePopup(false);
    setIsViewingProfile(false);
    setSelectedEmployee(null);
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-20 flex justify-center items-center px-3 sm:px-4">
      {/* Model */}
      <div className="w-full max-w-sm bg-white p-4 sm:p-6 rounded-xl shadow-lg popup-anim">
        {/* Heading */}
        <h3 className="text-lg sm:text-xl font-semibold text-center mb-4 noto-sans-medium">
          Remove Employee?
        </h3>

        {/* Confirmation Message */}
        <p className="text-center text-gray-600 mb-6 noto-sans-regular text-sm sm:text-base">
          Are you sure you want to remove{" "}
          <span className="font-semibold">{selectedEmployee.name}</span>? <br />
          This action cannot be undone.
        </p>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-3 sm:gap-4 mt-4 noto-sans-regular">
          {/* Cancle Button */}
          <button
            className="px-4 py-2 bg-gray-200 rounded-md cursor-pointer w-full sm:w-auto text-sm sm:text-base"
            onClick={() => setShowDeletePopup(false)}
          >
            Cancel
          </button>

          {/* Delete Button */}
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer w-full sm:w-auto text-sm sm:text-base"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default RemoveEmployeeWarning;
