const SingleView = ({ item, setSelectedItem }) => {
  if (!item) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      cursor: 'pointer'
    }}
    onClick={() => setSelectedItem(null)}>
      <div style={{ maxWidth: '90%', maxHeight: '90%', textAlign: 'center' }}>
        <h2 style={{ color: 'white' }}>{item.title}</h2>
        <img 
          src={`https://media2.edu.metropolia.fi/media-api/uploads/${item.filename}`}
          alt={item.title}
          style={{ maxWidth: '100%', maxHeight: '80vh' }}
        />
        <p style={{ color: 'white' }}>{item.description}</p>
      </div>
    </div>
  );
};

export default SingleView;
