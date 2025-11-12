"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  middleInitial: string;
  lastName: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    middleInitial: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted!', formData);
    setIsSubmitted(true);
  };

  const handleSubmitAnother = () => {
    setIsSubmitted(false);
    setFormData({
      firstName: '',
      middleInitial: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      {isSubmitted ? (
        <div className="rounded-lg shadow-sm p-12 text-center">
          <p className="text-xl mb-2">Thank you for contacting us!</p>
          <p className=" mb-8">
            We will reach out to you via email, so please keep an eye out for our message.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleSubmitAnother}
              className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Submit another message
            </button>
            <button
              onClick={() => (window.location.href = '/')}
              className="bg-white hover:bg-gray-50  px-6 py-3 rounded-md font-medium border transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-sm p-12"
        >
          <p className=" mb-8 max-w-2xl">
            We&apos;re happy to hear from you. Contact us today to learn more about our business
            and how you can benefit from working with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
            <div className="md:col-span-5">
              <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                First Name<span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="middleInitial" className="block text-sm font-medium mb-2">
                Middle Initial
              </label>
              <input
                type="text"
                id="middleInitial"
                name="middleInitial"
                value={formData.middleInitial}
                onChange={handleChange}
                maxLength={1}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-center"
              />
            </div>

            <div className="md:col-span-5">
              <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                Last Name<span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium  mb-2">
              Email<span className="text-orange-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message<span className="text-orange-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-vertical"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
