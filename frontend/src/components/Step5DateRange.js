const Step5DateRange = ({ formData, setFormData, prevStep, submitBooking }) => {
  const handleSubmit = () => {
    submitBooking(); // Assuming it handles the form submission logic
    setFormData({ startDate: '', endDate: '' }); // Clear form data after submission
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Select Date Range</h2>

      {/* Start Date */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Start Date</label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-gray-400 outline-none"
          value={formData.startDate}
          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
          required
        />
      </div>

      {/* End Date */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-1">End Date</label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-gray-400 outline-none"
          value={formData.endDate}
          onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
          required
        />
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
          onClick={handleSubmit} // Call the handleSubmit function
          className="bg-green-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-green-600 disabled:bg-gray-300"
          disabled={!formData.startDate || !formData.endDate}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step5DateRange;
