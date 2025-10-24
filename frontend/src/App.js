import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newItem, setNewItem] = useState({ name: '', description: '' });
  const [health, setHealth] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchHealth();
    fetchItems();
  }, []);

  const fetchHealth = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/health`);
      setHealth(response.data);
    } catch (err) {
      console.error('Health check failed:', err);
    }
  };

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/items`);
      setItems(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch items');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newItem.name.trim()) return;

    try {
      await axios.post(`${API_URL}/api/items`, newItem);
      setNewItem({ name: '', description: '' });
      fetchItems();
    } catch (err) {
      setError('Failed to create item');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/items/${id}`);
      fetchItems();
    } catch (err) {
      setError('Failed to delete item');
      console.error(err);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>Full Stack Application</h1>
          {health && (
            <div className="health-badge">
              <span className="status-dot"></span>
              Server Status: Healthy
            </div>
          )}
        </header>

        <div className="content">
          <div className="form-section">
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Item name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className="input"
              />
              <input
                type="text"
                placeholder="Description"
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                className="input"
              />
              <button type="submit" className="btn btn-primary">Add Item</button>
            </form>
          </div>

          <div className="items-section">
            <h2>Items List</h2>
            {loading && <p className="message">Loading items...</p>}
            {error && <p className="message error">{error}</p>}

            <div className="items-grid">
              {items.map((item) => (
                <div key={item.id} className="item-card">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            {!loading && items.length === 0 && (
              <p className="message">No items yet. Add one above!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
