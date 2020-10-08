import React from 'react'
import EsporteVida from '../imagens/esporteVida.jpg'
import BemEstar from '../imagens/bemEstar.jpg'
import Forca from '../imagens/forca.jpg'
import './style.css'
export default function Coluna(){
    return(
        <div >
            <h2 className='tituloColuna'>Acredite que você pode, assim você já <strong>está no meio do caminho.</strong></h2>
            <section className='gridColuna'>
                <div className='divGrid'>
                    <h3 className='subTitulo textColuna'>Esporte é vida</h3>
                    <img src={EsporteVida} className='imgColuna img_1' alt='yoga'/>
                </div>

                <div>
                    <h3 className='subTitulo'>Bem-estar</h3>
                    <img src={BemEstar} className='imgColuna' alt='crossfit' />
                </div>
                <div className='divGrid'>
                    <h3 className='subTitulo textColuna' >Força</h3>
                    <img src={Forca} className='imgColuna img_3' alt='boxe'/>
                </div>
            </section>
            <section className='apresentacao'>
                <div className='apresentacaoIcone'>
                    <img src='assets/excelencia.svg'/>
                    <h3>Mérito</h3>
                    <p>Professores com anos de experiencia</p>
                </div>
                <div className='apresentacaoIcone'>
                    <img src='assets/brasil.svg'/>
                    <h3>Localidade</h3>
                    <p>Possuimos 10 academias expalhadas pelo Brasil </p>
                </div >
                <div className='apresentacaoIcone'>
                    <img src='assets/merito.svg'/>
                    <h3>Excelencia</h3>
                    <p>Buscamos sempre a excelencia</p>
                </div>
            </section> 
        </div>
    )
}