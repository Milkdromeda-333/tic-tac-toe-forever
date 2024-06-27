import PropTypes from "prop-types"; 

export default function PlayerSymbol({ symbol }) {
    
    return (
            <div className={`player-symbol__${symbol}-symbol`}></div>
    )
}

PlayerSymbol.propTypes = {
    symbol: PropTypes.string
}