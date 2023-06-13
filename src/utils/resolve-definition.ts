import VCardPropertyDefinition from "../properties-builders/vcard-property-definition";

export default async function resolve(p: VCardPropertyDefinition) : Promise<string>{
    if(p.property === 'CUSTOM'){
        return p.generator();
    }
    
	const section1 = [
		p.property.toString(),
		...Object.entries(p.named_values).map(
			([key, { value }]) => `${key}=${value.toString().trim()}`,
		),
	].join(';');
	const section2 = p.positional_values
		.map((value) => value.toString().trim())
		.join(';');
	return `${section1}:${section2}`;
}


