import React from 'react'
import './style.css'

import Boxe from '../imagens/ImagemBoxe.jpeg'
import Musculacao from '../imagens/Musculacao.jpg'
import Yoga from '../imagens/Yoga.jpg'
import zumba from '../imagens/zumba.jpg'


// export default function Servicos(props){
//     return(
//         <div className='ContainerServico'>
//             <div className='Grid'>
//                 <img src={Boxe} alt='boxe' className='imagemServicos' />
//                 <img src={Musculacao} alt='musculacao' className='imagemServicos'/>
//                 <img src={Yoga} alt='yoga'  className='imagemServicos'/>
//                 <img src={zumba} alt='zumba'  className='imagemServicos' />
//                 <h3 className='TextServicos'>{props.text}</h3>
//                 <p className='tracoServicos'>{props.traco}</p>
//             </div>
//         </div>
//     )
// }


export default function Servicos(props){
    return(
        <div className='ContainerServico'>
             <h2 className='titulo'>Conheça o que <strong>nós oferecemos</strong>.</h2>
            <section className='Grid grid-template-rows-1' >
                <div className='divServicos'>
                    <img src={Boxe} className='imagemServicos' alt='boxe'/>
                    <h3 className='TextServicos'>Boxe</h3>
                </div>

                <div className='divServicos'>
                    <img src={Musculacao} className='imagemServicos' alt='musculação'/>
                    <h3 className='TextServicos'>musculação</h3>
                </div >

                <div  className='divServicos'>
                    <img src={Yoga} alt='yoga' className='imgGrid'/>
                    <h3 className='TextServicos'>Yoga</h3>
                </div>

                <div  className='divServicos'>
                    <img src={zumba} alt='zumba' className='imgGrid'/>
                    <h3 className='TextServicos'>Zumba</h3>
                </div>
                
            </section>
            <div>
               
            </div>
        </div>
    )
}