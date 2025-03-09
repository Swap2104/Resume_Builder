export function EducationForm({
                                  id,
                                  instituteName,
                                  instituteEmail,
                                  instituteAddress,
                                  courseCompleted,
                                  setEducationList,
                                  educationList
                              }) {

    function handleEducationInfo(formData) {

        setEducationList(educationList.map(education => {
            if (education.id === id) {
                return {
                    id: education.id,
                    instituteName: formData.get("instituteName"),
                    instituteEmail: formData.get("instituteEmail"),
                    instituteAddress: formData.get("instituteAddress"),
                    courseCompleted: formData.get("courseCompleted")
                }
            } else {
                return education
            }
        }))
    }

    return (<form key={crypto.randomUUID()} className="education-exp form-style" action={handleEducationInfo}>
        <input required={true}  type={"text"} name={"instituteName"} placeholder={instituteName}/>
        <input required={true} type={"email"} name={"instituteEmail"} placeholder={instituteEmail}/>
        <input required={true} type={"text"} name={"instituteAddress"} placeholder={instituteAddress}/>
        <input required={true} type={"text"} name={"courseCompleted"} placeholder={courseCompleted}/>
        <button type={"submit"}>Submit</button>
    </form>);
}
