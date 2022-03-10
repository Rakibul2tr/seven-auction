import React from 'react';
import "./AuctionReques.css";
import { Table } from 'react-bootstrap';

const RequestClosedData = (props) => {
    return (
        <>
            <Table striped className='table_div'>
            <thead className='table_head'>
                <tr  className='table_head_row'>
                <th>iD</th>
                <th>date</th>
                <th>status</th>
                <th>customer</th>
                <th>vehile</th>
                <th>Type</th>
                <th>auction</th>
                </tr>
            </thead>
            <tbody className='table_body'>
                
                {
                    props.filterClosed.map(item=>(<tr className='table_body_row'key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td><div  className={item.status==='closed'?'bglighgreen':'bgProgress'&&item.status==='rejected'?'bgRejeact':'bgProgress'}
                    
                    >{item.status}</div></td>
                    <td>{item.customer}</td>
                    <td>{item.vehile}</td>
                    <td>{item.type}</td>
                    <td><button>show</button><button>status</button></td>
                    </tr>))
                }
                
            </tbody>
            </Table>  
        </>
    );
};

export default RequestClosedData;