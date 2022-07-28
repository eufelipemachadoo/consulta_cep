import {useState} from 'react';
import {FiSearch, FiTrash, FiTrash2} from 'react-icons/fi';
import './style.css';
import api from './services/api';

function App() {

    const [input, setInput] = useState('');
    const [cep, setCep] = useState({});
  
  
   async function handleSearch(){
    
    if(input === ''){
      alert("CEP em branco")
      return;
    }

    try{
        const response = await api.get(`${input}/json`);
        console.log(response.data)
        setCep(response.data)
        setInput("")
  
     
    } 
    catch{
      alert("Erro ao buscar")
        setInput("")
     
    }
  }

 function handleTrash(){
    setInput("")
    setCep("")
   
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
      
      <button className="buttonTrash" onClick={handleTrash}>
       <FiTrash size={25} color="#FFF"/>
      </button>
          


    </div>

          {Object.keys(cep).length > 0 &&(

              <main className="main">
                  <h2>CEP: {cep.cep}</h2>
                  <span>{cep.logradouro} </span>
                  <span>{cep.bairro}</span>
                  <span>{cep.localidade} - {cep.uf}</span>



              </main>
          )}



    </div>


  );
}

export default App;
