import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiPython, SiTensorflow, SiScikitlearn, SiPytorch, SiOpencv, SiPandas, SiJupyter, SiDocker } from "react-icons/si";

const skills = [
  { name: "Python", icon: SiPython, category: "Languages" },
  { name: "TensorFlow", icon: SiTensorflow, category: "Frameworks" },
  { name: "PyTorch", icon: SiPytorch, category: "Frameworks" },
  { name: "Scikit-learn", icon: SiScikitlearn, category: "Libraries" },
  { name: "OpenCV", icon: SiOpencv, category: "Libraries" },
  { name: "Pandas", icon: SiPandas, category: "Data Analysis" },
  { name: "Jupyter", icon: SiJupyter, category: "Tools" },
  { name: "Docker", icon: SiDocker, category: "Tools" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <skill.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-medium mb-1">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.category}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
