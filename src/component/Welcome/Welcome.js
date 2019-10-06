import React from 'react';

const Welcome = () => {
    return (
        <div>
          <main>
            <div className="welcome">
                <h3 className="wel-h3">Welcome To Gain Experience</h3>
                <h5 className="wel-h5">Click here to see people profiles</h5>
               <a href="/search"> <button className="welBtn">Search</button> </a>
            </div>
         </main>
        </div>
    )
}

export default Welcome;

