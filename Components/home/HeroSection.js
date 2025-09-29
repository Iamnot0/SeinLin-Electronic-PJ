import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#F4F1E9] to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#68BF4E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#B1D182] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[#68BF4E]/10 text-[#2B463C] rounded-full text-sm font-medium tracking-wide">
              PREMIUM APPLIANCES
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2B463C] leading-tight">
              SMART
              <br />
              <span className="font-bold">ELECTRONICS</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Transform your home with our premium collection of refrigerators, air conditioners, fans, and cooking appliances. Quality meets innovation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-[#2B463C] hover:bg-[#68BF4E] text-white px-8 py-4 rounded-full transition-all duration-300 group"
            >
              SHOP NOW
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-[#2B463C] text-[#2B463C] hover:bg-[#2B463C] hover:text-white px-8 py-4 rounded-full transition-all duration-300"
            >
              VIEW CATALOG
            </Button>
          </div>

          <div className="flex items-center space-x-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2B463C]">1000+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Premium Products</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2B463C]">25+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Top Brands</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2B463C]">15k+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Happy Customers</div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10">
            <div className="w-full max-w-lg mx-auto">
              <div className="aspect-square bg-white rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop&crop=center" 
                  alt="Premium Refrigerator" 
                  className="w-4/5 h-4/5 object-contain relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-8 -right-4 w-24 h-24 bg-[#B1D182]/20 rounded-full backdrop-blur-sm border border-white/30"
            ></motion.div>
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute bottom-8 -left-4 w-16 h-16 bg-[#68BF4E]/20 rounded-full backdrop-blur-sm border border-white/30"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
