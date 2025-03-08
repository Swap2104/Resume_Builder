import {useState} from 'react'
import './styles/App.css'
import {EducationForm} from "./components/EducationForm.jsx";


function App() {
    // stores id's for educationList state
    let educationId = 0;


    // personal data state to store data from personal form section
    const [personalData, setPersonalData] = useState({
        firstName: "First name",
        lastName: "Last Name",
        email: "Email",
        number: "Phone Number",
        position: "Current Position"
    })

    const [educationList, setEducationList] = useState([{
        id: 0,
        instituteName: "Institute Name",
        instituteEmail: "Institute Email",
        instituteAddress: "Institute Address",
        courseCompleted: "Course Completed"
    }])

    // Stores data from personal info form into state var
    function handlePersonalInfo(formData) {
        setPersonalData({
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            position: formData.get('position'),
            number: formData.get('number')
        })
    }

    function addEducationForm() {
        // can only add 3 forms
        if (educationList.length < 3) {
            educationId += 1
            setEducationList([...educationList, {
                id: educationId, instituteName: "Institute Name",
                instituteEmail: "Institute Email",
                instituteAddress: "Institute Address",
                courseCompleted: "Course Completed"
            }])
        } else {
            setEducationList([...educationList]);
        }
        console.log(educationList)
    }

    function removeEducationForm() {
        // can only delete form if forms are more than one.
        educationList.length > 1 ? setEducationList([...educationList.slice(0, educationList.length - 1)]) : setEducationList([...educationList.slice(0, educationList.length)]);
        // console.log(educationList.length)
    }

    return (<>
        {/*1 row 2 cols*/}
        <div className="main-grid">
            {/*3 row 1 cols*/}
            <div className="form-container container-style">
                <div>
                    <h3>Personal Information</h3>

                    <form className="personal-info form-style" action={handlePersonalInfo}>
                        <input required={true} type={"text"} name={'firstName'} placeholder={personalData.firstName}/>
                        <input required={true} type={"text"} name={'lastName'} placeholder={personalData.lastName}/>
                        <input required={true} type={"email"} name={'email'} placeholder={personalData.email}/>
                        <input required={true} type={"number"} name={'number'} placeholder={personalData.number}/>
                        <input required={true} type={"text"} name={'position'} placeholder={personalData.position}/>
                        <button type={"submit"} onSubmit={e => e.preventDefault()}>Submit</button>
                    </form>
                </div>
                <div>
                    <div className={'form-header'}>
                        <h3>Education</h3>
                        <div>
                            <button onClick={removeEducationForm}>Remove Education</button>
                            <button onClick={addEducationForm}>Add Education</button>
                        </div>
                    </div>
                    {/*Education form*/}
                    {educationList.map(education => {
                        return (<EducationForm id={education.id}
                                               instituteName={education.instituteName}
                                               instituteAddress={education.instituteAddress}
                                               instituteEmail={education.instituteEmail}
                                               courseCompleted={education.courseCompleted}/>);
                    })}
                </div>
                <div>
                    <div className={'form-header'}>
                        <h3>Work Experience</h3>
                        <button>Add Work Experience</button>
                    </div>
                    <form className="work-exp form-style">
                        <input type={"text"} placeholder="Company Name"/>
                        <input type={"email"} placeholder="Company Email"/>
                        <input type={"text"} placeholder="Company Address"/>
                        <input type={"text"} placeholder="Position"/>
                        <button type={"submit"}>Submit</button>
                    </form>
                </div>


            </div>
            {/*3 row 1 cols*/}
            <div className="view-container container-style">
                <div className="form-view personal-view">
                    <h3>{personalData.firstName}</h3>
                    <h3>{personalData.lastName}</h3>
                    <h3>{personalData.email}, {personalData.position}, {personalData.number}</h3>
                </div>
                <div className="form-view education-view">
                    <h3>Institute name</h3>
                    <h3> Institute email, Institute address, course</h3>
                </div>
                <div className="form-view exp-view">
                    <h3>Co name</h3>
                    <h3> CO email, CO address, Position</h3>
                </div>
            </div>
        </div>
    </>)
}

export default App
