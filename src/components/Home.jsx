import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron ,Grid ,Row, Image ,Col ,Button} from 'react-bootstrap';
import './Home.css';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
'mdbreact';
export default class Home extends Component {
  render() {
    const mystyle = {
                color: "white",
                backgroundImage: "url(" + "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?cs=srgb&dl=pexels-pixabay-267389.jpg&fm=jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                fontFamily: "Arial",
                width:"100%"};
        const mystyle1 = {
            backgroundImage: "url(" + "https://images.pexels.com/photos/1858406/pexels-photo-1858406.jpeg?cs=srgb&dl=pexels-athena-1858406.jpg&fm=jpg" + ")", };
        const style1={
          color:"#B017B0 "};
        const style2={
          color:"#F1650A"};
          const mystyle3 = {
            width:"100%"};    
           
    return (
        <div style={mystyle1}>
        <Grid style={mystyle3}>
         <Jumbotron style={mystyle}>
             <h2 style={{color: "Blue"}}>Welcome to Social Media Sites</h2>
             <p>This page shows some popular social media sites</p>
             <Link to="/about">
             <Button bsStyle="primary">About</Button>
             </Link>
         </Jumbotron>
         </Grid>
         <Grid>
        <Row className="show-grid text-center">
         <Col xs={6} sm={4}>
         <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1653993517&extra_1=s%7Cc%7C355887219806%7Ce%7Cfb%20sign%20up%7C&placement=&creative=355887219806&keyword=fb%20sign%20up&partner_id=googlesem&extra_2=campaignid%3D1653993517%26adgroupid%3D63066387563%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-23300271256%26loc_physical_ms%3D1007796%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMIj4Opm7_56gIVzgorCh2BRw_FEAAYASAAEgIM1fD_BwE">
         <Image src="https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?cs=srgb&dl=access-app-application-apps-267399.jpg&fm=jpg"  style={{width: 200, height: 200, borderRadius: 200/ 2}} /></a>
          <p style={style1}>There were 324 000 000 Facebook users in India in January 2020, which accounted for 23.3% of its entire population.</p>
           <p style={style1}>People aged 25 to 34 were the largest user group (125 000 000).</p>
          </Col>
          <Col xs={6} sm={4}>
          <a href="https://www.instagram.com/">
          <Image src="https://images.pexels.com/photos/174938/pexels-photo-174938.jpeg?cs=srgb&dl=pexels-energepiccom-174938.jpg&fm=jpg" style={{width: 200, height: 200, borderRadius: 200/ 2}} /></a>
            <p style={style2}>There were 80 590 000 Instagram users in India in January 2020, which accounted for 5.8% of its entire population.</p>
            <p style={style2}>People aged 18 to 24 were the largest user group (38 700 000).</p>
           </Col>
          <Col xs={6} sm={4}>
         <a href="https://www.whatsapp.com/">
      <Image src="https://images.pexels.com/photos/46924/pexels-photo-46924.jpeg?cs=srgb&dl=pexels-anton-46924.jpg&fm=jpg" style={{width: 200, height: 200, borderRadius: 200/ 2}} /></a>
        <p style={style1}>WhatsApp  has amassed more than 400 million users in India, the instant messaging app confirmed today, reaffirming its gigantic reach in its biggest market.</p>
          </Col>
        </Row> </Grid>
        <Grid>
       <Row className="show-grid text-center">
         <Col xs={10} sm={7}>
         <a href="https://accounts.snapchat.com/accounts/login?continue=https%3A%2F%2Faccounts.snapchat.com%2Faccounts%2Fwelcome">
         <Image src="https://images.pexels.com/photos/768332/pexels-photo-768332.jpeg?cs=srgb&dl=pexels-tim-savage-768332.jpg&fm=jpg" style={{width: 200, height: 200, borderRadius: 200/ 2}} /></a>
            <p style={style1}>Photo-messaging app Snapchat has seen significant growth in India business, and</p>
          <p style={style1}> its daily active user base (DAU) in the country has jumped 120 per cent year-on-year in March 2020</p>
          </Col>
          <Col xs={10} sm={4}>
          <a href="https://twitter.com/login">
      <Image src="https://media.istockphoto.com/photos/social-media-button-concept-picture-id155682282 " style={{width: 200, height: 200, borderRadius: 200/ 2}} /></a>
         <p style={style2}>According to the stats, in April 2020 there were over 13 million Twitter users in India.</p>
         <p style={style2}>The number of Twitter users across the country was estimated to be over 34 million in 2019. </p>
          </Col>
          </Row></Grid>
          <Grid>
          <h2 style={{color: "Red"}}>OTHER POPULAR SOCIAL MEDIA APPS</h2>
          <MDBContainer>
        <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide>
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://image.shutterstock.com/image-photo/chiang-mai-thailand-may-11-600w-1397603378.jpg"
                alt="First slide"/>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://image.shutterstock.com/image-photo/london-uk-may-7th-2017-600w-671859313.jpg"
                alt="Second slide"/>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://image.shutterstock.com/image-photo/varna-bulgaria-may-23-2017-600w-662408284.jpg"
                alt="Third slide"/>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://image.shutterstock.com/image-photo/chiang-mai-thailand-may-6-600w-1390231604.jpg"
                alt="Fourth slide"/>
            </MDBView></MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
          </MDBContainer>
        <Row className="show-grid text-center">
          <Col xs={10} sm={7}>
         <p></p><p></p>
         </Col>
         </Row>
         <Row>
         <Col xs={10} sm={7}>
         <a href="https://www.wechat.com/">
         <h4 style={{color: "Green"}}>WECHAT</h4></a>
         <p></p>
         <p style={{color: "Purple"}}>The number of Tencent's WeChat active accounts has been increasing steadily. In the first quarter of 2020, Tencent's WeChat had over 1.2 billion monthly active users from a wide range of age groups.</p>        
         </Col>
         <Col xs={6} sm={4}>     
          <Image src="https://image.shutterstock.com/image-illustration/spreading-news-trending-on-social-600w-1714713928.jpg" style={{width: 400, height: 200}} />
          </Col></Row>
         <Row className="show-grid text-center">
          <Col xs={10} sm={7}>
         <p></p><p></p>
         </Col>
         </Row>
         <Row>
         <Col xs={10} sm={7}>
         <a href="https://www.linkedin.com/">
         <h4 style={{color: "Blue"}}>LINKEDIN</h4>
         </a>
         <p></p>
         <p style={{color: "Purple"}}>More than 70% of Linkedin users are from outside the US.46 million students and recent college graduates on LinkedIn.There are 57% of male users and 43% female users on Linkedin.</p>        
         </Col>
         </Row>        
         <Row className="show-grid text-center">
         <Col xs={10} sm={7}>
         <p></p><p></p>
         </Col>
         </Row>
         <Row>
         <Col xs={10} sm={7}>
         <a href="https://www.skype.com/">
         <h4 style={{color: "#85DCF5 "}}>SKYPE</h4></a><p></p>
         <p style={{color: "Purple"}}>There are 300 million monthly active users as per 2019.Present reports suggest that there are 40 million daily active users.Last updated 4/29/20</p>        
         </Col>
         </Row>
         <Row>
         <Col xs={10} sm={7}>
         <a href="https://www.telegram.com/">
         <h4 style={{color: "2ABBE3 "}}>TELEGRAM</h4></a>
         <p></p>
         <p style={{color: "Purple"}}>In April 2020, cloud-based mobile messaging app Telegram reported 400 million monthly active users worldwide. Telegram is a chat app focused on user privacy, message encryption and delivery speed.</p>        
         </Col>
         </Row></Grid>   
        </div>);
   }
}



