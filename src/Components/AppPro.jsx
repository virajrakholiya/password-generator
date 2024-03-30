import React, { useState, useRef } from "react";
import { FiClipboard } from "react-icons/fi";

function AppPro() {
  const [Password, setPassword] = useState("");
  const [Length, setLength] = useState(8);
  const inputRef = useRef(null);

  const generatePassword = (e) => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let newpassword = "";
    for (let i = 0; i < Length; i++) {
      newpassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newpassword);

    e.preventDefault();
  };

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(Password);
    inputRef.current.select(); 
  };

  return (
    <div className="bg-slate-100 h-[100vh] flex justify-center items-center">
      <div className="w-[400px]  bg-white shadow-lg p-5 rounded-md">
        <form onSubmit={generatePassword} className="flex flex-col gap-2">
          <h1 className="text-xl font-medium mb-3">Password Generator</h1>
          <div className="flex flex-col mb-3">
            <label className="mb-2">Password Length</label>
            <input
              type="number"
              className="p-2 border border-slate-300 rounded-md outline-none"
              value={Length}
              onChange={handleLengthChange}
              required
              max={30}
            />
          </div>
          <button
            type="submit"
            className="p-2 bg-blue-500 rounded-md text-white mb-2"
          >
            Generate Password
          </button>
          <div className="flex flex-col">
            <label className="mb-2">Generated Password</label>
            <div className="flex items-center border border-slate-300 rounded-md w-full justify-between">
              <input
                ref={inputRef}
                type="text"
                className="p-2 w-[90%] outline-none"
                value={Password}
                readOnly
              />
              <FiClipboard size={20} className="mr-2" onClick={copyPassword} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AppPro;
