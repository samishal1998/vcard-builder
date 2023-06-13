import VCARD_PROPERTIES from "./properties-enum";
import VCardPropertyDefinition from "./vcard-property-definition";
export default function URL({ label, link }:{label:string,link:string}) : VCardPropertyDefinition[]{
	return [
		{
			property: VCARD_PROPERTIES.URL,
			named_values: { TYPE: { value: label } },
			positional_values: [link],
		},
	];
}