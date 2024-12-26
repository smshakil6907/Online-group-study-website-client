import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EvaluateAssignment() {
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);
  const [marks, setMarks] = useState("");
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://online-group-study-assignment-server-wine.vercel.app/assignment/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAssignment(data);
      })
      .catch((error) => console.error("Error fetching assignment:", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const evaluationData = {
      marks: parseInt(marks, 10),
      feedback,
      status: "completed",
    };

    fetch(
      `https://online-group-study-assignment-server-wine.vercel.app/assignment/evaluate/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(evaluationData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Assignment evaluated successfully!");
          navigate("/pendingAssignments");
        }
      })
      .catch((error) => console.error("Error evaluating assignment:", error));
  };

  if (!assignment) {
    return <div>Loading assignment details...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">
        Evaluate Assignment
      </h1>
      <div className="card bg-base-100 shadow-xl p-4">
        <h2 className="text-xl font-bold">{assignment.title}</h2>
        <p>{assignment.notes}</p>
        <a
          href={assignment.googleDocsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Google Docs
        </a>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="marks" className="block font-medium">
              Marks
            </label>
            <input
              type="number"
              id="marks"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="feedback" className="block font-medium">
              Feedback
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <button type="submit" className="btn btn-primary text-white w-full">
            Submit Evaluation
          </button>
        </form>
      </div>
    </div>
  );
}
