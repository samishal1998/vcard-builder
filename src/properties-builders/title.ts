
import VCARD_PROPERTIES from "./properties-enum";
import VCardPropertyDefinition from "./vcard-property-definition";
export default function Title({ title }:{title:string}):VCardPropertyDefinition[] {
	return [
		{
			property: VCARD_PROPERTIES.TITLE,
			named_values: {},
			positional_values: [title],
		},
	];
}