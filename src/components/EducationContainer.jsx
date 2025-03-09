import {EducationForm} from "./EducationForm.jsx";
import {useState} from "react";

export function EducationContainer({educationList, setEducationList}) {

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

    // stores id's for educationList state
    const [educationId, setEducationId] = useState(1);

    return (
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
    );
}