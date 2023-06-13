import VCARD_PROPERTIES from "./properties-enum";
import VCardPropertyDefinition from "./vcard-property-definition";
export default function Birthday({
	year,
	month,
	day,
}: {
	year?: number;
	month: number;
	day: number;
}): VCardPropertyDefinition[] {
	return [
		{
			property: VCARD_PROPERTIES.BDAY,
			named_values: {},
			positional_values: [
				`${year ? year.toString().padStart(4, '0') : '----'}${month
					.toString()
					.padStart(2, '0')}${day.toString().padStart(2, '0')}`,
			],
		},
	];
}