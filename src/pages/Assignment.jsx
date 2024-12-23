import React, { useEffect, useState } from "react";

export default function Assignment() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/assignment")
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/assignment/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAssignments(
            assignments.filter((assignment) => assignment._id !== id)
          );
          alert("Assignment deleted successfully");
        }
      });
  };

  if (loading) {
    return <div>Loading assignments...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">All Assignments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map((assignment) => (
          <div
            key={assignment._id}
            className="card bg-base-100 shadow-xl p-4 flex flex-col"
          >
            <img
              src={assignment.thumbnail}
              alt={assignment.title}
              className="w-full h-40 object-cover rounded"
            />
            <div className="mt-4">
              <h2 className="font-bold text-lg">{assignment.title}</h2>
              <p className="text-sm text-gray-600 mt-2">
                {assignment.description}
              </p>
              <p className="mt-2">
                <strong>Marks:</strong> {assignment.marks}
              </p>
              <p className="mt-1">
                <strong>Difficulty:</strong> {assignment.difficulty}
              </p>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleDelete(assignment._id)}
                className="btn btn-sm btn-error text-white"
              >
                Delete
              </button>
              <button className="btn btn-sm btn-warning text-white">
                Update
              </button>
              <button className="btn btn-sm btn-primary text-white">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
