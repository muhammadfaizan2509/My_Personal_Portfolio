import React from 'react';
import { CheckCircle, Info, AlertTriangle } from 'lucide-react';

export default function Toast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className="toast">
          {toast.type === 'info' ? (
            <Info size={18} style={{ color: 'var(--accent-cyan)' }} />
          ) : toast.type === 'error' ? (
            <AlertTriangle size={18} style={{ color: 'var(--accent-amber)' }} />
          ) : (
            <CheckCircle size={18} style={{ color: 'var(--accent-emerald)' }} />
          )}
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
