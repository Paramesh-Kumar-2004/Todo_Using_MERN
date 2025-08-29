import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'


import { getChars, delChar } from '../API/API_Call'

import "../Styles/User.css"
import UpdateUser from './UpdateUser'



function User() {

  const [data, setdata] = useState([]);
  const [updateUserPopup, setUpdateUserPopup] = useState(false)


  useEffect(() => {
    fetchData();
  }, [])


  async function fetchData() {
    try {
      const response = await getChars();
      setdata(response)
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteChar(id) {
    try {
      const response = await delChar(id)
      console.log(response)
      fetchData();
      alert(response.message)
    } catch (error) {
      console.log(error)
    }
  }

  async function HandleUpdateUserPopup() {
    setUpdateUserPopup(!updateUserPopup)
  }


  return (


    <div id='UserMain'>

      <div
        style={{ display: "flex", justifyContent: "end" }}
      >

        <Link to={"/newuser"} ><button id='addButton'>Add New Characer</button></Link>
      </div>


      <div id='User'>

        <table id='tableUser'>

          <tr id='tableUserTr1'>
            <th className='tableUserTh'>Name</th>
            <th className='tableUserTh'>Nickname</th>
            <th className='tableUserTh'>Village</th>
            <th className='tableUserTh'>Orgin</th>
            <th className='tableUserTh'>Update</th>
            <th className='tableUserTh'>Action</th>
          </tr>

          {data.map((items) => (
            <tr key={items.nickname} id='tableUserTr2'>
              <td className='tableUserTd'>{items.name}</td>
              <td className='tableUserTd'>{items.nickname}</td>
              <td className='tableUserTd'>{items.village}</td>
              <td className='tableUserTd'>{items.orgin}</td>
              <td className='tableUserTd'>
                <p id='UpdateButton'
                  onClick={() => { HandleUpdateUserPopup() }}
                >Update</p>
              </td>
              <td className='tableUserTd' >
                <p id='deleteButton' onClick={() => {
                  const confirmDelete = window.confirm(`Are You Sure, You Wat To Delete ${items.name}`)
                  if (confirmDelete) {
                    deleteChar(items._id)
                  }
                }}>Delete</p>
              </td>
            </tr>
          ))}

        </table>

      </div>

      {updateUserPopup && (
        <div>
          <UpdateUser
          />
          <p style={{ color: "white" }}
            onClick={() => { HandleUpdateUserPopup() }}
          >Close</p>
        </div>
      )}
    </div>
  )
}


export default User