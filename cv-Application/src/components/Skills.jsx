export default function Skills({ skills, onSkillsChange }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      onSkillsChange({
        ...skills,
        [name]: value
      });
    };
  
    return (
      <div className="skills">
        <div className="section-content">
          <h2>Skills</h2>
          
          <div className="form-group">
            <label>Programming Languages</label>
            <input
              type="text"
              name="programmingLanguages"
              value={skills.programmingLanguages}
              onChange={handleChange}
              placeholder="JavaScript, TypeScript, Python, Java, SQL"
            />
          </div>
        </div>
      </div>
    );
  }