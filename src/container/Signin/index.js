import {React,useState} from 'react'
import {Form,Button, Container , Row,Col} from 'react-bootstrap'
import Layout from '../../components/layout'
import Input from '../../components/UI/Input'
import { login} from '../../action'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Signin= ()=> {
  const dispatch=useDispatch();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('');
    const auth = useSelector(state=> state.auth)

  
    

const userLogin =(e)=>{
   
  e.preventDefault();
  const user ={
   email, password
   }
  dispatch(login(user));
}

    if(auth.authenticate){
      return <Navigate to='/'/>
    }
  return (
      <Layout>
      <Container>
          <Row style={{margin:'2rem'}}>
              <Col md={{span:6,offset:3}}> 
        <Form onSubmit={userLogin}>
           <Input
           label="Email"
           placeholder=" email"
           value={email}
           type='text'
           onChange={(e)=>setEmail(e.target.value)}
           />
           <Input
           label="Password"
           placeholder=" password "
           value={password}
           type='password'
           onChange={(e)=>setPassword(e.target.value)}
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

export default Signin