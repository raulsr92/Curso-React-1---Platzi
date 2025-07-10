import Item from "./Item"

function PackingList() {

    return(
        <>
            <section>
                <h1>Raul's Packing List</h1>
                <ul>
                    <Item
                        isPacked={false}
                        name = "Play Station 5" 
                    />
                    <Item
                        isPacked={true}
                        name = "Zapatillas Nike Venom 2032" 
                    />

                    <Item
                        isPacked={true}
                        name = "Auto Chevrolet Maze del año" 
                    />                    
                </ul>
            </section>
        </>
    )
}

export default PackingList