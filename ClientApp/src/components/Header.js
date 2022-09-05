import React from 'react';

export const Header = () => {
    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: 'darkturquoise',
        color: 'white',
        textAlign: 'center'
    } 

    return(
        <div style={headerStyle}>
            <h1>React With .Net</h1>
        </div>     
    )
}