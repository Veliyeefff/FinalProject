import { createSlice } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Swal from "sweetalert2";
let user = JSON.parse(localStorage.getItem("user"))
let total_count=0
user?
user.userCheckout.forEach(elem=>{
        total_count+=elem.counter
}):
total_count=0
const initialState = {
    value: user ? user.userCheckout : [],
    count: user ? total_count:0
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addBasket: (state, actions) => {
            if (state.value.find(x => x._id === actions.payload._id)) {
                state.value.forEach(elem => {
                    if (elem._id === actions.payload._id) {
                        if(elem.counter>9){
                            Swal.fire(
                                {
                                    icon:"error",
                                    text:"You can't order more than 10 of this item",
                                }
                              )
                        }
                        else{
                            state.count+=1
                            elem.counter += 1
                        }
                    }
                })
            } else {
                const tempproducts = { ...actions.payload, counter: 1 }
                state.value.push(tempproducts)
                state.count+=1
            }
            let newuser = {
                _id: user._id,
                username: user.username,
                isAdmin: user.isAdmin,
                password: user.password,
                email: user.email,
                userCard: user.userCard,
                userCheckout: state.value,
                userWishList: user.userWishList
            }
            axios.put(`http://localhost:4000/users/${user._id}`,newuser)
            localStorage.setItem("user", JSON.stringify(newuser))

        },
    deleteBasket: (state, actions) => {
        state.value = state.value.filter(x => x._id !== actions.payload._id)
        state.count = state.count-actions.payload.counter
        let newuser = {
            _id: user._id,
            username: user.username,
            isAdmin: user.isAdmin,
            password: user.password,
            email: user.email,
            userCard: user.userCard,
            userCheckout: state.value,
            userWishList: user.userWishList
        }        
        localStorage.setItem("user", JSON.stringify(newuser))
        axios.put(`http://localhost:4000/users/${user._id}`,newuser)
    },
    increase:(state,actions)=>{
        if(state.value.find(x=> x._id===actions.payload._id)){
            state.value.forEach(elem=>{
                if(elem._id===actions.payload._id){
                    if(elem.counter!==10){
                        elem.counter+=1
                        state.count+=1
                    }else{
                        Swal.fire(
                            {
                                icon:"error",
                                title:"You can't order more than 10 of this item",
                            }
                          )
                    }
                }
            })
        }
        let newuser = {
            _id: user._id,
            username: user.username,
            isAdmin: user.isAdmin,
            password: user.password,
            email: user.email,
            userCard: user.userCard,
            userCheckout: state.value,
            userWishList: user.userWishList
        }        
        axios.put(`http://localhost:4000/users/${user._id}`,newuser)
        localStorage.setItem("user", JSON.stringify(newuser))
    },
    decrease:(state,actions)=>{
        if(state.value.find(x=> x._id===actions.payload._id)){
            state.value.forEach(elem=>{
                if(elem._id===actions.payload._id){
                    if(elem.counter===1){

                    }else{
                        elem.counter-=1
                        state.count-=1

                    }
                }
            })
        }
        let newuser = {
            _id: user._id,
            username: user.username,
            isAdmin: user.isAdmin,
            password: user.password,
            email: user.email,
            userCard: user.userCard,
            userCheckout: state.value,
            userWishList: user.userWishList
        }
        axios.put(`http://localhost:4000/users/${user._id}`,newuser)
        localStorage.setItem("user", JSON.stringify(newuser))

    },
    empty: (state, action)=>{
        state.count = 0;
        state.value = [];
    }
}
}
)

export const { addBasket, deleteBasket,increase,decrease, empty } = basketSlice.actions
export default basketSlice.reducer