import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function Assignment() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [difficulty, setDifficulty] = useState("");
  const [sortOrder, setSortOrder] = useState("desc"); // Default: High to Low
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchAssignments();
  }, [difficulty, sortOrder]);

  const fetchAssignments = () => {
    let url = `https://online-group-study-assignment-server-wine.vercel.app/assignments?`;

    if (difficulty) {
      url += `difficulty=${difficulty}&`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => {
          if (sortOrder === "desc") {
            return b.marks - a.marks;
          } else {
            return a.marks - b.marks;
          }
        });

        setAssignments(sortedData);
        setLoading(false);
      });
  };

  const handleSortToggle = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc"); // Toggle sorting order
  };

  const handleDelete = (id) => {
    fetch(
      `https://online-group-study-assignment-server-wine.vercel.app/assignment/${id}?email=${user?.email}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setAssignments(
            assignments.filter((assignment) => assignment._id !== id)
          );
          alert(data.message);
        } else {
          alert(data.message);
        }
      })
      .catch(() => {
        alert("An error occurred during deletion.");
      });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">All Assignments</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/3"
        >
          <option value="">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button
          onClick={handleSortToggle}
          className="btn btn-primary px-4 py-2 rounded-lg"
        >
          Sort by Marks ({sortOrder === "desc" ? "High → Low" : "Low → High"})
        </button>
      </div>

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
              <p className="text-sm text-gray-400 mt-2">
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
              <Link to={`update/${assignment._id}`}>
                <button className="btn btn-sm btn-warning text-white">
                  Update
                </button>
              </Link>
              <Link to={`/viewAssignment/${assignment._id}`}>
                <button className="btn btn-sm btn-primary text-white">
                  View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
