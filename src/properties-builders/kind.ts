import VCARD_PROPERTIES from "./properties-enum";
import VCardPropertyDefinition from "./vcard-property-definition";

export default function Kind({
	kind,
}: {
	kind: 'application' | 'individual' | 'group' | 'location' | 'organization';
}):VCardPropertyDefinition[] {
	return [
		{
			property: VCARD_PROPERTIES.KIND,
			named_values: {},
			positional_values: [kind],
		},
	];
}

