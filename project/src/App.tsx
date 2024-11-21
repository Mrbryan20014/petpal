import React from 'react';
import { HeartIcon, PawPrintIcon, MapPinIcon } from 'lucide-react';
import AdoptionForm from './components/AdoptionForm';
import PetGallery from './components/PetGallery';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80")',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <PawPrintIcon className="w-8 h-8" />
            <h1 className="text-4xl md:text-6xl font-bold">PetPal</h1>
          </div>
          <p className="text-xl md:text-2xl mt-4 max-w-2xl mx-auto">
            Find your perfect furry companion today!
          </p>
          <button 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-8 bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2"
          >
            <HeartIcon className="w-5 h-5" />
            Browse Pets
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <section id="gallery" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Adorable Pets
          </h2>
          <PetGallery />
        </section>

        <section id="adopt" className="bg-white rounded-2xl shadow-xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Adoption Application
          </h2>
          <AdoptionForm />
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <MapPinIcon className="w-6 h-6 mx-auto mb-4 text-purple-600" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Pet Street, Pawsome City</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <a 
                href="mailto:adoptpetpal@gmail.com" 
                className="block hover:text-purple-600 transition-colors"
              >
                <h3 className="font-semibold mb-2">Contact Us</h3>
                <p className="text-gray-600">adoptpetpal@gmail.com</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <PawPrintIcon className="w-6 h-6" />
            <span className="text-xl font-bold">PetPal</span>
          </div>
          <p className="text-gray-400">© 2019 PetPal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;