export enum SelectedPage {
  Naslovna = "naslovna",
  Onama = "onama",
  PersonalniTrening = "personalnitrening",
  GrupniTrening = "grupnitrening",
  AnalizaSustavaTijela = "analizasustavatijela",
  MaliRespektaši = "malirespektaši",
  Kontakt = "kontakt",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
