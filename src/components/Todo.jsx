import Card from './Card';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';
export default function () {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleAddTask(e) {
    e.preventDefault();
    setTasks((prevTask) => [
      ...prevTask,
      {
        id: Math.floor(Math.random() * Date.now()),
        name: newTask,
        completed: false,
      },
    ]);
    setNewTask('');
  }

  function handleCompleteTask(id) {
    const updateTask = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updateTask);
  }
  function handleRemoveTask(id) {
    const removeTask = tasks.filter((task) => task.id !== id);
    setTasks(removeTask);
  }

  return (
    <Card>
      <Card.Title>Todo</Card.Title>
      <form>
        <Card.Body>
          <div className='flex items center gap-x-2'>
            <Input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            ></Input>
            <Button
              type='submit'
              onClick={handleAddTask}
              text={'Add Task'}
            ></Button>
          </div>
          <div className='mt-4'>
            {tasks.length > 0 ? (
              <ol className='space-y-2'>
                {tasks.map((task) => (
                  <li
                    className='flex items-center justify-between pt-3 mt-3 border-t-2'
                    key={task.id}
                  >
                    <p className={task.completed ? 'line-through' : ''}>
                      {task.name}
                    </p>
                    <div className='flex gap-2'>
                      <button
                        type='button'
                        className={'px-2 py-1 border text-xs'}
                        onClick={() => handleCompleteTask(task.id)}
                      >
                        {task.completed ? 'Mark as Incomplete' : 'Done'}
                      </button>
                      <button
                        type='button'
                        className={'px-2 py-1 border text-xs'}
                        onClick={() => handleRemoveTask(task.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        </Card.Body>
      </form>
      <Card.Footer>You have {tasks.length} task</Card.Footer>
    </Card>
  );
}
