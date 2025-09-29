import React, { useState, useEffect } from "react";
import { Product } from "@/entities/Product";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Snowflake, Wind, ChefHat, Zap } from "lucide-react";

const categories = ["ALL PRODUCTS", "REFRIGERATORS", "AIR CONDITIONERS", "COOKERS", "FANS"];

const categoryIcons = {
  refrigerator: Snowflake,
  air_conditioner: Wind,
  cooker: ChefHat,
  stand_fan: Zap
};

export default function PopularItems() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("ALL PRODUCTS");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await Product.filter({ is_popular: true }, '-created_date', 8);
      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (loading) {
    return (
      <section className="py-20 bg-[#F4F1E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded-full w-48 mx-auto mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-3xl p-8">
                  <div className="aspect-square bg-gray-200 rounded-2xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#F4F1E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#68BF4E]/10 text-[#2B463C] rounded-full text-sm font-medium tracking-wide mb-4">
            POPULAR ITEMS
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#2B463C] mb-8">
            Best <span className="font-bold">Sellers</span>
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#2B463C] text-white hover:bg-[#68BF4E]'
                    : 'border-2 border-[#2B463C] text-[#2B463C] hover:bg-[#2B463C] hover:text-white'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const IconComponent = categoryIcons[product.category] || Zap;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative">
                    {product.image_url ? (
                      <img 
                        src={product.image_url} 
                        alt={product.name}
                        className="w-4/5 h-4/5 object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-[#68BF4E]/20 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-[#2B463C]" />
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <IconComponent className="w-5 h-5 text-[#68BF4E]" />
                    </div>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <Badge variant="outline" className="border-[#68BF4E] text-[#68BF4E] mb-2">
                      {product.brand}
                    </Badge>
                    <h3 className="text-lg font-semibold text-[#2B463C] group-hover:text-[#68BF4E] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-[#2B463C]">
                      {formatPrice(product.price)}
                    </p>
                    {product.warranty_years && (
                      <p className="text-sm text-gray-500">
                        {product.warranty_years} Year Warranty
                      </p>
                    )}
                  </div>

                  <Button 
                    className="w-full mt-4 bg-[#68BF4E] hover:bg-[#2B463C] text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    VIEW DETAILS
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show more products if none exist */}
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-6">No products available yet.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Smart Refrigerator", brand: "SEINLIN", price: 1450, category: "refrigerator", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop" },
                { name: "Split AC Unit", brand: "PREMIUM", price: 890, category: "air_conditioner", image: "https://images.unsplash.com/photo-1631545773830-c6b845ab4bf4?w=400&h=400&fit=crop" },
                { name: "Induction Cooker", brand: "MODERN", price: 320, category: "cooker", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop" },
                { name: "Tower Fan", brand: "AIRFLOW", price: 165, category: "stand_fan", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop" }
              ].map((product, index) => {
                const IconComponent = categoryIcons[product.category] || Zap;
                return (
                  <div key={index} className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group">
                    <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-6 flex items-center justify-center overflow-hidden relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-4/5 h-4/5 object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3">
                        <IconComponent className="w-5 h-5 text-[#68BF4E]" />
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <Badge variant="outline" className="border-[#68BF4E] text-[#68BF4E] mb-2">
                        {product.brand}
                      </Badge>
                      <h3 className="text-lg font-semibold text-[#2B463C] group-hover:text-[#68BF4E] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-2xl font-bold text-[#2B463C]">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                    <Button className="w-full mt-4 bg-[#68BF4E] hover:bg-[#2B463C] text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                      VIEW DETAILS
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
