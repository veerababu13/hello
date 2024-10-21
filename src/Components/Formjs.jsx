import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';

function FormV() {
    const cities = [
        { value: 'Others', label: 'Others' },
        { value: 'Bangalore', label: 'Bangalore' },
        { value: 'Hyderabad', label: 'Hyderabad' },
        { value: 'Mumbai', label: 'Mumbai' },
        { value: 'Delhi', label: 'Delhi' },
        { value: 'Pune', label: 'Pune' },
        { value: 'Chennai', label: 'Chennai' },
        { value: 'KolKata', label: 'Kolkata' },
        { value: 'Ahmedabad', label: 'Ahmedabad' },
        { value: 'Gurgaon', label: 'Gurgaon' },
        { value: 'Noida', label: 'Noida' },
        { value: 'Jaipur', label: 'Jaipur' },
        { value: 'Chandigarh', label: 'Chandigarh' },
        { value: 'Kochi', label: 'Kochi' },
        { value: 'Indore', label: 'Indore' },
        { value: 'Lucknow', label: 'Lucknow' },
        { value: 'Bhopal', label: 'Bhopal' },
        { value: 'Visakhapatanam', label: 'Visakhapatanam' },
        { value: 'Surat', label: 'Surat' },
        { value: 'Nagpur', label: 'Nagpur' },
        { value: 'Coimbatore', label: 'Coimbatore' },
        { value: 'Bhubaneswar', label: 'Bhubaneswar' },
        { value: 'Patna', label: 'Patna' },
        { value: 'Thiruvananthapuram', label: 'Thiruvananthapuram' },
        { value: 'Vadorara', label: 'Vadorara' },
        { value: 'Guwahati', label: 'Guwahati' },

    ]
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        jobTitle: '',
        companyName: 'tcs',
        jobLocation: '',
        jobType: '',
        jobDescriptionLink: '',
        educationLevel: '',
        experienceRequired: '',
        workMode: '',
        jobPostedBy: '',
        otherJobTitle: '',
        customCity: '',
    });
    const [isTouched, setIsTouched] = useState({});
    const [errors, setErrors] = useState({});
    const jobTitleRef = useRef(null);
    const otherJobTitleRef = useRef(null);
    const companyNameRef = useRef(null);
    const jobLocationRef = useRef(null);
    const customCityRef = useRef(null);
    const jobTypeRef = useRef(null);
    const workModeRef = useRef(null);
    const jobDescriptionLinkRef = useRef(null);
    const educationLevelRef = useRef(null);
    const experienceRequiredRef = useRef(null);
    const jobTitles = ["Others",
        "Account Executive", "Account Manager", "Accountant", "Administrative Assistant",
        "Advertising Manager", "Aerospace Engineer", "Agile Coach", "Analyst", "Android Developer",
        "Animator", "Applications Developer", "Architect", "Art Director", "Assistant Manager",
        "Assistant Product Manager", "Associate Professor", "Asset Manager", "Audit Manager",
        "Back-End Developer", "Banking Analyst", "Benefits Coordinator", "Bioinformatics Specialist",
        "Biomedical Engineer", "Blockchain Developer", "Brand Manager", "Business Analyst",
        "Business Consultant", "Business Development Manager", "Business Intelligence Analyst",
        "CAD Designer", "CEO (Chief Executive Officer)", "CFO (Chief Financial Officer)",
        "Call Center Manager", "Campaign Manager", "Carpenter", "Case Manager", "Cashier",
        "Chemical Engineer", "Chief Marketing Officer (CMO)", "Chief Operating Officer (COO)",
        "Chief Technology Officer (CTO)", "Claims Adjuster", "Clinical Research Coordinator",
        "Cloud Architect", "Compliance Officer", "Computer Programmer", "Construction Manager",
        "Content Manager", "Content Writer", "Controller", "Copywriter", "Corporate Trainer",
        "Creative Director", "Credit Analyst", "Customer Service Manager", "Cyber Security Analyst",
        "Cytotechnologist", "Database Administrator", "Data Analyst", "Data Engineer", "Data Scientist",
        "Design Engineer", "Designer", "Development Manager", "DevOps Engineer", "Dietitian",
        "Director of Operations", "Director of Sales", "Distribution Manager", "Doctor",
        "Electrical Engineer", "Elementary School Teacher", "Embedded Systems Engineer",
        "Emergency Medical Technician (EMT)", "Employee Relations Specialist", "Email Marketing Manager",
        "Engineer", "Environmental Engineer", "Environmental Scientist", "Epidemiologist",
        "Event Coordinator", "Executive Assistant", "Facilities Manager", "Family Nurse Practitioner",
        "Fashion Designer", "Finance Manager", "Financial Advisor", "Financial Analyst",
        "Financial Planner", "Firefighter", "Fleet Manager", "Food Scientist", "Forensic Scientist",
        "Front-End Developer", "Full Stack Developer", "Fundraiser", "Game Designer",
        "Genetic Counselor", "Geneticist", "Geologist", "Graphic Designer", "Guidance Counselor",
        "Hardware Engineer", "Health and Safety Manager", "Healthcare Administrator",
        "Help Desk Technician", "High School Teacher", "Hospitality Manager", "Hotel Manager",
        "HR Manager", "Human Resources Specialist", "Hydrologist", "Illustrator",
        "Industrial Designer", "Industrial Engineer", "Information Security Analyst",
        "Information Systems Manager", "Information Technology Manager", "Information Technology Specialist",
        "Insurance Agent", "Instructional Designer", "Interior Designer", "Investment Banker",
        "IT Consultant", "IT Manager", "Java Developer", "Journalist", "Junior Accountant",
        "Laboratory Technician", "Landscape Architect", "Lawyer", "Librarian", "Machine Learning Engineer",
        "Maintenance Manager", "Management Consultant", "Manufacturing Engineer", "Marketing Coordinator",
        "Marketing Manager", "Marketing Specialist", "Mathematician", "Mechanical Engineer",
        "Media Planner", "Medical Assistant", "Medical Laboratory Technician", "Medical Technologist",
        "Mental Health Counselor", "Microbiologist", "Mobile Developer", "Mortgage Broker",
        "Music Producer", "Network Administrator", "Network Engineer", "Neuroscientist",
        "Nurse Practitioner", "Nursing Assistant", "Nutritionist", "Occupational Therapist",
        "Office Manager", "Operations Analyst", "Operations Manager", "Pediatrician",
        "Pharmacist", "Pharmacy Technician", "Physical Therapist", "Physician", "Physicist",
        "Portfolio Manager", "Principal", "Product Manager", "Product Owner", "Professor",
        "Project Coordinator", "Project Manager", "Property Manager", "Psychiatrist",
        "Psychologist", "Public Relations Manager", "Public Relations Specialist",
        "Purchasing Manager", "QA Engineer", "QA Manager", "Quality Assurance Analyst",
        "Recruiter", "Registered Nurse", "Research Analyst", "Research Scientist", "Retail Manager",
        "Risk Manager", "Sales Consultant", "Sales Director", "Sales Manager", "Sales Representative",
        "Scrum Master", "Security Analyst", "SEO Specialist", "Social Media Manager",
        "Software Developer", "Software Engineer", "Solutions Architect", "Speech Therapist",
        "Statistician", "Store Manager", "Strategic Planner", "Structural Engineer",
        "Supply Chain Manager", "Surgeon", "Surveyor", "System Administrator", "Systems Analyst",
        "Tax Advisor", "Teacher", "Technical Writer", "Technology Consultant", "Therapist",
        "Training Manager", "Translator", "Treasury Analyst", "UI Developer", "UI/UX Designer",
        "Underwriter", "User Experience Researcher", "Veterinarian", "Video Game Designer",
        "Warehouse Manager", "Web Designer", "Web Developer", "Writer"
    ];

    const handleEdit = (jobId) => {
        setIsEditing(true)
        setEditJobId(jobId)
        const jobToEdit = jobs.find(job => job.jobId === jobId);
        setFormData({ ...jobToEdit });
        setIsFormOpen(true);
    };

    const cancel = () => {
        toggleForm();
        setIsEditing(false);
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [id]: value
        }));
        if (errors[id]) {
            setErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
          }
    };
    const handleCityChange = (selectedOptions) => {
        const selectedCities = selectedOptions ? selectedOptions.map(option => option.value) : [];
        let updatedJobLocation = selectedCities.filter(city => city !== 'Others').join(', ');

        if (selectedCities.includes('Others')) {
            updatedJobLocation += updatedJobLocation ? ', ' : '';
            updatedJobLocation += 'Others';
        }
        setFormData(prevFormData => ({
            ...prevFormData,
            jobLocation: updatedJobLocation
        }));

        if (errors.jobLocation) {
            setErrors((prevErrors) => ({ ...prevErrors, jobLocation: '' }));
          }
    };

    const handleJobTitleChange = (selectedOption) => {
        if (selectedOption.value === 'Others') {
            setFormData(prevFormData => ({ ...prevFormData, jobTitle: 'Others', otherJobTitle: '' }));
        } else {
            setFormData(prevFormData => ({ ...prevFormData, jobTitle: selectedOption.value, otherJobTitle: '' }));
        }

        if (errors.jobTitle) {
            setErrors((prevErrors) => ({ ...prevErrors, jobTitle: '' }));
          }

    };

    const validate = () => {
        let newErrors = {};
        if (!formData.jobTitle) {
            newErrors.jobTitle = 'Job title is required';
        }
        if (formData.jobTitle === 'Others' && !formData.otherJobTitle) {
            newErrors.otherJobTitle = 'Please specify the job title';
        }
        if (!formData.companyName) {
            newErrors.companyName = 'Company name is required';
        }
        if (!formData.jobLocation) {
            newErrors.jobLocation = 'Job location is required';
        }
        if (formData.jobLocation.includes('Others') && !formData.customCity) {
            newErrors.customCity = 'Please specify the city';
        }
        if (!formData.jobType) {
            newErrors.jobType = 'Job type is required';
        }
        if (!formData.workMode) {
            newErrors.workMode = 'Work mode is required';
        }
        if (!formData.jobDescriptionLink) {
            newErrors.jobDescriptionLink = 'Job description link is required';
        }
        if (!formData.educationLevel) {
            newErrors.educationLevel = 'Education level is required';
        }
        if (!formData.experienceRequired) {
            newErrors.experienceRequired = 'Experience required is required';
        }
        setErrors(newErrors);
        return newErrors;
    };

    const scrollToFirstError = (errorFields) => {
        const refs = {
            jobTitle: jobTitleRef,
            otherJobTitle: otherJobTitleRef,
            companyName: companyNameRef,
            jobLocation: jobLocationRef,
            customCity: customCityRef,
            jobType: jobTypeRef,
            workMode: workModeRef,
            jobDescriptionLink: jobDescriptionLinkRef,
            educationLevel: educationLevelRef,
            experienceRequired: experienceRequiredRef,      
        };

        for (const field in errorFields) {
            if (refs[field] && refs[field].current) {
                refs[field].current.scrollIntoView({ behavior: 'smooth' });
                break;
            }
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            const updatedData = { ...formData };
            if (formData.jobLocation.includes('Others')) {
                const customCity = formData.customCity;
                updatedData.jobLocation = formData.jobLocation.replace('Others', customCity);
            }
            if(formData.jobTitle === 'Others') {
                updatedData.jobTitle = formData.otherJobTitle;
            }
            console.log('Submitting data:', updatedData);
            // if (isEditing) {
            //     const updateddata = { ...formData, jobId: editJobId };
            //     if (formData.jobTitle === 'Others') {
            //         updateddata.jobTitle = formData.otherJobTitle;
            //     }
            //     setLoading(true);
            //     axios.put(`${config.api.baseURL}${config.api.jobPoster.updateJob}`, JSON.stringify(updateddata), {
            //         headers: {
            //             'Content-Type': 'application/json',
            //             Authorization: `Bearer ${token}`
            //         }
            //     }).then(response => {
            //         setUpdateMessage('Job updated successfully');
            //         setTimeout(() => {
            //             setUpdateMessage('');
            //         }, 2000);
            //         fetchJobs();
            //     }).catch(error => {
            //         if (error.response.status === 403) {
            //             setErrorMessage('session Expired')
            //             setTimeout(() => {
            //                 setErrorMessage('')
            //                 handleLogout();
            //             }, 2000);
            //         }
            //         else {
            //             setErrorMessage('Failed to update Job');
            //             setTimeout(() => {
            //                 setErrorMessage('');
            //             }, 2000);
            //         }
            //     }).finally(() => setLoading(false));

            // } else {

            //     const updatedformData = { ...formData };
            //     if (formData.jobTitle === 'Others') {
            //         updatedformData.jobTitle = formData.otherJobTitle;
            //     }
            //     setLoading(true);
            //     axios.post(`${config.api.baseURL}${config.api.jobPoster.saveJob}`, JSON.stringify(updatedformData), {
            //         headers: {
            //             'Content-Type': 'application/json',
            //             Authorization: `Bearer ${token}`
            //         }
            //     }).then(response => {
            //         setUpdateMessage('Job posted successfully');
            //         setTimeout(() => {
            //             setUpdateMessage('');
            //         }, 2000);
            //         fetchJobs();
            //         toggleForm();
            //     }).catch(error => {
            //         if (error.response.status === 403) {
            //             setErrorMessage('session Expired')
            //             setTimeout(() => {
            //                 setErrorMessage('')
            //                 handleLogout();
            //             }, 2000);
            //         }
            //         else {
            //             setErrorMessage('Failed to post a job')
            //             setTimeout(() => {
            //                 setErrorMessage('')
            //             }, 2000);
            //         }
            //     }).finally(() => setLoading(false));
            // }
            // setIsEditing(false);
            // setEditJobId(null)
            // toggleForm();
        }
        else {
            setIsTouched({
                jobTitle: true,
                otherJobTitle: formData.jobTitle === 'Others',
                companyName: true,
                jobLocation: true,
                customCity: formData.jobLocation.includes('Others'),
                jobType: true,
                workMode: true,
                jobDescriptionLink: true,
                educationLevel: true,
                experienceRequired: true,
            });
            scrollToFirstError(validationErrors);
        }
    };
    return (
        <form onSubmit={handleFormSubmit} className="w-full max-w-sm lg:max-w-lg mx-auto p-4" noValidate>
            <div className='mb-4' ref={jobTitleRef}>
                <label htmlFor="jobTitle">Job Title<span className='text-red-500'>*</span></label>
                <Select
                    id="jobTitle"
                    options={jobTitles.map(title => ({ value: title, label: title }))}
                    onChange={handleJobTitleChange}
                    value={{ value: formData.jobTitle, label: formData.jobTitle }}
                    required
                />
                {isTouched.jobTitle && errors.jobTitle && <span style={{ color: 'red' }}>{errors.jobTitle}</span>}

            </div>

            {formData.jobTitle === 'Others' && (
                <div className='mb-4' ref={otherJobTitleRef}>
                    <label htmlFor="otherJobTitle">Please Specify<span className='text-red-500'>*</span></label>
                    <input
                        type="text"
                        id="otherJobTitle"
                        placeholder="Enter  job title"
                        value={formData.otherJobTitle}
                        onChange={handleChange}
                        className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3'
                        required
                    />
                    {isTouched.otherJobTitle && errors.otherJobTitle && <span style={{ color: 'red' }}>{errors.otherJobTitle}</span>}

                </div>
            )}

            <div className='mb-4' ref={companyNameRef}>
                <label htmlFor='companyName' className='block text-sm font-medium text-gray-700'>
                    Company Name<span className='text-red-500'>*</span>
                </label>
                <input
                    type='text'
                    id='companyName'
                    value={formData.companyName}
                    onChange={handleChange}
                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3'
                    readOnly
                    required
                />
                {isTouched.companyName && errors.companyName && <span style={{ color: 'red' }}>{errors.companyName}</span>}

            </div>
            <div className='mb-4' ref={jobLocationRef}>
                <label htmlFor='jobLocation' className='block text-sm font-medium text-gray-700'>
                    Job Location<span className='text-red-500'>*</span>
                </label>
                <Select
                    isMulti
                    id='jobLocation'
                    options={cities}
                    value={cities.filter(city => formData.jobLocation.split(', ').includes(city.value))}
                    onChange={handleCityChange}
                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3'
                    required
                />
                {isTouched.jobLocation && errors.jobLocation && <span style={{ color: 'red' }}>{errors.jobLocation}</span>}

                {formData.jobLocation.includes('Others') && (
                    <div className='mt-4' ref={customCityRef}>
                        <label htmlFor='customCity' className='block text-sm font-medium text-gray-700'>
                            Please Specify the City<span className='text-red-500'>*</span>
                        </label>
                        <input
                            type='text'
                            id='customCity'
                            placeholder='Enter city name'
                            value={formData.customCity}
                            onChange={handleChange}
                            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3'
                            required
                        />
                        {isTouched.customCity && errors.customCity && <span style={{ color: 'red' }}>{errors.customCity}</span>}

                    </div>
                )}
            </div>
            <div className='mb-4' ref={jobTypeRef}>
                <label htmlFor='jobType' className='block text-sm font-medium text-gray-700'>
                    Job Type<span className='text-red-500'>*</span>
                </label>
                <select
                    id='jobType'
                    value={formData.jobType}
                    onChange={handleChange}
                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3'
                    required
                >
                    <option value=''>Select</option>
                    <option value='Full-time'>Full-time</option>
                    <option value='Part-time'>Part-time</option>
                    <option value='Contract'>Contract</option>
                    <option value='Internship'>Internship</option>
                    <option value='Freelance'>Freelance</option>
                    <option value='Remote'>Remote</option>
                    <option value='Consultant'>Consultant</option>
                    <option value='Apprenticeship'>Apprenticeship</option>
                </select>
                {isTouched.jobType && errors.jobType && <span style={{ color: 'red' }}>{errors.jobType}</span>}

            </div>
            <div className='mb-4' ref={workModeRef}>
                <label htmlFor='workMode' className='block text-sm font-medium text-gray-700'>
                    Work Mode<span className='text-red-500'>*</span>
                </label>
                <select
                    id='workMode'
                    value={formData.workMode}
                    onChange={handleChange}
                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3'
                    required
                >
                    <option value=''>Select</option>
                    <option value='hybrid'>Hybrid</option>
                    <option value='onsite'>Onsite</option>
                    <option value='remote'>Remote</option>
                </select>
                {isTouched.workMode && errors.workMode && <span style={{ color: 'red' }}>{errors.workMode}</span>}

            </div>
            <div className='mb-4' ref={jobDescriptionLinkRef}>
                <label htmlFor='jobDescriptionLink' className='block text-sm font-medium text-gray-700'>
                    Job Description Link<span className='text-red-500'>*</span>
                </label>
                <input
                    type='text'
                    id='jobDescriptionLink'
                    value={formData.jobDescriptionLink}
                    onChange={handleChange}
                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3'
                    required
                />
                {isTouched.jobDescriptionLink && errors.jobDescriptionLink && <span style={{ color: 'red' }}>{errors.jobDescriptionLink}</span>}

            </div>
            <h2 className='text-xl font-semibold mb-4'>Requirements</h2>
            <div className='mb-4' ref={educationLevelRef}>
                <label htmlFor='educationLevel' className='block text-sm font-medium text-gray-700'>
                    Education Level<span className='text-red-500'>*</span>
                </label>
                <select
                    id='educationLevel'
                    value={formData.educationLevel}
                    onChange={handleChange}
                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3'
                    required
                >
                    <option value=''>Select</option>
                    <option value='High School'>High School</option>
                    <option value='Associate Degree'>Associate Degree</option>
                    <option value="bachelor's degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value='Doctorate'>Doctorate</option>
                    <option value='Diploma/Certification'>Diploma/Certification</option>
                </select>
                {isTouched.educationLevel && errors.educationLevel && <span style={{ color: 'red' }}>{errors.educationLevel}</span>}

            </div>
            <div className='mb-4' ref={experienceRequiredRef}>
                <label htmlFor='experienceRequired' className='block text-sm font-medium text-gray-700'>
                    Experience Required<span className='text-red-500'>*</span>
                </label>
                <select
                    id='experienceRequired'
                    value={formData.experienceRequired}
                    onChange={handleChange}
                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3'
                    required
                >
                    <option value=''>Select</option>
                    <option value='0-1 years'>0-1 years</option>
                    <option value='1-3 years'>1-3 years</option>
                    <option value='3-5 years'>3-5 years</option>
                    <option value='5-7 years'>5-7 years</option>
                    <option value='7+ years'>7+ years</option>
                </select>
                {isTouched.experienceRequired && errors.experienceRequired && <span style={{ color: 'red' }}>{errors.experienceRequired}</span>}

            </div>
            <div className='flex justify-end'>
                <button
                    type='button'
                    onClick={cancel}
                    className='text-white bg-red-700 hover:bg-red-800 px-4 py-2 rounded-md shadow-md mr-2'
                >
                    Cancel
                </button>
                <button
                    type='submit'
                    className='text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-md shadow-md'
                >
                    {isEditing ? 'Update Job' : 'Post Job'}
                </button>
            </div>
        </form>
    )
}
export default FormV;