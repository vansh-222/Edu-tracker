import React, { useState } from 'react';
import axios from 'axios';

const AddSubject = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newSubject = { title };

    try {
      console.log("🚀 Sending new subject to backend:", newSubject);

      const res = await axios.post('http://localhost:5000/api/subjects', newSubject);

      console.log("✅ Subject added successfully:", res.data);
      onAdd(res.data);
      setTitle('');
    } catch (err) {
      console.error('❌ Error adding subject:', err.message);
      alert('Failed to add subject. Is the backend running?');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-subject-form">
      <input
        type="text"
        placeholder="Enter subject title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Add Subject</button>
    </form>
  );
};

export default AddSubject;