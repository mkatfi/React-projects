export default function CVPreview({ personalInfo, profile, education, workExperience, projects, skills, certifications }) {
  const fullName = `${personalInfo.firstName} ${personalInfo.lastName}`;

  return (
    <div className="cv-preview">
      <div className="cv-header">
        <h1>{fullName || 'John Smith'}</h1>
        <div className="contact-info">
          {personalInfo.phone && (
            <span>
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
              </svg>
              {personalInfo.phone} |
            </span>
          )}
          
          {personalInfo.email && (
            <span>
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
              </svg>
              {personalInfo.email} |
            </span>
          )}
          
          {personalInfo.github && (
            <span>
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
              {personalInfo.github} |
            </span>
          )}
          
          {personalInfo.linkedin && (
            <span>
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
              {personalInfo.linkedin}
            </span>
          )}
        </div>
      </div>
      
      {(profile?.targetTitle || profile?.summary) && (
        <div className="cv-section">
          <h2>Profile</h2>
          {profile.targetTitle && (
            <div className="targetTitle">
              <h3>{profile.targetTitle}</h3>
            </div>
          )}
          <div className="cv-content">
            <p>{profile.summary}</p>
          </div>
        </div>
      )}
      
      {workExperience.some(exp => exp.company || exp.position) && (
        <div className="cv-section">
          <h2>Work Experience</h2>
          <div className="cv-content">
            {workExperience.map((exp, index) => (
              exp.company || exp.position ? (
                <div key={index} className="experience-item">
                  <div className="header-row">
                    <div className="title-company">
                      <h3>{exp.company}</h3>
                      <p className="position">{exp.position}</p>
                    </div>
                    <div className="location-date">
                      <p>{exp.location}</p>
                      <p>{exp.startDate} - {exp.endDate}</p>
                    </div>
                  </div>
                  
                  {exp.responsibilities.some(r => r) && (
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((resp, respIndex) => (
                        resp ? <li key={respIndex}>{resp}</li> : null
                      ))}
                    </ul>
                  )}
                </div>
              ) : null
            ))}
          </div>
        </div>
      )}
      
      {education.some(edu => edu.university || edu.degree) && (
        <div className="cv-section">
          <h2>Education</h2>
          <div className="cv-content">
            {education.map((edu, index) => (
              edu.university || edu.degree ? (
                <div key={index} className="education-item">
                  <div className="header-row">
                    <div className="title-company">
                      <h3>{edu.university}</h3>
                      <p>{edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}</p>
                    </div>
                    <div className="location-date">
                      <p>{edu.location}</p>
                      <p>{edu.startYear} - {edu.endYear}</p>
                    </div>
                  </div>
                </div>
              ) : null
            ))}
          </div>
        </div>
      )}
      
      {certifications && certifications.some(cert => cert.certificaName || cert.institution) && (
        <div className="cv-section">
          <h2>Certifications</h2>
          <div className="cv-content">
            {certifications.map((cert, index) => (
              cert.certificaName || cert.institution ? (
                <div key={index} className="certification-item">
                  <div className="header-row">
                    <div className="title-company">
                      <h3>{cert.certificaName}</h3>
                      <p>{cert.institution} {cert.fieldOfStudy && `- ${cert.fieldOfStudy}`}</p>
                    </div>
                    <div className="location-date">
                      <p>{cert.location}</p>
                      <p>{cert.startYear} {cert.endYear && `- ${cert.endYear}`}</p>
                    </div>
                  </div>
                </div>
              ) : null
            ))}
          </div>
        </div>
      )}
      
      {projects.some(project => project.name) && (
        <div className="cv-section">
          <h2>Projects</h2>
          <div className="cv-content">
            {projects.map((project, index) => (
              project.name ? (
                <div key={index} className="project-item">
                  <div className="header-row">
                    <div className="title-company">
                      <h3>{project.name}</h3>
                      <p>{project.role}</p>
                    </div>
                    <div className="location-date">
                      <p>{project.company}</p>
                      <p>{project.period}</p>
                    </div>
                  </div>
                </div>
              ) : null
            ))}
          </div>
        </div>
      )}
      
      {skills.programmingLanguages && (
        <div className="cv-section">
          <h2>Skills</h2>
          <div className="cv-content">
            <strong>Programming Languages:</strong>
            <div className="skills-list">
              <ul>
                {skills.programmingLanguages && skills.programmingLanguages.split(',').map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}