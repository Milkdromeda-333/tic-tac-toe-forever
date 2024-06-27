// import { useState } from "react";
import PropTypes from "prop-types";
import PlayerSymbol from "./PlayerSymbol";

export default function BoardBox(props) {

    return (
        <div className={` board__box board__box_${props.index}`}>
            <PlayerSymbol symbol={props.symbol} />
        </div>
    )
}

BoardBox.propTypes = {
    index: PropTypes.number,
    symbol:PropTypes. string
}