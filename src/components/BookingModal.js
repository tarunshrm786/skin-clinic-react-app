// // BookingModal.js
// import React from 'react';
// import '../css/BookingModal.css'; // Import the CSS file for styling

// const BookingModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null; // Don't render anything if the modal is not open

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <button className="close-button" onClick={onClose}>×</button>
//         <h2>Book Your Appointment</h2>
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

// // BookingModal.js
// import React from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Button,
// } from '@mui/material';

// const BookingModal = ({ open, handleClose }) => {
//   return (
//     <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
//       <DialogTitle>Book an Appointment</DialogTitle>
//       <DialogContent>
//         <form noValidate autoComplete="off">
//           <TextField
//             label="Full Name"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             type="email"
//           />
//           <TextField
//             label="Date"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             type="date"
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />
//           <TextField
//             label="Message"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             multiline
//             rows={4}
//           />
//         </form>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose} color="secondary">
//           Cancel
//         </Button>
//         <Button onClick={() => alert('Booking confirmed!')} color="primary">
//           Book Now
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default BookingModal;

// BookingModal.js
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';

const BookingModal = ({ open, handleClose }) => {
  // Get today's date to disable past dates
  const today = new Date().toISOString().split('T')[0];

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Book an Appointment</DialogTitle>
      <DialogContent>
        <form noValidate autoComplete="off">
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
          />
          <TextField
            label="Date"
            variant="outlined"
            fullWidth
            margin="normal"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              min: today, // Disable past dates
            }}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={() => alert('Booking confirmed!')} color="primary">
          Book Now
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingModal;
