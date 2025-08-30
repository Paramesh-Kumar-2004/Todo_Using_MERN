import React, { useState } from "react"
import "../Styles/UpdateUser.css"



function UpdateUser({ HandleUpdateUserPopup, id }) {

    const [updateData, setUpdateData] = useState({
        name: "tes",
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

                    <div id="Name" className="DivGroup">
                        <label className="label">Name :</label><br />
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            value={updateData.name}
                            onChange={(e) => { UpdateOnchange(e) }}
                            required
                        />
                    </div>

                    <div className="DivGroup">
                        <label className='label'>Nick Name : </label><br />
                        <input
                            type="text"
                            name='nickname'
                            value={updateData.nickname}
                            placeholder='Enter The Nick Name'
                            onChange={(e) => { UpdateOnchange(e) }}
                            required
                        />
                    </div>

                    <div className="DivGroup">
                        <label className='label'>Village : </label><br />
                        <input
                            type="text"
                            name='village'
                            value={updateData.village}
                            placeholder='Enter The Village'
                            onChange={(e) => { UpdateOnchange(e) }}
                            required
                        />
                    </div>

                    <div className="DivGroup">
                        <label className='label'>Orgin : </label><br />
                        <input
                            type="text"
                            name='orgin'
                            value={updateData.orgin}
                            placeholder='Enter The Orgin'
                            onChange={(e) => { UpdateOnchange(e) }}
                            required
                        />
                    </div>

                    <div id='Buttons'>
                        <button type="submit" id='SubmitButton'>Update</button>
                    </div>

                </form>

            </div>
            <button onClick={HandleUpdateUserPopup}
                style={{
                    position: "absolute"
                }}
            >Close</button>
        </>
    )
}

export default UpdateUser;
