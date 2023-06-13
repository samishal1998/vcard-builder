import VCARD_PROPERTIES from "./properties-enum";
import VCardPropertyDefinition from "./vcard-property-definition";
export default function Organization({
	organization,
	units,
}: {
	organization: string;
	units: string[];
}) :VCardPropertyDefinition[]{
	return [
		{
			property: VCARD_PROPERTIES.ORG,
			named_values: {},
			positional_values: [organization.trim(), ...units.map((n) => n.trim())],
		},
	];
}
