import React, { useState } from 'react';

const About = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Apprendre React", isChecked: false },
    { id: 2, text: "Faire des exercices", isChecked: false },
    { id: 3, text: "Créer une application", isChecked: false },
  ]);

  const handleCheck = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '8px',
      
    }} className="container mt-4">
      <h2 style={{ color: '#b76e79', marginBottom: '15px' }}>Liste des tâches</h2>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #b76e79',
              marginBottom: '10px',
              borderRadius: '4px',
            }}
            className="list-group-item d-flex align-items-center"
          >
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={task.isChecked}
              onChange={() => handleCheck(task.id)}
            />
            <span style={{
              textDecoration: task.isChecked ? 'line-through' : 'none',
              color: task.isChecked ? '#9caf88' : 'inherit'
            }}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>

      <h3 style={{ color: '#b76e79', marginTop: '20px' }}>Tâches complétées</h3>
      <div className="completed-tasks">
        {tasks
          .filter((task) => task.isChecked)
          .map((task) => (
            <p key={task.id} style={{ textDecoration: 'line-through', color: '#9caf88', fontWeight: 'bold' }}>
              {task.text}
            </p>
          ))}
      </div>
    </div>
  );
};

export default About;
