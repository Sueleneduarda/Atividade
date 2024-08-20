
import './pagehome.css'
import react from 'react';
import InputBusca from '../comphome/comphome1';
import oi from '../../images/oi.png';
import imagemlogo from '../../images/imagemlogo.png';
import pantuinfan from '../../images/pantuinfan.png';
import pigcurtofem from '../../images/pigcurtofem.png';
import pijamalilascurto from '../../images/pijamalilascurto.png';
import pantufafem from '../../images/pantufafem.png';
import pijamainfalog from '../../images/pijamainfalog.png';



function Pagehome (){
return (
  <div id='container'>

<h1>Minha loja</h1>

<div > 
    <img id='imglog' src={imagemlogo} className='imagem logo' alt= 'Imagem logo'/> 
   </div>
     <div className = "InpuBusca1" />
   <InputBusca name="Busca loja" />
<h3>Pijamas feminino</h3>
 <div id='container'>
   <div id='Lista de produtos1'> 
    <div> 
      <img id='longo' src={pijamalilascurto} className='' alt=''/> 
      <h4>Pimajamas americanos femininolongo</h4>
      <h5>R$ 107,94 6x de R$ 17,99 sem juros</h5>
    </div>

    <div id='Lista de produtos1'> 
    <div> 
      <img id='curto'  src={ pigcurtofem} className='' alt=''/>
      <h4>Pimajamas americanos feminino curto</h4>
      <h5>R$ 199,90 6x de R$ 33,32 sem juros</h5>
    </div>
    </div>
    <div id='Lista de produtos1'> 
    <div> 
    <img id='pantufa' src={pantufafem } className='' alt=''/> 
      <h4>Pantufa feminina</h4>
      <h5>R$ 161,91 6x de  R$ 26,99 sem juros</h5>
    </div>

    <div id='Lista de produtos1'> 
      
    <div> 
    <img id='longoi'  src={pijamainfalog } className='' alt=''/> 
      <h4>Pimajamas infantil longo</h4>
      <h5>R$ 170,91 6x de R$ 28,49 sem juros</h5>
      
    </div>
    </div>

    <div id='Lista de produtos1'> 
    <div> 
    <img id='curtoin' src={ oi} className='' alt=''/> 
      <h4>Pimajamas infantil curto</h4>
      <h5>R$ 143,91 6x de R$ 23,99 sem juros</h5>
      
    </div>
    </div>

    <div id='Lista de produtos1'> 
    <div> 
    <img id='pantufain' src={pantuinfan } className='' alt=''/> 
      <h4>Pantufa infantil</h4>
      <h5>R$ 215,91 6x de R$ 35,99 sem juros</h5>
    </div>
    </div>
    </div>
   </div>
    
   </div>
      </div>
)

}
export default Pagehome;