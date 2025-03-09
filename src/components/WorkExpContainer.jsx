import {WorkExpForm} from "./WorkExpForm.jsx";
import {useState} from "react";

export function WorkExpContainer({workExpData, setWorkExpData}) {

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

    // stores id's for workExpData state
    const [workId, setWorkId] = useState(1);

    return (
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
    );
}