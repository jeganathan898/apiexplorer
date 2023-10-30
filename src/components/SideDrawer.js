import React, {useState,useEffect} from 'react';
import ListItem from './Listitem';
import axios from 'axios';

function SideDrawer({ open, onClose }) {
  const drawerClasses = open ? 'side-drawer open' : 'side-drawer';
  const [ webApiLists, setWebApiLists ] = useState([]);

  useEffect(()=>{
    getExplorerList();
  },[])
  const getExplorerList = () =>{
    const apiUrl = 'https://api.apis.guru/v2/providers.json'; 
    axios.get(apiUrl)
    .then(response => {
      setWebApiLists(response.data.data)
    })
    .catch(error => {
      console.error('Request failed:', error);
    });
  }
  return (
    <div className={drawerClasses}>
      <p className='sidebar-header'>Select Provider</p>
      <div className='exploere-list-scroll'>
        {webApiLists.map((item, index) => (
          <ListItem key={index} title={item} options={item.options} />
        ))}
      </div>
      
    </div>
  );
}

export default SideDrawer;