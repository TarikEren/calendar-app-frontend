import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex flex-row bg-gray-700 p-3 justify-between text-white">
        <div className="p-3">
            <a href="#" className="">Main</a>
        </div>
        <ul className="flex flex-row">
            <li className="p-3 space-x-3">
                <a href="#" className="hover:text-blue-400">Account details</a>
            </li>
        </ul>
    </nav>
  );
}