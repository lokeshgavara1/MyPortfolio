import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "AI Image Recognition",
    description: "Deep learning model for real-time object detection",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    category: "Computer Vision",
  },
  {
    id: 2,
    title: "NLP Chatbot",
    description: "Advanced natural language processing chatbot",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    category: "NLP",
  },
  {
    id: 3,
    title: "Predictive Analytics",
    description: "Machine learning for business forecasting",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    category: "Data Science",
  },
  {
    id: 4,
    title: "Recommendation Engine",
    description: "Personalized content recommendation system",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    category: "Machine Learning",
  },
];

const categories = ["All", "Computer Vision", "NLP", "Data Science", "Machine Learning"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="flex gap-2 mb-8 overflow-x-auto pb-4 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="mt-4">
                    <Button variant="link" className="p-0">
                      Learn More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
