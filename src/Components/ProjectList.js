import React from 'react';
import styles from './ProjectList.module.css'; 

const projects = [
  { id: 1, title: '" Hichkee Restaurant"  - Online Restaurant Ordering System', 
  link: 'https://roastgodshorts.github.io/HichkeeRestaurant/' },

  { id: 2, title: '" MANVAN " - Online Men Clothing Store ',
   link: 'https://roastgodshorts.github.io/MANVAN-ECOMMERCE-WEBSITE' },

  { id: 3, title: '" Inboxify " -  Mailbox Service', 
  link: 'https://roastgodshorts.github.io/MAIL-BOX-CLIENT/' },

  { id: 4, title: '" ReduxCartify " - Redux Cart Integration', 
  link: ' https://anikaitshakya55.github.io/ReduxCartify' },

  { id: 5, title: '" FilmFetchr " -Retrieve, Display, Add', 
  link: 'https://anikaitshakya55.github.io/FilmFetchr/' },

  { id: 6, title: '" ExpenseTrackify " - Track Expenses Efficiently', 
  link: 'https://anikaitshakya55.github.io/ExpenseTrackify/' },

  { id: 7, title: '" ReduxCounterPlus " - Redux Counter Functionality', 
  link: 'https://anikaitshakya55.github.io/ReduxCounterPlus' },

];

const ProjectList = () => {
  return (
    <div className={styles.projectList}>
      <h2 className="text-4xl mb-4 font-bold underline">MY PROJECTS</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>

           <div className={styles.project}>
              <h3>{project.title}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>View Website</a>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
