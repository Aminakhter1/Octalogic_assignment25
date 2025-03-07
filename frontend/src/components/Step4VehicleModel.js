import { useEffect, useState } from "react";
import { getVehiclesByType } from "../api/api";

const Step4VehicleModel = ({ formData, setFormData, nextStep, prevStep }) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if (formData.type) {
      const fetchVehicles = async () => {
        try {
          const data = await getVehiclesByType(formData.type);
          setVehicles(data);
        } catch (error) {
          console.error("Error fetching vehicles:", error);
        }
      };
      fetchVehicles();
    }
  }, [formData.type]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Select Vehicle Model</h2>

      {/* Vehicle Model Dropdown */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-1">Choose Vehicle Model</label>
        <select
          className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-gray-400 outline-none"
          value={formData.vehicleId}
          onChange={(e) => setFormData({ ...formData, vehicleId: e.target.value })}
        >
          <option value="">-- Select Vehicle --</option>
          {vehicles.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.name}
            </option>
          ))}
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
          disabled={!formData.vehicleId}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step4VehicleModel;
