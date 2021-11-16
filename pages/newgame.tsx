import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
// import { withStart } from "effector-next";
// import { pageLoaded } from "../stores/common";
// const enhance = withStart(pageLoaded as any);

const NewGame = () => {
    const [wordCount, setWordCount] = useState(30)
    const [roundTime, setRoundTime] = useState(60)
    const [skipPenalty, setSkipPenalty] = useState(true)
    return (
        <div className="NewGame">
                <Form.Label>
                    Words to win: {wordCount}
                </Form.Label>
                <Form.Range min={10} max={200} step={5} onChange={e => setWordCount(Number(e.currentTarget.value))} />
                <br />
                <Form.Label>
                    Round time: {roundTime}
                </Form.Label>
                <Form.Range min={10} max={120} step={5} onChange={e => setRoundTime(Number(e.currentTarget.value))} />
                <br />
                <Form.Label>
                    Penalty for skipping a word
                </Form.Label>
                <Form.Check
                    checked={skipPenalty}
                    onChange={() => setSkipPenalty(!skipPenalty)}
                />
        </div>
    )
}

export default NewGame
// export default !!(module as any).hot
//     ? NewGame
//     : enhance(NewGame);
