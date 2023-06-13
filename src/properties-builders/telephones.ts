import VCARD_PROPERTIES from "./properties-enum";
import Telephone from "./telephone";
import VCardPropertyDefinition from "./vcard-property-definition";


export default function Telephones(telephones: { type:string,telephone:string }[]) :VCardPropertyDefinition[]{
	return telephones.flatMap((v, index) =>
		Telephone({ ...v, prefix: index + 1 }),
	);
}