
import VCARD_PROPERTIES from "./properties-enum";
import axios from 'axios';
import VCardPropertyDefinition from "./vcard-property-definition";

export default async function Photo({
	imageFormat,
	type,
	...props
}: { imageFormat:string } & (
	| { type: 'data'; data: string | ArrayBuffer }
	| { type: 'uri' | 'data-from-uri'; uri: string }
)): Promise<VCardPropertyDefinition[]> {
	const named_values:any = {
		TYPE: { value: imageFormat },
	};

	const positional_values = [];

	if (type === 'data') {
		const data = (props as any).data;
		named_values['ENCODING'] = 'b';
		const dataImage =
			typeof data === 'string' ? data : data.toString('base64');
		positional_values.push(dataImage);
	} else if (type === 'uri') {
		named_values['VALUE'] = 'URI';
		positional_values.push((props as any).uri);
	} else if (type === 'data-from-uri') {
		const uri = (props as any).uri;

		try {
			const res = await axios.get(uri, {
				responseType: 'arraybuffer',
			});
			const dataImage = res.data.toString('base64');

			named_values['ENCODING'] = 'b';
			positional_values.push(dataImage);
		} catch (e) {
			console.warn(`Vcard::Failed To Load Image from URI=${uri}`);
			named_values['VALUE'] = 'URI';
			positional_values.push(uri);
		}
	}

	return [
		{
			property: VCARD_PROPERTIES.PHOTO,
			named_values,
			positional_values,
		},
	];
}



