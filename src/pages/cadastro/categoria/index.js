import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao:'',
    cor:'#000',
  }


  const [values, setValues] = useState('Valor Inicial');

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function funcaoHandler (infosDoEvento) {
    const {getAttribute, value} = infosDoEvento.target;
    setValue(
      getAttribute('name'), 
      value);
  }

  

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias, values
          ]);
          
          setValues(valoresIniciais)
        }}>


          <FormField
            label='Nome da Categoria: '
            type='text'
            name='nome'
            value = {values.nome}
            onChange={funcaoHandler}
          />

          <FormField
            label='Descrição: '
            type="text"
            name='descricao'
            value = {values.descricao}
            onChange={funcaoHandler}
          />

          <FormField
            label='Cor: '
            type="color"
            name='cor'
            value = {values.cor}
            onChange={funcaoHandler}
          />

          

        
          

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return(
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>


        <Link to="/cadastro/categoria">
            Ir para home
        </Link>

      </PageDefault>
    )
  }

  export default CadastroCategoria;