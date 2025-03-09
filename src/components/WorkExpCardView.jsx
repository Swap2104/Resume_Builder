export function WorkExpCardView({key, workExp}) {
    return (
        <div key={key} className={"WorkExpCard"}>
            <h2>{workExp.currentPosition}</h2>
            <p>{`${workExp.companyName} • ${workExp.companyAddress}`}</p>
            <p>{workExp.companyEmail}</p>
        </div>
    );
}