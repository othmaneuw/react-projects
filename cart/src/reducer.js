
const reducer = (state,action) =>{
    switch(action.type){
        case 'CLEAR_CART':{
            return {...state,cart:[]}
        }
        case 'REMOVE' : {
            return {...state, cart : state.cart.filter(item=>item.id !== action.payload)}
        }
        case 'INCREASE':{
            let tempCart = state.cart.map(item=>{
                if(item.id === action.payload){
                    return {...item,amount:item.amount + 1}
                }
                return item
            })
            return {...state , cart : tempCart}
        }
        case 'DECREASE':{
            let tempCart = state.cart.map(item=>{
                if(item.id === action.payload){
                    return {...item,amount : item.amount - 1}
                }
                return item;
            }).filter(item=>item.amount >= 1);
            return {...state,cart:tempCart}
        }
        case 'GET_TOTALS':{
            let {total , amount } = state.cart.reduce((cartTotals,current)=>{
                  cartTotals.total += current.price * current.amount;
                  cartTotals.amount += current.amount
                  return cartTotals;
            },{
                total : 0,
                amount : 0
            })
             total = parseFloat(total.toFixed(2));
            return {...state,amount,total}
        }
        case 'LOADING' : {
            return {...state,loading : true}
        }
        case 'DISPLAY' : {
            return {...state,loading:false,cart:action.payload}
        }
    }
    return state;
}

export default reducer;