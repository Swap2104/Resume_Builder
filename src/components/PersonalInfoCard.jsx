export function PersonalInfoCard({personalData}) {
    return (
        <div className="form-view personal-view">
        <h1>{personalData.firstName} {personalData.lastName}</h1>
        <h2>{personalData.position}</h2>
        <p>{`📧 ${personalData.email} • ☎️ ${personalData.number}`}</p>
    </div>
    );
}