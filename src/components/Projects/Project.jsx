const Project = ({ project }) => {
  const { Name, Description, imageSrc, Technologies, LinkGit, code } = project;

  return (
    <div className="flex items-center justify-center h-screen w-screen overflow-hidden mt-4">
      <div className="w-full md:w-2/3 h-full mb-4 md:mb-0">
        <img
          src={imageSrc}
          alt={Name}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="w-full md:w-1/3 h-full ml-4 p-4 bg-gray-100 rounded-md text-left">
        <h2 className="text-2xl font-bold mb-2">{Name}</h2>
        <p className="text-gray-700 mb-2">{Description}</p>
        <p className="text-gray-700 mb-2">
          <strong>Technologies:</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {Technologies.map((tech, index) => (
              <span key={index} className="bg-black text-white p-2 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </p>
        <div className="flex space-x-4 mt-4">
          <a
            href={LinkGit}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Live
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
