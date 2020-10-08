import React from 'react'
import Menu from '../Menu'
import capaAcademia from '../imagens/capaAcademia.jpg'

import Servicos from '../Servicos'
import Plano from '../Plano'
import Coluna from '../Coluna'
import Footer from '../Footer'
import './style.css'


export default function PaginaInicial(props){
    return(
        <div className="PaginaInicial" >
            <Menu />
            <div>
                <img src={capaAcademia} alt='Academia' className="capaAcademia"/>
                <div className='AcademiaSolution-container'>
                    <h1 className='AcademiaSolution-text'>Academia Solution</h1>
                    <h3>Com planos a partir de R$70,00</h3>
                    <button className='buttonCapa'>Ver mais</button>
                </div>
            </div>

            <div className='containerCrossfit'>
                <h3 className='AulaCrossfit'>Experimente um dia gratis</h3>
                <button className="buttonCrossfit">Marcar aula</button>
                <img src='assets/AreaMusculacao.jpg' alt='crossfit' className='AreaCrossfit'/>
            </div>
            <Servicos />
            <Plano />
            <Coluna/>
            <Footer />
        </div>
    )
}