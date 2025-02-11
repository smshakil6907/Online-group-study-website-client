import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PendingAssignment() {
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [mark, setMark] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://online-group-study-assignment-server-wine.vercel.app/pendingAssignment"
    )
      .then((res) => res.json())
      .then((data) => {
        setPendingAssignments(data);
        setLoading(false);
      });

    // axios(
    //   "https://online-group-study-assignment-server-wine.vercel.app/pendingAssignment",
    //   {
    //     withCredentials: true,
    //   }
    // ).then((res) => setPendingAssignments(res.data));
    // setLoading(false);
  }, []);

  const openModal = (assignment) => {
    setSelectedAssignment(assignment);
    setFeedback("");
    setMark(assignment.marks);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the feedback and mark (you may call an API here)
    // ("Submitted Feedback:", feedback, "Mark:", mark);console.log

    // Update the assignment with the new mark and feedback if necessary
    // Then close the modal
    closeModal();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">
        Pending Assignments
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">#</th>
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Marks</th>
              <th className="border border-gray-300 p-2">Examinee Name</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingAssignments.map((assignment, index) => (
              <tr key={assignment._id}>
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">
                  {assignment.notes}
                </td>
                <td className="border border-gray-300 p-2">
                  {assignment.mark}
                </td>
                <td className="border border-gray-300 p-2">
                  {assignment.email}
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    className="btn btn-sm btn-primary text-white"
                    onClick={() => openModal(assignment)}
                  >
                    Give Mark
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Give Mark</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-medium mb-1" htmlFor="feedback">
                  Feedback
                </label>
                <input
                  type="text"
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1" htmlFor="mark">
                  Mark
                </label>
                <input
                  type="number"
                  id="mark"
                  value={mark}
                  onChange={(e) => setMark(e.target.value)}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="mr-4 btn btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
