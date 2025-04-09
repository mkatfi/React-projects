import { useState } from 'react';
import './styles/App.css';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CVPreview from './components/CVPreview';
import { FaFileAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function App() {
  const dataExpmle = {  
    personalInfo: {
      firstName: 'Marouane',
      lastName: 'katfi',
      email: 'marouane.katfi96@gmail.com',
      phone: '0603243113',
      github: 'github.com/mkatfi',
      linkedin: 'linkedin.com/in/marouane-katfi-61363921b'
    },
    profile: {
      targetTitle: 'Software Developer',
      summary :'A forward-thinking Software Developer with expertise in system-level programming (C/C++) and modern web technologies,including JavaScript, React, and TailwindCSS. Experienced in the full software development lifecycle, from concept to delivery,with a focus on building responsive, user-centered applications. Proficient in UI/UX design using Figma and experienced inaudiovisual content creation, combining creativity, innovation, and precision. Skilled in project management, Git/GitHub collaboration, and delivering efficient, user-focused solutions.',
    },
    education: [
      {
        university: 'Mohammed VI Polytechnic University',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Computer Science',
        location: 'Ben Guerir, MAROCCO',
        startYear: '2022',
        endYear: 'Present'
      }
    ],
    workExperience: [
      {
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        responsibilities: []
      }
    ],
    projects: [
      {
        name: 'Project Management Tool',
        role: 'Lead Developer',
        company: 'Freelance',
        period: '2022-01-01 to 2022-06-01'
      }
    ],
    skills: {
      programmingLanguages: 'JavaScript, Python, C&C++, HTML5, CSS3 ,TailwindCSS, ReactJS, Git/Github, Figma, NodeJS, Problem solving',
    }
  };


 

  const [activeSection, setActiveSection] = useState('personal');

  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    github: '',
    linkedin: ''
  });
  
  const [profile, setProfile] = useState({
    targetTitle: '',
    summary: ''
  });
  
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

  const handleProfileChange = (upprofile) => {
    setProfile(upprofile);
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
  const handleExamploeButtonClick = () => {
    setPersonalInfo(dataExpmle.personalInfo);
    setProfile(dataExpmle.profile);
    setEducation(dataExpmle.education);
    setWorkExperience(dataExpmle.workExperience);
    setProjects(dataExpmle.projects);
    setSkills(dataExpmle.skills);
  };

  return (
    <div className="app-container">
      <div className="header">
        <img src="src/image/logo.png" alt="" />
        <div className="download-section">
            <button className="download-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg>
              Download CV
            </button>
            <button className='example-button'
            onClick={handleExamploeButtonClick}
            >
            <FaFileAlt />
            Watch Example</button>
            <button className='delete-button'>
              <RiDeleteBin6Line />
              Clean All</button>
        </div>
      </div>
      <div className="sidebar">


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
            Experience
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
              <div className="profile">
                <div className="section-content">
                  <h2>Professional Profile</h2>
                  <div className="form-group">
                    <label>Target Title</label>
                    <input type="text" 
                      value={profile.targetTitle}
                      onChange={handleProfileChange}
                      placeholder="Write a brief professional summary"
                      rows={6}
                    />
                    <label>Profile Summary</label>
                    <textarea
                      value={profile.summary}
                      onChange={handleProfileChange}
                      placeholder="Write a brief professional summary"
                      rows={6}
                    />
                  </div>
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