const MediaRow = ({ item, setSelectedItem }) => {
  return (
    <tr onClick={() => setSelectedItem(item)}>
      <td>{item.title}</td>
      <td>{item.filename}</td>
      <td>
        <img 
          src={`https://media2.edu.metropolia.fi/media-api/uploads/${item.filename}`}
          alt={item.title}
          style={{ width: '100px', height: 'auto', cursor: 'pointer' }}
        />
      </td>
    </tr>
  );
};

export default MediaRow;
