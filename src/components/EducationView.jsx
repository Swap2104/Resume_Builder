import {EducationCardView} from "./EducationCardView.jsx";

export function EducationView({educationData}) {
    return (<div className="form-view education-view">
        <h3>Education</h3>
        {educationData.map((education) => {
            return (<EducationCardView key={education.id} education={education}/>)
        })}
    </div>);
}