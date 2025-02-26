export function Checkbox({ checkbox, onChange, label}){
    return <div>
        <input type="checkbox" 
        className=" form-check-input"
        checked={checked}
        onChange={(e) =>onchange(e.target.checked)}
        />
        <label  className=" form-check-label" >{label}</label>
         </div>
}