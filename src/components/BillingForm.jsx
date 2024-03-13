import React, {useState} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card } from 'antd';
import Swal from 'sweetalert2'





const BillingForm = () => {

  // const location = useLocation();
  // const response = location.state.response;
  const navigate = useNavigate();

  const [numberofUsers, setNumberOfUsers] = useState(0);
  const [numberOfMonths, setNumberOfMonths] = useState(0);

  // const totalBill = numberOfMonths * numberofUsers * response.response.amount;


//   const handleKeyDown = (e) => {
//     if(response.response.plan == "GOLD"){
//     if (parseInt(e.target.value + e.key) > 300) {
//       e.preventDefault();
//     }
//   }
//   else{
//     if (parseInt(e.target.value + e.key) > 999999) {
//       e.preventDefault();
//   }
//   };
// }
     
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
        navigate('/login');
      });
  }
   return(
   <div style={{display:'flex', justifyContent:'center',backgroundColor:'#EAEDED', height : '100vh'}}>
  <Card
    style={{
      width: '50%',
      height:'60%',
      backgroundColor : '#FDFEFE',
      marginTop : '100px'
    }}> 
    {" "}
    <h2 style={{textAlign:'center', fontFamily:'monospace'}}>Payment Form</h2>
    <div 
    style={{
      display:'flex', 
      justifyContent:'left',
       alignItems:'center',
       marginTop:'70px',
       gap:'100px',
       flexWrap:'wrap'
      }}>
    <div >
    <p style={{fontFamily:'sans-serif', fontSize:'20px'}}>
      Plan : 
      </p>
    <p style={{fontFamily:'sans-serif', fontSize:'20px'}}>
      Plan Amount : </p>
   <div>
  <label style={{fontFamily:'sans-serif', fontSize:'20px'}}>
    No of Users : 
  </label>
  <input
  style={{marginLeft:'5px', marginBottom:'10px'}}
  type='number'
  placeholder='Enter number of users'
  // onKeyDown={handleKeyDown}
  onChange={(e)=>setNumberOfUsers(e.target.value)}
  />
  </div> 
  <div>
  <label style={{fontFamily:'sans-serif', fontSize:'20px', marginTop:'10px'}}>
   No of Months : 
  </label>
  <input 
  style={{marginLeft:'5px'}}
  type='number'
  placeholder='Enter number ofmonths'
  onChange={(e)=>setNumberOfMonths(e.target.value)}
  />
  </div>
   </div>

    <div>
        <p style={{fontFamily:'sans-serif', fontSize:'20px'}}>Total Bill: </p>
        <Button style={{ backgroundColor:'#FF7F50', color:'white', width:'200px'}}  onClick={handlePurchase}>Purchase</Button>
    </div>
    </div>
  </Card>
  </div>
);
};
export default BillingForm;



