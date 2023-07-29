import { CHANGE_LANGUAGE, CHANGE_PROJ_MODAL } from "../actions/action-types.js";

const initialState = {
	//initial language: browser's user default language
	language: navigator.language.startsWith("es") ? "spanish" : "english",
	modal_project: {}
};

const rootReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case CHANGE_LANGUAGE:
			return {
				...state,
				language: state.language === "english" ? "spanish" : "english",
			};
		case CHANGE_PROJ_MODAL:
			return {
				...state,
				modal_project: action.payload,
			};
		default:
			return {
				...state,
			};
	}
};
export default rootReducer;
