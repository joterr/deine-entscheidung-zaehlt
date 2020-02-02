// tslint:disable:max-line-length

export const MODES = [
  {
    id: "DE",
    niceName: "Deutschland"
  },
  {
    id: "OMNI",
    niceName: "konventionell"
  },
  {
    id: "VEGGIE",
    niceName: "vegetarisch"
  },
  {
    id: "VEGAN",
    niceName: "vegan"
  }
];

export const FACT_TYPES_CONST = {
  HUHNER: {
    ID: "huhner",
    LABEL_1: "Huhn",
    LABEL_10: "Hühner",
    LABEL: "Hühner",
    PER_YEAR: (622000000 * 1.07) + 18000000 + 44000000, // 18 Mio Legehennen von Import
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
      },
      {
        SOURCE: "Welt Online (2019)",
        SOURCE_URL: "https://www.welt.de/politik/deutschland/article195189667/Kuekenschreddern-bleibt-in-Deutschland-vorerst-erlaubt.html"
      },
      {
        SOURCE: "Albert Schweitzer Stiftung I (2019)",
        SOURCE_URL: "https://albert-schweitzer-stiftung.de/massentierhaltung/masthuehner"
      },
      {
        SOURCE: "Albert Schweitzer Stiftung II (2019)",
        SOURCE_URL: "https://albert-schweitzer-stiftung.de/aktuell/schlachtzahlen-2018"
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
    PER_YEAR: 1130000 * 1000 * 1.1,
    CALCULATION: "Gesamtfanganzahl anhand anteiligem Fischgewicht und Beifang (1100 Fische pro 1 Tonne)",
    INCLUDED_TYPES: "mit Seefisch, Süßwasserfisch sowie Krebs- und Weichtiere",
    SOURCES: [
      {
        SOURCE: "Fischinfo (2018)",
        SOURCE_URL: "https://www.fischinfo.de/images/broschueren/pdf/FIZ_DF_2018_xs.pdf"
      },
      {
        SOURCE: "Süddeutsche (2016)",
        SOURCE_URL: "https://www.sueddeutsche.de/wissen/ernaehrung-so-erkennen-verbraucher-guten-fisch-1.3249923-2"
      },
      {
        SOURCE: "Spiegel Online (2018)",
        SOURCE_URL: "https://www.spiegel.de/wissenschaft/natur/fischerei-trotz-eu-verbots-landet-beifang-offenbar-weiter-im-meer-a-1234393.html"
      }
    ]
  },
  TRUTHAHNER: {
    ID: "truthahner",
    LABEL_1: "Truthahn",
    LABEL_10: "Truthähner",
    LABEL: "Truthähner",
    PER_YEAR: 39869812, // (467500000 / 13.25) * 1.13,
    CALCULATION: "Schlachtzahlen (berechnet mit 13.25 kg pro Tier) zzgl. 13% tödl. krank",
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
        SOURCE: "statista (2019)",
        SOURCE_URL: "https://de.statista.com/statistik/daten/studie/459216/umfrage/durchschnittliches-schlachtgewicht-von-puten-in-deutschland/"
      },
      {
        SOURCE: "Albert Schweitzer Stiftung (2019)",
        SOURCE_URL: "https://albert-schweitzer-stiftung.de/massentierhaltung/puten/2"
      }
    ]
  },
  ENTEN: {
    ID: "enten",
    LABEL_1: "Ente",
    LABEL_10: "Enten",
    LABEL: "Enten",
    PER_YEAR: 36800000 / 4,
    CALCULATION: "Schlachtzahlen berechnet mit 4 kg pro Tier",
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
        SOURCE: "Geflügel Franzsander (2019)",
        SOURCE_URL: "https://www.gefluegelhof-franzsander.de/enten.php"
      }
    ]
  },
  RINDER: {
    ID: "rinder",
    LABEL_1: "Rind",
    LABEL_10: "Rinder",
    LABEL: "Rinder",
    PER_YEAR: 3413200 + 579111,
    CALCULATION: "Schlachtzahlen und Tierkörperbeseitigung",
    SOURCES: [
      {
        SOURCE: "Heinrich Böll Stiftung (2019)",
        SOURCE_URL: "https://www.boell.de/sites/default/files/2019-10/fleischatlas_2018_V.pdf"
      },
      {
        SOURCE: "BR (2019)",
        SOURCE_URL: "https://www.br.de/nachrichten/deutschland-welt/viel-milch-viel-tierleid-deutschlands-kranke-kuehe,RPo00FU"
      },
      {
        SOURCE: "Topagrar (2018)",
        SOURCE_URL: "https://www.topagrar.com/rind/news/tierkoerperbeseitigung-mehr-verendete-rinder-abgeholt-9546634.html"
      },
      {
        SOURCE: "proveg (2019)",
        SOURCE_URL: "https://proveg.com/de/5-pros/tiere/milchkuehe-kuhhaltung-milchproduktion/"
      }
    ]
  },
  SCHAFE: {
    ID: "schafe",
    LABEL_1: "Schaf",
    LABEL_10: "Schafe",
    LABEL: "Schafe",
    PER_YEAR: 1147000,
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
  PFERDE: {
    ID: "pferde",
    LABEL_1: "Pferd",
    LABEL_10: "Pferde",
    LABEL: "Pferde",
    PER_YEAR: 6400,
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
  ZIEGEN: {
    ID: "ziegen",
    LABEL_1: "Ziege",
    LABEL_10: "Ziegen",
    LABEL: "Ziegen",
    COUNT_ONE: "eine",
    PER_YEAR: 216000,
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
  GULLE: {
    ID: "gulle",
    LABEL_10: "Liter Gülle",
    LABEL: "l Gülle",
    PER_YEAR: 208000000000,
    UNIT: "Liter",
    NAME: "Gülle",
    CALCULATION: "als Dünger auf Weiden und Äckern ausgebracht (ohne Importe)",
    SOURCES: [
      {
        SOURCE: "Heinrich Böll Stiftung (2019)",
        SOURCE_URL: "https://www.boell.de/sites/default/files/2019-10/fleischatlas_2018_V.pdf"
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
    PER_YEAR: 733000000000,
    UNIT: "Milligramm",
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
    PER_YEAR: 20800000 * 5,
    UNIT: "Tonnen",
    NAME: "CO<sub>2</sub>-Äquivalente",
    INCLUDED_TYPES: "berechnet aus emittiertem Kohlendioxid, Lachgas und Methan",
    CALCULATION: "Nutztierbestand um 20% (20.8 Mio. Tonnen CO2-Äqu.) verringern",
    SOURCES: [
      {
        SOURCE: "Quarks (2019)",
        SOURCE_URL: "https://www.quarks.de/umwelt/landwirtschaft/so-viele-treibhausgase-kommen-aus-der-nutztierhaltung/"
      },
      {
        SOURCE: "Heinrich Böll Stiftung (2019)",
        SOURCE_URL: "https://www.boell.de/sites/default/files/2019-10/fleischatlas_2018_V.pdf"
      },
    ]
  }
};
