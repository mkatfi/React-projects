import { useState, useEffect } from 'react';
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
import DownloadPDFButton from './components/Downloadpdf';


function App() {

  // Example data to populate the form
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
      },
      {
        university: 'Universite des sciences juridiques economiques et sociales Cadi Ayyad',
        degree: 'Bachelors in Arabic private law',
        fieldOfStudy: 'Arabic private law',
        location: 'Marrakech',
        startYear: '2016',
        endYear: '2019'
      },
      {
        university: 'Essalam High School',
        degree: 'Baccalaureate',
        fieldOfStudy: 'Physical Sciences',
        location: 'Ben Guerir',
        startYear: '2015',
        endYear: '2016'
      },
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
        name: 'Inception',
        dproject: 'Developed a system administration project using Docker to virtualize various images in a self-configured virtual machine.',
      },
      {
        name: 'IRC Project',
        dproject: 'Is a group project that makes us recreate an IRC server (from scratch, in C++) The server follows the RFC 2812 specification and can therefore be used with existing IRC clients',

      },
      {
        name: 'Ft_Transcendance',
        dproject: 'A dynamic web application for a ping-pong game using pure JavaScript The project features real-time game play and smooth animations',
      }
    ],
    skills: {
      programmingLanguages: 'JavaScript, Python, C&C++, HTML5, CSS3 ,TailwindCSS, ReactJS, Git/Github, Figma, NodeJS, Problem solving',
    }
  };


 
// The state to manage the active section
  const [activeSection, setActiveSection] = useState('personal');

// The state to manage the form data
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
      dproject: ''
    }
  ]);
  
  const [skills, setSkills] = useState({
    programmingLanguages: ''
  });


  // Function to handle changes in the info section

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

// Function to handle the example button click
  const handleExamploeButtonClick = () => {
    setPersonalInfo(dataExpmle.personalInfo);
    setProfile(dataExpmle.profile);
    setEducation(dataExpmle.education);
    setWorkExperience(dataExpmle.workExperience);
    setProjects(dataExpmle.projects);
    setSkills(dataExpmle.skills);
    setcertifications(dataExpmle.certifications);
  };



// Function to handle the delete button click
// This function resets all the form fields to their initial state
// and clears the preview section.
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
        dproject: '', 
      }
    ]);
    setSkills({
      programmingLanguages: ''
    });
  }
// useEffect to set the initial state of the form fields
  useEffect (() => {
    handleExamploeButtonClick();
  }, []);



  return (
    <div className="app-container">
      <div className="header">
      <img src="/logo.png" alt="Logo" />
        <div className="download-section">
            <DownloadPDFButton />
            <button 
              className='example-button'
              onClick={handleExamploeButtonClick}
            >
            <FaFileAlt />
            Example</button>
            <button 
              className='delete-button'
              onClick={handleDeletButtonClick}
            >
              <RiDeleteBin6Line />
              Clean </button>
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
        <div  id="page" className="paper">
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