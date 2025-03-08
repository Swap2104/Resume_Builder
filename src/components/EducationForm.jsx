export function EducationForm() {
    return (
        <form className="education-exp form-style">
            <input type={"text"} placeholder="Institute Name"/>
            <input type={"email"} placeholder="Institute Email"/>
            <input type={"text"} placeholder="Institute Address"/>
            <input type={"text"} placeholder="Course Completed"/>
            <button type={"submit"}>Submit</button>
        </form>
    );
}