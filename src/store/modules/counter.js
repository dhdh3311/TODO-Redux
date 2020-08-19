import { createAction, handleAction } from 'redux-actions' 

//cf. 
//Redux 메뉴얼에서는 action과 Reducer을 각각 다른 파일에 작성하여 관리하는 것을 권장
// 액션을 추가할 때마다 두개의 파일을 건들여야함 -> 불편
// Ducks 구조 - 하나의 파일에 작성하는 방법

// 카운터 관련 상태 로직

// 액션 타입 정의
// 액션 이름 만들 때, const 사용해 레퍼런스에 문자열 담음
// 앞에 도메인을 추가하는 방식으로 서로다른 모듈에서 동일한 액션 이름 가질 수 있음
// ex. 
// "another/INCREMENT"
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// 액션 생성 함수 
// 이 함수들은 나중에 다른 파일에서 불러와야하므로 내보내주기 
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 모듈의 초기 상태 정의
const initialState = {
    number: 0
};

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 파라미터는 초기상태
export default handleAction({
    [INCREMENT]: (state, action) => {
        return { number: state.number + 1 };
    },

    // action 객체를 참조하지 않으니까 이렇게 생략 가능
    // state 부분에서 비구조화 할당도 해주어서 코드 간소화
    [DECREMENT]: ({ number }) => ({ number: number - 1})
}, initialState);
