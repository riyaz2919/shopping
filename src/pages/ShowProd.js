import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const ShowProd = () => {
    const params=useParams();
    const [product,setProduct]=useState([]);

    useEffect(()=>{
        fetch(`https://647456cd7de100807b1aace5.mockapi.io/user/${params.id}`).then(res=>res.json()).then(product=>{
            setProduct(product);
        })
    },[]);

    return (
        <div  style={{display:'flex',marginTop:'100px',justifyContent:'space-evenly'}}>
             
            <div>
            <img  style={{width:'500px',height:'500px'}}src={product.url}></img>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginRight:'500px'}}>
                <span>{product.name}</span>
                <span>{product.age}</span>
               
            </div>
        </div>
  )
}

export default ShowProd