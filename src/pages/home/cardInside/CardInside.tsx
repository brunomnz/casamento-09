import './cardInside.css'

function CardInside (): JSX.Element {
    return (
        <>
            <div className="cardInside">
                <div className="inside-text">
                    <p className="verse">
                        “<em>E, acima de tudo, tenham amor, pois o amor une perfeitamente todas as coisas.</em>” - Cl. 3:14
                    </p>
                    <h1>Giovana & Bruno</h1>
                    <p className="textInvite">
                        Convidam para a celebração de seu casamento a ser realizada em
                    </p>
                </div>
                <div className='dataHorario'>
                    <div id='dateweek'>
                        <p>Sábado</p>
                    </div>
                    <div className="separador" id="s1"></div>
                    <div className="dateInvite">
                    <div className="dateMes">JUL</div>
                    <div className="dateDia">24</div>
                    <div className="dateAno">2027</div>
                    </div>
                    <div className="separador" id="s2"></div>
                    <div id="dateHour">
                        <p>16h:00 </p>
                    </div>
                </div>
                <div className='place'>
                    <p className='rest'>Local: Chácara Every Time Festas</p>
                </div>
            </div>
        </>
    )
}

export default CardInside