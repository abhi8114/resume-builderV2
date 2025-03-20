"use client";
import { useState } from "react";

const Dashboard = () => {
  const [insights, setInsights] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchInsights = async () => {
    setLoading(true);
    try {
      const response = await fetch("app/api/job-insights/route.js");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch insights");
      }

      setInsights(data.insights);
    } catch (error) {
      console.error("Error fetching insights:", error);
      setInsights("Failed to fetch insights. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Job Market Insights</h1>
      <button
        onClick={fetchInsights}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Fetching Insights..." : "Get Insights"}
      </button>

      {insights && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="text-lg font-semibold">Insights:</h2>
          <p>{insights}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
