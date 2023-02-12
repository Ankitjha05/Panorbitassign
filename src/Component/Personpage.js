import React from 'react';
import { Navbar } from './Personcomponent/Navbar';
import './Personcomponent/Person.css';
import Rightsec from './Personcomponent/Rightsec';

export function Personpage(props) {
    const ele = props.element

    const elements ={
        address: ele.address,
        company: ele.company,
        email: ele.email,
        id: ele.id,
        name: ele.name,
        phone: ele.phone,
        profilepicture: ele.profilepicture,
        username: ele.username,
        website: ele.website
    }

    return (
        <div className='personcontainer'>
            <Navbar />
            <Rightsec elements={elements}/>
            {/* <span>{ele.name}</span>
            <span>{elements.address.street}</span> */}
        </div>
    )
}
