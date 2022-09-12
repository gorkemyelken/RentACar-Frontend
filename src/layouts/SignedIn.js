import React from 'react'
import { Dropdown, Image } from 'semantic-ui-react'
import profilephoto from '../images/papillon.jpg';
export default function SignedIn({signOut}) {
  return (
    <div>
        <Image avatar spaced="right" src={profilephoto}/>
        <Dropdown pointing="top left" text='Görkem'>
            <Dropdown.Menu>
                <Dropdown.Item text="My Info" icon="info"/>
                <Dropdown.Item onClick={signOut} text="Log Out" icon="log out"/>
            </Dropdown.Menu>
        </Dropdown></div>
  )
}
