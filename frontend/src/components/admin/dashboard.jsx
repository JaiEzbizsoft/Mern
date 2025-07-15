import React, { useState, useEffect } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const Dashboard = () => {
  const [stats, setStats] = useState({
    bookings: 24,
    categories: 6,
    items: 42,
    earnings: 86540,
  });
  const [bookings, setBookings] = useState([]);

  // Fetch bookings data
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/bookings/bookings') // Ensure the API path is correct
      .then((res) => setBookings(res.data))
      .catch((err) => console.error('Error fetching bookings:', err));
  }, []);

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Revenue (₹)',
        data: [12000, 18000, 15000, 20000, 25000, 40000],
        borderColor: '#889048',
        backgroundColor: 'rgba(136, 144, 72, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const pieData = {
    labels: ['Website', 'WhatsApp', 'Walk-in'],
    datasets: [
      {
        label: 'Booking Sources',
        data: [55, 30, 15],
        backgroundColor: ['#889048', '#ffb347', '#845ec2'],
        borderWidth: 1,
      },
    ],
  };

  // Approve or Reject booking
  const handleBookingStatus = (id, status) => {
    axios
      .put(`http://localhost:5000/api/bookings/booking/${id}/status`, { status })
      .then((response) => {
        console.log('Booking status updated:', response.data);
        // Re-fetch bookings after status change
        setBookings(bookings.map((booking) => 
          booking._id === id ? { ...booking, status } : booking
        ));
      })
      .catch((err) => console.error('Error updating booking status:', err));
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Stats cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        {[
          { label: 'Total Bookings', value: stats.bookings },
          { label: 'Total Categories', value: stats.categories },
          { label: 'Total Items', value: stats.items },
          { label: 'Total Earnings', value: `₹${stats.earnings.toLocaleString()}` },
        ].map((card, idx) => (
          <div
            key={idx}
            style={{
              flex: '1 1 200px',
              background: idx === 3 ? '#889048' : '#212529',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
            }}
          >
            <h6>{card.label}</h6>
            <h4>{card.value}</h4>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: '2 1 60%' }}>
          <div style={{ background: '#fff', borderRadius: '8px', padding: '20px', height: '350px' }}>
            <h6 style={{ marginBottom: '20px' }}>Revenue Trend</h6>
            <div style={{ width: '90%', height: '280px' }}>
              <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
        <div style={{ flex: '1 1 35%' }}>
          <div style={{ background: '#fff', borderRadius: '8px', padding: '20px' }}>
            <h6 style={{ marginBottom: '20px' }}>Booking Source</h6>
            <Pie data={pieData} />
          </div>
        </div>
      </div>

      {/* Booking Table */}
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
                          color: item.status === 'approved' ? 'green' : item.status === 'rejected' ? 'red' : 'orange',
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
                            style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleBookingStatus(item._id, 'rejected')}
                            style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}
                          >
                            Reject
                          </button>
                        </>
                      )}
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

// Styles for table cells
const th = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #dee2e6',
};

const td = {
  padding: '12px',
  borderBottom: '1px solid #dee2e6',
};

export default Dashboard;
