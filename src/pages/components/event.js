// 중간 브로커 역할
export const event = {
  list: new Map(),
  on(eventType, eventAction) {
    // list에 이벤트를 등록하는 메서드
    this.list.has(eventType) || this.list.set(eventType, []); //eventType은 등록할 함수 이름, eventType에 해당하는 이벤트가 존재하는지 확인 후 없다면 빈 배열로 초기화
    if (this.list.get(eventType)) this.list.get(eventType).push(eventAction); //만약 해당 이벤트가 있다면 이벤트 리스트에 eventAction을 추가한다.
    return this;
  },

  emit(eventType, ...args) {
    // on으로 등록한 이벤트를 꺼내서 실행시키는 메서드
    this.list.get(eventType) && // list에 eventType이 있다면 해당 eventType에 있는 eventAction들을
      this.list.get(eventType).forEach((cb) => {
        // 다 꺼내서 실행한다.
        cb(...args); //...args는 cb 이벤트에 들어갈 인자
      });
  },
};
