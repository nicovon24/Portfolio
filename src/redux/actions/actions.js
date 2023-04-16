import { CHANGE_LANGUAGE } from "./action-types.js";
import axios from "axios";

//*TODO posts
export function changeLanguage() {
	return {
		type: CHANGE_LANGUAGE,
	};
}
