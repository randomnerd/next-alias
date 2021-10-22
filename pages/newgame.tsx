import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import styles from '../styles/NewGame.module.css'

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
                {/* <Slider
                    discrete
                    value={wordCount}
                    style={{
                        // marginTop: "1em",
                        height: "4em",
                        track: { top: "2em" },
                        trackFill: { top: "2em", backgroundColor: "#3498db" },
                        thumb: {
                            //   backgroundColor: "purple",
                            top: "1.1em",
                            width: "2em",
                            height: "2em"
                        }
                    }}

                    settings={{
                        min: 10,
                        max: 200,
                        step: 5,
                        onChange: (value: number) => setWordCount(value)
                    }}
                /> */}
                <br />
                <Form.Label>
                    Round time: {roundTime}
                </Form.Label>
                <Form.Range min={10} max={120} step={5} onChange={e => setRoundTime(Number(e.currentTarget.value))} />
                {/* <Slider
                    discrete
                    value={roundTime}
                    style={{
                        // marginTop: "1em",
                        height: "4em",
                        track: { top: "2em" },
                        trackFill: { top: "2em", backgroundColor: "#3498db" },
                        thumb: {
                        //   backgroundColor: "purple",
                        top: "1.1em",
                        width: "2em",
                        height: "2em"
                        }
                    }}

                    settings={{
                        min: 10,
                        max: 120,
                        step: 5,
                        onChange: (value: number) => {
                            setRoundTime(value)
                        }
                    }}
                /> */}
                <br />
                <Form.Label>
                    Penalty for skipping a word
                </Form.Label>
                <Form.Check
                    className={styles.checkbox}
                    checked={skipPenalty}
                    onChange={() => setSkipPenalty(!skipPenalty)}
                />
        </div>
    )
}

export default NewGame
