import React, { useState } from 'react'
import {Form,Button, Container , Row,Col} from 'react-bootstrap'
import Layout from '../../components/layout'
import Input from '../../components/UI/Input'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {signup} from '../../action'

const Signup=()=> {
    const [firstName,setfirstname]=useState('');
    const [lastName,setlastname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [error,setError]=useState('')
    const user= useSelector(state=>state.user)



    const auth = useSelector(state=>state.auth)
    const dispatch=useDispatch();
    if(auth.authenticate){
        return <Navigate to='/'/>
      }

    if(user.loading){
        return <h3>Loading...!</h3>
    }

      const userSignup=(e)=>{
          e.preventDefault();
        const user= {firstName,lastName,email,password}
        dispatch(signup(user))

      }

    return (
        <Layout>
        <Container>
            <Row style={{margin:'2rem'}}>
                <Col md={{span:6,offset:3}}> 
          <Form onSubmit={userSignup}>
              <Row>
                  <Col md={6}>
                  <Input
                 label="First Name"
                 placeholder="First Name"
                 value={firstName}
                 type='text'
                 onChange={(e)=>{setfirstname(e.target.value)}}
           />
                  </Col>
                  <Col md={6}>
                  <Input
                 label="Last Name"
                 placeholder=" Last Name"
                 value={lastName}
                 type='text'
                 onChange={(e)=>setlastname(e.target.value)}
                />
                  </Col>
              </Row>
              <Input
                 label="Email"
                 placeholder=" Email"
                 value={email}
                 type='email'
                 onChange={(e)=>setemail(e.target.value)}
              />
              <Input
                 label="Password"
                 placeholder=" Password"
                 value={password}
                 type='password'
                 onChange={(e)=>setpassword(e.target.value)}
                />
  
              <Button variant="primary" type="submit">
                  Submit
              </Button>
          </Form>
          </Col>
            </Row>
         
  </Container>
  </Layout>
    )
}

export default Signup