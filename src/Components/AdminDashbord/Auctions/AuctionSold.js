import React from 'react';
import "./Auction.css";
import { Table } from 'react-bootstrap';

const AuctionSold = (props) => {
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
                    props.filtersold.map(item=>(<tr className='table_body_row'key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td><div className={item.status==='sold'?'bglighgreen':'bgProgress'&&item.status==='unsold'?'bgRejeact':'bgProgress'}
                    
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

export default AuctionSold;