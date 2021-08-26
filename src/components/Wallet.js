import React, { useState } from 'react';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import { BiWalletAlt } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/index';
import Notification from './Notification';

const Wallet = () => {
  const [ amount, setAmount ] = useState(0);
  const [error, setError] = useState(null);
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();
  const { deposit, withdraw } = bindActionCreators(actionCreators, dispatch);

  const depositHandler = () => {
    setError(null);
    deposit(amount);
  }

  const withdrawHandler = () => {
    setError(null);
    if (amount > account) {
      setError('Your balance is not sufficient for this transaction.');
      return;
    }

    withdraw(amount);
  }

  const changeHandler = (e) => {
    const { value } = e.target;
    const amount = parseInt(value);
    setAmount(!isNaN(amount) ? amount : 0);
  }

  return (
    <>
      <Card className="justify-content-center">
        <Card.Body>
          <Card className="text-center">
            <Card.Header>Total Balance <BiWalletAlt />: {account}</Card.Header>
            <Card.Body>
              <Card.Title>Enter amount to deposit or withdraw money</Card.Title>
              {error && <Notification message={error} />}
              <Card.Text className="text-center center-input">
                <InputGroup>
                  <FormControl
                    aria-label="Dollar amount (with dot and two decimal places)"
                    onChange={changeHandler}
                    value={amount}
                  />
                  <InputGroup.Text>$</InputGroup.Text>
                  <InputGroup.Text>0.00</InputGroup.Text>
                </InputGroup>
              </Card.Text>
              <Button
                variant="primary"
                className="btn-primary-spacing"
                onClick={depositHandler}
              >
                deposit
              </Button>
              <Button
                variant="primary"
                onClick={withdrawHandler}
              >
                withdraw
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              &copy;mywallet.dev 2021
            </Card.Footer>
          </Card>
        </Card.Body>
      </Card>
    </>
  );
};

export default Wallet;
