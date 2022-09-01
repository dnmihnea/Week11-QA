const GameRoom = ({players}) => {

    const Display = ({ playerName }) => <li>{playerName}</li>
    return ( 
        <ul className="previousSearch">
            {players.map((playerName, i) => (
                <Display
                    playerName={playerName}
                    key={i}
                />
            ))}
        </ul>
     );
}

export default GameRoom;