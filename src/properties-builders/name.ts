import VCARD_PROPERTIES from "./properties-enum";
import VCardPropertyDefinition from "./vcard-property-definition";

export default function Name({
	familyName = '',
	givenName = '',
	additionalName = '',
	honorificPrefix = '',
	honorificSuffix = '',
}: {
	familyName?: string;
	givenName?: string;
	additionalName?: string;
	honorificPrefix?: string;
	honorificSuffix?: string;
}) :VCardPropertyDefinition[] {
	return [
		{
			property: VCARD_PROPERTIES.N,
			named_values: {},
			positional_values: [
				familyName,
				givenName,
				additionalName,
				honorificPrefix,
				honorificSuffix,
			],
		},
	];
}