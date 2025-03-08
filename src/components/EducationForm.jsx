export function EducationForm({id, instituteName, instituteEmail, instituteAddress, courseCompleted}) {
    return (
        <form key={id} className="education-exp form-style">
            <input type={"text"} placeholder={instituteName}/>
            <input type={"email"} placeholder={instituteEmail}/>
            <input type={"text"} placeholder={instituteAddress}/>
            <input type={"text"} placeholder={courseCompleted}/>
            <button type={"submit"}>Submit</button>
        </form>
    );
}