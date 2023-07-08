import {
  Button,
  Caption1,
  Text,
  Card,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";
import { useState, useEffect } from "react";
import { MoreHorizontal20Filled } from "@fluentui/react-icons";

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/projects");
      const projectsData = await res.json();
      setProjects(projectsData);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-16">
        {projects.map((item: any) => (
          <a key={item.id} href={item.projectURL}>
            <Card className="transform transition-all duration-300 hover:scale-105 cursor-pointer mx-6">
              <CardPreview>
                <img src={item.imageURL} alt="Presentation Preview" />
              </CardPreview>

              <CardHeader
                header={<Text weight="semibold">{item.name}</Text>}
                description={<Caption1>{item.description}</Caption1>}
                action={
                  <Button
                    appearance="transparent"
                    icon={<MoreHorizontal20Filled />}
                    aria-label="More actions"
                  />
                }
              />
            </Card>
          </a>
        ))}
      </div>
    </>
  );
}
