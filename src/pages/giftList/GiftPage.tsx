import './giftPage.css'
import img from '/rodrigo_karina-brasao.png'
import {giftImagesPaths, renderGift} from '../../assets/giftImages/giftImagesPaths'
import Gift from './Gift'
import {useEffect, useState } from 'react'
import { giftListProps } from '../../interfaces/interface'

function GiftPage (): JSX.Element {

    const [gifts, setGifts] = useState([])

    useEffect(() => {
        async function getGifts () {
            try {
                const response = await fetch('https://api.rodrigoekarina.com.br/gifts')
                const dataResponse = await response.json()
                setGifts(dataResponse)
                console.log(dataResponse)
            } catch (error) {
                console.error(`Erro ao obter presentes: ${error}`)
            }
        }
        getGifts()
        
    }, [])

    return (
        <div id='giftPage'>
            <div className="fixed-bg"></div>
            <section className="cabecalho">
                <img className="img" src={img} alt="Brasão Rodrigo e Karina" />
                <h1 id='h1Lista'>Nossa lista de casamento</h1>
                <p className="introducao">
                    Querido(a) convidado(a), seja bem-vindo(a) à nossa lista de presentes. 
                    <br/> <br/>
                    Decidimos preparar uma lista e pensamos em tudo com muito carinho para que você se sinta à vontade para nos presentear conforme o seu desejo. <br/>
                    De qualquer forma, nosso melhor presente é a sua presença nesse momento especial.
                    <br/> <br/>
                    ATENÇÃO: Para escolher um presente ainda disponível, clique no botão "Selecionar", adicione seu nome no campo "Seu nome aqui" e clique em "Confirmar presente". <br/>
                    Caso o presente não esteja disponível aparecerá "Item já selecionado" ao lado do nome do item.
                </p>
            </section>
            <div className='containerGifts'>
                <ul id='gift-list'>

                    <Gift imgSrc={giftImagesPaths.imgPix.jantar} textContent='Jantar romântico à luz de velas - R$ 100,00' variant='A' linkHref='https://nubank.com.br/cobrar/4gdsv/69e120bf-43b6-48a5-a08d-6ea0e82349cd' selectedGift={false}/>

                    <Gift imgSrc={giftImagesPaths.imgPix.passeio_barco} textContent='Passeio de barco ao pôr do sol - R$ 150,00' variant='A' linkHref='https://nubank.com.br/cobrar/4gdsv/69e120e8-30fe-41fc-80bf-301c05a0d1c7' selectedGift={false} />

                    <Gift imgSrc={giftImagesPaths.imgPix.passeio_ilhas} textContent='Excursão pelas ilhas - R$ 200,00' variant='A' linkHref='https://nubank.com.br/cobrar/4gdsv/69e120f9-ddff-496c-9daa-5689fab324a3' selectedGift={false}/>

                    <Gift imgSrc={giftImagesPaths.imgPix.passagem_aerea} textContent='Passagens aéreas - R$ 250,00' variant='A' linkHref='https://nubank.com.br/cobrar/4gdsv/69e1210a-2107-4f8e-90ed-c6a55279dfe5' selectedGift={false}/>
                    
                    {gifts.length > 0 && gifts.map((gift: giftListProps, index) => {                      
                        
                        return (<Gift 
                            key= {index}
                            imgSrc={renderGift(gift.idImage)}
                            textContent={gift.giftName}
                            variant='B'
                            idGift={gift.idGift}
                            selectedGift={gift.selected}
                        />)
                        
                    })}
                </ul>

                <a className='botao-pix' href={"https://nubank.com.br/cobrar/4gdsv/69e12730-4526-44fe-837c-a82688768ce1"} target='_blank'>
                    Clique aqui para contribuir com um valor de sua escolha (PIX)
                </a>
                <br></br>
                <a className='botao-pix' href={"/"}>
                    Voltar
                </a>
            </div>
        </div>
    )
}

export default GiftPage