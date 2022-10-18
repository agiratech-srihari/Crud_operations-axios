import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Read = () => {
    const [apiData,setApiData] = useState([])
    const setId = (id)=>{
        console.log(id)
        localStorage.setItem('Id',id)
    }
    useEffect(()=>{
        axios.get(`https://634e76ee4af5fdff3a5d14df.mockapi.io/Crud`)
        .then((data)=>{
            setApiData(data.data)
        })
    })
    
    return(
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
      
      {apiData.map((data)=>{
          return(
          <Table.Row key={data.id}>
            <Table.Cell>{data.id}</Table.Cell>
            <Table.Cell>{data.firstName}</Table.Cell>
            <Table.Cell>{data.lastName}</Table.Cell>
            <Table.Cell>
                <Link to = '/update'>
                <Button color='green' onClick={()=> setId(data.id)}>Update</Button>
                </Link>
            </Table.Cell>
            <Table.Cell>
                <Link to = '/delete'>
                <Button color='red'>Delete</Button>
                </Link>
            </Table.Cell>

          </Table.Row>)
      })}
    </Table.Body>
  </Table>
)
}
export default Read