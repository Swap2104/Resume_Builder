export function PersonalInfoFom({personalData, setPersonalData}) {

    // Stores data from personal info form into state var
    function handlePersonalInfo(formData) {
        setPersonalData({
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            position: formData.get('position'),
            number: formData.get('number')
        })
    }


    return (<div>
            <h3>Personal Information</h3>

            <form className="personal-info form-style" action={handlePersonalInfo}>
                <input required={true} type={"text"} name={'firstName'} placeholder={personalData.firstName}/>
                <input required={true} type={"text"} name={'lastName'} placeholder={personalData.lastName}/>
                <input required={true} type={"email"} name={'email'} placeholder={personalData.email}/>
                <input required={true} type={"number"} name={'number'} placeholder={personalData.number}/>
                <input required={true} type={"text"} name={'position'} placeholder={personalData.position}/>
                <button type={"submit"} onSubmit={e => e.preventDefault()}>Submit</button>
            </form>
        </div>
    );
}