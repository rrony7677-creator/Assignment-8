import Image from "next/image";


const DetailsAnimalPage =async ({params}) => {
const {id} = await params;
const res = await fetch("https://assignment-8-six.vercel.app/data.json")
const animals = await res .json();

// console.log("animals",animals);

const animal = animals.find(a => a.id==id)
console.log(animal);
    return (
<div className="max-w-7xl mx-auto mt-12.5 items-center  flex gap-10 justify-between">
   <div>
     <Image src={animal.image} alt="animal-name" height={500} width={500} >
    </Image>
   </div>
   
   <div className="space-y-3 text-xl font-bold">
     <div className="">Name:{animal.name}</div>
     <div>Type:{animal.type}</div>
     <div>Breed :{animal.breed}</div>
     <div>Age :{animal.age}</div>
     <div className="">Price : {animal.price}</div>
     <div>location : {animal.location}</div>
     <div>Description:{animal.description}</div>
    </div>
    
</div>
    );
};

export default DetailsAnimalPage;