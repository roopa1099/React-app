import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function Component2() {
    return (
        <Spring
        from={{opacity:0}}
        to={{opacity:1}}
        config={{delay:3000, duration:3000 }}>
        {props=>(
            <div style={props}>
            <div style={c2Style}>
              <p>Social media are interactive computer-mediated technologies that facilitate the creation or sharing of information, ideas, career interests and other forms of expression via virtual communities and networks.The variety of stand-alone and built-in social media services currently available introduces challenges of definition; however, there are some common feature.</p>
             <p>Following are the most used social media sites:</p>
             <p>1.Facebook</p>
             <p>2.Instagram</p>
             <p>3.Whatsapp</p>
             <p>4.Twitter</p>
             <p>5.Snapchat</p>
             <p>6.LinkedIn</p>
             </div>
            </div>)}
        </Spring>);}
const c2Style={
    padding:'1.5rem',
    background:'steelblue',
    color:'white'
}