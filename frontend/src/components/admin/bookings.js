import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const th = {
  padding: '10px',
  textAlign: 'left',
  borderBottom: '1px solid #dee2e6',
};

const td = {
  padding: '10px',
  borderBottom: '1px solid #dee2e6',
};

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate(); // 🔁 for routing

  const handleBookingStatus = (id, status) => {
    axios
      .put(`http://localhost:5000/api/bookings/booking/${id}/status`, { status })
      .then((res) => {
        setBookings((prev) =>
          prev.map((item) => (item._id === id ? { ...item, status } : item))
        );
      })
      .catch((err) => console.error('Error updating booking status:', err));
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/bookings/bookings')
      .then((res) => setBookings(res.data))
      .catch((err) => console.error('Error fetching bookings:', err));
  }, []);

  return (
    <div>
      <h1>Bookings</h1>
      <div style={{ background: '#fff', borderRadius: '8px', padding: '20px' }}>
        <h6 style={{ marginBottom: '20px' }}>Recent Bookings</h6>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#212529' }}>
            <thead>
              <tr style={{ backgroundColor: '#212529', color: '#fff' }}>
                <th style={th}>#</th>
                <th style={th}>Name</th>
                <th style={th}>Guests</th>
                <th style={th}>Date</th>
                <th style={th}>Time</th>
                <th style={th}>Special Requests</th>
                <th style={th}>Status</th>
                <th style={th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.map((item, idx) => (
                  <tr key={item._id} style={{ backgroundColor: '#f8f9fa' }}>
                    <td style={td}>{idx + 1}</td>
                    <td style={td}>{item.name}</td>
                    <td style={td}>{item.people}</td>
                    <td style={td}>{item.date}</td>
                    <td style={td}>{item.time}</td>
                    <td style={td}>{item.message}</td>
                    <td style={td}>
                      <span
                        style={{
                          color:
                            item.status === 'approved'
                              ? 'green'
                              : item.status === 'rejected'
                              ? 'red'
                              : 'orange',
                        }}
                      >
                        {item.status || 'pending'}
                      </span>
                    </td>
                    <td style={td}>
                      {item.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleBookingStatus(item._id, 'approved')}
                            style={{
                              backgroundColor: 'green',
                              color: 'white',
                              padding: '5px 10px',
                              border: 'none',
                              borderRadius: '5px',
                              cursor: 'pointer',
                              marginRight: '5px',
                            }}
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleBookingStatus(item._id, 'rejected')}
                            style={{
                              backgroundColor: 'red',
                              color: 'white',
                              padding: '5px 10px',
                              border: 'none',
                              borderRadius: '5px',
                              cursor: 'pointer',
                              marginRight: '5px',
                            }}
                          >
                            Reject
                          </button>
                        </>
                      )}
                      {/* ✨ Edit button using useNavigate */}
                      <button
                        onClick={() => navigate(`/admin/bookings/${item._id}/edit`)}
                        style={{
                          backgroundColor: '#007bff',
                          color: 'white',
                          padding: '5px 10px',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" style={td}>
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Bookings;
