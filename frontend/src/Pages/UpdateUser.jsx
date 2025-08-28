import React, { useState } from "react"
import { data } from "react-router-dom"

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

                <form onSubmit={HandleUpdateUser}>

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
