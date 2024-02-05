import React from 'react';
import { ITarefa } from '../../types/tarefas';
import Item from './Item';
import style from './Llista.module.scss';

interface Props {
    tarefa: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa)=> void
}

function Lista({ tarefa, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefa.map(item => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;