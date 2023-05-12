export const opticsReducer = (state,action) => {
  switch(action.type) {
    case "Add":
      return {...state,cart:[...state.cart,action.payload]}
    case "Delete":
      return {...state,cart:[...state.cart.filter(p=>p !== action.payload)]}
    case "Buy":
      return {...state,total:state.total + action.payload}
    case "ClearTotal":
      return {...state,total:0}
    default:
      return state

  }
}