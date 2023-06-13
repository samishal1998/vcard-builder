import VCARD_PROPERTIES from "./properties-enum";
import VCardPropertyDefinition from "./vcard-property-definition";


export default function Telephone({ prefix, type, telephone }:{prefix:number|string,type:string,telephone:string}):VCardPropertyDefinition[]{
	return [
		{
			property: VCARD_PROPERTIES.TEL,
			named_values: {
				PREF: { value: prefix },
				TYPE: { value: type },
			},
			positional_values: [telephone],
		},
	];
}



