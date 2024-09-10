import { useEffect, useState } from "react";
import { event } from "./event";

const Modal = () => {
  const [content, setContent] = useState("no content");
  const [showModal, setShowModal] = useState(false);

  const setMessage = (message) => {
    setContent(message);
    setShowModal(true);
  };
  const clearMessage = () => {
    setContent("");
    setShowModal(false);
  };

  useEffect(() => {
    /** 첫 렌더링 시에 showModal, clearAllMessage 이벤트를 등록한다.*/
    event.on("showModal", setMessage).on("clearAllMessage", clearMessage);
  }, []);
  if (showModal) {
    return (
      <div>
        <h2>{content}</h2>
        <button onClick={clearMessage}>모달 닫기</button>
      </div>
    );
  }
  return null;
};

export default Modal;
