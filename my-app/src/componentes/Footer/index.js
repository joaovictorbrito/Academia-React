import React from 'react'
import './style.css'


export default function Footer(){
    return(
        <div>
            <footer className='footer'>
                <div>
                    <h2 className='tituloFooter'>Academia solution</h2>
                    <h4>Copyright &copy;2020 Todos os diretos reservados.</h4>
                    <h4 className='link'>Feito por <a href='https://github.com/joaovictorbrito'>João Victor</a></h4>
                </div>
                <div>
                    <h4>Academia solution é especializada em transformar vidas através do esporte, com professores qualificados para dar suporte nos treinamentos.</h4>
                </div>
                <div>
                    <h4>Fale conosco</h4>
                    <h4>Planos</h4>
                    <h4><a href='https://www.instagram.com/?hl=pt-br'>Instagram</a></h4>
                </div>
            </footer>
        </div>
    )
}