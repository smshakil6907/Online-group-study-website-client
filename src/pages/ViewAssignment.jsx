import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TakeAssignmentModal from "./TakeAssignmentModal";

export default function ViewAssignment() {
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(
      `https://online-group-study-assignment-server-wine.vercel.app/assignment/${id}`
    )
      .then((res) => res.json())
      .then((data) => setAssignment(data));
  }, [id]);

  if (!assignment) {
    return <div>Loading assignment details...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Assignment Details</h1>
      <div className="border p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">{assignment.title}</h2>
        <p className="mb-2">{assignment.description}</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Take Assignment
        </button>
      </div>

      {isModalOpen && (
        <TakeAssignmentModal
          assignmentId={id}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
