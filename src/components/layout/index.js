import React from 'react'
import Header from '../Header'
import { NavLink } from 'react-router-dom'
import { Container,Col,Row } from 'react-bootstrap'
import './style.css'

const Layout = (props) => {
  return (
      <>
    <Header/>

    {

     props.sidebar ? <Container fluid>
     <Row>
       <Col md={2} className='sidebar'>
         <ul>
           <li ><NavLink to={'/'}>Home</NavLink></li>
           <li ><NavLink to={'/products'}>products</NavLink></li>
           <li ><NavLink to={'/orders'}>orders</NavLink></li>
           <li ><NavLink to={'/category'}>Category</NavLink></li>
         </ul>
       </Col>
       <Col md={10} style={{marginLeft:'auto'}}>    {props.children}
</Col>
     </Row>

 </Container>
:
        props.children


    }
    
    </>
  )
}

export default Layout;