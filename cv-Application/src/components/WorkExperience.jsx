export default function WorkExperience({ workExperience, onWorkExperienceChange }) {
    const handleChange = (index, e) => {
      const { name, value } = e.target;
      const updatedExperience = [...workExperience];
      updatedExperience[index] = { ...updatedExperience[index], [name]: value };
      onWorkExperienceChange(updatedExperience);
    };
  
    const handleResponsibilityChange = (expIndex, respIndex, value) => {
      const updatedExperience = [...workExperience];
      const responsibilities = [...updatedExperience[expIndex].responsibilities];
      responsibilities[respIndex] = value;
      updatedExperience[expIndex].responsibilities = responsibilities;
      onWorkExperienceChange(updatedExperience);
    };
  
    const addResponsibility = (index) => {
      const updatedExperience = [...workExperience];
      updatedExperience[index].responsibilities.push('');
      onWorkExperienceChange(updatedExperience);
    };
  
    const removeResponsibility = (expIndex, respIndex) => {
      if (workExperience[expIndex].responsibilities.length > 1) {
        const updatedExperience = [...workExperience];
        updatedExperience[expIndex].responsibilities = updatedExperience[expIndex].responsibilities.filter((_, i) => i !== respIndex);
        onWorkExperienceChange(updatedExperience);
      }
    };
  
    const addExperience = () => {
      onWorkExperienceChange([
        ...workExperience,
        { 
          id: Date.now(),
          company: '', 
          position: '', 
          location: '',
          startDate: '', 
          endDate: '', 
          responsibilities: [''] 
        }
      ]);
    };
  
    const removeExperience = (index) => {
      if (workExperience.length > 1) {
        const updatedExperience = workExperience.filter((_, i) => i !== index);
        onWorkExperienceChange(updatedExperience);
      }
    };
  
    return (
      <div className="work-experience">
        <div className="section-content">
          <h2>Work Experience</h2>
          
          {workExperience.map((exp, expIndex) => (
            <div key={exp.id} className="experience-entry">
              <h3>Experience {expIndex + 1}</h3>
              
              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={exp.company}
                  onChange={(e) => handleChange(expIndex, e)}
                />
              </div>
              
              <div className="form-group">
                <label>Position</label>
                <input
                  type="text"
                  name="position"
                  value={exp.position}
                  onChange={(e) => handleChange(expIndex, e)}
                />
              </div>
              
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={exp.location}
                  onChange={(e) => handleChange(expIndex, e)}
                />
              </div>
              
              <div className="form-row">
                <div className="form-group half">
                  <label>Start Date</label>
                  <input
                    type="text"
                    name="startDate"
                    value={exp.startDate}
                    onChange={(e) => handleChange(expIndex, e)}
                    placeholder="Month Year"
                  />
                </div>
                
                <div className="form-group half">
                  <label>End Date</label>
                  <input
                    type="text"
                    name="endDate"
                    value={exp.endDate}
                    onChange={(e) => handleChange(expIndex, e)}
                    placeholder="Month Year or Present"
                  />
                </div>
              </div>
              
              <div className="responsibilities-section">
                <label>Responsibilities</label>
                
                {exp.responsibilities.map((resp, respIndex) => (
                  <div key={respIndex} className="responsibility-item">
                    <input
                      type="text"
                      value={resp}
                      onChange={(e) => handleResponsibilityChange(expIndex, respIndex, e.target.value)}
                    />
                    
                    {exp.responsibilities.length > 1 && (
                      <button 
                        type="button" 
                        className="remove-small-button"
                        onClick={() => removeResponsibility(expIndex, respIndex)}
                      >
                        X
                      </button>
                    )}
                  </div>
                ))}
                
                <button 
                  type="button" 
                  className="add-small-button"
                  onClick={() => addResponsibility(expIndex)}
                >
                  Add Responsibility
                </button>
              </div>
              
              {workExperience.length > 1 && (
                <button 
                  type="button" 
                  className="remove-button"
                  onClick={() => removeExperience(expIndex)}
                >
                  Remove Experience
                </button>
              )}
            </div>
          ))}
          
          <button 
            type="button" 
            className="add-button"
            onClick={addExperience}
          >
            Add Work Experience
          </button>
        </div>
      </div>
    );
  }