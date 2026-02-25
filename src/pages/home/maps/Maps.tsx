import { useRef } from 'react'
import './maps.css'
import { showProp } from '../../../interfaces/interface'
import { iframeProps } from '../../../interfaces/interface'

function Maps({ showComponent }: showProp): JSX.Element {

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
            {showComponent && (<div className="mapsContainer">
                <div className="address">
                    <h3 ref={textRef} id="textocopy">
                        Every Time Festas<br /><br />
                        R. Expedito Ferreira de Carvalho, 100<br />
                        Santos Dumont II, Gov. Valadares - MG, 35022-192
                    </h3>
                    <button className="buttonCopy" onClick={copiarTexto} title="Copiar"></button>
                </div>
                <div id="maps" className="mapBox">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4474.334818632167!2d-41.89471002412393!3d-18.836351882319445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb1098833d968af%3A0x9c89251fe5a11f15!2sEvery%20Time%20Festas!5e1!3m2!1spt-BR!2sbr!4v1772047907008!5m2!1spt-BR!2sbr"
                        style={iframeProps.style} allowFullScreen={iframeProps.allowFullScreen} loading={iframeProps.loading} referrerPolicy={iframeProps.referrerPolicy}>
                    </iframe>

                    <a href="https://www.google.com/maps/dir/?api=1&origin=-18.921428, -42.016291&destination=-18.836350,-41.892233&waypoints=-18.913438,-42.008209|-18.913411,-41.998188|-18.867319,-41.954296|-18.862878,-41.955965|-18.850553,-41.937358|-18.848894,-41.937767&travelmode=driving">
                        <button
                            className="click" >
                            Clique aqui e veja o trajeto para quem vem de Ipatinga
                        </button>
                    </a>
                </div>
            </div>)}
        </>
    )
}

export default Maps