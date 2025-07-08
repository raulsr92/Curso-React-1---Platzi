import './Galeria.css'
import { Card } from './Card.jsx'

export default function Galeria() {

    const listEstadios = ["Maracaná", "Matute", "Santiago Bernabeu"]

    return(
        <>
            <section className='galeria-container'> 
                <p>Te presento los estadios que conocí en el 2024:</p>
        
                <section className='cards-container'>
                    {
                     listEstadios.map((estadio)=>(

                        <Card estadioName={estadio} />

                     ))
                    }
                </section>
            </section>
        </>
    ) 
}

