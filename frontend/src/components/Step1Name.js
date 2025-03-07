import { useState } from "react";

const Step1Name = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({ firstName: "", lastName: "" });

  const validateAndProceed = () => {
    let newErrors = { firstName: "", lastName: "" };
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name should contain only letters";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name should contain only letters";
      isValid = false;
    }

    setErrors(newErrors);
    if (isValid) nextStep();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">First, what’s your name?</h2>

      {/* First Name Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">First Name</label>
        <input
          type="text"
          className={`w-full border rounded-md p-2 focus:ring ${
            errors.firstName ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-gray-300"
          }`}
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
      </div>

      {/* Last Name Field */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-1">Last Name</label>
        <input
          type="text"
          className={`w-full border rounded-md p-2 focus:ring ${
            errors.lastName ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-gray-300"
          }`}
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
      </div>

      {/* Next Button */}
      <button
        onClick={validateAndProceed}
        className="w-full bg-gray-400 text-white py-2 rounded-md cursor-pointer hover:bg-gray-500 disabled:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Step1Name;
