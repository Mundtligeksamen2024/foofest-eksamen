import { useState, useEffect } from 'react'
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
          return newSeconds >= 0 ? newSeconds : 0; 
        });
      }, 1000);
      return () => clearInterval(interval);
    } else {
      handleTimeout();
    }
  }, [initialSeconds]);



  const handleTimeout = () => {
    setShowModal(true); 
    setSeconds(0); 
    setCountdownActive(false); 
    sessionStorage.removeItem('countdownSeconds'); 
  };



  const handleCloseModal = () => {
    setShowModal(false);
  };



  const handleLinkClick = () => {
    sessionStorage.removeItem('countdownSeconds'); 
    setSeconds(initialSeconds); 
    setShowModal(false);
    setCountdownActive(true); 
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
        <p>Time&apos;s up!</p>
      )}


      <Modal
        title="Time's Up!"
        visible={showModal}
        footer={[
          <Link key="back-to-booking" href="/booking" onClick={handleLinkClick} passHref>
            Go back to Booking
          </Link>
        ]}
        onCancel={handleCloseModal}
      >
        <p>The time limit has been reached</p>
      </Modal>
    </div>
  );
};

export default CountdownTimer;






// import { useState, useEffect } from 'react'
// import { Modal } from 'antd';
// import Link from 'next/link';



// // second, showModal & countdownActive er tilstandsvariabler styret af useState
// const CountdownTimer = ({ initialSeconds }) => { // taget initialSeconds som en prop
//   const [seconds, setSeconds] = useState(initialSeconds);
//   const [showModal, setShowModal] = useState(false);
//   const [countdownActive, setCountdownActive] = useState(true);

//   // useEffect kører udfra hvornår initialSecons ændres
//   useEffect(() => {

//     // StoredSeconds henter den gemte tid fra sessionStorage eller bruger initialSeconds, hvis der ikke findes nogen gemte sekunder 
//     // parseInt konveterer værdien fra en streng 'countdownSeconds' til et heltal
//     // SessionStorage, gemmer den aktuelle tid, hvis man opdaterer siden så vil nedtællingen forsætte
//     const storedSeconds = parseInt(sessionStorage.getItem('countdownSeconds')) || initialSeconds;

//     // opdaterer tilstandvariablen seconds 
//     setSeconds(storedSeconds);

//     // starter nedtællingen 
//     // hvis storedSeconds er større end 0 - så startes et interval ved hjælp af setInterval
//     if (storedSeconds > 0) {
//       const interval = setInterval(() => {

//         // setSeconds opdaterer den aktuelle seconds tilstand
//         // prevSeconds viser den forrige tilstandsværdi
//         setSeconds((prevSeconds) => {

//           // Trække 1 fra de tidligerer sekunder.
//           const newSeconds = prevSeconds - 1;

//           // Gemmer de nye sekunder i sessionStorage 
//           sessionStorage.setItem('countdownSeconds', newSeconds);

//           // hvis newSeconds er mindre end eller lig med 0 stoppes intervallet med clearInterval(interval)
//           if (newSeconds <= 0) {
//             clearInterval(interval);

//             handleTimeout();
//           }

//           // Returnerer de nye sekunder hvis de er 0 eller positive, for at sikre at sekunder ikke går under 0
//           return newSeconds >= 0 ? newSeconds : 0; 
//         });

//         // intervallet kører hvert sekund "1000 millisekunder" 
//       }, 1000);

//       // Forhindre negative tal
//       return () => clearInterval(interval);

//       // hvis storage er 0 eller mindre kaldes handleTimeout() 
//     } else {
//       handleTimeout();
//     }
//   }, [initialSeconds]);



//   const handleTimeout = () => {

//     // viser pop op  
//     setShowModal(true); 

//     // Sættes til 0 når timeout opstår
//     setSeconds(0); 

//     // Nedtællingen er slut
//     setCountdownActive(false); 

//     // Fjerner countdownSeconds fra sessionStorage for at rydde den gemte nedtællingsværdi
//     sessionStorage.removeItem('countdownSeconds'); 
//   };




//   // Skjuler pop op 
//   const handleCloseModal = () => {
//     setShowModal(false);
//   };



//   const handleLinkClick = () => {

//     // Fjerner countdownSeconds fra sessionStorage 
//     sessionStorage.removeItem('countdownSeconds'); 

//     // Starter nedtællingen fra begyndelsen
//     setSeconds(initialSeconds); 

//     // Skjuler pop op 
//     setShowModal(false);

//     // Genaktiverer nedtællingen 
//     setCountdownActive(true); 
//   };



//   const formatTime = (seconds) => {

//     // Beregner hele minutter til sekunder
//     const minutes = Math.floor(seconds / 60);

//     // Beregner resterende sekunder 
//     const remainingSeconds = seconds % 60;

//     // formaterer tiden som mm:ss og tilføjer et 0 til sekunder hvis de er mindre end 10 for at sikre to cifre
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   return (
//     <div className="countdown-timer">

//       {/* hvis countdownActiver er true vises teksten Time reamining: og så tiden */}
//       {countdownActive ? (
//         <p>Time remaining: {formatTime(seconds)}</p>
//       ) : (

//         // hvis countdownActive er false vises teksten Time's up
//         <p>Time&apos;s up!</p>
//       )}

//       {/* pop op modalvinduet */}
//       <Modal
//         title="Time's Up!"

//         // styrer synligheden af tilstanden for showModal
//         visible={showModal}

//         // indsætter fotteren med et link der fører brugeren tilbage til bookingsiden og nulstiller nedtællingen 
//         footer={[
//           <Link key="back-to-booking" href="/booking" onClick={handleLinkClick} passHref>
//             Go back to Booking
//           </Link>
//         ]}

//         // lukker modalvinduet på oncancel 
//         onCancel={handleCloseModal}
//       >
//         <p>The time limit has been reached</p>
//       </Modal>
//     </div>
//   );
// };

// export default CountdownTimer;




