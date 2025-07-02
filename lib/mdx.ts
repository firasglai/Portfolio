import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getMDXContentSerialized(slug: string, language: 'en' | 'fr' = 'en') {
  const fullPath = path.join(contentDirectory, language, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const serializedContent = await serialize(content);
  
  return {
    frontmatter: data,
    serializedContent,
  };
}

export function getMDXContent(slug: string, language: 'en' | 'fr' = 'en') {
  const fullPath = path.join(contentDirectory, language, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    frontmatter: data,
    content,
  };
}

export function getProjectMDX(projectId: string, language: 'en' | 'fr' = 'en') {
  const fullPath = path.join(contentDirectory, language, 'projects', `${projectId}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    frontmatter: data,
    content,
  };
}

export function getAllProjects(language: 'en' | 'fr' = 'en') {
  const projectsDirectory = path.join(contentDirectory, language, 'projects');
  const filenames = fs.readdirSync(projectsDirectory);
  
  const projects = filenames.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const fullPath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      slug,
      frontmatter: data,
    };
  });
  
  return projects;
}

export function getContentByLanguage(slug: string, language: 'en' | 'fr' = 'en') {
  return getMDXContent(slug, language);
}
