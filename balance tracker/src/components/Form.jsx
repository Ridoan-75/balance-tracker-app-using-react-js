import { useState } from 'react';

function Form() {
  // 🟢 Proper useState
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [submittedData, setSubmittedData] = useState({
    name: "",
    email: ""
  });

  // 🟢 Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 🟢 Handle submit
  const handleSubmit = (event) => {
    event.preventDefault(); // spelling fixed
    setSubmittedData(formData); // form data assign
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-300">
      <div className="w-full p-10 max-w-md bg-white rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Login Form</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-600">Name:</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Enter Your Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              name="name"
              value={formData.name}
            />
          </div>

          <div className="mt-2">
            <label className="block text-sm text-gray-600">Email:</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Enter Your Email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              name="email"
              value={formData.email}
            />
          </div>

          <div className="mt-2">
            <label className="block text-sm text-gray-600">Password:</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white p-2 mt-2 rounded-md">
            Login
          </button>
        </form>

        <div>
          <h2 className="text-center mt-5 font-semibold">Submitted Information</h2>
          <p className="text-gray-700">Name: {submittedData.name}</p>
          <p className="text-gray-700">Email: {submittedData.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Form;
