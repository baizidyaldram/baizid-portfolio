import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full group">
      <Card className="flex flex-col justify-between h-full transition-colors hover:border-accent cursor-pointer">
        <CardHeader>
          <CardTitle className="text-lg group-hover:text-accent transition-colors">
            {project.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">{project.summary}</p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}