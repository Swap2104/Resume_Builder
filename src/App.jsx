import {useState} from 'react'
import './styles/App.css'
import {EducationForm} from "./components/EducationForm.jsx";
import {PersonalInfoFom} from "./components/PersonalInfoFom.jsx";
import {WorkExpForm} from "./components/WorkExpForm.jsx";
import {PersonalInfoCard} from "./components/PersonalInfoCard.jsx";
import {EducationView} from "./components/EducationView.jsx";
import {WorkExpView} from "./components/WorkExpView.jsx";
import {EducationContainer} from "./components/EducationContainer.jsx";
import {WorkExpContainer} from "./components/WorkExpContainer.jsx";


function App() {

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
                <EducationContainer educationList={educationList} setEducationList={setEducationList}/>
                <WorkExpContainer workExpData={workExpData} setWorkExpData={setWorkExpData}/>

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
