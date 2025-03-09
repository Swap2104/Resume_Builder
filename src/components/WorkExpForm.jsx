export function WorkExpForm({
                                id,
                                companyName,
                                companyEmail,
                                companyAddress,
                                currentPosition,
                                setWorkExpData,
                                workExpData
                            }) {

    function handleWorkExpData(formData) {
        setWorkExpData(workExpData.map(workExp => {
            if (workExp.id === id) {
                return {
                    id: workExp.id,
                    companyName: formData.get("companyName"),
                    companyEmail: formData.get("companyEmail"),
                    companyAddress: formData.get("companyAddress"),
                    currentPosition: formData.get("currentPosition")
                }
            } else {
                return workExp;
            }
        }))
    }

    return (<form key={crypto.randomUUID()} className="work-exp form-style" action={handleWorkExpData}>
        <input required={true}  type={"text"} name={"companyName"} placeholder={companyName}/>
        <input required={true}  type={"email"} name={"companyEmail"} placeholder={companyEmail}/>
        <input  required={true} type={"text"} name={"companyAddress"} placeholder={companyAddress}/>
        <input required={true}  type={"text"} name={"currentPosition"} placeholder={currentPosition}/>
        <button type={"submit"}>Submit</button>
    </form>);
}