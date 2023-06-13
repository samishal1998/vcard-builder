# VCard Builder

## Installation

```bash
npm install vcard-builder
```

## Usage

```typescript
import vcf from 'vcard-builder'

 const vcard = await vcf.Builder(
		vcf.Version({ version: '3.0' }),
		vcf.Name({ familyName: "Mis'hal", givenName: 'Sami' }),
		vcf.Emails([
			{ email: 'samishal.1998@gmail.com', type: 'work' },
			{ email: '********@@gmail.com', type: 'personal' },
		]),
		vcf.Telephones([
			{ telephone: '+201000000000', type: 'work' },
			{ telephone: '+201512345687', type: 'personal' },
		]),
		vcf.URL({ label: 'Facebook', link: 'https://*****************' }),
		vcf.URL({ label: 'LinkedIn', link: 'https://www.linkedin.com/in/sami-mishal-612261161/' }),
		vcf.Gender({ gender: 'M' }),
	);
console.log(vcard)
 

```

#### Output
```
BEGIN:VCARD
VERSION:3.0
N:Mis'hal;Sami;;;
EMAIL;PREF=1;TYPE=work:samishal.1998@@gmail.com
EMAIL;PREF=2;TYPE=personal:********@gmail.com
TEL;PREF=1;TYPE=work:+201000000000
TEL;PREF=2;TYPE=personal:+201512345687
URL;TYPE=Facebook:https://*****************
URL;TYPE=LinkedIn:https://www.linkedin.com/in/sami-mishal-612261161/
GENDER:M
```

### Custom Builder

This Package is in it's early stages, so if you require extra properties/tags that are not yet defined 
then you can use the `vcf.Custom` function which should a one line string representing a line in the vcard.
Also, If you're familiar with the Vcard format then you can add your own functions that return `VCardPropertyDefinition[]`


## Next Steps

[ ] - Add validation depending on the Vcard version
[ ] - Implement All the native Properties/Tags
[ ] - Implement All the x-apple Properties/Tags