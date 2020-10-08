import React from 'react'
import './style.css'

export default function Plano(){
    return(
        <div className='containerPlano'>
            <h3>Escolha seu <strong>plano</strong></h3>
            <div className='grid'>
                <section className='planoMaster'>
                    <div className='master'>
                        <h2>Plano <strong>Master</strong></h2>
                    </div>
                    <div className='plano'>
                        <p>A partir de <strong>R$100/mês</strong></p>
                    </div>
                    <div>
                        <p>Todas as Areas liberadas</p>
                        <p>Leve mais um amigo para treinar</p>
                        <p>Aulas online</p>
                        <button className='buttonVerMais'>Ver mais</button>
                    </div>
                </section>
                <section className='sectionPlanoJunior'>
                    <div className='junior'>
                        <h2>Plano <strong>junior</strong></h2>
                    </div>
                    <div className='planoJunior'>
                        <p>A partir de <strong>R$70/mês</strong></p>
                    </div>
                    <div>
                        <p>Até 3 areas liberadas</p>
                        <p>Aulas online</p>
                        <button className='buttonVerMais buttonJunior'>Ver mais</button>
                    </div>
                </section>
            </div>
        </div>
    )
}