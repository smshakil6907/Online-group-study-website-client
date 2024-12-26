import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function TakeAssignmentModal({ assignmentId, onClose }) {
  const { user } = useContext(AuthContext); // Get logged-in user details
  const [googleDocLink, setGoogleDocLink] = useState("");
  const [notes, setNotes] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionData = {
      assignmentId,
      googleDocLink,
      notes,
      email: user?.email,
      status: "pending", // Default status
    };

    // Send submission data to the server
    fetch(
      "https://online-group-study-assignment-server-wine.vercel.app/submit-assignment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setSuccessMessage("Assignment submitted successfully!");
        // console.log(data);
        // Clear inputs after submission
        setGoogleDocLink("");
        setNotes("");
        onClose(); // Close modal
      })
      .catch((err) => console.error("Error submitting assignment:", err));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Submit Assignment</h2>
        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1" htmlFor="googleDocLink">
              Google Docs Link
            </label>
            <input
              type="url"
              id="googleDocLink"
              value={googleDocLink}
              onChange={(e) => setGoogleDocLink(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="notes">
              Quick Notes
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
