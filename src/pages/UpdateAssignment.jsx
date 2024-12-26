import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function UpdateAssignment() {
  const updateData = useLoaderData();
  const [dueDate, setDueDate] = useState(new Date());
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const thumbnail = form.thumbnail.value;
    const difficulty = form.difficulty.value;
    const dueDate = form.dueDate.value;

    if (title.length < 3) {
      alert("Title must be at least 3 characters long.");
      return;
    }
    if (description.length < 10) {
      alert("Description must be at least 10 characters long.");
      return;
    }

    if (!marks || marks <= 0) {
      alert("Marks must be a positive number.");
      return;
    }

    if (!thumbnail || !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(thumbnail)) {
      alert("Please provide a valid image URL.");
      return;
    }

    if (new Date(dueDate) <= new Date()) {
      alert("Due date must be in the future.");
      return;
    }

    const updatedData = {
      title,
      description,
      marks,
      thumbnail,
      difficulty,
      dueDate,
    };

    fetch(`https://online-group-study-assignment-server-wine.vercel.app/assignment/${updateData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Update Successfully!",
            icon: "success",
            draggable: true,
          });
          navigate("/assignment");
        }
      });
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Update Assignment</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-medium mb-1" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={updateData.title}
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
            name="description"
            defaultValue={updateData.description}
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
            name="marks"
            defaultValue={updateData.marks}
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
            name="thumbnail"
            defaultValue={updateData.thumbnail}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="difficulty">
            Difficulty Level
          </label>
          <select
            id="difficulty"
            name="difficulty"
            defaultValue={updateData.difficulty}
            className="w-full border p-2 rounded"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="dueDate">
            Due Date
          </label>
          <DatePicker
            id="dueDate"
            name="dueDate"
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
          Update Assignment
        </button>
      </form>
    </div>
  );
}
