// import React, { useState } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Button,
//   Snackbar,
//   CircularProgress,
// } from '@mui/material';
// import MuiAlert from '@mui/material/Alert';
// import axios from 'axios';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// const BookingModal = ({ open, handleClose }) => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [date, setDate] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success');

//   // Get today's date to disable past dates
//   const today = new Date().toISOString().split('T')[0];

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate inputs
//     if (!fullName || !email || !date) {
//       setSnackbarSeverity('error');
//       setSnackbarMessage('All fields are mandatory!');
//       setSnackbarOpen(true);
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post('http://localhost:5000/api/bookings', {
//         fullName,
//         email,
//         date,
//         message,
//       });
//       setSnackbarSeverity('success');
//       setSnackbarMessage(response.data.message || 'Booking created successfully!');
//       handleClose(); // Close modal
//     } catch (error) {
//       console.error(error);
//       setSnackbarSeverity('error');
//       setSnackbarMessage('Error creating booking, please try again later!');
//     } finally {
//       setLoading(false);
//       setSnackbarOpen(true);
//     }
//   };

//   const handleSnackbarClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setSnackbarOpen(false);
//   };

//   return (
//     <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
//       <DialogTitle>Book an Appointment</DialogTitle>
//       <DialogContent>
//         <form noValidate autoComplete="off" onSubmit={handleSubmit}>
//           <TextField
//             label="Full Name"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             required
//           />
//           <TextField
//             label="Email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
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
//             inputProps={{
//               min: today, // Disable past dates
//             }}
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//           />
//           <TextField
//             label="Message"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             multiline
//             rows={4}
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//         </form>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose} color="secondary">
//           Cancel
//         </Button>
//         <Button onClick={handleSubmit} color="primary" disabled={loading}>
//           {loading ? <CircularProgress size={24} /> : 'Book Now'}
//         </Button>
//       </DialogActions>

//       <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
//         <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </Dialog>
//   );
// };

// export default BookingModal;

// import React, { useState } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Button,
//   Snackbar,
//   CircularProgress,
// } from '@mui/material';
// import MuiAlert from '@mui/material/Alert';
// import axios from 'axios';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// const BookingModal = ({ open, handleClose }) => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [date, setDate] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success');

//   // Get today's date to disable past dates
//   const today = new Date().toISOString().split('T')[0];

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate inputs
//     if (!fullName || !email || !date) {
//       setSnackbarSeverity('error');
//       setSnackbarMessage('All fields are mandatory!');
//       setSnackbarOpen(true);
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post('http://localhost:5000/api/bookings', {
//         fullName,
//         email,
//         date,
//         message,
//       });
//       setSnackbarSeverity('success');
//       setSnackbarMessage(response.data.message || 'Booking created successfully!');
//       handleClose(); // Close modal

//       // Wait 3 seconds, then reset form fields
//       setTimeout(() => {
//         resetForm();
//         setSnackbarOpen(false); // Close Snackbar after 3 seconds
//       }, 3000);
      
//     } catch (error) {
//       console.error(error);
//       setSnackbarSeverity('error');
//       setSnackbarMessage('Error creating booking, please try again later!');
//       setSnackbarOpen(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetForm = () => {
//     setFullName('');
//     setEmail('');
//     setDate('');
//     setMessage('');
//   };

//   const handleSnackbarClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setSnackbarOpen(false);
//   };

//   return (
//     <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
//       <DialogTitle>Book an Appointment</DialogTitle>
//       <DialogContent>
//         <form noValidate autoComplete="off" onSubmit={handleSubmit}>
//           <TextField
//             label="Full Name"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             required
//           />
//           <TextField
//             label="Email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
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
//             inputProps={{
//               min: today, // Disable past dates
//             }}
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//           />
//           <TextField
//             label="Message"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             multiline
//             rows={4}
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//         </form>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose} color="secondary">
//           Cancel
//         </Button>
//         <Button onClick={handleSubmit} color="primary" disabled={loading}>
//           {loading ? <CircularProgress size={24} /> : 'Book Now'}
//         </Button>
//       </DialogActions>

//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} // Adjust position if needed
//       >
//         <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </Dialog>
//   );
// };

// export default BookingModal;

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

const BookingModal = ({ open, handleClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Get today's date to disable past dates
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!fullName || !email || !date) {
      toast.error('All fields are mandatory!');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('https://skin-clinic-api-nodejs.vercel.app/api/bookings', {
        fullName,
        email,
        date,
        message,
      });
      toast.success(response.data.message || 'Booking created successfully!');

      // Wait 3 seconds, then reset form fields and close modal
      setTimeout(() => {
        resetForm();
        handleClose(); // Close modal
      }, 3000);
      
    } catch (error) {
      console.error(error);
      toast.error('Error creating booking, please try again later!');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setDate('');
    setMessage('');
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Book an Appointment</DialogTitle>
      <DialogContent>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Book Now'}
        </Button>
      </DialogActions>

      <ToastContainer
        position="bottom-left" // You can adjust the position
        autoClose={3000} // Duration for toast
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored" // You can choose "light", "dark", or "colored"
      />
    </Dialog>
  );
};

export default BookingModal;
