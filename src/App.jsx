
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

  const[showstock ,setshowstock] = useState(false)
  const[search ,setsearch] = useState('')

  return <div className=" container my-3 ">
     < Searchbar 
     search={search}
     onSearchChange={setsearch}

     showstock={showstock} onStockedOnlyChange={setshowstock} />  
     <ProductTable products={PRODUCTS} />  
       </div>
  
}

function Searchbar ({showstock, onStockedOnlyChange , onSearchChange, search}) {
    //  < Searchbar showstock={showstock} onStockedOnlyChange />  
  return <div>
    <div className=" container  my-3 ">

      <Input 
      value = {search} 
      onChange={ onSearchChange } placeholder="rechercher....."  />
      <Checkbox
       id="stocked" 
      checked={showstock} 
      onChange={onStockedOnlyChange} 
      label="en-stock" />
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
