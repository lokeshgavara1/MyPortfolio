import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf"
              alt="Working on AI projects"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  I'm a passionate AI/ML student with a focus on developing innovative solutions
                  using cutting-edge technologies. My journey in computer science has led me to
                  explore various aspects of artificial intelligence and machine learning.
                </p>
                <p className="text-muted-foreground mb-4">
                  Currently pursuing my degree in Computer Science with a specialization in
                  AI/ML, I'm constantly working on projects that push the boundaries of what's
                  possible with technology.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <h4 className="font-medium mb-2">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      B.S. Computer Science
                      <br />
                      AI/ML Specialization
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Research Interests</h4>
                    <p className="text-sm text-muted-foreground">
                      Deep Learning
                      <br />
                      Computer Vision
                      <br />
                      Natural Language Processing
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
