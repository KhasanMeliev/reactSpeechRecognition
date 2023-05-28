import React from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser speech recognitionni qabul qilolmaydi!</span>;
  }

  return (
    <div className="container">
      <div className="microphone">MICROPHONE: {listening ? "on" : "off"}</div>
      <div className="buttons">
        <button onClick={SpeechRecognition.startListening}>start</button>
        <button onClick={SpeechRecognition.stopListening}>stop</button>
        <button onClick={resetTranscript}>reset</button>
      </div>
      <p id="output">{transcript}</p>
    </div>
  );
};

export default App;
