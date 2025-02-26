import { Checkbox } from "./components/forms/checkbox"
import { Input } from "./components/forms/input"

const PRODUCTS = [
  {category : "Fruits", price: "$1", stocked:true, name: "Pomme"},
  {category : "Fruits", price: "$1", stocked:true, name: "Pomme1"},
  {category : "Fruits", price: "$1", stocked:true, name: "Pomme2"},
  {category : "Vegetables", price: "$1", stocked:true, name: "graine"},
  {category : "Vegetables", price: "$1", stocked:true, name: "Pomme"},
  {category : "Vegetables", price: "$1", stocked:true, name: "Pomme"},
]

function App() {

  return (
  
    <div className=" container my-3 ">
      <Searchbar />
   
       </div>

 

  )
}

function Searchbar (){
  return <div>
     <div className=" mb-3 ">
      <Input value="" onChange={() => null} placeholder="rechercher....." className="" />
      <Checkbox id="stocked" checkbox={false} onChange={() => null}  label=" affiche que les prd en stock" />

    </div>

  </div>
}

export default App
