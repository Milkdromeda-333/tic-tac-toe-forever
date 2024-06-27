import { useState } from "react"
import BoardBox from "./BoardBox"

export default function Board() {

    const plot = ["x", "o", "x", "o", "x", "o", "o", "o", "x"];

    return (
        <div className="board">
            {
                plot.map((symbol, index) => {
                    if (symbol === "x") {
                        return <BoardBox
                            key={index}
                            index={index + 1}
                            symbol={symbol}
                        />
                    } else if (symbol === "o") {
                         return <BoardBox
                        key={index}
                        index={index + 1}
                        symbol={"o"}
                    />
                    }
                //    handle error case
              })
            }
        </div>
    )
}

// Board.propTypes = {
//     index: 
// }