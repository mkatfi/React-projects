
import "../styles/GeneralInfo.css";

export default function Certifications({ certifications, onCertificationsChange }) {

      const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedCertifications = [...certifications];
        updatedCertifications[index] = { ...updatedCertifications[index], [name]: value };
        onCertificationsChange(updatedCertifications);
      };
    
      const addCertification = () => {
        onCertificationsChange([
          ...certifications,
          { 
            id: Date.now(), 
            certificaName: '',
            institution: '',
            fieldOfStudy: '',
            location: '',
            description: '',
            startYear: '',
            endYear: ''
          }
        ]);
      };
    
      const removeCertification = (index) => {
        if (certifications.length > 1) {
          const updatedCertification = certifications.filter((_, i) => i !== index);
          onCertificationsChange(updatedCertification);
        }
      };
    return (
        <div className="certifications">
            <div className="section-content">
                <h2>Certifications</h2>

                {certifications.map((cer, index) => (
                    <div key={cer.id} className="certifica-entry">
                    <h3>certification Entry {index + 1}</h3>
                    
                    <div className="form-group">
                        <label>Institution</label>
                        <input
                        type="text"
                        name="institution"
                        value={cer.institution}
                        onChange={(e) => handleChange(index, e)}
                        />
                    </div>

                    <div className="form-group">
                        <label>certification name</label>
                        <input
                        type="text"
                        name="certificaName"
                        value={cer.certificaName}
                        onChange={(e) => handleChange(index, e)}
                        />
                    </div>
                    
                  
                    
                    <div className="form-group">
                        <label>Field of Study</label>
                        <input
                        type="text"
                        name="fieldOfStudy"
                        value={cer.fieldOfStudy}
                        onChange={(e) => handleChange(index, e)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Location</label>
                        <input
                        type="text"
                        name="location"
                        value={cer.location}
                        onChange={(e) => handleChange(index, e)}
                        />
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group half">
                        <label>Start Year</label>
                        <input
                            type="text"
                            name="startYear"
                            value={cer.startYear}
                            onChange={(e) => handleChange(index, e)}
                        />
                        </div>
                        
                        <div className="form-group half">
                        <label>End Year</label>
                        <input
                            type="text"
                            name="endYear"
                            value={cer.endYear}
                            onChange={(e) => handleChange(index, e)}
                        />
                        </div>
                    </div>
                    
                    {certifications.length > 1 && (
                        <button 
                        type="button" 
                        className="remove-button"
                        onClick={() => removeCertification(index)}
                        >
                        Remove
                        </button>
                    )}
                    </div>
                ))}
                
                <button 
                    type="button" 
                    className="add-button"
                    onClick={addCertification}
                >
                    Add Certification
                </button>
            </div>
        </div>
    );
}
