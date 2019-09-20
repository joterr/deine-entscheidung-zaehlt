export const FACT_TYPES_CONST = {
  HUHNER: {
    ID: "huhner",
    LABEL_1: "Huhn",
    LABEL_10: "Hühner",
    LABEL: "Hühner",
    PER_YEAR: 930000000,
    INCLUDED_TYPES: "mit Küken, Legehennen und Hähnen",
    CALCULATION: "93 Millionen Hühner pro Jahr laut Schlachtzahlen",
    SOURCES: [
      {
        SOURCE: "Schlachtzahlen des BMI, 2018",
        SOURCE_URL: "https://www.google.de/"
      }
    ]
  },
  SCHWEINE: {
    ID: "schweine",
    LABEL_1: "Schwein",
    LABEL_10: "Schweine",
    LABEL: "Schweine",
    PER_YEAR: 57865000,
    CALCULATION: "93 Millionen Schweine pro Jahr laut Schlachtzahlen",
    SOURCES: [
      {
        SOURCE: "Fisch-Informationszentrums (FIZ) – Quelle: https://www.svz.de/20935212",
        SOURCE_URL: "https://www.google.de/"
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
    PER_YEAR: 467000000 / 13.25,
    CALCULATION: "93 Millionen Truthähner pro Jahr laut Schlachtzahlen",
    SOURCES: [
      {
        SOURCE: "Schlachtzahlen des BMI, 2018",
        SOURCE_URL: "https://www.google.de/"
      }
    ]
  },
  ENTEN: {
    ID: "enten",
    LABEL_1: "Ente",
    LABEL_10: "Enten",
    LABEL: "Enten",
    PER_YEAR: 36000000 / 2.5,
    CALCULATION: "93 Millionen Enten pro Jahr laut Schlachtzahlen",
    SOURCES: [
      {
        SOURCE: "Schlachtzahlen des BMI, 2018",
        SOURCE_URL: "https://www.google.de/"
      }
    ]
  },
  RINDER: {
    ID: "rinder",
    LABEL_1: "Rind",
    LABEL_10: "Rinder",
    LABEL: "Rinder",
    PER_YEAR: 35010000,
    CALCULATION: "93 Millionen Rinder pro Jahr laut Schlachtzahlen",
    SOURCES: [
      {
        SOURCE: "Schlachtzahlen des BMI, 2018",
        SOURCE_URL: "https://www.google.de/"
      }
    ]
  },
  SCHAFE: {
    ID: "schafe",
    LABEL_1: "Schaf",
    LABEL_10: "Schafe",
    LABEL: "Schafe",
    PER_YEAR: 1030400,
    SOURCES: [
      {
        SOURCE: "Schlachtzahlen des BMI, 2018",
        SOURCE_URL: "https://www.google.de/"
      }
    ]
  },
  PFERDE: {
    ID: "pferde",
    LABEL_1: "Pferd",
    LABEL_10: "Pferde",
    LABEL: "Pferde",
    PER_YEAR: 7100,
    CALCULATION: "93 Millionen Pferde pro Jahr laut Schlachtzahlen",
    SOURCES: [
      {
        SOURCE: "Schlachtzahlen des BMI, 2018",
        SOURCE_URL: "https://www.google.de/"
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
    CALCULATION: "93 Millionen Ziegen pro Jahr laut Schlachtzahlen",
    SOURCES: [
      {
        SOURCE: "Schlachtzahlen des BMI, 2018",
        SOURCE_URL: "https://www.google.de/"
      }
    ]
  },
  GULLE: {
    ID: "gulle",
    LABEL_10: "Tonnen Gülle",
    LABEL: "t Gülle",
    PER_YEAR: 742000000,
    UNIT: "Tonnen",
    NAME: "Gülle",
    CALCULATION: "93 Millionen Gülle pro Jahr laut Schlachtzahlen",
    SOURCES: [
      {
        SOURCE: "Zahlen des UBA, 2018",
        SOURCE_URL: "https://www.google.de/"
      }
    ]
  },
  SOY: {
    ID: "soy",
    LABEL_1: "Tonne Gen-Soja-Import",
    LABEL_10: "Tonnen Gen-Soja-Import",
    LABEL: "t Gen-Soja-Import",
    COUNT_ONE: "eine",
    PER_YEAR: 6000000,
    UNIT: "Tonnen",
    NAME: "Gen-Soja",
    INCLUDED_TYPES: "zu 80% aus Südamerika",
    CALCULATION: "93 Millionen Tonnen Gen-Soja pro Jahr laut Schlachtzahlen",
    SOURCES: [
      {
        SOURCE: "Zahlen des UBA, 2018",
        SOURCE_URL: "https://www.google.de/"
      },
      {
        SOURCE: "Zahlen des BMEL, 2019",
        SOURCE_URL: "https://www.google.de/"
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
    CALCULATION: "93 Millionen Antibiotika pro Jahr laut Schlachtzahlen",
    SOURCES: [
      {
        SOURCE: "Zahlen des UBA, 2018",
        SOURCE_URL: "https://www.google.de/"
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
