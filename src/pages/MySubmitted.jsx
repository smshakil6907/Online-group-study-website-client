import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function MySubmitted() {
  const [assignments, setAssignments] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://online-group-study-assignment-server-wine.vercel.app/myAssignment?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
      });
  }, [user?.email]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Marks</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={assignment._id || index}>
                <th>{index + 1}</th>
                <td>{assignment.title}</td>
                <td>{assignment.marks}</td>
                <td>{assignment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
