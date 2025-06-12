import React, { useState, useEffect } from 'react';
import customAPI from "../../api.js";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AnalyticsPage = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState('daily'); // default to 'daily'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch data from the backend
  const fetchAnalyticsData = async (period) => {
    setLoading(true);
    setError(null);

    try {
      const response = await customAPI.get(`/analytics/${period}`);
      setAnalyticsData(response.data);
    } catch (err) {
      setError('Error fetching analytics data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalyticsData(selectedPeriod);
  }, [selectedPeriod]);

  // Prepare chart data
  const prepareChartData = (data) => {
    if (!data) return null;

    return {
      labels: ['Total Income', 'Total Transactions'],  // Labels for X-axis
      datasets: [
        {
          label: 'Analytics Data',
          data: [data.totalIncome, data.totalTransactions], // Data points for the chart
          fill: false,
          borderColor: 'rgb(75, 192, 192)',  // Line color
          tension: 0.1,
        },
      ],
    };
  };

  // Format IDR currency
  const formatIDR = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  // Display income and pelanggan (customers) info
  const income = analyticsData ? analyticsData.totalIncome : 0;
  const pelanggan = analyticsData ? analyticsData.totalTransactions : 0;

  return (
    <div className="w-full h-screen bg-gray-100 rounded-md text-teal-600"> {/* Full screen width and height */}
      <div className="flex flex-col items-center w-full h-full p-4">
        <h1 className="text-2xl font-semibold text-teal-600 mb-6">Analytics Overview</h1>

        {/* Period Selector */}
        <div className="mb-6 flex justify-center gap-4 w-full">
          <button
            onClick={() => setSelectedPeriod('daily')}
            className={`px-4 py-2 rounded-lg ${selectedPeriod === 'daily' ? 'bg-teal-600 text-white' : 'bg-white text-teal-600 border border-teal-600'}`}
          >
            Daily
          </button>
          <button
            onClick={() => setSelectedPeriod('monthly')}
            className={`px-4 py-2 rounded-lg ${selectedPeriod === 'monthly' ? 'bg-teal-600 text-white' : 'bg-white text-teal-600 border border-teal-600'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setSelectedPeriod('yearly')}
            className={`px-4 py-2 rounded-lg ${selectedPeriod === 'yearly' ? 'bg-teal-600 text-white' : 'bg-white text-teal-600 border border-teal-600'}`}
          >
            Yearly
          </button>
        </div>

        {/* Chart Display */}
        <div className="w-full h-full max-w-full px-4"> {/* Full width chart */}
          <h2 className="text-xl font-semibold text-center mb-4">{selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)} Analytics</h2>
          {analyticsData ? (
            <Line data={prepareChartData(analyticsData)} />
          ) : (
            <p className="text-center">No data available for the selected period</p>
          )}
        </div>

        {/* Display Total Income and Pelanggan below the chart */}
        <div className="mt-6 w-full flex justify-around">
          {/* Box for Total Income */}
          <div className="w-1/2 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="text-lg font-medium text-gray-700 mb-2">Total Income</div>
            <div className="text-2xl font-semibold text-teal-600">
              {formatIDR(income)}
            </div>
          </div>

          {/* Box for Total Pelanggan */}
          <div className="w-1/2 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="text-lg font-medium text-gray-700 mb-2">Total Pelanggan</div>
            <div className="text-2xl font-semibold text-teal-600">
              {pelanggan} pelanggan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
