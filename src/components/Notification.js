import { Alert } from 'react-bootstrap';

const Notification = ({ message }) => {
  return (
    <Alert variant="danger">
      {message}
    </Alert>
  );
};

export default Notification;