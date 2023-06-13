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
			{ email: 'sami.mishal.1998@gmail.com', type: 'work' },
			{ email: 'samishal.1998@gmail.com', type: 'personal' },
		]),
		vcf.Telephones([
			{ telephone: '+201010187812', type: 'work' },
			{ telephone: '+201558199897', type: 'personal' },
		]),
		vcf.URL({ label: 'Facebook', link: 'https://fb.com/samy.mishal' }),
		vcf.URL({ label: 'LinkedIn', link: 'https://linkedin.com/samy.mishal' }),
		vcf.Gender({ gender: 'M' }),
	);
console.log(vcard)
 

```

#### Output
```
BEGIN:VCARD
VERSION:3.0
N:Mis'hal;Sami;;;
EMAIL;PREF=1;TYPE=work:sami.mishal.1998@gmail.com
EMAIL;PREF=2;TYPE=personal:samishal.1998@gmail.com
TEL;PREF=1;TYPE=work:+201010187812
TEL;PREF=2;TYPE=personal:+201558199897
URL;TYPE=Facebook:https://fb.com/samy.mishal
URL;TYPE=LinkedIn:https://linkedin.com/samy.mishal
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