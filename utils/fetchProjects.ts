import { Project } from "../typings";

export async function fetchProjects(){
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)

  const data = await response.json()
  const projects: Project[] = data.projects;

  return projects;
}