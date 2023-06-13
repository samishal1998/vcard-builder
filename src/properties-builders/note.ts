import VCARD_PROPERTIES from "./properties-enum";
import VCardPropertyDefinition from "./vcard-property-definition";
export default function Note({ note }:{note:string}):VCardPropertyDefinition[] {
	return [
		{
			property: VCARD_PROPERTIES.NOTE,
			named_values: {},
			positional_values: [note.trim()],
		},
	];
}









