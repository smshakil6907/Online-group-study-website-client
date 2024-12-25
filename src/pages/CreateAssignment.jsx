import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function CreateAssignment() {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [marks, setMarks] = useState("");
  const [email, setEmail] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [status, setStatus] = useState("pending");
  const [dueDate, setDueDate] = useState(new Date());
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const assignmentData = {
      title,
      description,
      marks: parseInt(marks, 10),
      thumbnail,
      difficulty,
      dueDate,
      status,
      email: user?.email || "Guest",
    };

    console.log("Assignment Data:", assignmentData);
    fetch("http://localhost:5000/assignment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(assignmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setTitle("");
    setDescription("");
    setMarks("");
    setThumbnail("");
    setEmail("");
    setDifficulty("easy");
    setStatus("pending");
    setDueDate(new Date());
    setSuccessMessage("Assignment created successfully!");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create Assignment</h1>
      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="marks">
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
          <label className="block font-medium mb-1" htmlFor="thumbnail">
            Thumbnail Image URL
          </label>
          <input
            type="url"
            id="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="thumbnail">
            User Email
          </label>
          <input
            type="email"
            id="email"
            value={user?.email || "Guest"}
            readOnly
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="difficulty">
            Difficulty Level
          </label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="status">
            Assignment Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="dueDate">
            Due Date
          </label>
          <DatePicker
            id="dueDate"
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Create Assignment
        </button>
      </form>
    </div>
  );
}
