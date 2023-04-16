import { CHANGE_LANGUAGE  } from "../actions/action-types.js";

const initialState = {
	//initial language: browser's user default language
	language: navigator.language.startsWith("es") ? "spanish" : "english"
};

const rootReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		
		case CHANGE_LANGUAGE:
			return {
				...state,
				language: state.language === "english" ? "spanish" : "english",
			};
		default:
			return {
				...state,
			};
	}
};
export default rootReducer;
