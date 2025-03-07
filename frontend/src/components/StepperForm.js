
import { useState } from "react";
import Step1Name from "./Step1Name";
import Step2Wheels from "./Step2Wheels";
import Step3VehicleType from "./Step3VehicleType";
import Step4VehicleModel from "./Step4VehicleModel";
import Step5DateRange from "./Step5DateRange";
import { createBooking } from "../api/api";

const StepperForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    wheels: "",
    type: "",
    vehicleId: "",
    startDate: "",
    endDate: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitBooking = async () => {
    try {
      await createBooking(formData);
      alert("Booking successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  const steps = [
    <Step1Name formData={formData} setFormData={setFormData} nextStep={nextStep} />,
    <Step2Wheels formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
    <Step3VehicleType formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
    <Step4VehicleModel formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
    <Step5DateRange formData={formData} setFormData={setFormData} prevStep={prevStep} submitBooking={submitBooking} />,
  ];

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Heading Section */}
      <div className="bg-yellow-500 text-center py-4 mb-6 rounded-t-lg">
        <h1 className="text-2xl font-semibold text-white">Booking your Vehicle</h1>
      </div>

      {/* Step Indicators */}
      <div className="flex justify-between mb-6">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className={`h-10 w-10 flex items-center justify-center rounded-full text-white font-semibold 
            ${step === num ? "bg-green-500" : "bg-gray-300"}`}
          >
            {num}
          </div>
        ))}
      </div>
      
      {/* Current Step */}
      {steps[step - 1]}
    </div>
  );
};

export default StepperForm;
