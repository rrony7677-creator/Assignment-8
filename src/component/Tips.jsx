// import React from "react";

import { Card } from "@heroui/react";

export default function QurbaniTips() {
  const tips = [
    {
      id: 1,
      title: "Choose Healthy Animal",
      desc: "Look for bright eyes and a shiny coat. Ensure the animal is active and has no visible injuries.",
      icon: "❤️"
    },
    {
      id: 2,
      title: "Check Age & Teeth",
      desc: "For cows, minimum 2 years; for goats, 1 year. Always check the teeth for maturity indicators.",
      icon: "🍃"
    },
    {
      id: 3,
      title: "Proper Logistics",
      desc: "Plan the transportation and housing carefully to keep the animal stress-free and comfortable.",
      icon: "🚛"
    }
  ];

  return (
    <div className="py-10 px-6 mt-15.5">
      
      <div className="text-center mb-8">
        <h2 className="text-red-600 font-bold text-3xl mb-1">Qurbani Tips</h2>
        <p className="text-gray-500 ">
          Follow these important guidelines to ensure a proper and rewarding Qurbani experience.
        </p>
      </div>

     
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {tips.map((tip) => (
          <Card 
            key={tip.id} 
            className="bg-[#0f172a]  hover:bg-purple-400 text-white border-none shadow-xl rounded-xl"
          >
            <Card className="p-5 flex flex-row items-start gap-4 hover:bg-green-300">
             
              <div className="text-xl ">
                {tip.icon}
              </div>
              
              <div>
                <h3 className="text-sm font-bold mb-1 text-purple-400">{tip.title}</h3>
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            </Card>
          </Card>
        ))}
      </div>
    </div>
  );
}