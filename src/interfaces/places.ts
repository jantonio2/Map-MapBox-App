
export interface PlacesResponse {
  type:        string;
  query:       string[];
  features:    Feature[];
  attribution: string;
}

export interface Feature {
  id:            string;
  type:          string;
  place_type:    string[];
  relevance:     number;
  properties:    Properties;
  text_es:       string;
  place_name_es: string;
  text:          string;
  place_name:    string;
  bbox:          number[];
  center:        number[];
  geometry:      Geometry;
  context:       Context[];
}

export interface Context {
  id:          ID;
  short_code:  ShortCode;
  wikidata:    Wikidata;
  text_es:     Text;
  language_es: Language;
  text:        Text;
  language:    Language;
}

export enum ID {
  Country11774965238747550 = "country.11774965238747550",
  Region10591509290527180 = "region.10591509290527180",
}

export enum Language {
  Es = "es",
}

export enum ShortCode {
  Bo = "bo",
  BoL = "BO-L",
}

export enum Text {
  Bolivia = "Bolivia",
  LaPaz = "La Paz",
}

export enum Wikidata {
  Q272784 = "Q272784",
  Q750 = "Q750",
}

export interface Geometry {
  type:        string;
  coordinates: number[];
}

export interface Properties {
}
