
import { useEffect, useState } from "react";
import { getVehicleTypes } from "../api/api";

const Step3VehicleType = ({ formData, setFormData, nextStep, prevStep }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        if (!formData.wheels) return; // Prevent calling API if wheels are not selected

        const response = await getVehicleTypes(formData.wheels); // Pass wheels as parameter
        
        setTypes(response);
      } catch (error) {
        console.error("Error fetching vehicle types:", error);
      }
    };
    fetchTypes();
  }, [formData.wheels]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Select Vehicle Type</h2>

      {/* Vehicle Type Dropdown */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-1">Choose Vehicle Type</label>
        <select
          className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-gray-400 outline-none"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          disabled={!formData.wheels} // Disable dropdown if wheels aren't selected
        >
          <option value="">-- Select Type --</option>
          {types.length > 0 ? (
            types.map((type) => (
              <option key={type.type} value={type.type}>
                {type.type}
              </option>
            ))
          ) : (
            <option value="">No vehicle types available</option>
          )}
        </select>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-400"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="bg-gray-400 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-gray-500 disabled:bg-gray-300"
          disabled={!formData.type}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3VehicleType;
