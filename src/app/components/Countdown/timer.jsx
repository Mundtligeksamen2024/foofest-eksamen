import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import Link from 'next/link';

const CountdownTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedSeconds = parseInt(sessionStorage.getItem('countdownSeconds')) || initialSeconds;
    setSeconds(storedSeconds);

    if (storedSeconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds - 1;
          sessionStorage.setItem('countdownSeconds', newSeconds);
          return newSeconds;
        });
      }, 1000);
      return () => clearInterval(interval);
    } else {
      handleTimeout();
    }
  }, []);

  const handleTimeout = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLinkClick = () => {
    // Reset sessionStorage and timer
    sessionStorage.removeItem('countdownSeconds');
    setSeconds(initialSeconds);
    setShowModal(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="countdown-timer">
      <p>Time remaining: {formatTime(seconds)}</p>

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
