import React from 'react';
import "./Withdrow.css";
import { Table } from 'react-bootstrap';

const WithdrowComplet = (props) => {
    return (
        <>
            <Table striped className='table_div'>
            <thead className='table_head'>
                <tr  className='table_head_row'>
                <th>iD</th>
                <th>date</th>
                <th>status</th>
                <th>customer</th>
                <th>amount S.R</th>
                <th>IBAN</th>
                <th>auction</th>
                </tr>
            </thead>
            <tbody className='table_body'>
                
                {
                    props.filtercompleted.map(item=>(<tr className='table_body_row'key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td><div  className={item.status==='completed'?'bglighgreen':'bgProgress'&&item.status==='rejected'?'bgRejeact':'bgProgress'}
                    
                    >{item.status}</div></td>
                    <td>{item.customer}</td>
                    <td>{item.vehile}</td>
                    <td><span style={{color:'#623C57',fontWeight:700}}>SA| </span>{item.type}</td>
                    <td><button>show</button><button>status</button></td>
                    </tr>))
                }
                
            </tbody>
            </Table>  
        </>
    );
};

export default WithdrowComplet;