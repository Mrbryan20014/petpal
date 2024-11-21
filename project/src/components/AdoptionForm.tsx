import React, { useState } from 'react';

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    price: '',
    location: '',
    sex: '',
    status: '',
    description: '',
    aboutYou: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = 'New Pet Listing Submission';
    const body = `
Pet Details:
Age: ${formData.age}
Weight: ${formData.weight}
Price: ${formData.price}
Location: ${formData.location}
Sex: ${formData.sex}
Status: ${formData.status}

Description:
${formData.description}

About the Owner:
${formData.aboutYou}
    `;

    window.location.href = `mailto:adoptpetpal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
      {/* Pet Details Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Pet Details</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sex</label>
            <select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Availability Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            >
              <option value="">Select...</option>
              <option value="available">Available</option>
              <option value="pending">Adoption Pending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Pet Description */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Pet Description</h3>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about this pet's personality, habits, quirks, energy level, and special needs..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
        />
      </div>

      {/* Your Information */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Your Information</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">About You</label>
          <textarea
            name="aboutYou"
            value={formData.aboutYou}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about yourself, your experience with pets, living situation, and how you plan to care for your new furry friend..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
      >
        Submit Application
      </button>
    </form>
  );
};

export default AdoptionForm;