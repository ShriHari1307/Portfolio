import Card from "./Card";

export default function Projects() {

  const projectData = [
    {
      id: 1,
      title: 'Insurance Agent Management Using React',
      description: 'This project is developed to make management of agent easier with spring boot as backend and which also involved CRUD operations',
      previewLink: '#',
      imageUrl: 'public/react-image.png',
      codeLink: '#',
    },    
    {
      id: 2,
      title: 'Complete CICD Pipeline using Jenkins',
      description: 'Created a complete CICD pipeline using jenkins and other code quality tools like Sonarqube and Nexus oss repository and deployed in EKS',
      imageUrl:'public/pipeline.png',
      previewLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Deploying 3 tier application in Kubernetes',
      description: 'Deployed a complete 3 tier architecture application in AWS EKS by creating docker files and deploying them ',
      imageUrl:'Kubernetes-with-Azure.jpg',
      previewLink: '#',
      codeLink: '#',
    },
    
    
  ];

  return (
    <section
      id="projects"
      className="bg-gray-200 flex flex-col items-center justify-center py-12"
    >
      <div className="w-full max-w-6xl px-4">
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
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
