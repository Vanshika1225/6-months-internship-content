import React, { useReducer } from "react";

const reducerMethod=(state,action)=>{
    if(action.type==='addQuantity'){
        const existingQuantity=state.find(item=>item.id===action.payload.id);
        if(existingQuantity){
            return state.map(item=>item.id===action.payload.id?{...item,quantity:item.quantity+1}:item)
        }
        else{
            return [...state,{...action.payload , quantity:1}]
        }
    }
    else if(action.type==='removeQuantity'){
        return state.filter(item=>item.id!==action.payload.id)
    }
    else if(action.type==='update_quantity'){
        return state.map((item)=>item.id===action.payload.id?{...item,quantity:item.quantity}:item)
    }
}
const ShopingCart = () => {
  const [cart, dispatch] = useReducer(reducerMethod, []);
  const addQuantityTocart=(item)=>{
    dispatch({type:'addQuantity',payload:item})
  }
  const removeQuantityTocart=(item)=>{
    dispatch({type:'removeQuantity',payload:item})
  }
  const updateQuantity=(id,quantity)=>{
    dispatch({type:'update_quantity',payload:{id,quantity}})
  }
  return (
    <div>
      <h1>Shoping cart</h1>
      <ul>
        {cart.map((item) => {
            return(
                <li key={item.id}>
                {item.name} - quantity : {item.quantity}
                <button onClick={(e)=>{updateQuantity(item.id,item.quantity+1)}}>+</button>
                <button onClick={(e)=>{updateQuantity(item.id,item.quantity-1)}}>-</button>
                <button onClick={(e)=>{removeQuantityTocart(item)}}>Remove</button>
            </li>
            )
        })}
      </ul>
      <button onClick={()=>addQuantityTocart({id:1,name:'Produt A',price:10})}> Product A</button>
      <button onClick={()=>addQuantityTocart({id:2,name:'Produt B',price:10})}> Product B</button>
    </div>
  );
};

export default ShopingCart;