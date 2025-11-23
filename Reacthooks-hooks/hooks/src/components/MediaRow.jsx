const MediaRow = ({ item }) => {
  return (
    <tr>
      <td>
        <img 
          src={item.thumbnail} 
          alt={item.title} 
          style={{ width: '100px', height: 'auto' }}
        />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.username || 'Unknown'}</td> {/* NEW COLUMN */}
    </tr>
  );
};

export default MediaRow;
