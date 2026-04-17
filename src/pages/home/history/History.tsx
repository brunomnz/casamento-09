import './history.css'
import { showProp } from '../../../interfaces/interface'
import historyData from '../../../assets/history/history.json'


function History({ showComponent }: showProp): JSX.Element {

    return (
        <>
            {showComponent && (<div className="historyContainer">
                <h2 className='myh2'>Nossa história</h2>
                
                <div>
                    {historyData.historia.map((item, index) => (
                        <div className={`${index % 2 === 0 ? 'left' : 'right'}`}>
                            <h3>
                                {item.date}
                            </h3>
                            <p  key={index}>{item.texto}</p>
                        </div>
                    ))}
                </div>
            </div>)}
        </>
    )
}

export default History