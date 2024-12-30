import { v4 as uuidv4 } from 'uuid';
import styles from './ToDo.module.css';
import { Check, Plus, PlusCircle, Trash, Clipboard } from '@phosphor-icons/react';
import { useState } from 'react';



const initialTasks = [
    {
        id: uuidv4(),
        title: 'Terminar o desafio',
        isComplete: true
    },
    {
        id: uuidv4(),
        title: 'Estudar TypeScript ',
        isComplete: false
    },
    {
        id: uuidv4(),
        title: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga enim amet tempore officia labore quod repellat.',
        isComplete: false
    },
    {
        id: uuidv4(),
        title: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga enim amet tempore officia labore quod repellat.',
        isComplete: false
    },
];

export function ToDo() {

    const [tasks, setTasks] = useState(initialTasks)

    const doneTasks = tasks.filter((task, index) => {
        return task.isComplete == true
    })

    function deleteTask(selectedIndex) {
        const newTasks = tasks.filter((task, index) => {
            if (index != selectedIndex) {
                return true;
            }
            return false;
        })
        setTasks(newTasks);
    }

    function handleSelect(selectedIndex) {
        const newTasks = tasks.map((task, index) => {
            if (index == selectedIndex) {
                task.isComplete = !task.isComplete;
            }
            return task;
        })
        setTasks(newTasks);
    }
    
    function handleNewToDo(event) {
        event.preventDefault()
        const title = event.target.title.value;
        const newToDo = {
            id: uuidv4(),
            title: title,
            isComplete: false
        }

        setTasks([...tasks, newToDo]);

    }

    return (
        <div className={styles.all}>

            <form className={styles.txtandButton} onSubmit={handleNewToDo}>
                <textarea name="title" placeholder='Adicione uma nova tarefa' ></textarea>
                <button title='Deletar Task' className={styles.add} onClick={console.log} >Criar<PlusCircle size={24} /></button>
            </form>
            <div className={styles.count}>
                <div className={styles.um}>
                    <p className={styles.title}>Tarefas Criadas</p>
                    <span>{tasks.length}</span>
                </div>
                <div className={styles.dois}>
                    <p className={styles.ok}>Concluídas</p>
                    <span>{doneTasks.length} de {tasks.length}</span>
                </div>

            </div>

            {tasks.length == 0 && (
                <div className = {styles.noToDo}>
                    <Clipboard size={60} /><br/>
                    <p>Você ainda não tem tarefas cadastradas<br/>
                        Crie tarefas e organize seus itens a fazer </p>
                </div>
                
            )}

            {tasks.map((task, index) => {
                return (
                    <li key={tasks.id}>
                        <div className={styles.tasks} id='task'>
                            <div className={styles.separa} >
                                <input type="checkbox"
                                    checked={task.isComplete}
                                    onChange={() => handleSelect(index)}
                                    className={styles.customCheckbox} />
                                <p>{task.title}</p>
                            </div>
                            <button title='Deletar Task' onClick={() => deleteTask(index)} className={styles.apaga}>
                                <Trash size={24} />
                            </button>
                        </div>
                    </li>
                )
            })}

        </div>
    )
}
