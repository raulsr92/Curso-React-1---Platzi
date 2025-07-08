import './Card.css'

export function Card({estadioName}) {
    // const linkImg = "https://images.pexels.com/photos/41257/pexels-photo-41257.jpeg";
    const cardFeatures = {
        class: "cardContainer",
        linkImg: "https://images.pexels.com/photos/41257/pexels-photo-41257.jpeg",
        theme: {
            backgroundColor: "#FEEBF6",
            borderRadius: 5
        }
    }
    return(
        <>
            <div 
                className={cardFeatures.class}
                style={cardFeatures.theme}
                >
                    <h3>{estadioName}</h3>
                    <div className='media-section'>
                        <img 
                            src= {cardFeatures.linkImg}
                            alt="Estadio1" 
                            className='card-photo'
                        />                    
                    </div>

                    <div className='info-section'>
                        <p
                            className='info-section-intro'>
                            Datos:</p>
                        <ul>
                            <li>Ubicación: Brasil - Sao Paulo</li>
                            <li>Dirección: Av La Alameda 345</li>
                            <li>Capacidad: 65 mil espectadores</li>
                        </ul>
                    </div>
            </div>    
        </>
    )
}
