import { useRef } from 'react'
import './history.css'
import { showProp } from '../../../interfaces/interface'
import historyData from '../../../assets/history/history.json'

const count = 0;

function History({ showComponent }: showProp): JSX.Element {

    const textRef = useRef<HTMLHeadingElement>(null)

    const copiarTexto = () => {

        if (textRef.current) {
            const texto = textRef.current.innerText
            navigator.clipboard.writeText(texto)
                .then(() => {
                    alert(`Texto copiado: ${texto}`)
                })
                .catch((err) => {
                    console.error(`Erro ao copiar o texto: ${err}`)
                })
        } else {
            console.log('erro');
        }
    }

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