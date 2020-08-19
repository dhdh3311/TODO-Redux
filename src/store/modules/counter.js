//cf. Redux 메뉴얼에서는 action과 Reducer을 각각 다른 파일에 작성하여 관리하는 것을 권장
// 액션을 추가할 때마다 두개의 파일을 건들여야함 -> 불편
// Ducks 구조 - 하나의 파일에 작성하는 방법

// 카운터 관련 상태 로직

// 액션 타입 정의
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// 액션 생성 함수 
// 이 함수들은 나중에 다른 파일에서 불러와야하므로 내보내주기 
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// 모듈의 초기 상태 정의
const initialState = {
    number: 0
};

// Reducer 만들어서 내보내기 
export default function reducer(state = initialState, action) {
    // 리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하며 반환
    // state = initialState 이렇게 하면 initialState 가 기본 값으로 사용됨
    switch(action.type){
        case INCREMENT:
            return { number: state.number + 1 };
        case DECREMENT:
            return { number: state.number - 1 };
        default:
            return state;
    }
}