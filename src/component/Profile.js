import React from 'react';

 const Profile = (props) => {

        return (
            <div className="container">
                <h1>
                    <img className="profil-pic" src={props.pic} alt="" />   
                    <br />

                    <div className="details">
                                        
                        Name - {props.name} <br />
                        title - {props.title} <br />
                        Skills - {props.skill} <br />
                        
                    </div>
                            
                </h1>
            </div>
        )};

export default Profile;
//
