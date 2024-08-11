import React, { useState } from "react";
import axios from "axios";

const QuoteModal = ({ closeModal, userId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [preferredDateTime, setPreferredDateTime] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8085/api/appointments", {
        user_id: userId,
        name,
        email,
        preferred_datetime: preferredDateTime,
        reason
      });
      alert("Appointment request submitted successfully!");
      closeModal();
    } catch (error) {
      console.error("Error submitting appointment:", error);
      alert("Failed to submit appointment request.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-auto bg-black bg-opacity-50">
      <div className="bg-white rounded-md max-w-lg w-full p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &#10005;
        </button>
        <h3 className="text-3xl font-semibold text-black mb-4">Request an Appointment</h3>
        <p className="text-base text-gray-600 mb-4">
          Fill out the form below to request an appointment with one of our healthcare professionals. We will get back to you with availability and further details.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-6">
          <div>
            <label className="text-base font-medium text-gray-900">
              Your Name
            </label>
            <div className="relative mt-2.5">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-base font-medium text-gray-900">
              Email Address
            </label>
            <div className="relative mt-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-base font-medium text-gray-900">
              Preferred Date and Time
            </label>
            <div className="relative mt-2.5">
              <input
                type="datetime-local"
                value={preferredDateTime}
                onChange={(e) => setPreferredDateTime(e.target.value)}
                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-base font-medium text-gray-900">
              Reason for Appointment
            </label>
            <div className="relative mt-2.5">
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Briefly describe the reason for your appointment"
                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                rows="4"
                required
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md focus:outline-none hover:bg-orange-600 focus:bg-orange-600"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
