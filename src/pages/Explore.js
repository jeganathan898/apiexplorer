import React, {useEffect, useState} from "react";
import { Link,useLocation } from "react-router-dom";

function Explore() {
    const location = useLocation();
    const fromViewPage = true;
    const [explorerDetail, setExplorerDetail] = useState({});
    let currentState;
    if (location.state) {
        // Access the state data
        currentState = location.state;
    }
    useEffect(()=>{
        setExplorerDetail(currentState);
    },[currentState])
    return(
        <div className="explore-bg">
            <div className="explor-page-container">
                <p className="explorer-title-center">
                    <img className="line-center-img" src={ (explorerDetail && explorerDetail.info && explorerDetail.info['x-logo']) && explorerDetail.info['x-logo'].url } alt={explorerDetail && explorerDetail.info && explorerDetail.info.title} /><span style={{ fontSize : '24px' }}>{ explorerDetail && explorerDetail.info && explorerDetail.info.title }</span> 
                </p>
                <div className="explorer-desc">
                    <h2 style={{fontWeight:'normal'}}>Description</h2>
                    <p>{ explorerDetail && explorerDetail.info && explorerDetail.info.description }</p>
                </div>
                <div className="explorer-desc">
                    <h2 style={{fontWeight:'normal'}}>Swagger</h2>
                    <a href={ explorerDetail && explorerDetail.info && explorerDetail.swaggerUrl } className="link-style">{ explorerDetail && explorerDetail.info && explorerDetail.swaggerUrl }</a>
                </div>

                <div className="explorer-desc">
                    <h2 style={{fontWeight:'normal'}}>Contact</h2>
                    <table>
                        <tr>
                            <td className="tab-def">Email</td>
                            <td className="tab-def">{ explorerDetail && explorerDetail.info && explorerDetail.info.contact && explorerDetail.info.contact.email }</td>
                        </tr>
                        <tr>
                            <td className="tab-def">Name</td>
                            <td className="tab-def">{ explorerDetail && explorerDetail.info && explorerDetail.info.contact && explorerDetail.info.contact.name }</td>
                        </tr>
                        <tr>
                            <td className="tab-def">url</td>
                            <td className="tab-def"><a href={ explorerDetail && explorerDetail.info && explorerDetail.info.contact && explorerDetail.info.contact.url } className="link-style">{ explorerDetail && explorerDetail.info && explorerDetail.info.contact && explorerDetail.info.contact.url }</a></td>
                        </tr>
                    </table>
                    
                </div>

                <div className="explorer-container">
                    <Link to="/" state={fromViewPage} className="explorer-bottom-button">
                        Explore More APIs
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Explore;