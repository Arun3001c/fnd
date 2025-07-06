const VerdictTag = ({ verdict }) => {
  const color = {
    Verified: 'green',
    Fake: 'red',
    Alleged: 'orange'
  }[verdict] || 'gray';

  return (
    <span style={{
      padding: '4px 8px',
      borderRadius: '5px',
      background: color,
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '0.8em'
    }}>{verdict}</span>
  );
};

export default VerdictTag;
