import VCARD_PROPERTIES from "./properties-enum";
import VCardPropertyDefinition from "./vcard-property-definition";
export default function Email({ prefix, type, email }:{prefix:number|string, type:string,email:string}): VCardPropertyDefinition[] {
	return [
		{
			property: VCARD_PROPERTIES.EMAIL,
			named_values: {
				PREF: { value: prefix },
				TYPE: { value: type },
			},
			positional_values: [email],
		},
	];
}


