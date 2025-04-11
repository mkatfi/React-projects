export default function Projects({ projects, onProjectsChange }) {

  console.log('Projects:', projects.dproject);

    const handleChange = (index, e) => {
      const { name, value } = e.target;
      const updatedProjects = [...projects];
      updatedProjects[index] = { ...updatedProjects[index], [name]: value };
      onProjectsChange(updatedProjects);
      console.log('Updated Projects:', updatedProjects);
    console.log('Projects decriptionproject:', updatedProjects.dproject);
    console.log('Project in dec:', projects[index].dproject);
    console.log('Project name:', e.target.name );
    console.log('Projectvalue:', e.target.value );
    };

    const addProject = () => {
      onProjectsChange([
        ...projects,
        { id: Date.now(), name: '', dproject: '' }
      ]);
    };
  
    const removeProject = (index) => {
      if (projects.length > 1) {
        const updatedProjects = projects.filter((_, i) => i !== index);
        onProjectsChange(updatedProjects);
      }
    };
  
    return (
      <div className="projects">
        <div className="section-content">
          <h2>Projects</h2>
          
          {projects.map((project, index) => (
            <div key={project.id} className="project-entry">
              <h3>Project {index + 1}</h3>
              
              <div className="form-group">
                <label>Project Name</label>
                <input
                  type="text"
                  name="name"
                  value={project.name}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Enter the project name"
                />
              </div>

              <div className="form-group">
                <label>Description Of Your Role In The Project</label>
                <textarea
                 name="dproject" // Fixed typo here
                 value={project.dproject} 
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Write a description of your role in the project"
                  rows={6}
                />
              </div>
              
              {projects.length > 1  && (
                <button 
                  type="button" 
                  className="remove-button"
                  onClick={() => removeProject(index)}
                >
                  Remove Project
                </button>
              )}
            </div>
          ))}
          
          <button 
            type="button" 
            className="add-button"
            onClick={addProject}
          >
            Add Project
          </button>
        </div>
      </div>
    );
  }