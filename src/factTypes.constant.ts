// tslint:disable:max-line-length

export const FACT_TYPES_CONST = {
  HUHNER: {
    ID: "huhner",
    LABEL_1: "Huhn",
    LABEL_10: "Hühner",
    LABEL: "Hühner",
    PER_YEAR: 930000000,
    INCLUDED_TYPES: "mit Küken, Legehennen und Hähnen",
    CALCULATION: "Schlachtzahlen sowie Eierproduktion",
    SOURCES: [
      {
        SOURCE: "Statistisches Bundesamt (2019)",
        SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
      },
      {
        SOURCE: "Heinrich Böll Stiftung (2019)",
        SOURCE_URL: "https://www.boell.de/sites/default/files/2019-10/fleischatlas_2018_V.pdf"
      }
    ]
  },
  SCHWEINE: {
    ID: "schweine",
    LABEL_1: "Schwein",
    LABEL_10: "Schweine",
    LABEL: "Schweine",
    PER_YEAR: 56605100 + 13500000,
    CALCULATION: "Schlachtzahlen + Falltiere (TBA)",
    SOURCES: [
      {
        SOURCE: "Statistisches Bundesamt (2019)",
        SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
      },
      {
        SOURCE: "Heinrich Böll Stiftung (2019)",
        SOURCE_URL: "https://www.boell.de/sites/default/files/2019-10/fleischatlas_2018_V.pdf"
      },
      {
        SOURCE: "Spiegel Online (2019)",
        SOURCE_URL: "https://www.spiegel.de/wirtschaft/nottoetungen-in-der-schweinemast-qual-fuer-den-profit-a-1290250.html"
      }
    ]
  },
  FISCHE: {
    ID: "fische",
    LABEL_1: "Fisch",
    LABEL_10: "Fische",
    LABEL: "Fische",
    PER_YEAR: 1100000000 / 2,
    CALCULATION: "93 Millionen Tonnen Fisch pro Jahr laut XYZ, Durchschnitt von X Gramm pro Fisch",
    INCLUDED_TYPES: "mit Lachs, Seelachs, Hering, Thunfisch und Forelle",
    SOURCES: [
      {
        SOURCE: "Schlachtzahlen des BMI, 2018",
        SOURCE_URL: "https://www.google.de/"
      }
    ]
  },
  TRUTHAHNER: {
    ID: "truthahner",
    LABEL_1: "Truthahn",
    LABEL_10: "Truthähner",
    LABEL: "Truthähner",
    PER_YEAR: 467000000 / 13.25, // 2701000 im Müll
    CALCULATION: "Schlachtzahlen",
    SOURCES: [
      {
        SOURCE: "Statistisches Bundesamt (2019)",
        SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
      },
      {
        SOURCE: "Heinrich Böll Stiftung (2019)",
        SOURCE_URL: "https://www.boell.de/sites/default/files/2019-10/fleischatlas_2018_V.pdf"
      }
    ]
  },
  ENTEN: {
    ID: "enten",
    LABEL_1: "Ente",
    LABEL_10: "Enten",
    LABEL: "Enten",
    PER_YEAR: 36000000 / 2.5,
    CALCULATION: "Schlachtzahlen (2.5 kg pro Ente)",
    SOURCES: [
      {
        SOURCE: "Statistisches Bundesamt (2019)",
        SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
      },
      {
        SOURCE: "Heinrich Böll Stiftung (2019)",
        SOURCE_URL: "https://www.boell.de/sites/default/files/2019-10/fleischatlas_2018_V.pdf"
      }
    ]
  },
  RINDER: {
    ID: "rinder",
    LABEL_1: "Rind",
    LABEL_10: "Rinder",
    LABEL: "Rinder",
    PER_YEAR: 35010000,
    CALCULATION: "9Schlachtzahlen",
    SOURCES: [
      {
        SOURCE: "Statistisches Bundesamt (2019)",
        SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
      },
      {
        SOURCE: "Heinrich Böll Stiftung (2019)",
        SOURCE_URL: "https://www.boell.de/sites/default/files/2019-10/fleischatlas_2018_V.pdf"
      }
    ]
  },
  SCHAFE: {
    ID: "schafe",
    LABEL_1: "Schaf",
    LABEL_10: "Schafe",
    LABEL: "Schafe",
    PER_YEAR: 1030400,
    CALCULATION: "9Schlachtzahlen",
    SOURCES: [
      {
        SOURCE: "Statistisches Bundesamt (2019)",
        SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
      },
      {
        SOURCE: "Heinrich Böll Stiftung (2019)",
        SOURCE_URL: "https://www.boell.de/sites/default/files/2019-10/fleischatlas_2018_V.pdf"
      }
    ]
  },
  PFERDE: {
    ID: "pferde",
    LABEL_1: "Pferd",
    LABEL_10: "Pferde",
    LABEL: "Pferde",
    PER_YEAR: 7100,
    CALCULATION: "9Schlachtzahlen",
    SOURCES: [
      {
        SOURCE: "Statistisches Bundesamt (2019)",
        SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
      },
      {
        SOURCE: "Heinrich Böll Stiftung (2019)",
        SOURCE_URL: "https://www.boell.de/sites/default/files/2019-10/fleischatlas_2018_V.pdf"
      }
    ]
  },
  ZIEGEN: {
    ID: "ziegen",
    LABEL_1: "Ziege",
    LABEL_10: "Ziegen",
    LABEL: "Ziegen",
    COUNT_ONE: "eine",
    PER_YEAR: 20400,
    CALCULATION: "9Schlachtzahlen",
    SOURCES: [
      {
        SOURCE: "Statistisches Bundesamt (2019)",
        SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
      },
      {
        SOURCE: "Heinrich Böll Stiftung (2019)",
        SOURCE_URL: "https://www.boell.de/sites/default/files/2019-10/fleischatlas_2018_V.pdf"
      }
    ]
  },
  GULLE: {
    ID: "gulle",
    LABEL_10: "Liter Gülle",
    LABEL: "l Gülle",
    PER_YEAR: 208000000,
    FACTOR: 1000,
    UNIT: "Tausend Liter",
    NAME: "Gülle",
    CALCULATION: "als Dünger auf Weiden und Äckern ausgebracht (ohne Importe)",
    SOURCES: [
      {
        SOURCE: "Fleischatlas Heinrich Böll Stiftung 2018",
        SOURCE_URL: "https://www.boell.de/sites/default/files/fleischatlas_2018_iii_web.pdf"
      }
    ]
  },
  SOY: {
    ID: "soy",
    LABEL_1: "Kilogramm Gen-Soja-Import",
    LABEL: "kg Gen-Soja-Import",
    COUNT_ONE: "eine",
    PER_YEAR: 3063251,
    FACTOR: 1000,
    UNIT: "Tonnen",
    NAME: "Gen-Soja",
    INCLUDED_TYPES: "importiert aus den USA, Brasilien und Kanada",
    CALCULATION: "Futtermittel-Import zu 90% Gen-Soja-Schrot (ohne pfl. Öle)",
    SOURCES: [
      {
        SOURCE: "BMEL (2019)",
        SOURCE_URL: "https://www.bmel-statistik.de/fileadmin/daten/DFT-0601010-2018.xlsx"
      },
      {
        SOURCE: "OVID (2016)",
        SOURCE_URL: "https://www.ovid-verband.de/artikel//soja-moratorium-in-brasilien-jetzt-dauerhaft/"
      },
      {
        SOURCE: "Keine Gentechnik (2019)",
        SOURCE_URL: "https://www.keine-gentechnik.de/dossiers/soja/"
      }
    ]
  },
  ANTIBIOTIKA: {
    ID: "antibiotika",
    LABEL_1: "Milligramm Antibiotika",
    LABEL_10: "Milligramm Antibiotika",
    LABEL: "mg Antibiotika",
    FACTOR: 1000,
    PER_YEAR: 733000000,
    UNIT: "Gramm",
    NAME: "Antibiotika",
    CALCULATION: "Abgabemenge an Tierärzte in Deutschland, ohne Fischzucht",
    SOURCES: [
      {
        SOURCE: "BMEL (2018)",
        SOURCE_URL: "https://www.bmel.de/SharedDocs/Downloads/Tier/Tiergesundheit/Tierarzneimittel/Lagebild%20Antibiotikaeinsatz%20bei%20Tieren%20Juli%202018.pdf?__blob=publicationFile"
      },
      {
        SOURCE: "Germanwatch (2019)",
        SOURCE_URL: "https://www.germanwatch.org/de/16760"
      }
    ]
  },
  CO2: {
    ID: "co2",
    LABEL_1: "Tonne CO<sub>2</sub>-Äquivalente",
    LABEL_10: "Tonnen CO<sub>2</sub>-Äquivalente",
    LABEL: "t CO<sub>2</sub>-Äquivalente",
    PER_YEAR: 120000000,
    UNIT: "Tonnen",
    NAME: "CO<sub>2</sub>-Äquivalente",
    INCLUDED_TYPES: "berechnet aus emittiertem Kohlendioxid, Lachgas und Methan",
    CALCULATION: "93 Millionen CO2 pro Jahr laut Berechnungen",
    SOURCES: [
      {
        SOURCE: "Zahlen des UBA, 2018",
        SOURCE_URL: "https://www.google.de/"
      }
    ]
  }
};
