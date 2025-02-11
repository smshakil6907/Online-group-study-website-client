import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const [Assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch(
      "https://online-group-study-assignment-server-wine.vercel.app/pendingAssignment"
    )
      .then((res) => res.json())
      .then((data) => {
        setPendingAssignments(data);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch(
      "https://online-group-study-assignment-server-wine.vercel.app/assignments"
    )
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-md mt-7">
      <h2 className="text-gray-300 text-2xl font-bold mb-4">Dashboard</h2>
      <p className="text-gray-300">
        Welcome to the online group study platform! Collaborate with your
        friends and complete assignments together.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-700 rounded-lg shadow">
          <h3 className="font-semibold text-gray-300">Pending Assignments</h3>
          <p className="text-gray-300">{pendingAssignments.length} Pending</p>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg shadow">
          <h3 className="font-semibold text-gray-300">All Assignment</h3>
          <p className="text-gray-300">{Assignments.length} Assignment</p>
        </div>
      </div>
    </div>
  );
}
