import "../styles/GeneralInfo.css";

export default function PersonalInfo({ personalInfo, onPersonalInfoChange }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      onPersonalInfoChange({
        ...personalInfo,
        [name]: value
      });
    };
  
    return (
      <div className="section-content">
        <h2>Personal Information</h2>
        
        <div className="form-group">
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={personalInfo.firstName}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={personalInfo.lastName}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={personalInfo.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={personalInfo.phone}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="github">GitHub</label>
          <input
            type="text"
            id="github"
            name="github"
            value={personalInfo.github}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={personalInfo.linkedin}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
  