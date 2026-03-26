"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from "next/image";
import background from "@/app/assets/carousel5.jpg"

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send message');

      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitAnother = () => {
    setIsSubmitted(false);
    setError('');
    setFormData({
      firstName: '',
      middleInitial: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="pt-16">
      <div className="w-full relative h-[50vh] overflow-hidden">
        <Image src={background} alt="Plant Keyboard Background" fill className="object-cover object-center" />
      </div>
      <div className="px-[10vw] space-y-6 my-12">
        <h1 className="type-page-title mb-6">Contact Us</h1>

        {isSubmitted ? (
          <div className="rounded-lg shadow-sm p-12 text-center">
            <p className="type-lead mb-2">Thank you for contacting us!</p>
            <p className="type-body mb-8">
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
                className="bg-white hover:bg-gray-50 px-6 py-3 rounded-md font-medium border transition-colors"
              >
                Return to Home
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-lg shadow-sm p-12">
            <p className="type-body mb-8 max-w-2xl">
              Tell us what challenges your building is facing.
            </p>
            <p className='type-body mb-8'>
              Whether it's air quality, infection risk, energy inefficiencies, or occupant complaints, we'll help you identify where environmental intelligence can create healthier, smarter and more resilient spaces.
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
                {error}
              </div>
            )}

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
              <label htmlFor="email" className="block text-sm font-medium mb-2">
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
              disabled={isLoading}
              className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              {isLoading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}