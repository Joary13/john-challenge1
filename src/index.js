import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

//react v18

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar({ src, name }) {
  return <img src='about.jpg' alt='Joary' className='avatar' />;
}

function Intro() {
  return (
    <div>
      <h1>Joary Raoelison</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit
        nobis repudiandae corporis aut aliquid, laborum dolore temporibus
        voluptatem soluta in!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className='skill-list'>
      <Skill skillName='HTML+CSS' emoji='⚡' color='blue' />
      <Skill skillName='Javascript' emoji='😊' color='yellow' />
      <Skill skillName='Web Design' emoji='⚡' color='green' />
      <Skill skillName='Git and Github' emoji='⚡' color='red' />
      <Skill skillName='React' emoji='😊' color='pink' />
      <Skill skillName='Svelte' emoji='💥' color='purple' />
    </ul>
  );
}

function Skill({ skillName, emoji, color }) {
  return (
    <li className='skill' style={{ backgroundColor: color }}>
      {skillName} {emoji}
    </li>
  );
}
