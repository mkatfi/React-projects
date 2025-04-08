import { useState } from 'react';
import './styles/App.css';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CVPreview from './components/CVPreview';

function App() {
  const [activeSection, setActiveSection] = useState('personal');

  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    github: '',
    linkedin: ''
  });
  
  const [profile, setProfile] = useState('');
  
  const [education, setEducation] = useState([
    { id: 1, 
      university: '',
      degree: '',
      fieldOfStudy: '',
      location: '',
      startYear: '',
      endYear: ''
    }
  ]);
  
  const [workExperience, setWorkExperience] = useState([
    { 
      id: 1, 
      company: '', 
      position: '', 
      location: '',
      startDate: '', 
      endDate: '', 
      responsibilities: ['']
    }
  ]);
  
  const [projects, setProjects] = useState([
    { id: 1,
      name: '',
      role: '', 
      company: '',
      period: '' 
    }
  ]);
  
  const [skills, setSkills] = useState({
    programmingLanguages: ''
  });

  const handlePersonalInfoChange = (updatedInfo) => {
    setPersonalInfo(updatedInfo);
  };

  const handleProfileChange = (event) => {
    setProfile(event.target.value);
  };

  const handleEducationChange = (updatedEducation) => {
    setEducation(updatedEducation);
  };

  const handleWorkExperienceChange = (updatedExperience) => {
    setWorkExperience(updatedExperience);
  };

  const handleProjectsChange = (updatedProjects) => {
    setProjects(updatedProjects);
  };

  const handleSkillsChange = (updatedSkills) => {
    setSkills(updatedSkills);
  };

  return (
    <div className="app-container">
      <div className="header">
        <div className="title">
            <h1>CV Builder</h1>
            <p>Build your CV in minutes</p>
        </div>
        <div className="download-section">
            <button className="download-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg>
              Download CV
            </button>
          </div>
      </div>
      <div className="sidebar">

        <img src="./image/logo.png" alt="" />

        <div className="nav-buttons">
          <button 
            className={activeSection === 'personal' ? 'active' : ''} 
            onClick={() => setActiveSection('personal')}
          >
            Personal Info
          </button>
          <button 
            className={activeSection === 'profile' ? 'active' : ''} 
            onClick={() => setActiveSection('profile')}
          >
            Profile
          </button>
          <button 
            className={activeSection === 'work' ? 'active' : ''} 
            onClick={() => setActiveSection('work')}
          >
            Work Experience
          </button>
          <button 
            className={activeSection === 'education' ? 'active' : ''} 
            onClick={() => setActiveSection('education')}
          >
            Education
          </button>
          <button 
            className={activeSection === 'projects' ? 'active' : ''} 
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </button>
          <button 
            className={activeSection === 'skills' ? 'active' : ''} 
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </button>
        </div>
        
        <div className="input-section">
          
            {activeSection === 'personal' && (
              <PersonalInfo 
                personalInfo={personalInfo} 
                onPersonalInfoChange={handlePersonalInfoChange} 
              />
            )}
            
            {activeSection === 'profile' && (
              <div className="section-content">
                <h2>Professional Profile</h2>
                <div className="form-group">
                  <label>Profile Summary</label>
                  <textarea
                    value={profile}
                    onChange={handleProfileChange}
                    placeholder="Write a brief professional summary"
                    rows={6}
                  />
                </div>
              </div>
            )}
            
            {activeSection === 'work' && (
              <WorkExperience 
                workExperience={workExperience} 
                onWorkExperienceChange={handleWorkExperienceChange} 
              />
            )}
            
            {activeSection === 'education' && (
              <Education 
                education={education} 
                onEducationChange={handleEducationChange} 
              />
            )}
            
            {activeSection === 'projects' && (
              <Projects 
                projects={projects} 
                onProjectsChange={handleProjectsChange} 
              />
            )}
            
            {activeSection === 'skills' && (
              <Skills 
                skills={skills} 
                onSkillsChange={handleSkillsChange} 
              />
            )}
          </div>
      </div>

      <div className="preview-container">
        <div className="paper">
            <CVPreview
              personalInfo={personalInfo}
              profile={profile}
              education={education}
              workExperience={workExperience}
              projects={projects}
              skills={skills}
            />
        </div>
      </div>
    </div>
  );
}

export default App;