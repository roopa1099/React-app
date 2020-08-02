import React from 'react';
import { Jumbotron ,Grid ,Row ,Col ,Image ,Button , Carousel} from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';

export default function Component1() {
    return (
        <Spring
        from={{opacity:0,marginTop:-100}}
        to={{opacity:1,marginTop:0}}
        config={{delay:1000, duration:1000 }}
        >
        {props=>(
            <div style={props}>
            <div style={c1Style}>
            <Grid>
            <Row>
            <Col xs={6} sm={6}>

               <Image src="https://image.shutterstock.com/image-photo/belchatow-poland-april-11-2014-600w-196005458.jpg" style={{width: 600, height: 300}} />
               
               </Col>

               <Col xs={6} sm={2}>

                <Image src="https://image.shutterstock.com/image-photo/digital-composite-business-man-drawing-260nw-616837061.jpg" style={{width: 600, height: 300}} />

                </Col>  
               
               </Row>
               </Grid>
            
            
             </div>
            </div>
        )}
      
        </Spring>
    
    );
}

const c1Style={
    padding:'1.5rem'
}