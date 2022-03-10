import React, { useState } from 'react';
import "./Withdrow.css";
import { Container, Row} from "react-bootstrap";
import WithdrowComplet from './WithdrowComplet';
import WithdrowProgress from './WithdrowProgress';
import WithdrowReject from './WithdrowReject';
import WithdrowAllData from './WithdrowAllData';

const Withdrow = () => {
    const tickets=[
        {name:'totla tickets',number:2541},
        {name:'completed',number:83241},
        {name:'in progress',number:3241},
        {name:'rejeacted',number:241},
    ]

    const tabeldatas=[
        {id:1,date:'10/2/1997',status:'in progress',customer:'rakibul',vehile:'farrari 250 ago',type:'012345657'},

        {id:2,date:'10/2/1997',status:'completed',customer:'sakibul',vehile:'farrari 250 ago',type:'012345657'},
        {id:3,date:'10/2/1997',status:'completed',customer:'sakibul',vehile:'farrari 250 ago',type:'012345657'},

        {id:4,date:'10/2/1997',status:'in progress',customer:'nakibul',vehile:'farrari 250 ago',type:'012345657'},

        {id:5,date:'10/2/1997',status:'rejected',customer:'bakibul',vehile:'farrari 250 ago',type:'012345657'},
        {id:6,date:'10/2/1997',status:'rejected',customer:'bakibul',vehile:'farrari 250 ago',type:'012345657'},
    ]


    const filtercompleted=tabeldatas.filter(item=>{return item.status==='completed'})
    const filterPrograss=tabeldatas.filter(item=>{return item.status==='in progress'})
    const filterRejact=tabeldatas.filter(item=>{return item.status==='rejected'})



    const [menuChange,setmenuChange]=useState('all')
    return (
        <Container style={{ background: "#F6F8FA" }}>
        <Row className="p-4">
          <div className="withdrow">
            <h4>withdraws</h4>
          </div>
          <Row className="pt-3">
             <div className="top_withdrow_request">
                {
                    tickets.map(item=>(<div className="withdrow_item" key={item.name}>
                    <p>{item.name}</p>
                    <h6 className={item.name==='completed'?'lighgreen':'commonColor'&&item.name==='in progress'?'wornigcolor':'commonColor'&&item.name==='rejeacted'?'rejeactColor':'commonColor'}>{item.number}</h6>
                </div>))
                }
               
            </div>
          </Row>
          <Row>
            <div className="withdrow_tab_menu">
                <div className="inquires_nav d-flex justify-content-between">
                    <div className="withdrow_menu pt-5 ">
                        <button 
                        onClick={() => setmenuChange("all")}
                        className={menuChange === "all" ? "inqiresactive && live_btn" : null}
                        >all</button>
                        <button 
                        onClick={() => setmenuChange("completed")}
                        className={menuChange === "completed" ? "inqiresactive && won_btn" : null}
                        >completed</button>
                        <button 
                        onClick={() => setmenuChange("progress")}
                        className={menuChange === "progress" ? "inqiresactive && lost_btn" : null}
                        >in progress</button>
                        <button 
                        onClick={() => setmenuChange("rejacted")}
                        className={menuChange === "rejacted" ? "inqiresactive && lost_btn" : null}
                        >rejacted</button>
                    </div>
                </div>
            </div>
          </Row>
        </Row>
        <Row className='pb-5'>
          <div className="table_section">
            {menuChange==='all'&&<WithdrowAllData tabeldatas={tabeldatas}/> }
            {menuChange==='completed'&&<WithdrowComplet filtercompleted={filtercompleted}/>}
            {menuChange==='progress'&&<WithdrowProgress filterPrograss={filterPrograss}/>}
            {menuChange==='rejacted'&&<WithdrowReject filterRejact={filterRejact}/>}
          </div>
         </Row>
      </Container>
    );
};

export default Withdrow;