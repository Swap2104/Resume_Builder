import {WorkExpCardView} from "./WorkExpCardView.jsx";

export function WorkExpView({workExpData}) {
    return (<div className="form-view exp-view">
        <h3>Work Experience</h3>
        {workExpData.map((workExp) => {
            return (<WorkExpCardView key={workExp.id} workExp={workExp}/>)
        })}
    </div>);
}