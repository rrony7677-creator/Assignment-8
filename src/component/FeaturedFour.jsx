// import React from 'react';

import AnimalCard from "./AnimalCard";

const FeaturedFour =async () => {
    const res = await fetch('https://assignment-8-six.vercel.app/data.json');
    const animals = await res .json();
    const TopAnimals = animals.slice(0,4)
    // console.log(TopAnimals);

    return (
        <div>
        <h2 className="text-3xl text-center font-bold text-gray-500 mt-22.5 ">Animals Features </h2>
        <p className="mb-5 text-center text-gray-500 max-w-7xl mx-auto">Animal features on this site highlight a variety of livestock breeds, such as the Deshi Shahi Cow <br /> and Black Bengal Goat, specifically curated for the Qurbani festival.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 max-w-7xl mx-auto">
            {
            TopAnimals.map(animal=><AnimalCard key={animal.id} animal={animal}></AnimalCard>)
            }
        </div>
        </div>
    );
};

export default FeaturedFour;