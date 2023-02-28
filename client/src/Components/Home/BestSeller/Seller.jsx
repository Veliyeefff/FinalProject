import React, { useEffect } from 'react'
import { useProvider } from '../../../Context/ProductContext'
import ProducstCard from '../../ProductsCard/ProducstCard'
import './Seller.css'
import axios from 'axios'
function Seller() {
    const {products,setProducts} = useProvider()
    const getProductsFromApi = async()=> {
        let res = await axios.get("http://localhost:4000/products")
        setProducts(await res.data)
    }
    useEffect(()=>{
        getProductsFromApi()
    },[])
  return (
    <div id='seller'>
        <div className="seller-header">
            <h2 className='seller-header-head'>BESTSELLER</h2>
            <svg style={{fill:"red"}} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 160 6">
              <g className="nc-icon-wrapper"><path fillRule="evenodd" clipRule="evenodd" d="M.9 2.3C1 2.1.7 2 .6 1.8c-.2.1-.3.2-.5.3.2.3 0 .6-.1.9.2 0 .2.1.4.1.1-.1.4-.2.4-.2-.1 0-.1.3 0 .3.2-.1.4-.2.7-.2-.2-.4.2-.8.2-1.1-.4 0-.5.3-.8.4zM68.2 5c.1.1.2.1.3 0 0-.1.1-.3.1-.4-.3 0-.3.3-.4.4zm3.3-1.2c0 .2.1.3.2.3-.1-.1-.1-.2-.2-.3zm48.7 1.6c.2 0 .1-.2 0-.3v.3zm2.2-2.3c.1 0-.2.1-.2.2.2 0 .1.3.4.3 0-.3.2-.3.2-.4-.1 0-.1.1-.2.1 0-.1-.1-.3-.2-.2zm12.9-.2V3h.2c0-.1-.1 0-.2-.1zm8 1c0-.1.1-.1 0-.2s-.1.2 0 .2zm2.5 0c-.1.1-.1.1 0 0 0 .1.1 0 0 0zm7-1.4c-.1.2.4.1 0 0zm5.1-1c-.2 0-.6.1-.6.2h.1c.1-.2.3-.1.4 0 .5.1.7-.3 1.1-.1.1-.1.3-.1.3-.2-.3-.1-.8.1-1.3.1zm-.8-.9h-2.2c-1.5.1-3 .1-4.4.1-.6 0-1.9-.1-2.1.1-.5-.1-1.3-.1-1.9-.1-7.1 0-14.6.4-21.9 0-1.4-.1-2.9.1-4.4 0-1.2 0-2.4-.2-3.5-.1-.5 0-1 .1-1.5.2-3.5.2-7.1.1-10.9 0-3.9-.2-7.6-.1-11.5-.3C86.4.2 80 .5 73.7.2h-.8c-1.3-.1-2.5.1-3.8.2-2.2.1-4.3.1-6.4.2-3 .1-5.9.4-8.9.3C51.6.8 49.2.8 47 .7h-1.6c-2.2-.1-4.5-.1-6.7 0-2.4.1-4.7 0-6.9 0-.8 0-1.4.2-2.1.2-.2 0-.4-.1-.6 0-.3 0-.5.1-.8.1-.2 0-.5-.1-.8-.1-.3 0-.5.1-.8.1-.3 0-.6-.1-.8-.1-.4 0-.8.1-1.3.1-.6 0-1 .1-1.6.1h-1.7c-1.1 0-2.2.1-3.3.1-1 0-2.1.1-3.1 0-1.6-.1-3.3.1-4.8.1-.4 0-.8.1-1.2.1-.3 0-.5-.1-.8-.1-.4 0-.7.1-1 .1H5.4c-.4-.2-.9-.1-1.4-.1H2.6c0 .1.1.1 0 .2.3-.1.6-.1.7 0-.1.2.2.4-.1.5-.1-.1-.3-.2-.4-.1 0-.2-.2-.2-.3-.3 0-.1.1-.1.1-.2-.3 0-1-.1-.8.2.2-.2.5-.2.7 0 0 .1 0 .3.1.4-.4.2-.4.4-.5.9-.1 0-.6.2-.2.3.1-.1 0-.1 0-.2H2c.1.1.2.2.2.4.2 0 .1-.1.2-.1v.1c.1-.1 0-.2.2-.2s.1.1.2.1c.1-.2 0-.5.3-.6 0 .2 0 .4-.1.5.1.1.2.1.3.2.1 0 .1-.2.3-.2 0 0 0 .1.1.1 0-.1.1-.1.2-.1 0 .3.3.4.5.5.5-.1.7-.3 1.2-.1 0-.2.1-.3.4-.3v.4c.1 0 .1-.1.2-.1v.1c.3 0 .4-.4.7-.2 0-.3.3-.3.6-.4.2.2.4 0 .6.2.1 0 0-.2.2-.1.1.1.3.1.3.3.1-.1.3 0 .5 0 0 .1.1.1.1.2.3-.1.3 0 .5-.1 0 .1.1.1.1.2.1-.1.3 0 .5.1-.1 0-.1.2 0 .3.3-.1.4.1.7 0 0 .1.1.3.2.1 0 .1.1.3.3.3.1 0 .1-.2.2-.2s0 .1.2.1c.5-.1 1 0 1.4.1.1-.3.4-.1.8-.2.1 0 .1.2.2.2.2-.1.5-.2.7-.1v-.1c.2.2.6.1.9.2.1-.3.4 0 .6-.1.2.3.4.1.7.1.4-.2.9-.1 1.5-.2 0 .1.2.1.2.2l.3-.3c.3.2.5 0 .7.1.1-.1.2-.1.3-.2 0 .2.1.1.3.1.2.1.3.2.4.2.2 0 .3-.3.5-.3.4-.1.6.1.8-.1v.1c.4-.1.8-.1 1 .2.4-.4 1 0 1.5-.3.1 0 .1.1.2.1 0-.2.2 0 .3 0 .4-.1.6 0 .8-.2-.1.2.1.2.1.3.4-.3.9 0 1.3-.2v.2c.2-.1.2-.2.4-.2.2.2.7 0 .7.2.1 0 0-.2.1-.1.1 0 0 .1.2.1.8-.2 2-.1 2.8-.1.1 0 .1-.1.1-.1.1 0 .1.1.2.1s.1-.1.1-.1c.8.1 1.3-.1 2 .1.3-.1 1.1-.1 1.3 0 .2-.1.7-.1.9.1.1 0 .1-.2.3-.2.2.1.3.2.5.3.1 0 0-.1.2-.1.2.1.2.2.2.3.1 0 .3-.1.4 0 0-.1.1-.1.2-.1.2 0 .1.2.2.3.2.1.2-.1.3-.1.5 0 .5.3.9.3.1 0 .1-.2.4-.1 0 .1-.1.1 0 .2.1-.1.2-.2.3-.2.2.1.5.4.8.2.1.1.1.1.2 0v.2c.3-.1.2-.4.6-.3v.6c.2 0 .2-.1.3-.2 0 .1.1.1.1.2.5 0 .6-.4 1-.6 0 .1-.1.2-.1.3.7-.2.9-.8 1.5-1.1.1 0 .1.1 0 .2.1 0 .1-.2.2-.1 0 .1 0 .1.1.2 0-.1.2-.2.3-.3.1 0 .1.1.2.2.4 0 .5.1 1 .1.1.2 0 .4.2.5.2 0 .1-.1.2-.2.1 0 .1.1.2 0s.2-.2.3-.2c.2 0 .3.2.5.1.3.1.3.3.2.5.1-.1.2-.2.3-.2.1 0 0 .2.1.2.4-.1.4-.4.8-.5.1.1 0 .3.1.5.3-.1.6-.3.8-.5.1 0 .2 0 .3.1 0-.1.1-.2.2-.2 0 .1.1.1 0 .2.3 0 .3.2.5.3 0-.1.2-.2.4-.2V5c.5 0 .5.4.7.6.3-.2.5-.1.8-.1.1.1 0 .2 0 .3.3-.1.4-.4.6-.5 0 .1.2 0 .2.1s-.1.2-.2.3c.1 0 .3.1.1.3 1.5 0 1.9-1.1 2.5-1.8.2-.1.4 0 .7-.1.1.1.3.2.4.2.1-.1.2-.1.3 0 .1 0 0-.2.1-.2.4.2.7.3 1 .5.1 0 .1-.1.2-.1 0 .1-.1.1 0 .2 0 0 0-.1.2-.1.1.1 0 .2 0 .3.6-.1.6.3 1.2.1 0 .1 0 .2.1.2.1-.2.1-.4.4-.5.2.1.2.2.3.3.2 0 .1-.1.2-.1.1.2.2.2.4.3.2-.1.3-.4.6-.5 0 .1-.1.2 0 .3.2-.1.4-.3.5-.5.3 0 .4.1.6.2.2-.1.3 0 .5 0 0 .1.1.2.1.3.2 0 .5 0 .5.2.3 0 .5-.2.7-.3 0 .1 0 .1.1.2.2-.1.1-.3.3-.4.1.1.2 0 .3.1 0 .1-.1.2 0 .2.1-.1.2 0 .3-.1.1 0 0 .2.1.1 0-.2.1-.1.2-.1 0-.2-.2-.3-.2-.4 0-.3.3-.4.3-.6.4.3-.1.7.2 1 .3.1.3-.1.2-.2.1-.4.3-.6.5-.9.2 0 .2-.2.4-.2h.1c0 .3.1.6.2.7.1-.1.2.1.4.1.1-.1.1-.3 0-.4.2.3.4-.1.6-.2.1.1.2.1.2.2.3 0 .5 0 .7-.2.1.2.3.1.5.2.1-.2.2-.3.4-.3.1.1.2.3.3.4 0-.1.1-.3.2-.4.1 0 0 .1.1.1 0-.2-.1-.5.2-.5.3 0 .3.2.5.3 0-.1.2-.1.2-.1.1-.2.1-.4.2-.5.3 0 .4-.1.7 0 .2-.2.7-.1 1-.1 0-.1 0-.1.1-.1 1.6 0 2.9-.2 4.7-.2.1 0 .2.2.2.1-.1 0 0-.1.1-.1.3.1.5.1.8.1.1.2 0 .4.1.6.2 0 .3-.1.3-.2s-.1-.1-.1-.2c.1 0 0-.1.1-.1.2.2 0 .4.2.5.1-.3.1-.4.2-.6.1.1.1 0 .3 0 .1.1.1.3.2.4.1-.3.5 0 .6.1.3 0 .5-.2.8 0 .1 0 0-.2.2-.1 0 .2-.1.4 0 .5 0-.2.3-.2.3-.4.2 0 .1.1.2.1l.2-.2c.1.2.2.2.3.4 0-.3.3-.4.6-.5.1.1.1.1.2.1.7-.1 1.5 0 2.3-.1 0 .1.1.2.2.2s.1-.2.2-.2c.1.1.6 0 .7.1 0 .3.2.3.3.5.3 0 .4-.4.7-.3-.1.1.4-.1.4.1.7-.5 1.7-.2 2.5-.2.2 0 .5-.1.7-.1.9 0 1.7.1 2.4.1.1 0 0 .2.1.2v-.1c.1.2.3-.1.6 0 .1 0 0 .1.2.1.1 0 .1-.1.2-.1.5-.1.8.1 1 .1.2 0 .4.1.5 0 1-.2 2.4.1 3.6 0 0 0-.1.1 0 .1.2 0 .1-.1.2-.1.1.2.3.1.4.3 0-.1.1 0 .3 0 0-.2.1-.3.2-.3 0 .1.1.1.1.1 0 .1-.1.1-.1.2.1 0 .1-.1.2 0 .1-.2.2-.3.4-.4.1.3 0 .6.2.8.3 0 .1-.5.4-.6.2.1.2-.1.4-.1.1 0 0 .2.1.2.1-.1 0-.3.2-.3.1 0 .1 0 .1.1s-.2.3-.1.4c.1 0 .1-.1.2-.1v.2c.1-.3.3-.7.7-.5 0 .2-.1.2-.1.4.1.1.2 0 .3 0 0-.3.2-.4.4-.5.1.1.2.1.4 0 .1.2.1.3.2.5.2-.1.2-.4.3-.5.3 0 .4.1.6.2-.2-.1-.3.2 0 .2 0-.2.2-.1.2 0 0-.2.1-.4.2-.5l.3.6c.4 0 .5.3.4.5.1 0 .1-.1.2-.1.2.1.3.1.3.2 0-.2.1-.4.2-.5.1.3.1.5.4.7.1-.1.2-.3.3-.2 0 .1.2.1.3.2 0-.1.1-.3.2-.2 0-.1 0-.3.2-.3 0 .2 0 .4.2.5.1-.1.1-.3.3-.1-.1-.2.1-.4 0-.6.1 0 .1.1.2.1.1-.1.1-.3.2-.4.2.3.3.6.5.8 0-.1.1-.1.1-.1.1-.1-.2-.2 0-.2.1 0 0 .1.1.1.1-.3-.1-1 .3-1.1 0 .2.1.6.1.9.3 0 .2.2.4.4.1-.2 0-.6.4-.6.1.1.3.3.2.4h.2c0 .1-.1.2 0 .2.3-.2 0-.6 0-1h.2c0 .2 0 .4.2.6.3-.3-.1-1 .4-1.1 0 .4-.1.8.1 1-.2 0-.1.2 0 .3 0-.2.1.1.1.1v-.2c.1.1 0 .2 0 .2.3 0 .2-.2.3-.3 0-.1-.1-.1-.1-.2.5-.1.1-.9.7-1.1.1.3-.1.9-.3 1.2-.1 0 0-.1-.1 0 0 .3 0 .6.2.7 0-.4 0-.8.2-1.1.1.2.1.7.1 1 .2 0 .4.2.6.2.1.1 0 .2.2.2 0-.2-.2-.1-.1-.2s.2-.1.4 0c0-.2.1-.3.2-.4.3.4-.2.8.3 1h.1c.1-.2-.1-.3-.1-.6.2-.1.3-.1.6-.2-.1-.2 0-.3 0-.5-.1 0-.2-.1-.2-.1 0-.2-.1-.3.1-.4.1 0 .2 0 .2.1.1 0 .1-.1.2-.1.1.1 0 .1.1.2.1-.3.1-.7.4-1 0 .4.2.2.4.3 0-.2.1-.3.1-.4 0 0 .3-.1.3 0-.2.2.2.8-.3.8 0 .3-.2.3-.1.6.1 0 .2.1.3.2 0 .2-.1.3 0 .4 0-.2.2-.2.2-.4-.2-.3-.1-.8.1-1 .2.1.4 0 .6 0v.3c.2 0 .1.2.3.2.1 0 0-.2.1-.2.2.3-.2.6-.2.8h-.2c0 .1.2 0 .1.2-.1-.1-.2-.1-.2 0s.1.1.2.2c.3-.3.5-.7.4-1.2.1-.2.3-.2.4-.4.1 0 .2.2.2.1-.2-.2.1-.4 0-.6-.2 0-.3.1-.5 0-.1.1 0 .2-.1.2 0-.1-.2-.4.1-.4.1 0 0 .1.1.1.1-.1 0 0 0-.1.7-.1 1-.1 1.7-.1-.1.2.3.4.4.4-.1-.1-.2-.2-.1-.4h.4c-.1.1 0 .2 0 .4 0 .1-.1.1-.2.1 0 .2.2.2.1.4.2.1.3.1.5 0 .1 0 .1.2.3.2.1-.4.1-.7-.1-1.2.3 0 .9-.1 1 .1h-.4c-.1.4 0 .7.3.8.1 0 0-.2.1-.2h.2c.2-.3-.1-.5-.1-.8h1.3c-.1.1.1.1.1.2.2 0 .1-.1.3-.2.2.3 0 .7.2 1-.1-.1 0-.1.1-.2.2.1 0 .7.4.6-.2.1 0 .3.1.4 0-.3.2-.4.4-.5 0-.5-.2-.7-.1-1.2l.3.3c-.2.1.2.3 0 .5.3.1.1.3.3.4.2-.1.2.2.4.3.2-.1-.1-.2 0-.3 0 .1 0-.1.1 0 0 .2 0 .3.2.4.1.1.1-.2.2-.1-.1 0 0 .1 0 .2.2 0 .2.2.4.3 0-.1.2-.1.3-.1.1.1.2.2.4.3 0-.1-.1-.2-.2-.2.2 0 0-.2.1-.3.2.1.3.4.6.4 0-.3-.2-.4-.1-.7.2 0 .1.2.1.3.3.2.3.6.5.8.2-.1.2.2.4 0 0-.2-.2-.2-.2-.4.2.1.3.1.5.2-.1-.3-.2-.7-.2-.9.2-.1 0 .2.2.2 0-.2 0 0 .1 0 .1-.1.1-.2.2-.3.5-.1.5.5.8.8h.2c.1-.1 0-.2.1-.3.2.1.3-.1.4-.1-.1-.2 0-.6-.1-.8h-.1c.1-.1.2 0 .2 0 0 .3 0 .4.1.7.2.1.2-.1.3 0-.1.1-.1.2 0 .2 0-.5 0-1-.4-1.2 0-.1 0-.1.1-.2.1 0 .1.1.2.1.2-.2.5-.5.8-.2v-.1c.4-.1.6.1.8.1.1 0 .3-.2.4 0-.1.1-.2.1-.4.1 0 .1-.1.2 0 .3.1-.1 0 .1 0 .1 0-.1.1 0 .2 0 0 .1-.2.2 0 .2.1-.1.1-.2.3-.2.2 0 0 .4.2.4.1 0 0-.2.1-.2.5-.1.5-.5 1-.5 0 .1 0 .2.1.1-.1-.3.1-.4.5-.4.1 0 0 .2.1.2.2-.3.6 0 .8-.2 0 .1 0 .1.1.1.6-.2 1.6 0 2.2-.1.1.1.3.1.4.2 0 .2-.2.5.1.5.2-.1 0-.3.2-.4.2 0 .2.2.2.3 0-.1.2-.1.3-.1-.1 0 0 .3-.1.3.2-.1 0-.4.3-.4.1.2.1.5.2.8 0-.3.3-.3.3-.8.1 0 .2 0 .2-.1-.1-.1 0-.3.1-.4.1.1-.1.8.1.9.2-.2 0-.6.3-.8.1 0 0 .1.1.1.1-.1-.1-.1 0-.1 0 .1.1.2 0 .2s0-.1-.1-.1c0 .2.1.2.2.3.2 0 .2-.1.3 0 0-.1.1-.2.2-.3.1 0 .1.1.2 0 .1-.7 1-.2 1.5-.4 0 .1 0 .2.1.3 0-.1.1-.3.2-.3s.2 0 .2.1c-.3.1-.4.4-.6.6-.2-.1.2-.4 0-.3-.1.1-.1.7 0 .9 0-.1.1-.1.3-.1.1-.5.2-1 .5-1.3.9.1 1.6 0 2.4 0 0 .1 0 .2.1.3.1-.1-.1-.2 0-.3.1 0 .1-.1.2-.1v.2c.1-.2.2-.2.3-.2.1 0 .1.1.1.2.2-.2.3-.1.4-.2.1 0 .1.1.1.1.2 0 .1-.1.3-.1V2c.3-.2.6-.1 1-.1.2.1.1.4.3.5 0-.1.1-.1.2-.2 0-.1-.2 0-.2-.2h.5c.9-.2 1.7.1 2.6 0 .2 0 .1.3.2.3.1-.2 0-.1 0-.3.5-.1 1 .1 1.2-.2-.3-.1-.4 0-.7 0 .1-.1-.3 0-.4 0 0-.1-.2-.1-.1-.2h1.5c.4 0 .6-.4 1-.3.1 0 0-.1.1-.1s-.1.1.1.1c.5-.1 1.2 0 1.2-.5-.8-.2-1.6-.2-2.7-.2zM3.7 1.5c0-.1.1-.1.2-.1 0 .1-.1.1-.2.1zm110.8 2c0-.1 0-.1.1-.1s0 .1-.1.1zm6.6-.2c-.2 0 0-.1 0-.2.1 0 0 .2 0 .2zm12.3.3c0-.1 0-.1.1-.1.2.1.2.3.3.5-.3-.1-.2-.4-.4-.4zm.7-.5c-.1-.2 0-.3 0-.6.3.1.3.5 0 .6zm2.8-.1v-.2c.2 0 .2.2 0 .2zm.3-.4c0 .1 0 .1-.1.1.1 0 .1-.1.1-.1 0-.1.1-.2.2-.1 0 .1-.1.2-.2.1zm7.4 0c-.1 0 0-.1 0-.2h.2c-.1.2-.2.1-.2.2zM66.7 5.5c-.1 0 .2-.1 0-.3-.1.1-.1.4 0 .3zm52-1.2c.1 0 .1.1.2 0 0-.3.3-.5.1-.7-.1.3-.1.6-.3.7zm17.1-1.1c0 .3.3.3.2.5h.2c-.3-.2.2-.4.1-.6-.1.2-.4 0-.5.1z"></path></g>
              </svg>
        </div>
        <div className='seller-cards'>
        {
            products.filter(x=>x.isBestSeller).map(elem=>(
                <ProducstCard key={elem._id} element={elem}/>
            ))
        }
        </div>
    </div>
  )
}

export default Seller