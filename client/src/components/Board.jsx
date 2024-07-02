import { useState, useContext } from "react";
import BoardBox from "./BoardBox"
import { PlayerContext } from "../context/PlayerContextProvider";


export default function Board() {
    
    const { player1, player2, handleUserTurn } = useContext(PlayerContext);

    function generateBoard() {

        return Array.from({ length: 9 }).map((_, index) => {
            function  findSymbol() {
                
                if (player1.plays.includes(index)) {
                    return player1.symbol;
                } else if (player2.plays.includes(index)) {
                    return player2.symbol;
                }
            }

            const symbol = findSymbol();
            
            if (symbol) {
                return <BoardBox
                        key={index}
                        index={index + 1}
                        symbol={symbol}
                        handleClick={()=>{}}
                    />
            } else {
                      return <BoardBox
                        key={index}
                        index={index + 1}
                        symbol={""}
                        handleClick={()=>handleUserTurn(index)}
                    />
            }
        })
    }


    return (
        <div className="board">
            { generateBoard() }
        </div>
    )
}