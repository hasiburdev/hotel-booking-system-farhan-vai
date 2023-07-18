import React,{useState} from 'react';
import { Container,Row,Col,Form,FormGroup,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import RegImg from "../../assets/register.png";
import Usericon from "../../assets/666201.png";
import "../Login/login.css"

const Register = () => {

  const [credentials,setCredentials]= useState({
    userName:undefined,
   email:undefined,
   password:undefined
});

  const handleChange  = e =>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
        };

const handleClick = e =>{
  e.preventDefault();
};

  return <section>
    <Container>
        <Row>
            <Col lg ="8" className="m-auto">
<div className="login_container d-flex justify-content-between">
<div className="login_img">
  <img src={RegImg} alt="" />

</div>
<div className="login_form">
  <div className="user">
    <img src={Usericon}alt="" />
    </div>
    <h2> Register</h2>
    < Form onSubmit={handleClick}>
      <FormGroup>
        <input type="text"  placeholder=" Enter Your name" required id="Username" onChange={handleChange}/>
      </FormGroup>
      <FormGroup>
        <input type="email"  placeholder=" Enter Email" required id="email" onChange={handleChange}/>
      </FormGroup>
      <FormGroup>
        <input type="password"  placeholder=" Enter Password" required id="pass" onChange={handleChange}/>
      </FormGroup>
      <button className="btn secondary_btn auth_btn" type="Submit">Register</button>
    </Form>
    <p> Already have an acoount? <Link to ="/login">Login</Link></p>
</div>
</div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Register