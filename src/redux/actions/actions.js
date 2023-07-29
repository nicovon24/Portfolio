import { CHANGE_LANGUAGE, CHANGE_PROJ_MODAL } from "./action-types.js";
import axios from "axios";

//*TODO posts
export function changeLanguage() {
	return {
		type: CHANGE_LANGUAGE,
	};
}

export function changeProjectModal(project) {
	return {
		type: CHANGE_PROJ_MODAL,
		payload: project
	};
}
