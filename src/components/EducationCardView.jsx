export function EducationCardView({key, education}) {
    return (
        <div key={key} className={"EduCard"}>
            <h2>{education.courseCompleted}</h2>
            <p>{`${education.instituteName} • ${education.instituteAddress}`}</p>
            <p>{education.instituteEmail}</p>
        </div>
    );
}