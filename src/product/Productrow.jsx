
export function Productrow ({ product }){

    const style = product.stocked ? undefined: {color:"red"}
    return <tr>
        <td style={style}>{product.name}</td>
        <td style={style}>{product.price}</td>
    </tr>

}
