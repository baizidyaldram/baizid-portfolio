"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <Card className={`flex flex-col justify-between h-full transition-all duration-200 hover:border-accent hover:shadow-lg cursor-pointer ${large ? "p-2" : ""}`}>
          <CardHeader>
            <CardTitle className={large ? "text-2xl hover:text-accent transition-colors" : "text-lg hover:text-accent transition-colors"}>
              {project.title}
            </CardTitle>
            <p className={large ? "text-base text-muted-foreground mt-2" : "text-sm text-muted-foreground mt-1"}>
              {project.summary}
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, large ? 8 : 5).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}