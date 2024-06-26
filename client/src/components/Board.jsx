import { useState } from "react"
import BoardBox from "./BoardBox"

export default function Board() {


    return (
        <div className="board">
            {
                Array.from({length: 9}).map((_, index) => {
                return <BoardBox index={index + 1} key={index} />
              })
            }
        </div>
    )
}

// Board.propTypes = {
//     index: 
// }