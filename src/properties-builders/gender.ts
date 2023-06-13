
import VCARD_PROPERTIES from "./properties-enum";
import VCardPropertyDefinition from "./vcard-property-definition";
export default function Gender({ gender }: { gender: 'F' | 'M' }):VCardPropertyDefinition[] {
	return [
		{
			property: VCARD_PROPERTIES.GENDER,
			named_values: {},
			positional_values: [gender],
		},
	];
}

