import { useEffect, useState } from "react"
import './countdown.css'
import { showProp } from "../../../interfaces/interface"

function Countdown ({showComponent}: showProp): JSX.Element {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        mins: 0,
        seconds:0,
    })

    function formatTime (time: number) {
        return time < 10 ? `${time}` : time
    }

    function countdown () {
        const wedding = '2027-07-24 16:00'
        const weddingDate = new Date(wedding)
        const currentDate = new Date()
        
        const totalSeconds = (weddingDate.getTime() - currentDate.getTime()) / 1000
        const days = Math.floor(totalSeconds / 3600 / 24)
        const hours = Math.floor(totalSeconds / 3600) % 24
        const mins = Math.floor(totalSeconds / 60) % 60
        const seconds = Math.floor(totalSeconds) % 60

        return {
            days,
            hours,
            mins,
            seconds,
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(countdown())
        }, 1000)

        return () => clearInterval(interval)

    }, [])

    return (
        <> 
            {showComponent && (
                <div className="container">
                    <h2>Falta pouco para o grande dia...</h2>
                    <section id="countdow-container">
                        <div className="countdow days-c">
                            <p className="text" id="days">{formatTime(timeLeft.days)}</p>
                            <span>Dias</span>
                        </div>
                        <div className="countdow hours-c">
                            <p className="text" id="hours">{formatTime(timeLeft.hours)}</p>
                            <span>Horas</span>
                        </div>
                        <div className="countdow min-c">
                            <p className="text" id="min">{formatTime(timeLeft.mins)}</p>
                            <span>Minutos</span>
                        </div>
                        <div className="countdow secs-c">
                            <p className="text" id="secs">{formatTime(timeLeft.seconds)}</p>
                            <span>Segundos</span>
                        </div>
                    </section>
                </div>
            )}
        </>
    )
}

export default Countdown