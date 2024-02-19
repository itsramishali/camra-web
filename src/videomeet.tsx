import {useState} from 'react';
import AgoraUIKit from 'agora-react-uikit';


const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: '5dff16dd1f7b424ab1a92a130e9d3176',
    channel: 'mychannel', // your agora channel
    token: '007eJxTYODaIFHjFHqs/nO8X+6fRQUaD2++vxq3l7Ex6YnAp9yTyhoKDKYpaWmGZikphmnmSSZGJolJhomWRomGxgaplinGhuZmNQWXUxsCGRlk9TQYGRkgEMTnZMitTM5IzMtLzWFgAAAlQCGA' // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{  display: 'flex', width: '90vw', height: '98vh'}}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default App;