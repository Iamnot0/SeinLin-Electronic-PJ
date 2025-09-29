import React from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "LG", logo: "LG" },
  { name: "SAMSUNG", logo: "S" },
  { name: "WHIRLPOOL", logo: "W" },
  { name: "MEDIA", logo: "M" },
  { name: "PANASONIC", logo: "P" },
  { name: "CHANGHONG", logo: "C" }
];

export default function BrandShowcase() {
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
            TRUSTED PARTNERS
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#2B463C] mb-4">
            Premium <span className="font-bold">Brands</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with the world's leading home appliance manufacturers to bring you quality and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-[#F4F1E9] rounded-2xl p-8 h-24 flex flex-col items-center justify-center transition-all duration-300 hover:bg-[#68BF4E] hover:shadow-lg hover:-translate-y-1">
                <div className="text-2xl font-bold text-[#2B463C] mb-2 group-hover:text-white transition-colors">
                  {brand.logo}
                </div>
                <div className="text-xs font-medium text-gray-500 group-hover:text-white/80 transition-colors tracking-wider">
                  {brand.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 text-sm text-gray-500">
            <span>Authorized Dealer</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>Official Warranty</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>Expert Installation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
