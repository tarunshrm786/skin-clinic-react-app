// // BookingModal.js
// import React from 'react';
// import '../css/BookingModal.css'; // Import the CSS file for styling

// const BookingModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null; // Don't render anything if the modal is not open

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <button className="close-button" onClick={onClose}>X</button>
//         <h2>Book Your Appointment</h2>
//         {/* Your booking form goes here */}
//         <form>
//           <label>
//             Name:
//             <input type="text" required />
//           </label>
//           <label>
//             Email:
//             <input type="email" required />
//           </label>
//           <label>
//             Date:
//             <input type="date" required />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingModal;

// BookingModal.js
import React from 'react';
import '../css/BookingModal.css'; // Import the CSS file for styling

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Book Your Appointment</h2>
        <form>
          <label>
            Name:
            <input type="text" required />
          </label>
          <label>
            Email:
            <input type="email" required />
          </label>
          <label>
            Date:
            <input type="date" required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
