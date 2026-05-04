
"use client";

import AnimalCard from "@/component/AnimalCard";
import { useState, useEffect } from "react";

const AllAnimalPage = () => {
  const [animals, setAnimals] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); 

  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://assignment-8-six.vercel.app/data.json");
      const data = await res.json();
      setAnimals(data);
    };
    fetchData();}, []);

  
  const handleSort = (order) => {
    setSortOrder(order);
    const sortedData = [...animals].sort((a, b) => {
      if (order === "lowToHigh") {
        return a.price - b.price;
      } else if (order === "highToLow") {
        return b.price - a.price;
      }
      return 0;
    });
    setAnimals(sortedData);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">All Animals</h1>
        
       
        <div className="flex gap-2">
          <button 
    onClick={() => handleSort("lowToHigh")}
    className={`px-4 py-2 border rounded ${sortOrder === "lowToHigh" ? "bg-blue-500 text-white" : "bg-white text-black"}`}
  >
    Price: Low to High
  </button>

  <button 
    onClick={() => handleSort("highToLow")}
    className={`px-4 py-2 border rounded ${sortOrder === "highToLow" ? "bg-blue-500 text-white" : "bg-white text-black"}`}
  >
    Price: High to Low
  </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimalPage;



// import AnimalCard from "@/component/AnimalCard";


// const AllAnimalPage = async() => {
// const res = await fetch("https://assignment-8-six.vercel.app/data.json")
// const animals = await res .json();
// // console.log(animals);

//     return (
//         <div className="max-w-7xl mx-auto ">
//         <h1 className="text-2xl font-bold m-5">All Animals</h1>

//         <div className="grid grid-cols-3 gap-5 px-6">
//             {
//                 animals.map(animal => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)
//             }
//         </div>
//         </div>
//     );
// };

// export default AllAnimalPage;