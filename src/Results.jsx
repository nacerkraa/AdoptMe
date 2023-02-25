import Pet from "./Pet";

const Results = ({pets}) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h1>No pets Found</h1>
            ):
                pets.map(pet=>
                    <Pet 
                        animal = {pet.animal}
                        name = {pet.name}
                        id = {pet.id}
                        breed = {pet.breed}
                        images = {pet.images}
                        location = {`${pet.city}, ${pet.state}`}
                        key = {pet.key}
                    />

                )
            }
        </div>
    );
};

export default Results;