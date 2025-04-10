import { useState } from 'react';
import './styles/App.css';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Profile from './components/Profile';
import CVPreview from './components/CVPreview';
import Certifications from './components/Certifications';
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
        location: 'Ben Guerir',
        startYear: '2022',
        endYear: 'Present'
      }
    ],
    certifications: [
      {
        certificaName: 'Full Stack Web Development',
        institution: 'Udemy',
        fieldOfStudy: 'Web Development',
        location: 'Online',
        description: 'Completed a comprehensive course on full stack web development, covering front-end and back-end technologies.',
        startYear: '2024',
        endYear: '2025'
      },
      {
        certificaName: 'Diplome Bureautique',
        institution: 'Centre social à proximité',
        fieldOfStudy: 'informatic Bureautique',
        location: 'Ben Guerir',
        description: 'Completed a comprehensive course on informatic technologies , word, excel, power point',
        startYear: '2021',
        endYear: '2022'
      },
      {
        certificaName: 'Reporter d`images audiovisuel',
        institution: 'OFPPT',
        fieldOfStudy: 'Institut Spécialisé de Technologie Appliquée',
        location: 'Ben Guerir',
        description: 'Completed a hands-on training program focused on audiovisual production and media reporting. Gained practical skills in camera operation, video editing, lighting, and sound. Learned the fundamentals of visual storytelling, framing, and post-production using editing software. Developed projects that involved filming, editing, and producing short video segments for news or creative content.',
        startYear: '2021',
        endYear: '2022'
        
      },
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
        period: '2022 - 2025'
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
      description: '',
      startYear: '',
      endYear: ''
    }
  ]);
  const [certifications, setcertifications] = useState([
    { id: 1,
      certificaName: '',
      institution: '',
      fieldOfStudy: '',
      location: '',
      description: '',
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
  const handlecertificationsChange = (updatedcertifications) => {
    setcertifications(updatedcertifications);
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
    setcertifications(dataExpmle.certifications);
  };
  const handleDeletButtonClick = () =>{
    setPersonalInfo({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      github: '',
      linkedin: ''
    });
    
    setProfile({
      targetTitle: '',
      summary: ''
    });
    
    setEducation([
      { id: 1, 
        university: '',
        degree: '',
        fieldOfStudy: '',
        location: '',
        startYear: '',
        endYear: ''
      }
    ]);

    setcertifications([
      { id: 1,
        certificaName: '',
        institution: '',
        fieldOfStudy: '',
        location: '',
        description: '',
        startYear: '',
        endYear: ''
      }
    ]);
    
    setWorkExperience([
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
    
    setProjects([
      { id: 1,
        name: '',
        role: '', 
        company: '',
        period: '' 
      }
    ]);
    setSkills({
      programmingLanguages: ''
    });
  }

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
            <button 
              className='example-button'
              onClick={handleExamploeButtonClick}
            >
            <FaFileAlt />
            Watch Example</button>
            <button 
              className='delete-button'
              onClick={handleDeletButtonClick}
            >
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
            className={activeSection === 'certifications' ? 'active' : ''} 
            onClick={() => setActiveSection('certifications')}
          >
            Certifications
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
              <Profile 
                  profile ={profile}
                  onProfileChange={handleProfileChange}
              />
            )}
            
            {activeSection === 'work' && (
              <WorkExperience 
                workExperience={workExperience} 
                onWorkExperienceChange={handleWorkExperienceChange} 
              />
            )}
            {activeSection === 'certifications' && (
              <Certifications 
                certifications={certifications} 
                onCertificationsChange={handlecertificationsChange} 
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
              certifications={certifications}
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