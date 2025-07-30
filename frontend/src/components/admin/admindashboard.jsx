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
  const [totalBookings, setTotalBookings] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
const [totalItems, setTotalItems] = useState(0);

  // Fetch all bookings for table
 useEffect(() => {
  axios.get('http://localhost:5000/api/bookings/total')
    .then((res) => setTotalBookings(res.data.total))
      .catch((err) => console.error('Error fetching total bookings:', err));
}, []);

useEffect(() => {
  axios.get('http://localhost:5000/api/category/total')
    .then((res) => setTotalCategories(res.data.total))  // ✅ Fixed setter
    .catch((err) => console.error('Error fetching total categories:', err));
}, []);

useEffect(() => {
  axios.get('http://localhost:5000/api/menu-items/total')
    .then((res) => setTotalItems(res.data.total))  // ✅ Fixed setter
    .catch((err) => console.error('Error fetching total items:', err));
}, []);




  // Handle booking approve/reject


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


useEffect(() => {
  const fetchStats = async () => {
    try {
      const [bookingsRes, categoriesRes, itemsRes] = await Promise.all([
        axios.get('http://localhost:5000/api/bookings/total'),         // Bookings API
        axios.get('http://localhost:5001/api/category/total'),         // Category API (different port)
        axios.get('http://localhost:5002/api/menu-items/total'),       // Menu Items API (another port)
      ]);

      setTotalBookings(bookingsRes.data.total);
      setTotalCategories(categoriesRes.data.total);
      setTotalItems(itemsRes.data.total);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  fetchStats();
}, []);


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

  return (
    <div style={{ padding: '20px' }}>
      {/* Stats cards */}
   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
  {[
    { label: 'Total Bookings', value: totalBookings },
    { label: 'Total Categories', value: totalCategories },
    { label: 'Total Items', value: totalItems },
  ].map((card, idx) => (
    <div
      key={idx}
      style={{
        flex: '1 1 200px',
        background: '#212529',
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

  
  
    </div>
  );
};

// Styles
const cardStyle = {
  flex: '1 1 200px',
  background: '#212529',
  color: 'white',
  padding: '20px',
  borderRadius: '8px',
};

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
