import React, { useState } from "react"

function UpdateUser() {

    const [Data, setData] = useState({
        name: "",
        nickname: "",
        village: "",
        orgin: ""
    })


    function UpdateOnchange(e) {
        setData((prev) => ({
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
                            value={"user.name"}
                            name="name"
                            onChange={UpdateOnchange}
                        />
                    </div>

                </form>

            </div>
        </>
    )
}

export default UpdateUser;
