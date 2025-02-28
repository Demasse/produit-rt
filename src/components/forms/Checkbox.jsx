
/**
 * 
 * @param {boolean} checkbox 
 * @param {(v : boolean) => void} onChange
 * @param {string} label 
 * @param {string} id 
 * @returns 
 */

export function Checkbox({checkbox, onChange, label, id}){
    return <div className="form-check">
        <input
        id={id}
        type="checkbox" 
        className=" form-check-input"
        checked={checkbox}
        onChange={(e) =>onchange(e.target.checked)}
        />
        <label htmlFor="id"  className=" form-check-label" >{label}</label>
         </div>
}