import React, { useEffect, useState } from 'react'
import { Board, Fruits } from '@/types'
import { buildBoard, buildFruits, buildFruitsAverage } from '@/builders'
import { BASIC_BOARD_DATA, BASIC_FRUIT_AVGS } from '@/consts'
import { appearFruits } from '@/interactions/fruits'

interface Props { }

function GameBoard(props: Props) {
    const [board, setBoard] = useState<Board>(() => {
        return buildBoard(BASIC_BOARD_DATA)
    })
    const [fruits, setFruits] = useState<Fruits>(() => {
        const avgs = buildFruitsAverage(BASIC_FRUIT_AVGS)
        const fruits = buildFruits(avgs)
        return fruits
    })
    useEffect(() => {
        // Appear fruits on the table
        if (board.length && fruits)
            appearFruits(fruits, board)
    }, [fruits])
    console.log(board)
    return (
        <div>Board</div>
    )
}

export default GameBoard
