import React, { useState } from "react"
import "../Styles/UpdateUser.css"



function UpdateUser() {

    const [updateData, setUpdateData] = useState({
        name: "",
        nickname: "",
        village: "",
        orgin: ""
    })


    function UpdateOnchange(e) {
        setUpdateData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        console.log(e.target.value)
    }

    function HandleUpdateUser(e) {
        console.log(e.target.value)
    }

    return (
        <>
            <div id="UpdateUser">

                <form onSubmit={HandleUpdateUser} id="Updateform">

                    <div>
                        <label htmlFor="name">Name :</label>
                        <input
                            type="text"
                            placeholder="Update Name"
                            required
                            value={updateData.name}
                            name="name"
                            onChange={(e) => { UpdateOnchange(e) }}
                        />
                    </div>

                </form>

            </div>
        </>
    )
}

export default UpdateUser;
