import React from 'react'
import useCart from '../../Hooks/useCart'
import Swal from 'sweetalert2'

function Cart() {
    const [cart,refetch] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const handleDelete = item =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/carts/${item}`,{
            method:'DELETE'
          })
          .then(res => res.json())
          .then(result => {
            if(result.deletedCount >0){
              refetch()
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
        }
      })
      
    }
  return (
    <div className='w-full px-10'>
        <div className='flex gap-6 justify-between items-center mb-8'>
        <h2 className='uppercase text-xl'>Total Item: {cart.length}</h2>
        <h2 className='uppercase text-xl'>Total:  ${total}</h2>
        <button className='bg-orange-400 py-2 px-4 text-white rounded-sm'>Pay</button>
        </div>

        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            #
          </label>
        </th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {cart.map((row,index)=> <tr key={row._id }>
        <th>
          <label>
            {index + 1}
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={row.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {row.name}
        </td>
        <td>${row.price}</td>
        <th>
          <button onClick={()=> handleDelete(row._id)} className="btn btn-ghost bg-red-500 text-white px-4 btn-xs">X</button>
        </th>
      </tr>)}
      
      
    </tbody>
   
    
  </table>
</div>
    </div>
  )
}

export default Cart