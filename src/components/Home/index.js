import { useDispatch, useSelector} from "react-redux"
import store from "../../redux/store/store"
import Product from "../Product"
import { addProduct } from "../../redux/action/action"
import { Print } from "../../icons/icons"
import Modal from 'react-modal';
import { useState } from "react"

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


const Home=()=>{
    let data1=useSelector((state)=>state.todos)
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
  let dispatch=useDispatch();
    // const data= store.getState().todos
    console.log('data',data1)
    const handleAddItem=()=>{
        dispatch(addProduct({ "productName":"Chicken breast Fillets,Boneless Marinated 6 ounce Raw,Individual...",
        "brand":"Hormel Black LabelMany",
        "price":60.87,
        "quantity":0,
        "status":""}))
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

    return (
        <div>
        <div className="d-flex justify-content-between p-2 shadow">
          <div className="ml-3">
            <p>orders-32457ABC</p>
            <h4>orders 32457ABC</h4>
          </div>
          <div className="mr-5 mt-3">
            <button className="btn btn-outline-success mr-3" >Back</button>
            <button className="btn btn-success">Approve order</button>
          </div>
        </div>
        <div className="bg-light mt-4 d-flex flex-column justify-content-center ">
            <div className="card d-flex flex-wrap flex-row justify-content-around m-4 p-2">
                <div>
                    <p> supplier </p>
                    <h5 className="font-weigth-bold">EastCoast Fruits & Vegtables</h5>
                </div>
          
            <div>
                <p>Shiping Date</p>
                <h5>Thu,Feb10</h5>
            
            </div>

            <div>
                <p>Total</p>
                <h5>$15028.3</h5>
            </div>
                
                <div>
                    <p>Department</p>
                    <h5>300-444-678</h5>
                </div>
                
                <div>
                    <p>Status</p>
                    <h5>Awaiting your approval</h5>
                </div>
            </div>

            <div className="card m-4">
                <div className="d-flex justify-content-between">
                    <input type='text' placeholder="search.." className="ml-5 m-2"/>
                    <div className="d-flex mr-5">
                        
                        <div>
      <div onClick={openModal} className="btn btn-outline-success m-2">Add Item</div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='text-dark'>Product Added</h2>
        <button onClick={closeModal} className='btn btn-outline-secondary'>close</button>
        <p> </p>
        <form>
         <button className="btn btn-outline-success"  onClick={handleAddItem}>add product</button>
       
        </form>
      </Modal>
    </div>
                        <div className="m-2"><Print/></div>
                    </div>

                </div>
       <div>
       <div className="card d-flex flex-wrap flex-row justify-content-start p-2 m-2">
                <div className="ml-5 mr-5 p-2">
                    <h5>ProductName</h5>
                </div>
          
            <div  className="ml-5 mr-5">
               
                <h5>Brand</h5>
            
            </div>

            <div  className="ml-5 mr-5">
                
                <h5>Price</h5>
            </div>
                
                <div  className="ml-5 mr-5">
                  
                    <h5>Quantity</h5>
                </div>
                
                <div  className="ml-5 mr-5">
                    
                    <h5>Total</h5>
                </div>
                <h5>Status</h5>
            </div>
            <ul className="d-flex flex-column p-3">
                {data1.map((each)=>
                <Product  key={each.id} productData={each}/>
                
                )}
            </ul>
        
       </div>
            </div>

        </div>
        </div>
    )

}
export default Home