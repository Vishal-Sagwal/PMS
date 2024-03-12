import React from 'react';
import { useLocation } from "react-router-dom";
import { Card } from 'antd';
import Swal from 'sweetalert2'


const BillingForm = () => {

    const location = useLocation();
  const response = location.state.response;
     
  const handlePurchase = ()=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, purchase it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Purchased!",
            text: "Your order is.",
            icon: "success"
          });
        }
      });
  }
   return(
   <div style={{display:'flex', justifyContent:'center', marginTop:'100px'}}>
  <Card
    hoverable:true
    style={{
      width: '40%',
    }}

  > <h2 style={{textAlign:'center', color:'#76D7C4'}}>Payment Form</h2>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    <div style={{margin:'100px'}}>
    <p style={{fontFamily:'cursive', fontSize:'20px'}}>Plan :   </p>
    <p style={{fontFamily:'cursive', fontSize:'20px'}}>Plan Amount :{response.response.amount} </p>
    <label style={{fontFamily:'cursive', fontSize:'20px'}} htmlFor="">No of Users</label>
    <input type="text" placeholder='users'/>
    <label style={{fontFamily:'cursive', fontSize:'20px', marginTop:'10px'}} htmlFor="">No of Months</label>
    <input type="text" placeholder='months' />
    </div>

    <div style={{marginLeft:'50px', marginRight:'150px'}}>
        <p style={{fontFamily:'cursive', fontSize:'20px'}}>Total Bill :</p>
        <button onClick={handlePurchase}>Purchase</button>
    </div>
    </div>
  </Card>
  </div>
 
);
};
export default BillingForm;