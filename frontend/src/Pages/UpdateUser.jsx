import React, { useState } from "react"

function UpdateUser() {

    // const [Data, setData] = useState({
    //     name,

    // })

    function UpdateUserData() {

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
                            onChange={UpdateUser}
                        />
                    </div>

                </form>

            </div>
        </>
    )
}

export default UpdateUser;
