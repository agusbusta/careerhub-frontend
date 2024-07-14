import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useAuth0 } from '@auth0/auth0-react';
import './cvBuilder.css';
import resumebuilder from '../../assets/resumebuilder.png'

const initialPersonalInfo = {
  firstName: '',
  lastName: '',
  address: '',
  phone: '',
  email: ''
};

const initialExperience = {
  startDate: '',
  endDate: '',
  company: '',
  position: '',
  responsibilities: ''
};

const CVBuilder = () => {
  const { user } = useAuth0();

  // State for personal information
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);

  // State for current editing experience
  const [experience, setExperience] = useState(initialExperience);

  // State to store all experiences
  const [experiences, setExperiences] = useState([]);

  // State for CV preview
  const [previewCV, setPreviewCV] = useState('');

  // State to control modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle changes in personal information and update preview
  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo,
      [name]: value
    }));
  };

  // Function to handle changes in current editing experience
  const handleExperienceChange = (event) => {
    const { name, value } = event.target;
    setExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value
    }));
  };

  // Function to add an experience to experiences array
  const addExperience = () => {
    setExperiences((prevExperiences) => [...prevExperiences, { ...experience }]);
    setExperience(initialExperience); // Reset current experience fields
  };

  // Function to remove an experience from experiences array
  const removeExperience = (index) => {
    setExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences.splice(index, 1);
      return updatedExperiences;
    });
  };

  // Function to update the CV preview
  const updatePreview = () => {
    const preview = `
      ==========================
      Name: ${personalInfo.firstName} ${personalInfo.lastName}
      Address: ${personalInfo.address}
      Phone: ${personalInfo.phone}
      Email: ${personalInfo.email}
      ==========================
      Experiences:
      ${experiences.map((exp, index) => `
        --------------------------
        Experience ${index + 1}:
        Company: ${exp.company}
        Position: ${exp.position}
        Start Date: ${exp.startDate}
        End Date: ${exp.endDate}
        Responsibilities: ${exp.responsibilities}
        --------------------------
      `).join('')}
      ==========================
    `;
    setPreviewCV(preview);
  };

  // useEffect hook to update preview whenever experiences array changes
  useEffect(() => {
    updatePreview();
  }, [experiences]);

  // useEffect hook to update preview whenever personalInfo changes
  useEffect(() => {
    updatePreview();
  }, [personalInfo]);

  // Function to handle "Start Over" button click
  const handleStartOver = () => {
    setPersonalInfo(initialPersonalInfo);
    setExperiences([]);
    setExperience(initialExperience);
    setPreviewCV('');
  };

  // Function to open the modal
  const handleCreateCV = () => {
    setIsModalOpen(true);
  };

  // Function to close modal and handle form submission
  const handleSubmitCV = (event) => {
    event.preventDefault();
    // Logic to submit CV data (you can add submission logic here)
    console.log('Form submitted', { personalInfo, experiences });
    setIsModalOpen(false);
  };

  return (
    <div className="cv-builder">
      <img className='logoresume' src={resumebuilder} />
      <h2>CareerHub Resume.AI</h2>
      <div className="cv-options">
        {/* Options for uploading a file and creating CV from scratch */}
        <h4>Improve your current cv using our AI:</h4>
        <input type="file" accept=".pdf,.doc,.docx" />
        <button>Upload and Improve resume</button>
        <br></br>
        <span className="or-text">OR</span>
        <h4>Create your resume from scratch using our AI builder:</h4>
        <button onClick={handleCreateCV}>CareerHub Resume AI Builder</button>
      </div>

      {/* Modal for creating CV */}
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="Modal" contentLabel="Create Your CV">
        <div className="modal-content">
          <div className="form-section">
            <h2>CareerHub CV Builder</h2>
            <form onSubmit={handleSubmitCV}>
              <h3>Lets fill your basics: </h3>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={personalInfo.firstName}
                  onChange={handlePersonalInfoChange}
                  required
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={personalInfo.lastName}
                  onChange={handlePersonalInfoChange}
                  required
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={personalInfo.address}
                  onChange={handlePersonalInfoChange}
                  required
                />
              </label>
              <label>
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={personalInfo.phone}
                  onChange={handlePersonalInfoChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={personalInfo.email}
                  onChange={handlePersonalInfoChange}
                  required
                />
              </label>

              {/* Section for experiences */}
              <h3>Add your experiences: </h3>

              {/* Fields to add/edit experience */}
              <label>
                Start Date:
                <input
                  type="text"
                  name="startDate"
                  value={experience.startDate}
                  onChange={handleExperienceChange}
                  required
                />
              </label>
              <label>
                End Date:
                <input
                  type="text"
                  name="endDate"
                  value={experience.endDate}
                  onChange={handleExperienceChange}
                  required
                />
              </label>
              <label>
                Company:
                <input
                  type="text"
                  name="company"
                  value={experience.company}
                  onChange={handleExperienceChange}
                  required
                />
              </label>
              <label>
                Position:
                <input
                  type="text"
                  name="position"
                  value={experience.position}
                  onChange={handleExperienceChange}
                  required
                />
              </label>
              <label>
                Responsibilities:
                <textarea
                  name="responsibilities"
                  value={experience.responsibilities}
                  onChange={handleExperienceChange}
                  required
                ></textarea>
              </label>
              <div className="experiences-list">
                {experiences.map((exp, index) => (
                  <div key={index} className="experience">
                    <h3>
                      Experience {index + 1} - {exp.company}<br />
                      <button type="button" onClick={() => removeExperience(index)}>
                        Remove
                      </button>
                    </h3>

                  </div>
                ))}
              </div>

              {/* Buttons to add experience, start over, and submit */}
              <div>
                <button type="button" onClick={addExperience}>
                  Add Experience
                </button>
                <button type="button" onClick={handleStartOver}>
                  Start Over
                </button>
                <button type="submit">Submit and Improve CV</button>
              </div>
            </form>
          </div>

          {/* Section for CV preview */}
          <div className="preview-section">
            <h2>Preview Your CV</h2>
            <pre>{previewCV}</pre>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CVBuilder;
