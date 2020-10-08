import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import './style.css'

function Menu() {
    function activate(){
        var adicionarMenu = document.querySelector('.menu')
        adicionarMenu.classList.toggle('active')

        var efeitoButton = document.querySelector('.open-nav')
        efeitoButton.classList.toggle('open')
    }
    return(
        <div className="header" > 
            <div className='container'>   

                <div className="content-header">
                    <img src="assets/IconeAlteres.svg" alt='alteres' className='IconeAlteres'/>  

                    <button className='open-nav' onClick={activate}>
                        <span className='line line_1'></span>
                        <span className='line line_2'></span>
                        <span className='line line_3'></span>
                    </button>
                    <BrowserRouter>
                        <nav className='menu'>
                            <ul className='list-menu'>
                                <li><Link to='/Contato'>Contato</Link></li>
                                <li><Link to='/planos'>Planos</Link></li>
                                <li className='Agendamento'><Link to='/agendamento'>Agendamento</Link></li>
                            </ul>   
                        </nav>       
                    </BrowserRouter>    
                </div>    
            </div>       
        </div>
    )
} 
    

export default Menu