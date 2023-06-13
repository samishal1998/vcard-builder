import VCARD_PROPERTIES from "./properties-enum";
import VCardPropertyDefinition from "./vcard-property-definition";
export default function Geo({ latitude, longitude }: { latitude: number; longitude: number }) :VCardPropertyDefinition[]{
	return [
		{
			property: VCARD_PROPERTIES.GEO,
			named_values: {},
			positional_values: [latitude, longitude],
		},
	];
}