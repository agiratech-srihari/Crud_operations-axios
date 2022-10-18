import React,{ useState,useEffect }from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'

const Update = ({isShown}) => {


const [firstName,setFirstName] = useState('');
const [lastName,setLastName] = useState('');


const sendDataToApi = ()=>{
    axios.post(`https://634e76ee4af5fdff3a5d14df.mockapi.io/Crud`,{
        firstName,
        lastName
    })
    
}
    useEffect(()=>{
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'))
    },[])

return (
    <Form>
    <Form.Field>
      <label>First Name</label>
      <input name='fname' onChange={(e)=> setFirstName(e.target.value)} value={firstName} placeholder='First Name'  />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input name='lname' onChange={(e)=> setLastName(e.target.value)} value={lastName} placeholder='Last Name' />
    </Form.Field>
    <Button type='submit' onClick={sendDataToApi}>Update</Button>
  </Form>
)
}
export default Update