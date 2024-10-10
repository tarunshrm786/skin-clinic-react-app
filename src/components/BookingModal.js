// import React, { useState } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Button,
//   CircularProgress,
// } from '@mui/material';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

// const BookingModal = ({ open, handleClose }) => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [date, setDate] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Get today's date to disable past dates
//   const today = new Date().toISOString().split('T')[0];

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate inputs
//     if (!fullName || !email || !date) {
//       toast.error('All fields are mandatory!');
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post('https://skin-clinic-api-nodejs.vercel.app/api/bookings', {
//         fullName,
//         email,
//         date,
//         message,
//       });
//       toast.success(response.data.message || 'Booking created successfully!');

//       // Wait 3 seconds, then reset form fields and close modal
//       setTimeout(() => {
//         resetForm();
//         handleClose(); // Close modal
//       }, 3000);
      
//     } catch (error) {
//       console.error(error);
//       toast.error('Error creating booking, please try again later!');
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

//       <ToastContainer
//         position="bottom-left" // You can adjust the position
//         autoClose={3000} // Duration for toast
//         hideProgressBar={false}
//         closeOnClick
//         pauseOnHover
//         draggable
//         theme="colored" // You can choose "light", "dark", or "colored"
//       />
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
//   CircularProgress,
//   MenuItem,
// } from '@mui/material';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

// const BookingModal = ({ open, handleClose }) => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState(''); // State for selected time
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Get today's date to disable past dates
//   const today = new Date().toISOString().split('T')[0];

//   // Time options for the dropdown
//   const timeOptions = [
//     '10:00 AM',
//     '11:00 AM',
//     '12:00 PM',
//     '01:00 PM',
//     '02:00 PM',
//     '03:00 PM',
//     '04:00 PM',
//     '05:00 PM',
//     '06:00 PM',
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate inputs
//     if (!fullName || !email || !date || !time) {
//       toast.error('All fields are mandatory!');
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post('https://skin-clinic-api-nodejs.vercel.app/api/bookings', {
//         fullName,
//         email,
//         date,
//         time, // Send the selected time
//         message,
//       });
//       toast.success(response.data.message || 'Booking created successfully!');

//       // Wait 3 seconds, then reset form fields and close modal
//       setTimeout(() => {
//         resetForm();
//         handleClose(); // Close modal
//       }, 3000);
      
//     } catch (error) {
//       console.error(error);
//       toast.error('Error creating booking, please try again later!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetForm = () => {
//     setFullName('');
//     setEmail('');
//     setDate('');
//     setTime(''); // Reset time
//     setMessage('');
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
//             onChange={(e) => {
//               setDate(e.target.value);
//               setTime(''); // Reset time when date changes
//             }}
//             required
//           />
//           {date && ( // Show time dropdown only if date is selected
//             <TextField
//               label="Time"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               select
//               value={time}
//               onChange={(e) => setTime(e.target.value)}
//               required
//             >
//               {timeOptions.map((option) => (
//                 <MenuItem key={option} value={option}>
//                   {option}
//                 </MenuItem>
//               ))}
//             </TextField>
//           )}
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

//       <ToastContainer
//         position="bottom-left" // You can adjust the position
//         autoClose={3000} // Duration for toast
//         hideProgressBar={false}
//         closeOnClick
//         pauseOnHover
//         draggable
//         theme="colored" // You can choose "light", "dark", or "colored"
//       />
//     </Dialog>
//   );
// };

// export default BookingModal;

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  CircularProgress,
  MenuItem,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

const BookingModal = ({ open, handleClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState(''); // State for selected time
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([]); // State for available time slots
  const [loadingTimes, setLoadingTimes] = useState(false); // Loading state for time slots

  // Get today's date to disable past dates
  const today = new Date().toISOString().split('T')[0];

  // Fetch available times when the date changes
  useEffect(() => {
    const fetchAvailableTimes = async () => {
      if (date) {
        setLoadingTimes(true);
        try {
          // Fetch available time slots from the API
          const response = await axios.get(`https://skin-clinic-api-nodejs.vercel.app/api/bookings/available-time-slots`, {
            params: { date },
          });
          setAvailableTimes(response.data.availableTimeSlots); // Access availableTimeSlots
        } catch (error) {
          console.error(error);
          toast.error('Error fetching available times, please try again later!');
        } finally {
          setLoadingTimes(false);
        }
      } else {
        setAvailableTimes([]); // Reset available times if no date is selected
      }
    };

    fetchAvailableTimes();
  }, [date]); // Run effect when date changes

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!fullName || !email || !date || !time) {
      toast.error('All fields are mandatory!');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('https://skin-clinic-api-nodejs.vercel.app/api/bookings', {
        fullName,
        email,
        date,
        time, // Send the selected time
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
    setTime(''); // Reset time
    setMessage('');
    setAvailableTimes([]); // Reset available times
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
              disabled: loadingTimes, // Disable if loading times
            }}
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setTime(''); // Reset time when date changes
              // No need to reset available times here, it's handled in useEffect
            }}
            required
          />
          {date && ( // Show time dropdown only if date is selected
            <TextField
              label="Time"
              variant="outlined"
              fullWidth
              margin="normal"
              select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              disabled={loadingTimes || availableTimes.length === 0} // Disable if loading times or no available times
            >
              {loadingTimes ? (
                <MenuItem disabled>
                  <CircularProgress size={24} />
                </MenuItem>
              ) : (
                availableTimes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))
              )}
            </TextField>
          )}
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
