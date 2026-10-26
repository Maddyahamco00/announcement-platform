export function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '2rem',
      backgroundColor: '#f8fafc',
      color: '#0f172a'
    }}>
      <div style={{
        maxWidth: '640px',
        backgroundColor: '#ffffff',
        padding: '2.5rem',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1e293b' }}>
          Announcement Platform
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Create an announcement once, deliver it through SMS and WhatsApp, and let recipients read or listen to it using a link.
        </p>
        <div style={{
          display: 'inline-block',
          padding: '0.5rem 1rem',
          backgroundColor: '#e0f2fe',
          color: '#0369a1',
          borderRadius: '9999px',
          fontWeight: 600,
          fontSize: '0.875rem'
        }}>
          Foundation Placeholder (TASK-001.1)
        </div>
      </div>
    </div>
  );
}

export default App;
