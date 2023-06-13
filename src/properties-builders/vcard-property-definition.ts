import VCARD_PROPERTIES from "./properties-enum";

type VCardPropertyDefinition = {
	property: VCARD_PROPERTIES;
	named_values: Record<any, { value: any }>;
	positional_values: any[];
}| {property:"CUSTOM", generator:()=>string|Promise<string>};

export default VCardPropertyDefinition;