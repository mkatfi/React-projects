export default function Education({ education, onEducationChange }) {
    const handleChange = (index, e) => {
      const { name, value } = e.target;
      const updatedEducation = [...education];
      updatedEducation[index] = { ...updatedEducation[index], [name]: value };
      onEducationChange(updatedEducation);
    };
  
    const addEducation = () => {
      onEducationChange([
        ...education,
        { 
          id: Date.now(), 
          university: '', 
          degree: '', 
          fieldOfStudy: '', 
          location: '', 
          startYear: '', 
          endYear: '' 
        }
      ]);
    };
  
    const removeEducation = (index) => {
      if (education.length > 1) {
        const updatedEducation = education.filter((_, i) => i !== index);
        onEducationChange(updatedEducation);
      }
    };
  
    return (
      <div className="education">
        <div className="section-content">
          <h2>Education</h2>
          
          {education.map((edu, index) => (
            <div key={edu.id} className="education-entry">
              <h3>Education Entry {index + 1}</h3>
              
              <div className="form-group">
                <label>University/Institution</label>
                <input
                  type="text"
                  name="university"
                  value={edu.university}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              
              <div className="form-group">
                <label>Degree</label>
                <input
                  type="text"
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              
              <div className="form-group">
                <label>Field of Study</label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={edu.fieldOfStudy}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={edu.location}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              
              <div className="form-row">
                <div className="form-group half">
                  <label>Start Year</label>
                  <input
                    type="text"
                    name="startYear"
                    value={edu.startYear}
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>
                
                <div className="form-group half">
                  <label>End Year</label>
                  <input
                    type="text"
                    name="endYear"
                    value={edu.endYear}
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>
              </div>
              
              {education.length > 1 && (
                <button 
                  type="button" 
                  className="remove-button"
                  onClick={() => removeEducation(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          
          <button 
            type="button" 
            className="add-button"
            onClick={addEducation}
          >
            Add Education
          </button>
        </div>
      </div>
    );
  }