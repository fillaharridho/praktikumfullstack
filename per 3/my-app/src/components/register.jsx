import React from 'react';

const Register = () => {
  return (
    <div className="p-4 max-w-md mx-auto mt-10 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">Nama</label>
          <input
            type="text"
            id="name"
            className="w-full border px-3 py-2 rounded"
            placeholder="Masukkan nama"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border px-3 py-2 rounded"
            placeholder="Masukkan email"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full border px-3 py-2 rounded"
            placeholder="Masukkan password"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
