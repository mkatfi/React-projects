import "../styles/GeneralInfo.css";

export default function Profile({ upprofile, onProfileChange }) {
    console.log(`title: ${upprofile}`);
    console.log(`title: ${upprofile.targetTitle}`);
    const handleChange = (e) => {
        const { name, value } = e.target;
        onProfileChange({
          ...upprofile,
          [name]: value
        });
      };

    return (
        <div className="profile">
        <div className="section-content">
            <h2>Professional Profile</h2>
            <div className="form-group">
            <label htmlFor="target-title">Target Title</label>
            <input
                type="text"
                id="target-title"
                name="targetTitle"
                value={upprofile?.targetTitle || ''} 
                onChange={handleChange}
                />
            <label>Profile Summary</label>
            <textarea
                value={upprofile?.summary || ''}
                onChange={handleChange}
                placeholder="Write a brief professional summary"
                rows={6}
            />
            </div>
        </div>
        </div>
    );
}