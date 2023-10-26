import { useDispatch } from 'react-redux'
import { Check, Delete } from '../../icons/icons'
import { addClick, addNo, addyes } from '../../redux/action/action'
import './index.css'
import { useState } from 'react'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const colorsData={"Approved":"success","Missing-Urgent":"danger","Missing":"warning","":"light"}
const Product=({productData})=>{
  const {brand,price,productName,quantity,status,id}=productData
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const[approve,setApprove]=useState();
  // const[missing,setMissing]=useState('light')
  // const[urgent,setUrgent]=useState('light')
  console.log('appp',approve)

    let dispatch=useDispatch();
   
    

    const handleCheck=()=>{
      setApprove('success')
        dispatch(addClick({id:id,status:"Approved"}))
        
        console.log('check clicked',id)
    }

    const handleYes=()=>{
   setApprove('danger')
        dispatch(addyes({id:id,status:"Missing-Urgent"}))
       
        console.log('yes clicked',id)
       
    }
    const handleNo=()=>{
      setApprove('warning')
     
        dispatch(addNo({id:id,status:"Missing"}))
     
        console.log('no clicked',id)
       
    }

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
    
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return(
        <div className="d-flex flex-wrap  m-3">
            <div className='d-flex'>
            <img src="https://res.cloudinary.com/dmdr9a99a/image/upload/v1698249794/Avocado_Hass_trzilv.jpg" className="image-size"/>
            <p className='product-name'>{productName}</p>
            </div>
            <p className='brand '>{brand}</p>
            <p className='ml-5'>${price}/6+1LB</p>
            <p className='ml-5 mr-5'>{quantity}X6+1LB</p>
            <p className='ml-5 mr-5'>${price*quantity}</p>
            <div className='d-flex justify-content-around flex-wrap ml-5'>
              <div className='bg-light d-flex w-100'>
            <p className={`m-3 btn btn-${approve}`}>{status}</p>

            <div className='m-3' size={50} onClick={handleCheck}><Check className="p-3" color={`text-${approve}`}/></div>
           
<div>
      <div onClick={openModal} className='m-3'><Delete color={`text-${approve}`}/></div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='text-dark'>Missing Product</h2>
        <button onClick={closeModal} className='btn btn-outline-secondary'>close</button>
        <p>Is{productName} Missing?</p>
        <form>
         
        <button type="button" class="btn btn-secondary m-2" onClick={handleYes}>yes</button>
        <button type="button" class="btn btn-secondary m-2" onClick={handleNo}>No</button>
        </form>
      </Modal>
    </div>
        
     <div className='btn m-3'>Edit</div></div>
     
            </div>
            
  
        </div>
        
    )
}
export default Product