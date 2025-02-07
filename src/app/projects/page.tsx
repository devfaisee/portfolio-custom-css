import React from "react"
import "../../styles/projects.css"

const projects = [
  {
    id: 1,
    title: "Weather App",
    description: "A real-time weather app using Next.js, OpenWeather API, and Tailwind CSS.",
    image: "/weather-app.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind", "API"],
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product listings and payment integration.",
    image: "/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "A web app that generates AI-powered images using OpenAI's API.",
    image: "/ai-generator.jpg",
    technologies: ["Next.js", "OpenAI API", "Tailwind", "Vercel"],
  },
]

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {projects.map((project) => (
          <div key={project.id} className="project-card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="mt-3">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mr-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
