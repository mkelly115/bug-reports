import React, { useState } from "react";
import "../styles.css";

export default function TicketForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityLabels = {
    1: "low",
    2: "medium",
    3: "high",
  };

  const ticketData = {
    id: new Date().toISOString(),
    title,
    description,
    priority,
  }

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
  };

  // Need to handle backend somehwrwe here?
  
  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          className="form-input"
          onChange={(e) => setDescription(e.target.value)}
        ></input>

        <fieldset className="priority-fieldset">
          <legend>Priority</legend>

          {Object.entries(priorityLabels).map(([value, label]) => (
            <label key={value} className="priority-label">
              <input
                type="radio"
                value={value}
                checked={priority === value}
                className="priority-input"
                onChange={(e) => setPriority(e.target.value)}
              ></input>
              {label}
            </label>
          ))}
        </fieldset>
        <button type="submit" className="button">Submit</button>
      </div>
    </form>
  );
}
