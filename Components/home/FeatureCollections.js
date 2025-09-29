import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "COOLING SOLUTIONS",
    subtitle: "REFRIGERATORS & FREEZERS",
    description: "Premium refrigeration technology for fresh food preservation.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop&crop=center",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100"
  },
  {
    id: 2,
    title: "CLIMATE CONTROL",
    subtitle: "AIR CONDITIONERS",
    description: "Smart cooling systems for year-round comfort and efficiency.",
    image: "https://images.unsplash.com/photo-1631545773830-c6b845ab4bf4?w=400&h=400&fit=crop&crop=center",
    bgColor: "bg-gradient-to-br from-gray-900 to-black"
  },
  {
    id: 3,
    title: "COOKING EXCELLENCE",
    subtitle: "KITCHEN APPLIANCES",
    description: "Modern cookers and kitchen solutions for culinary perfection.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-100"
  }
];

export default function FeaturedCollections() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#68BF4E]/10 text-[#2B463C] rounded-full text-sm font-medium tracking-wide mb-4">
            FEATURED CATEGORIES
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#2B463C] mb-4">
            Premium <span className="font-bold">Appliances</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of home electronics designed to enhance your lifestyle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className={`relative rounded-3xl overflow-hidden ${collection.bgColor} p-8 h-96`}>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${collection.id === 2 ? 'text-white' : 'text-[#2B463C]'}`}>
                      {collection.title}
                    </h3>
                    <p className={`text-sm font-medium mb-3 ${collection.id === 2 ? 'text-gray-300' : 'text-gray-600'}`}>
                      {collection.subtitle}
                    </p>
                    <p className={`text-sm leading-relaxed mb-6 ${collection.id === 2 ? 'text-gray-400' : 'text-gray-600'}`}>
                      {collection.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`rounded-full border-2 transition-all duration-300 group-hover:scale-105 ${
                        collection.id === 2 
                          ? 'border-white text-white hover:bg-white hover:text-black' 
                          : 'border-[#2B463C] text-[#2B463C] hover:bg-[#2B463C] hover:text-white'
                      }`}
                    >
                      VIEW DETAILS
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 w-32 h-32 opacity-60">
                    <img 
                      src={collection.image} 
                      alt={collection.title}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
