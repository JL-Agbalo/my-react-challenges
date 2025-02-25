/**
 * UCForm component renders an uncontrolled form with fields for name, email, and message.
 *
 * @component
 * @example
 * return (
 *   <UCForm />
 * )
 *
 * @returns {JSX.Element} The rendered component
 *
 * @description
 * This component demonstrates an uncontrolled form in React. The form submission is handled
 * by the handleSubmit function, which prevents the default form submission behavior, creates
 * a FormData object from the form element, converts it to a plain object, and displays the
 * form data in an alert.
 *
 * @function handleSubmit
 * @param {Object} e - The event object
 * @description
 * Prevents the default form submission behavior, creates a FormData object from the form element,
 * converts it to a plain object, and displays the form data in an alert.
 */
import React from "react";

export function UCForm() {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(e.target); // Create a FormData object from the form element
    const data = Object.fromEntries(formData); // Convert FormData to a plain object
    alert(`Form Submitted ${JSON.stringify(data)}`);
  };
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h1>Uncontrolled Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
