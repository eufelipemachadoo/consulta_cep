import {useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import './style.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState('')
  
  
   async function handleSearch(){
    
    if(input === ''){
      alert("CEP em branco")
      return;
    }

    try{

  
     const response = await api.get('{https://viacep.com.br/ws/79031350/json/');
     console.log(response)
    } 
    catch{
      alert("Erro ao buscar");
      setInput("")
    }



  }






  return (
    <div className="container">
     <h1 className="title">Buscador CEP</h1>

    <div className="containerInput">
      
      <input type="text" 
      placeholder="Digite seu cep..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
   
      />

      <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={25} color="#FFF"/>
      </button>
    </div>

    <main className="main">
      <h2>CEP: 79012652</h2>
      <span>Rua Teste</span>
      <span>Complemento: Algum Complemento</span>
      <span>Vila Rosa</span>
      <span>Campo Grande - MS</span>

    </main>


    </div>


  );
}

export default App;
