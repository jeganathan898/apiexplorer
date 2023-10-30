import React, {useState,useEffect} from 'react';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';

function CenteredButton({fromWhere}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(()=>{
    if(fromWhere){
      setIsSidebarOpen(fromWhere);
    }
  },[fromWhere])
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="centered-button-container">
      <button onClick={openSidebar} className="centered-button">Explore web APIs</button>
      <SideDrawer open={isSidebarOpen} onClose={closeSidebar} />
      <Backdrop open={isSidebarOpen} onClick={closeSidebar} />
    </div>
  );
}

export default CenteredButton;