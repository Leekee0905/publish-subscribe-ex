import "./App.css";
import Modal from "./components/Modal";
import { ModalPublisher } from "./components/ModalPublisher";

function App() {
  return (
    <div className="App">
      <Modal showModal={true} />
      <h1
        onClick={() => {
          ModalPublisher.message("요건 앱에서 온 컨텐츠"); // publisher에서 발행한 메세지 사용
        }}
      >
        구독 발행 테스트!
      </h1>
    </div>
  );
}

export default App;
