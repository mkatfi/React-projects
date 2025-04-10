import "../styles/GeneralInfo.css";

export default function Profile({ profile, onProfileChange }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onProfileChange({
          ...profile,
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
                value={profile?.targetTitle || ''} 
                onChange={handleChange}
                />
            <label>Profile Summary</label>
            <textarea
                name="summary"
                value={profile?.summary || ''}
                onChange={handleChange}
                placeholder="Write a brief professional summary"
                rows={6}
            />
            </div>
        </div>
        </div>
    );
}