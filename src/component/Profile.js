import React from 'react';

 const Profile = (props) => {

        return (
            <div className="container">
                <h1>
                    <img className="profil-pic" src={props.pic} alt="" />   
                    <br />

                    <div className="details">
                                        
                        Name - {props.name} <br />
                        Skills - {props.skill} <br />
                        About - {props.about} <br />
                        
                    </div>
                            
                </h1>
            </div>
        )};

export default Profile;
