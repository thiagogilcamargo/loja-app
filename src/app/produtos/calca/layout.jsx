export default function CalcaLayout({ children }) {
  const layoutStyle = {
    background: 'linear-gradient(to bottom, #63B3ED, #4299E1, #3182CE)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const containerStyle = {
    background: 'white',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '1000px',
    width: '100%',
    marginBottom:'4rem',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem',
    textAlign: 'center',
  };

  return (
    <div style={layoutStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Minhas Calças</h1>
        {children}
      </div>
    </div>
  );
}
