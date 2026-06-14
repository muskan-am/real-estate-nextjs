"use client";

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const BannerSection = () => {
  const [modal, setModal] = useState(false);

  const openEnquireModel = () => {
    setModal(true);
  };

  return (
    <>
      {/* Modal */}
      <div
        className={`w-[350px] fixed left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 z-50 ${
          modal ? "top-1/2" : "-top-[1000px]"
        }`}
      >
        <form className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold relative mb-4">
            Enquire Now

            <button
              type="button"
              onClick={() => setModal(false)}
              className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              <IoMdClose size={24} />
            </button>
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>

            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Banner */}
      <section
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1339912221/photo/office-building.jpg?s=612x612&w=0&k=20&c=Bya0DPAZmi6v9srmgNjdxxAhCe1S4C47Bj1k2gVOt98=')",
        }}
        className="bg-cover bg-center h-screen w-full"
      >
        <div className="max-w-[1280px] mx-auto h-full flex flex-col items-center justify-center gap-6">
          <h1 className="text-5xl text-black text-center">
            Live Above It All - The Pinnacle by
            <br />
            STJ Group, Mohali
          </h1>

          <p className="text-black text-center text-2xl">
            Standing tall at 36 floors, The Pinnacle offers panoramic views,
            futuristic engineering, and an elite lifestyle in the heart of
            Mohali's booming urban landscape.
          </p>

          <button
            onClick={openEnquireModel}
            className="bg-white px-6 py-3 rounded-md font-medium hover:bg-gray-100"
          >
            Enquire Now
          </button>
        </div>
      </section>
    </>
  );
};

export default BannerSection;