import {useState} from 'react'
import './styles/App.css'
import {EducationForm} from "./components/EducationForm.jsx";
import {PersonalInfoFom} from "./components/PersonalInfoFom.jsx";
import {WorkExpForm} from "./components/WorkExpForm.jsx";
import {PersonalInfoCard} from "./components/PersonalInfoCard.jsx";
import {EducationView} from "./components/EducationView.jsx";
import {WorkExpView} from "./components/WorkExpView.jsx";


function App() {
    // stores id's for educationList state

    function addEducationForm() {
        // can only add 3 forms
        if (educationList.length < 3) {
            setEducationList([...educationList, {
                id: educationId,
                instituteName: "Institute Name",
                instituteEmail: "Institute Email",
                instituteAddress: "Institute Address",
                courseCompleted: "Degree"
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

    function addWorkForm() {
        // can only add 3 forms
        if (workExpData.length < 3) {
            setWorkExpData([...workExpData, {
                id: workId,
                companyName: "Company Name",
                companyEmail: "Company Email",
                companyAddress: "Company Address",
                currentPosition: "Current Position",
            }])
            setWorkId(workId + 1);
        } else {
            setWorkExpData([...workExpData]);
        }
    }

    function removeWorkForm() {
        // can only delete form if forms are more than one.
        workExpData.length > 1 ? setWorkExpData([...workExpData.slice(0, workExpData.length - 1)]) : setWorkExpData([...workExpData.slice(0, workExpData.length)]);
    }

    const [educationId, setEducationId] = useState(1);
    const [workId, setWorkId] = useState(1);

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
        courseCompleted: "Degree"
    }])

    const [workExpData, setWorkExpData] = useState([{
        id: 0,
        companyName: "Company Name",
        companyEmail: "Company Email",
        companyAddress: "Company Address",
        currentPosition: "Current Position",
    }])

    return (<>
        {/*1 row 2 cols*/}
        <div className="main-grid">
            {/*3 row 1 cols*/}
            <div className="form-container container-style">
                <PersonalInfoFom personalData={personalData} setPersonalData={setPersonalData}/>
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
                            <button onClick={removeWorkForm}>Remove Work Experience</button>
                            <button onClick={addWorkForm}>Add Work Experience</button>
                        </div>
                    </div>
                    {/*Work Exp form*/}

                    {workExpData.map((workExp) => {
                        return (<WorkExpForm key={workExp.id}
                                             id={workExp.id}
                                             companyName={workExp.companyName}
                                             companyEmail={workExp.companyEmail}
                                             currentPosition={workExp.currentPosition}
                                             companyAddress={workExp.companyAddress}
                                             workExpData={workExpData}
                                             setWorkExpData={setWorkExpData}
                        />);
                    })}
                </div>
            </div>
            <div className="view-container container-style">
                <PersonalInfoCard personalData={personalData} />
                <EducationView educationData={educationList} />
                <WorkExpView workExpData={workExpData} />
            </div>
        </div>
    </>)
}

export default App
