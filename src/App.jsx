import React from 'react'
import "./App.css"

import Primeiro from './components/basicos/Primeiro'
import ComParametros from './components/basicos/ComParametros'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'

export default () => (
  <div className='App'>
    <h1>Fundamentos React</h1>

    <div className="Card_Container">

      <Card titulo='Comunicação Indireta' color='#20457C'>
       <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo='Comunicação Direta' color='#050505'>
       <DiretaPai></DiretaPai>
      </Card>

      <Card titulo='Renderização Condicional' color='#00D8D9'>
       <ParOuImpar numero={20} ></ParOuImpar>
       <UsuarioInfo usuario={{nome: 'Thiago'}} />
      </Card>

      <Card titulo='Tabela de Produtos' color='#00D8D9'>
       <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo='Repetição' color='#00C8F8'>
       <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo='Componente Com Filhos' color='#00C8F8'>
        <Familia sobrenome='Placa'>
          <FamiliaMembro nome='Thiago' />
          <FamiliaMembro nome='Gabriel' />
          <FamiliaMembro nome='Bruno'/>

        </Familia>
      </Card>

      <Card titulo='Desafio Aleatório' color='#CD5C5C'>
        <Aleatorio min={1} max={100} />
      </Card>

      <Card titulo='Fragmento' color='#F08080'>
        <Fragmento />
      </Card>

      <Card titulo='Fragmento' color='#FA8072'>
        <ComParametros
          titulo='Situação do Aluno'
          aluno='Thiago'
          nota='7.3' />
      </Card>

      <Card titulo='Situação do Aluno' color='#E9967A'>
        <Primeiro />
      </Card>
    </div>
  </div>

)