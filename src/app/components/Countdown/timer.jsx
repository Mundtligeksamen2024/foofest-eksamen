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

//     // opdaterer tilstandvariablen seconds med de hentede sekunder 
//     setSeconds(storedSeconds);

//     // starter nedtællingen 
//     // hvis storedSeconds er større end 0 - så startes et interval ved hjælp af setInterval
//     if (storedSeconds > 0) {
//       const interval = setInterval(() => {

//         // setSeconds bruger en funktion til at opdaterer en aktuelle seconds tilstand
//         // prevSeconds repræsenterer den forrige tilstandsværdi
//         setSeconds((prevSeconds) => {

//           // newSeconds = prevSeconds - 1 beregner de nye sekunder ved at trække 1 fra de tidligerer sekunder.
//           const newSeconds = prevSeconds - 1;

//           // sessionStorage.setItem('countdownSeconds', newSeconds) gemmer de nye sekunder i sessionStorage 
//           sessionStorage.setItem('countdownSeconds', newSeconds);

//           // håndtering af timeout
//           // hvis newSeconds er mindre end eller lig med 0 stoppes intervallet med clearInterval(interval)
//           if (newSeconds <= 0) {
//             clearInterval(interval);

//             // dette kaldes på en timeout-tilstand 
//             handleTimeout();
//           }

//           // Returnerer de nye sekunder hvis de er 0 eller positive, for at sikre at sekunder ikke går under 0
//           return newSeconds >= 0 ? newSeconds : 0; 
//         });

//         // intervallet kører hvert sekund "1000 millisekunder" 
//       }, 1000);

//       // Oprydningsfunktion, der sikre at intervallet stoppes korrekt for at forhindre negative tal
//       return () => clearInterval(interval);

//       // hvis storage er 0 eller mindre kaldes handleTimeout() for at håndterer timeout-tilstanden
//     } else {
//       handleTimeout();
//     }
//   }, [initialSeconds]);





//   // handleTimeout funktion
//   const handleTimeout = () => {

//     // viser showModal ved at sætte den til true
//     setShowModal(true); 

//     // sikre at sekunder-tilstanden sættes til 0 når timeout opstår
//     setSeconds(0); 

//     // indikerer at nedtællingen ikke længerer er aktiv / slut
//     setCountdownActive(false); 

//     // Fjerner countdownSeconds fra sessionStorage for at rydde den gemte nedtællingsværdi
//     sessionStorage.removeItem('countdownSeconds'); 
//   };




//   // Skjuler modalvinduet ved at opdatere showModal tilstanden til false
//   const handleCloseModal = () => {
//     setShowModal(false);
//   };




//   // handleLinkClick funktion
//   const handleLinkClick = () => {

//     // Fjerner countdownSeconds fra sessionStorage for at rydde den gemte nedtællingsværdi
//     sessionStorage.removeItem('countdownSeconds'); 

//     // Nulstiller seconds til initialSeconds for at starte nedtællingen fra begyndelsen
//     setSeconds(initialSeconds); 

//     // Skjuler modalvinduet ved at opdatere showModal tilstanden til false
//     setShowModal(false);

//     // Genaktiverer nedtællingen ved at sætte countdownActive til true
//     setCountdownActive(true); 
//   };





//   // formatTime funktion
//   const formatTime = (seconds) => {

//     // minutes beregner hele minutter til sekunder
//     const minutes = Math.floor(seconds / 60);

//     // Beregner resterende sekunder ved tage % af 60
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




