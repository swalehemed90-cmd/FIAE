
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // Fix: Add 'const' to declare navigate
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo credentials: admin / admin123
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('fiae_admin_auth', 'true');
      navigate('/admin');
    } else {
      setError('Invalid institutional credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-fiae-bg flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-fiae-surface border border-fiae-primary/10 p-12 rounded-3xl shadow-2xl"
      >
        <div className="text-center mb-10">
          <span className="text-2xl font-bold text-fiae-primary">FIAE ADMIN</span>
          <p className="text-fiae-textTertiary text-sm mt-2 uppercase tracking-widest font-bold">Secure Gateway</p>
        </div>

        {error && <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center rounded-xl">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-[0.2em]">ID</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-fiae-bg border border-white/5 p-4 rounded-xl text-white outline-none focus:border-fiae-primary transition-colors"
              placeholder="Username"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-fiae-primary uppercase tracking-[0.2em]">Key</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-fiae-bg border border-white/5 p-4 rounded-xl text-white outline-none focus:border-fiae-primary transition-colors"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="w-full bg-fiae-primary text-fiae-bg py-4 rounded-xl font-bold uppercase tracking-widest hover:shadow-lg transition-all">
            Access Dashboard
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;