import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListItem({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [explorerDetail, setExplorerDetail] = useState({});
  const toggleOptions = () => {
    setIsOpen(!isOpen);
    getExplorerDetail(title);
  };
  const getExplorerDetail = (argTitle) => {
    const apiUrl = `https://api.apis.guru/v2/${argTitle}.json`; 
    axios.get(apiUrl)
    .then(response => {
      let data = response.data;
      let itr = 0;
      // console.log(data.apis);
      for (const key in data.apis) {
        console.log(key)
        console.log(itr);
        if (data.apis.hasOwnProperty(key)) {
          setExplorerDetail(data.apis[key]);
        }
        itr++;
      }
      
    })
    .catch(error => {
      console.error('Request failed:', error);
    });
  };
  return (
    <div className={`${isOpen ? 'list-item-open' : 'list-item'}`}>
      <div className="list-header">
        <span>{title}</span>
        <button style={{ color : '#fff' }} onClick={toggleOptions}>
          {isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>} {/* Arrow icons */}
        </button>
      </div>
      {isOpen && (
        <div className={`options ${isOpen ? 'open' : ''}`}>
          <ul className='sub-list-ul'>
              <li className='sub-list-item' key={0}>
                <Link to="/explore-api" className='link-style' state={explorerDetail}>
                  <img height={30} className='sidebar-list-submenu-img' alt={ (explorerDetail && explorerDetail.info) && explorerDetail.info.title } width={30} style={{ marginLeft:'7px' }} src={ (explorerDetail && explorerDetail.info && explorerDetail.info['x-logo']) && explorerDetail.info['x-logo'].url } /> 
                  <span>{ (explorerDetail && explorerDetail.info) && explorerDetail.info.title }</span>
                </Link>
                
              </li>
          </ul>
        </div>
        
      )}
    </div>
  );
}

export default ListItem;