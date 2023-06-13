import Builder from "./utils/builder";
import FormattedName from "./properties-builders/formatted-name";
import Birthday from "./properties-builders/birthday";
import Gender from "./properties-builders/gender";
import Geo from "./properties-builders/geo";
import Kind from "./properties-builders/kind";
import Name from "./properties-builders/name";
import Nicknames from "./properties-builders/nicknames";
import Note from "./properties-builders/note";
import Organization from "./properties-builders/organization";
import TimeZone from "./properties-builders/timezone";
import Title from "./properties-builders/title";
import URL from "./properties-builders/url";
import Version from "./properties-builders/version";
import Email from "./properties-builders/email";
import Emails from "./properties-builders/emails";
import Telephone from "./properties-builders/telephone";
import Telephones from "./properties-builders/telephones";
import VCARD_PROPERTIES from './properties-builders/properties-enum';
import Photo from "./properties-builders/photo";
import Custom from "./properties-builders/custom";

export default {
	Email,
	Emails,
	Telephone,
	Telephones,
	Builder,
	FormattedName,
	Birthday,
	Gender,
	Geo,
	Kind,
	Name,
	Nicknames,
	Note,
	Organization,
	Photo,
	TimeZone,
	Title,
	URL,
	Version,
    Custom,
};
