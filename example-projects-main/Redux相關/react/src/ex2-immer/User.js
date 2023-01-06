import React, { useState } from 'react'
import produce from 'immer'

function User(props) {
  const [user, setUser] = useState({
    id: '1',
    name: 'Eddy',
    address: {
      country: {
        city: 'New Taipei City',
      },
    },
  })

  return (
    <>
      <h2>User</h2>
      <p>useState and state is object</p>
      <h2>Name: {user.name}</h2>
      <h2>City: {user.address.country.city}</h2>
      <button
        onClick={() => {
          // const newUser = {
          //   ...user,
          //   name: 'Amy',
          // }

          // setUser(newUser)

          setUser(
            produce((draft) => {
              draft.name = 'Amy'
            })
          )
        }}
      >
        change name to Amy
      </button>
      <button
        onClick={() => {
          // const newUser = {
          //   ...user,
          //   address: {
          //     ...user.address,
          //     country: {
          //       ...user.address.city,
          //       city: 'Taipei',
          //     },
          //   },
          // }

          // setUser(newUser)

          setUser(
            produce((draft) => {
              draft.address.country.city = 'Taipei'
            })
          )
        }}
      >
        change city to Taipei
      </button>

      <hr />
    </>
  )
}

export default User
