import AnimalCard from "@/component/AnimalCard";


const AllAnimalPage = async() => {
const res = await fetch("https://assignment-8-six.vercel.app/data.json")
const animals = await res .json();
console.log(animals);
    return (
        <div className="max-w-7xl mx-auto ">
        <h1 className="text-2xl font-bold m-5">All Animals</h1>

        <div className="grid grid-cols-3 gap-5 px-6">
            {
                animals.map(animal => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)
            }
        </div>
        </div>
    );
};

export default AllAnimalPage;