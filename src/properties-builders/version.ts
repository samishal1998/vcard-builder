import VCARD_PROPERTIES from "./properties-enum";
import VCardPropertyDefinition from "./vcard-property-definition";

export default function Version({ version }:{version:'2.1'|'3.0'|'4.0'}) :VCardPropertyDefinition[]{
	return [
		{
			property: VCARD_PROPERTIES.VERSION,
			named_values: {},
			positional_values: [version],
		},
	];
}