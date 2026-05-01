import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const AnimalCard = ({animal}) => {
// console.log(animal);
    return (
        <Card >
        <div>
           <div>
             <Image 
            src={animal.image}
            alt={animal.name}
            height={200}
            width={200}
            // fill
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            >
            </Image>
           </div>
        <div key={animal.id} className="flex justify-between">
        <div className="font-bold text-[20px]">{animal.name}</div>
        <div className="font-bold">  ${animal.price}/=</div>
        </div>
        <div>
            <div className="flex gap-2 items-center"><FaLocationDot />Location:{animal.location}</div>
            {/* <div>{animal.description}</div> */}
        </div>
        </div>

       <Link href={`/all-animals/${animal.id}`}>
        <Button variant="outline" className={"w-full"}>View Details</Button>
        </Link>
        </Card>

        
    );
};

export default AnimalCard;