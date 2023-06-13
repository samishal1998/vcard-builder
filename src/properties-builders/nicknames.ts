import VCARD_PROPERTIES from "./properties-enum";
import VCardPropertyDefinition from "./vcard-property-definition";
export default function Nicknames({ nicknames }: { nicknames:string[] }) :VCardPropertyDefinition[]{
	return [
		{
			property: VCARD_PROPERTIES.NICKNAME,
			named_values: {},
			positional_values: nicknames.map((n) => n.trim()),
		},
	];
}