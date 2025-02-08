"use client";

import React, { useState } from "react";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setDisabled(true);
    try {
      const response = await fetch("/api/save-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const { message } = await response.json();
        setEmail("");
        setDisabled(false);
        setMessage(message);
      } else {
        setMessage("Server error: Please try again.");
      }
    } catch {
      setMessage("Failed to save email! Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-column items-center gap-4"
    >
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disabled}
          placeholder="Enter your email"
          required
          className="mx-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </div>
      <div>
        <span>{message}</span>
      </div>
    </form>
  );
};

export default EmailForm;
