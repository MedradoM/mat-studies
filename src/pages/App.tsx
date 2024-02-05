import React, { useState } from 'react'; 
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/tarefas';

function App() {
  const [Tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();
  function selecionaTarefa(e: ITarefa) {
    setSelecionado(e);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa, selecionado: tarefa.id === e.id ? true : false
    })));
  }

  function finalizarTarefa () {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa, selecionado: false, completado: true
          }
        }
        return tarefa
      }))
    }
  }







  return (
    <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas}/>
        <Lista 
          tarefa={Tarefas}
          selecionaTarefa={selecionaTarefa} 
        />
        <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} ></Cronometro>
    </div>
  );
}

export default App;
