
function Iconos({tipo}) {

    const icons = {
        mathematician: <i className="fa-solid fa-calculator" style={{paddingRight:"10px"}} />,
        chemist: <i className="fa-solid fa-flask-vial" style={{paddingRight:"10px"}} />,
        physicist: <i className="fa-solid fa-dna" style={{paddingRight:"10px"}}/>,
        astrophysicist: <i className="fa-solid fa-satellite" style={{paddingRight:"10px"}} />,
    }

    return(
        <>
            <span>
                {icons[tipo]}
            </span>
        </>
    )
    
}

export default Iconos