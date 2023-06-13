import VCARD_PROPERTIES from "./properties-enum";
import VCardPropertyDefinition from "./vcard-property-definition";
export default function TimeZone(
	args:
		| {
				timeOffset: number;
		  }
		| { zone: `${string}/${string}` },
) :VCardPropertyDefinition[] {
	const { timeOffset: timeOffset, zone } = args as any;
	let value = zone;

	if (timeOffset || timeOffset === 0) {
		const negative = timeOffset < 0;
		value =
			(negative ? '-' : '+') +
			(Math.abs(timeOffset) * 100).toString().padStart(4, '0');
	}
	return [
		{
			property: VCARD_PROPERTIES.TZ,
			named_values: {},
			positional_values: [value],
		},
	];
}
