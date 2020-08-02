import React from 'react';
import { Image } from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';
export default function Component3() {
    return (
        <Spring
        from={{opacity:0}}
        to={{opacity:1}}
        config={{delay:5000, duration:5000 }}>
        {props=>(
            <div style={props}>    
            <Image src="https://image.shutterstock.com/image-vector/thank-you-poster-spectrum-brush-600w-1153070891.jpg" style={{width: 1300, height: 300}} />
             </div>
        )}
       </Spring>
    );
}

