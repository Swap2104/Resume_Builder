import {useState} from 'react'
import './styles/App.css'
import {EducationForm} from "./components/EducationForm.jsx";
import {PersonalInfoFom} from "./components/PersonalInfoFom.jsx";


function App() {
    // stores id's for educationList state

    function addEducationForm() {
        // can only add 3 forms
        if (educationList.length < 5) {
            console.log("id inc to: " + educationId)
            setEducationList([...educationList, {
                id: educationId,
                instituteName: "Institute Name",
                instituteEmail: "Institute Email",
                instituteAddress: "Institute Address",
                courseCompleted: "Course Completed"
            }])
            setEducationId(educationId + 1);
        } else {
            setEducationList([...educationList]);
        }
    }

    function removeEducationForm() {
        // can only delete form if forms are more than one.
        educationList.length > 1 ? setEducationList([...educationList.slice(0, educationList.length - 1)]) : setEducationList([...educationList.slice(0, educationList.length)]);
    }

    const [educationId, setEducationId] = useState(1);

    // personal data state to store data from personal form section
    const [personalData, setPersonalData] = useState({
        firstName: "First name",
        lastName: "Last Name",
        email: "Email",
        number: "Phone Number",
        position: "Current Position"
    })

    //Store the data from all the education exp form in array of objs
    const [educationList, setEducationList] = useState([{
        id: 0,
        instituteName: "Institute Name",
        instituteEmail: "Institute Email",
        instituteAddress: "Institute Address",
        courseCompleted: "Course Completed"
    }])

    return (<>
        {/*1 row 2 cols*/}
        <div className="main-grid">
            {/*3 row 1 cols*/}
            <div className="form-container container-style">
                <PersonalInfoFom personalData={personalData} setPersonalData={setPersonalData} />
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
                        return (<EducationForm key={education.id} id={education.id}
                                               instituteName={education.instituteName}
                                               instituteAddress={education.instituteAddress}
                                               instituteEmail={education.instituteEmail}
                                               courseCompleted={education.courseCompleted}
                                               setEducationList={setEducationList}
                                               educationList={educationList}
                        />);
                    })}
                </div>
                <div>
                    <div className={'form-header'}>
                        <h3>Work Experience</h3>
                        <div>
                            <button>Remove Work Experience</button>
                            <button>Add Work Experience</button>
                        </div>
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
