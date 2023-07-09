import type { NextApiRequest, NextApiResponse } from "next";
import type { Project } from "@/libs/types";
import { db, storage } from "@/libs/firebase";
import { getDocs, collection } from "@firebase/firestore";
import { ref, getDownloadURL } from "@firebase/storage";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  const projects = await getProjects();
  res.status(200).json(projects);
}

async function getProjects(): Promise<Project[]> {
  const docsSnap = await getDocs(collection(db, "projects"));

  const projects: Project[] = [];
  for (const doc of docsSnap.docs) {
    const projectData: Project = {
      name: doc.data().projectName,
      description: doc.data().description,
      imageURL: await getImageDownloadURL(doc.data().imageLocation),
      projectURL: doc.data().projectUrl,
      id: doc.id,
    };
    projects.push(projectData);
  }

  return projects;
}

async function getImageDownloadURL(imageLocation: string): Promise<string> {
  const pathReference = ref(storage, imageLocation);
  const url = await getDownloadURL(pathReference);
  return url;
}
