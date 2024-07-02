// import { useState } from "react";
import PropTypes from "prop-types";
import PlayerSymbol from "./PlayerSymbol";

export default function BoardBox(props) {

    const { handleClick, symbol, index } = props;

    return (
        <div
            className={` board__box board__box_${index}`}
            onClick={() => {
                handleClick(!!symbol) ;
            }}
        >
            <PlayerSymbol symbol={props.symbol} />
        </div>
    )
}

BoardBox.propTypes = {
    handleClick: PropTypes.func,
    symbol: PropTypes.string,
    index: PropTypes.number
}