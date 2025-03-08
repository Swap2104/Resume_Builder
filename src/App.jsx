import {useState} from 'react'
import './styles/App.css'

function App() {
    // personal data state to store data from personal form section
    const [personalData, setPersonalData] = useState({
        firstName: "First name",
        lastName: "Last Name",
        email: "Email",
        number: "Phone Number",
        position: "Current Position"
    })

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
                        <button>Add Education</button>
                    </div>
                    <form className="education-exp form-style">
                        <input type={"text"} placeholder="Institute Name"/>
                        <input type={"email"} placeholder="Institute Email"/>
                        <input type={"text"} placeholder="Institute Address"/>
                        <input type={"text"} placeholder="Course Completed"/>
                        <button type={"submit"}>Submit</button>
                    </form>
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
