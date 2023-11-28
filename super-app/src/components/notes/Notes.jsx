// import React, { useEffect, useState } from 'react';
// import styles from "./Notes.module.css";

// const defaultText = "This is how I am going to learn MERN Stack in the next 3 months.";

// const Notes = () => {
//   // State to manage the content of the notes
//   const [notes, setNotes] = useState('');

//   // Load notes from local storage when the component mounts
//   useEffect(() => {
//     const savedNotes = localStorage.getItem('notes');

//     // Set the default text if there are no saved notes
//     if (!savedNotes) {
//       setNotes(defaultText);
//       localStorage.setItem('notes', defaultText);
//     } else {
//       setNotes(savedNotes);
//     }
//   }, []);

//   // Event handler to handle key press and update notes
//   const handleKeyDown = (e) => {
//     // Check if the pressed key is Backspace
//     if (e.key === 'Backspace') {
//       // Prevent default behavior (like navigating back in the browser)
//       e.preventDefault();

//       // Remove the last character from the notes state
//       setNotes((prevNotes) => {
//         const updatedNotes = prevNotes.slice(0, -1);

//         // Save updated notes to local storage
//         localStorage.setItem('notes', updatedNotes);

//         return updatedNotes;
//       });
//     }
//   };

//   return (
//     <div className={styles.noteSection}>
//       <h2 className={styles.heading}>All notes</h2>
//       <textarea
//         value={notes}
//         onChange={(e) => setNotes(e.target.value)}
//         onKeyDown={handleKeyDown}
//         className={`${styles.noteSection} ${styles.styledText}`}
//       />
//     </div>
//   );
// };

// export default Notes;



// import React, { useEffect, useState } from 'react';
// import styles from './Notes.module.css';

// const defaultText = "This is how I am going to learn MERN Stack in the next 3 months.";

// const Notes = () => {
//   // State to manage the content of the notes
//   const [notes, setNotes] = useState('');

//   // Load notes from local storage when the component mounts
//   useEffect(() => {
//     const savedNotes = localStorage.getItem('notes');

//     // Set the default text if there are no saved notes
//     if (!savedNotes) {
//       setNotes(defaultText);
//       localStorage.setItem('notes', defaultText);
//     } else {
//       setNotes(savedNotes);
//     }
//   }, []);

//   // Event handler to handle key press and update notes
//   const handleKeyDown = (e) => {
//     // Check if the pressed key is Backspace
//     if (e.key === 'Backspace') {
//       // Prevent default behavior (like navigating back in the browser)
//       e.preventDefault();

//       // Remove the last character from the notes state
//       setNotes((prevNotes) => prevNotes.slice(0, -1));

//       // Save updated notes to local storage
//       localStorage.setItem('notes', notes.slice(0, -1));
//     }
//   };

//   // Save notes to local storage whenever the content changes
//   useEffect(() => {
//     localStorage.setItem('notes', notes);
//   }, [notes]);

//   return (
//     <div className={styles.noteSection}>
//       <h2 className={styles.heading}>All notes</h2>
//       <textarea
//         value={notes}
//         onChange={(e) => setNotes(e.target.value)}
//         onKeyDown={handleKeyDown}
//         className={`${styles.noteSection} ${styles.styledText}`}
//       />
//     </div>
//   );
// };

// export default Notes;


import React, { useEffect, useState } from 'react';
import styles from './Notes.module.css';

const defaultText = "This is how I am going to learn MERN Stack in the next 3 months.";

const Notes = () => {
  // State to manage the content of the notes
  const [notes, setNotes] = useState('');

  // Load notes from local storage when the component mounts
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');

    // Set the default text if there are no saved notes
    if (!savedNotes) {
      setNotes(defaultText);
    } else {
      setNotes(savedNotes);
    }
  }, []);

  // Event handler to handle input change
  const handleChange = (e) => {
    const updatedNotes = e.target.value;
    setNotes(updatedNotes);

    // Save updated notes to local storage
    localStorage.setItem('notes', updatedNotes);
  };

  return (
    <div className={styles.noteSection}>
      <h2 className={styles.heading}>All notes</h2>
      <textarea
        value={notes}
        onChange={handleChange}
        className={`${styles.noteSection} ${styles.styledText}`}
      />
    </div>
  );
};

export default Notes;
