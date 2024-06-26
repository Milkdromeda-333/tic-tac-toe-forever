// import { useState } from "react";
import PropTypes from "prop-types";

export default function BoardBox(props) {

    return (
        <div className={` board__box board__box_${props.index}`}></div>
    )
}

BoardBox.propTypes = {
    index: PropTypes.number
}