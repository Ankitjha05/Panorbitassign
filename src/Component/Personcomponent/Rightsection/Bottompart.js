import React,{useState, useEffect} from 'react'

const Bottompart = (props) => {
    let ele = props.elements;

  const url = "https://panorbit.in/api/users.json";

    const [user, setUser] = useState([]);
    const fetchdata = async () => {
        const data = await fetch(url);
        const parsedata = await data.json();
        console.log(parsedata);
        setUser(parsedata.users);
    }

    useEffect(() => {
        fetchdata();
        // eslint-disable-next-line
    }, [])


  return (
    <div className='buttomcontainer'>
        <div className='buttomcontainer_left'>
            <div className='buttomcontainer_left_top'>
                <div>
                <img src={ele.profilepicture} alt=''/>
                </div>
                    <span>{ele.name}</span>
                    <p>Username: <span>{ele.username}</span></p>
                    <p>e-mail: <span>{ele.email}</span></p>
                    <p>Phone: <span>{ele.phone}</span></p>
                    <p>Website: <span>{ele.website}</span></p>
            </div>
            <div className='buttomcontainer_left_bottom'>
                <span>Company</span>
                <p>Name: <span>{ele.company.name}</span></p>
                <p>catchphrase: <span>{ele.company.catchPhrase}</span></p>
                <p>bs: <span>{ele.company.bs}</span></p>
            </div>
        </div>
        <div className='buttomcontainer_right'>
            <span id='fistspan'>Address:</span>
            <p>Street : <span>{ele.address.street}</span></p>
            <p>Suite : <span>{ele.address.suite}</span></p>
            <p>City : <span>{ele.address.city}</span></p>
            <p>Zipcode : <span>{ele.address.zipcode}</span></p>
            <div className='imagecontainer'></div>
            <div className='lat_longcontainer'>
                <span>Lat:  <span>{ele.address.geo.lat}</span></span>
                <span>   Long:  <span>{ele.address.geo.lng}</span></span>
                <select>
                    <option disabled={true}>Chat</option>
                    {user.map((ele,ind)=>{
                       return <option key={ind}>{ele.name}</option>
                    })}
                </select>
            </div>
        </div>
      
    </div>
  )
}

export default Bottompart
