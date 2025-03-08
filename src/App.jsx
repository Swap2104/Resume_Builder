import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

function App() {
    const [count, setCount] = useState(0)

    return (<>
        {/*1 row 2 cols*/}
        <div className="main-grid">
            {/*3 row 1 cols*/}
            <div className="form-container container-style">
                <div>
                    <h3>Personal Information</h3>
                    <form className="personal-info form-style">
                        <input type={"text"} placeholder="First Name"/>
                        <input type={"text"} placeholder="Last Name"/>
                        <input type={"email"} placeholder="email"/>
                        <input type={"number"} placeholder="Phone Number"/>
                        <input type={"text"} placeholder="Curent Position"/>
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
                    </form>
                </div>


            </div>
            {/*3 row 1 cols*/}
            <div className="view-container container-style">
                {/*<div className="form-view personal-view"></div>*/}
                {/*<div className="form-view education-view"></div>*/}
                {/*<div className="form-view exp-view"></div>*/}
            </div>
        </div>
    </>)
}

export default App
