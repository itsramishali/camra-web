import {useState} from 'react';
import AgoraUIKit from 'agora-react-uikit';


const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: '5dff16dd1f7b424ab1a92a130e9d3176',
    channel: 'mychannel', // your agora channel
    token: '007eJxTYNhadSx3/9K1avMiZBdziEyouMnC7ph67HwBR2ieUMOl0kIFBtOUtDRDs5QUwzTzJBMjk8Qkw0RLo0RDY4NUyxRjQ3Mz6bDLqQ2BjAyebVwsjAwQCOJzMuRWJmck5uWl5jAwAABulR80' // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{ margin: "0", padding:"0", display: 'flex', width: '90vw', height: '98vh'}}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default App;