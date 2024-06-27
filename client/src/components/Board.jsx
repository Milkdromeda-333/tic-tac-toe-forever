import { useState } from "react"
import BoardBox from "./BoardBox"

export default function Board() {

    // const plot = ["x", "o", "x", "o", "x", "o", "o", "o", "x"];

    const player1 = {
        id: 1,
        plays: [1, 5],
        symbol: "x"
    }

    const player2 = {
        id: 1,
        plays: [4, 7],
        symbol: "o"
    }

    function generateBoard() {

        return Array.from({ length: 9 }).map((_, index) => {
            const findSymbol = () => {
                
                if (player1.plays.includes(index)) {
                    return player1.symbol;
                } else if (player2.plays.includes(index)) {
                    return player2.symbol;
                }
                // handle error?
            }

            const symbol = findSymbol();
            
            if (symbol) {
                return <BoardBox
                        key={index}
                        index={index + 1}
                        symbol={symbol}
                    />
            } else {
                      return <BoardBox
                        key={index}
                        index={index + 1}
                        symbol={""}
                    />
            }
                //    handle error case? what if there is an index that doesnt exist? what if there are two symbols for one index? Check for previously used indexes and dont allow impossible indexes when plotting a symbol.
              })
    }



    return (
        <div className="board">
            { generateBoard() }
        </div>
    )
}

// Board.propTypes = {
//     index: 
// }