function Item({name, isPacked}) {

    return(

        <li style={{listStyle:"none"}}  className="item">   
            {isPacked ? 
                (<del>{name+' ✅'}
                </del>)
            : (name)}</li>

    )

}

export default Item