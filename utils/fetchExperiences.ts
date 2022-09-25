import { Experience } from "../typings";

export async function fetchExperiences(){
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)

  const data = await response.json()
  const experiences: Experience[] = data.experiences;

  return experiences;
}