import React from "react";
const Step2Wheels = ({ formData, setFormData, nextStep, prevStep }) => {
  const [error, setError] = React.useState('');

  const handleNextStep = () => {
    if (!formData.wheels) {
      setError('Please select the number of wheels');
    } else {
      setError('');
      nextStep();
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Select Number of Wheels</h2>

      {/* Wheels Dropdown */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-1">Choose Wheels</label>
        <select
          className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-gray-400 outline-none"
          value={formData.wheels}
          onChange={(e) => setFormData({ ...formData, wheels: e.target.value })}
        >
          <option value="">-- Select Wheels --</option>
          <option value="2">2-Wheeler</option>
          <option value="4">4-Wheeler</option>
        </select>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-400"
        >
          Back
        </button>
        <button
          onClick={handleNextStep}
          className="bg-gray-400 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-gray-500 disabled:bg-gray-300"
          disabled={!formData.wheels}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2Wheels;
