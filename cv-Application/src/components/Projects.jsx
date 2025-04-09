export default function Projects({ projects, onProjectsChange }) {
    const handleChange = (index, e) => {
      const { name, value } = e.target;
      const updatedProjects = [...projects];
      updatedProjects[index] = { ...updatedProjects[index], [name]: value };
      onProjectsChange(updatedProjects);
    };
  
    const addProject = () => {
      onProjectsChange([
        ...projects,
        { id: Date.now(), name: '', role: '', company: '', period: '' }
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
                />
              </div>
              
              <div className="form-group">
                <label>Your Role</label>
                <input
                  type="text"
                  name="role"
                  value={project.role}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              
              <div className="form-group">
                <label>Company/Organization</label>
                <input
                  type="text"
                  name="company"
                  value={project.company}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              
              <div className="form-group">
                <label>Time Period</label>
                <input
                  type="text"
                  name="period"
                  value={project.period}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Year - Year"
                />
              </div>
              
              {projects.length > 1 && (
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