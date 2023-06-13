import VCARD_PROPERTIES from "./properties-enum";
import VCardPropertyDefinition from "./vcard-property-definition";
export default function FormattedName({ formattedName }:{formattedName:string}):VCardPropertyDefinition[] {
	return [
		{
			property: VCARD_PROPERTIES.FN,
			named_values: {},
			positional_values: [formattedName],
		},
	];
}
