import { createContext, useState } from "react"
import PropTypes from "prop-types";

const PlayerContext = createContext(null);

function PlayerContextProvider({ children }) {

        const [player1, setPlayer1] = useState({
        id: 1, 
        plays: [],
        symbol: "x"
    })

    const [player2, setPlayer2] = useState({
        id: 1,
        plays: [4],
        symbol: "o"
    });

    function handleUserTurn(index,) {
        setPlayer1(prev => {
            console.log({ ...prev, plays: [...prev.plays, index] })
            return { ...prev, plays: [...prev.plays, index] };
        })
    }

    function handleOpponentTurn(index) {
        setPlayer2(prev => {
            console.log({ ...prev, plays: [...prev.plays, index] })
            return { ...prev, plays: [...prev.plays, index] };
        })
    }
    
    return (
        <PlayerContext.Provider value={{
            player1,
            player2,
            handleUserTurn,
            handleOpponentTurn
        }} >
            {children}
        </PlayerContext.Provider>
    )
}

export { PlayerContext, PlayerContextProvider };

PlayerContextProvider.propTypes = {
    children: PropTypes.object
}