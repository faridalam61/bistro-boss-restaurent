import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

function ProductCard({ item }) {
  const { name, image, price, recipe,_id } = item;
  const [,refetch] = useCart()
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const handleAddtoCart = (name)=>{
    if(!user){
      Swal.fire({
      title: 'You must login first',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Login'
    }).then((result) => {
      if (result.isConfirmed) {
        
          navigate('/login')
        
      }
    })
    }else{
      const cartItem = {foodId:_id,name,image,price,recipe,email:user.email}
      fetch('http://localhost:5000/carts',{
        method:'POST',
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(cartItem)
      })
      .then(res => res.json())
      .then(result =>{
        if(result.insertedId){
          refetch()
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Product added to cart',
            showConfirmButton: false,
            timer: 1500
          })
          
        }
      })
    }
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{name}</h2>
        <p>{recipe}</p>
        <p className="text-xl font-bold">${price}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleAddtoCart(name)} className="btn btn-primary w-full">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
