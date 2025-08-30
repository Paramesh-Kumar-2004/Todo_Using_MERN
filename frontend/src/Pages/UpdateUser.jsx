import React, { useState } from "react"
import "../Styles/UpdateUser.css"



function UpdateUser({ HandleUpdateUserPopup }) {

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

                    <div id="Name" className="UpdateDivGroup">
                        <label className="UpdateLabel">Name :</label><br />
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            // value={data.name}
                            // onChange={(e) => { handleOnChange(e) }}
                            required
                        />
                    </div>

                    <div className="UpdateDivGroup">
                        <label className='UpdateLabel'>Nick Name : </label><br />
                        <input
                            type="text"
                            name='nickname'
                            // value={data.nickname}
                            placeholder='Enter The Nick Name'
                            // onChange={(e) => { handleOnChange(e) }}
                            required
                        />
                    </div>

                    <div className="UpdateDivGroup">
                        <label className='UpdateLabel'>Village : </label><br />
                        <input
                            type="text"
                            name='village'
                            // value={data.village}
                            placeholder='Enter The Village'
                            // onChange={(e) => { handleOnChange(e) }}
                            required
                        />
                    </div>

                    <div className="UpdateDivGroup">
                        <label className='UpdateLabel'>Orgin : </label><br />
                        <input
                            type="text"
                            name='orgin'
                            // value={data.orgin}
                            placeholder='Enter The Orgin'
                            // onChange={(e) => { handleOnChange(e) }}
                            required
                        />
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
