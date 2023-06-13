import VCardPropertyDefinition from "../properties-builders/vcard-property-definition";
import resolve from "./resolve-definition";

export default async function VCard(...args: (VCardPropertyDefinition[] | PromiseLike<VCardPropertyDefinition[]>)[]) {
	const lines = [];

	for (const arg of args) {
		for (const prop of await arg) {
			lines.push(await resolve(prop));
		}
	}

	return [`BEGIN:VCARD`, ...lines, `END:VCARD`].join('\n');
}