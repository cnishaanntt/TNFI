import React, { Component } from 'react';
import ButtonBases from './Routers';

class main extends Component {
    render() { 
        return (  
    <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h1> TNFI </h1> 
        </div>
        <div>
            <ButtonBases/>
        </div>
    </div>
        )
    }
}

export default main