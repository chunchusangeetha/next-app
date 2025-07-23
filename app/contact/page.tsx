'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300 overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(name);
          setName('');
        }}
        className="bg-white p-6 rounded-md text-center max-w-md w-full box-border"
      >
        <label className="block font-medium text-black mb-1">
          Message
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block mt-1 w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your message here"
            required
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}
