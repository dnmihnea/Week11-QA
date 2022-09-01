const Prop = props => {
    return (
        <>
            <p> Name: {props.name}</p>
            <p> Genre: {props.genre} </p>
            <p> Released: {props.year}</p>
            <p> Rating: {props.rating}</p>
        </>
    );
}

const Robocop = () => {
    return (
        <>
            <div className="movie">
                 <Prop name="Robocop" genre="Sci-fi / Action" year="1987" rating="7.6 / 10" />
            </div>
        </>
    );
}

const Trainspotting = () => {
    return (
        <>
            <div className="movie">
                <Prop name="Trainspotting" genre="Drama" year="1996" rating="8.1 / 10" />
            </div>
        </>
    );
}

const Movies = () => {
    return (
        <>
            <Robocop />
            <Trainspotting />
        </>
    );
}


export default Movies; 