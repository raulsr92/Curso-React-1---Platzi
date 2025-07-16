import Iconos from "./Iconos";

function Especialistas() {

    //Mover la data a un array
    
    const maestros = [
        {
            id: 0,
            name: 'Creola Katherine Johnson',
            profession: 'mathematician',
        },
                {
            id: 1,
            name: 'Mario José Molina-Pasquel Henríquez',
            profession: 'chemist',
        },
                {
            id: 2,
            name: 'Mohammad Abdus Salam',
            profession: 'physicist',
        },
        {
            id: 3,
            name: 'Subrahmanyan Chandrasekhar',
            profession: 'astrophysicist',
        },
    ]


    const maestrosChemist = maestros.filter((maestro)=>{
        return maestro.profession == 'chemist'
    }
    )

    console.log(maestrosChemist)


    const listItems = maestrosChemist.map((maestro)=>(
                            <li style={{listStyle:"none"}} key={maestro.key}>
                                    <Iconos tipo={maestro.profession}/>
                                    {maestro.name} : {maestro.profession}
                            </li>
                            )
    )



    return(
        <>
            <ul 
                style=
                {
                    {backgroundColor: "#94FFD8",
                     padding: "40px 20px",
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "self-start",
                     rowGap: "10px"
                    }
                }>
                    {listItems}

            </ul>
        </>
    )
    
}

export default Especialistas
