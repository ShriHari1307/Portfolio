import Card from "./Card";

export default function Projects() {

  const projectData = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is a brief description of Project 1.',
      previewLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is a brief description of Project 2.',
      previewLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'This is a brief description of Project 3.',
      previewLink: '#',
      codeLink: '#',
    },
  ]
  return (
    <section
      id="projects"
      className="h-screen bg-gray-200 flex items-center justify-center"
    >
       <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">My Projects</h2>
        <p className="mt-4 text-center">Here are some of my projects.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectData.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              previewLink={project.previewLink}
              codeLink={project.codeLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
