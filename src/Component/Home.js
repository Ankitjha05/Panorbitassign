import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Home(props) {
    const [user, setUser] = useState([]);
    const fetchdata = async () => {
        const data = await fetch(props.url);
        const parsedata = await data.json();
        console.log(parsedata);
        setUser(parsedata.users);
    }

    useEffect(() => {
        fetchdata();
        // eslint-disable-next-line
    }, [])
    return (
        <div className='homecontainer'>
            <div className='listcard'>
                <Link to="/"><span className='listheading'>Select an account</span></Link>
                <nav>
                    <ul className='homescroll'>

                        {user.map((ele,ind) => {
                            return (
                                <>
                                    <li className='listcardLi' key={ele.id}><Link key={ind} to={ele.name}><img alt='' className='listcardimg' src={ele.profilepicture} /><span key={ind}>{ele.name}</span></Link></li><hr />
                                </>
                            )
                        })}

                    </ul>
                </nav>
                <footer></footer>
            </div>
        </div>
    )
}
