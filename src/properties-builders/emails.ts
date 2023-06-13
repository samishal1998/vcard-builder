import Email from "./email";
import VCardPropertyDefinition from "./vcard-property-definition";

export default function Emails(emails: { type:string,email:string }[]): VCardPropertyDefinition[] {
	return emails.flatMap((v, index) => Email({ ...v, prefix: index + 1 }));
}