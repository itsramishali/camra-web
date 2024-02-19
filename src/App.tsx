import { useState } from 'react'
import reactLogo from './assets/logo.png'
import viteLogo from '/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a  target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a  target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>CamRa</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Camra is a video meeting app for education purposes.
        </p>
      </div>
      <p className="read-the-docs">
        Login
      </p>
    </>
  )
}

export default App

// /
// import {useState} from 'react';
// import AgoraUIKit from 'agora-react-uikit';


// const App = () => {
//   const [videoCall, setVideoCall] = useState(true);
//   const rtcProps = {
//     appId: '5dff16dd1f7b424ab1a92a130e9d3176',
//     channel: 'mychannel', // your agora channel
//     token: '007eJxTYNhadSx3/9K1avMiZBdziEyouMnC7ph67HwBR2ieUMOl0kIFBtOUtDRDs5QUwzTzJBMjk8Qkw0RLo0RDY4NUyxRjQ3Mz6bDLqQ2BjAyebVwsjAwQCOJzMuRWJmck5uWl5jAwAABulR80' // use null or skip if using app in testing mode
//   };
//   const callbacks = {
//     EndCall: () => setVideoCall(false),
//   };
//   return videoCall ? (
//     <div style={{display: 'flex', width: '100vw', height: '100vh'}}>
//       <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
//     </div>
//   ) : (
//     <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
//   );
// };

// export default App;