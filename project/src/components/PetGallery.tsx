import React from 'react';

const pets = [
  {
    id: 1,
    name: 'Luna',
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80',
    type: 'Cat',
    age: '2 years',
    description: 'Sweet and gentle lap cat who loves cuddles',
  },
  {
    id: 2,
    name: 'Max',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80',
    type: 'Dog',
    age: '1 year',
    description: 'Energetic Golden Retriever, perfect for active families',
  },
  {
    id: 3,
    name: 'Bella',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80',
    type: 'Cat',
    age: '6 months',
    description: 'Playful kitten who loves other cats',
  },
  {
    id: 4,
    name: 'Charlie',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80',
    type: 'Dog',
    age: '3 years',
    description: 'Gentle German Shepherd, great with kids',
  },
  {
    id: 5,
    name: 'Oliver',
    image: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&q=80',
    type: 'Cat',
    age: '1 year',
    description: 'Curious and affectionate orange tabby',
  },
  {
    id: 6,
    name: 'Rocky',
    image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?auto=format&fit=crop&q=80',
    type: 'Dog',
    age: '4 years',
    description: 'Calm and well-trained Husky mix',
  },
  {
    id: 7,
    name: 'Milo',
    image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&q=80',
    type: 'Cat',
    age: '3 years',
    description: 'Independent Siamese with a loving personality',
  },
  {
    id: 8,
    name: 'Bailey',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80',
    type: 'Dog',
    age: '2 years',
    description: 'Friendly Labrador, loves water and fetch',
  },
  {
    id: 9,
    name: 'Sophie',
    image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&q=80',
    type: 'Cat',
    age: '5 years',
    description: 'Elegant Persian cat, enjoys quiet environments',
  }
];

const PetGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pets.map((pet) => (
        <div
          key={pet.id}
          className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:-translate-y-2 cursor-pointer"
          onClick={() => {
            const subject = `Adoption Application for ${pet.name}`;
            const body = `I'm interested in adopting ${pet.name} (${pet.type}, ${pet.age}).\n\nPlease send me more information about the adoption process.`;
            window.location.href = `mailto:adoptpetpal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          }}
        >
          <div className="aspect-w-4 aspect-h-3">
            <img
              src={pet.image}
              alt={pet.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold">{pet.name}</h3>
              <p className="text-sm mb-2">{pet.type} • {pet.age}</p>
              <p className="text-sm opacity-90">{pet.description}</p>
              <button 
                className="mt-4 bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-50 transition-colors"
              >
                Contact About Adoption
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PetGallery;