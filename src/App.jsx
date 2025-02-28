
import { useState } from "react";
import { Checkbox } from "./components/forms/checkbox";
import { Input } from "./components/forms/input"
import { Productrow } from "./product/Productrow";
import { ProductCategoryRow } from "./ProductCategoryRow";

const PRODUCTS = [
  {category : "Fruits", price: "$1", stocked:true, name: "Pomme"},
  {category : "Fruits", price: "$1", stocked:true, name: "Pomme1"},
  {category : "Fruits", price: "$1", stocked:false, name: "Pomme2"},
  {category : "Vegetables", price: "$1", stocked:true, name: "graine"},
  {category : "Vegetables", price: "$1", stocked:true, name: "Pomme"},
  {category : "Vegetables", price: "$1", stocked:false, name: "Pomme"},
]

function App() {

  const[show ,setshow] = useState(false)

  return <div className=" container my-3 ">
     < Searchbar show={show} onStockedOnlyChange={setshow} />  
     <ProductTable products={PRODUCTS} />  
       </div>
  
}

     < Searchbar show={show} onStockedOnlyChange />  
     function Searchbar ({show,  }){
  return <div>
    <div className=" container  my-3 ">

      <Input value = "" onChange={ () => null} placeholder="rechercher....."  />
      <Checkbox id="stocked" checkbox={false} onChange={() => null} label="en-stock" />
    </div>

  </div>
 }

 function ProductTable({products}) {
  const rows = []
  let lastCategory = null

  for(let product of products){
    if(product.category !== lastCategory){
      rows.push(<ProductCategoryRow key={product.category } name={product.category} />)
    }
    lastCategory = product.category
    rows.push(<Productrow product={product} key={product.name} />)
  }

  return <table className=" table ">
    <thead>
      <tr className=" flex gap-x-20">
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
    {rows}          
    </tbody>
  </table>

 }

export default App
