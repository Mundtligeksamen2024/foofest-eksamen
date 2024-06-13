import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import Link from 'next/link';

const CountdownTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [showModal, setShowModal] = useState(false);
  const [countdownActive, setCountdownActive] = useState(true);

  useEffect(() => {
    const storedSeconds = parseInt(sessionStorage.getItem('countdownSeconds')) || initialSeconds;
    setSeconds(storedSeconds);

    if (storedSeconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds - 1;
          sessionStorage.setItem('countdownSeconds', newSeconds);
          if (newSeconds <= 0) {
            clearInterval(interval);
            handleTimeout();
          }
          return newSeconds >= 0 ? newSeconds : 0; // Ensure seconds never go below 0
        });
      }, 1000);
      return () => clearInterval(interval);
    } else {
      handleTimeout();
    }
  }, [initialSeconds]);

  const handleTimeout = () => {
    setShowModal(true);
    setSeconds(0); // Ensure seconds state is set to 0 when timeout occurs
    setCountdownActive(false); // Indicate that countdown is no longer active
    sessionStorage.removeItem('countdownSeconds'); // Clear sessionStorage
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLinkClick = () => {
    sessionStorage.removeItem('countdownSeconds'); // Clear sessionStorage
    setSeconds(initialSeconds); // Reset seconds state to initial value
    setShowModal(false);
    setCountdownActive(true); // Reset countdown active status
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="countdown-timer">
      {countdownActive ? (
        <p>Time remaining: {formatTime(seconds)}</p>
      ) : (
        <p>Time's up!</p>
      )}

      <Modal
        title="Time's Up!"
        visible={showModal}
        footer={[
          <Link key="back-to-booking" href="/booking" onClick={handleLinkClick} passHref>
            Go back to Booking
          </Link>,
        ]}
        onCancel={handleCloseModal}
      >
        <p>The time limit has been reached</p>
      </Modal>
    </div>
  );
};

export default CountdownTimer;
