import { event } from "./event";
/** 이벤트 발행하는 곳*/
export const ModalPublisher = {
  /** message라는 이름으로 구독이 가능함, content를 인자로 가지는 showModal이라는 이벤트를 등록함 */
  message: (content) => {
    event.emit("showModal", content);
  },
  /** 메세지를 지우는 이벤트를 등록  */
  clearAllMessage: () => {
    event.emit("clearAllMessage");
  },
};
