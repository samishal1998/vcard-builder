import VCARD_PROPERTIES from "./properties-enum";
import VCardPropertyDefinition from "./vcard-property-definition";
export default function Custom (generator:()=>string|Promise<string>): VCardPropertyDefinition[] {
	return [
		{
			property: 'CUSTOM',
            generator,
		},
	];
}