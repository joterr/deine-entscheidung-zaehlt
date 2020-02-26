// tslint:disable:max-line-length
export const AVERAGE_LIFE_SPAN: number = 85;

export enum ModeEnum {
  "DE" = "DE",
  "OMNI" = "OMNI",
  "VEGGIE" = "VEGGIE",
  "VEGAN" = "VEGAN"
}

export interface Mode {
  id: string;
  niceName: string;
  niceNameFull: string;
}

export interface Types {
  [key: string]: Type;
}

export interface Type {
  ID: string;
  LABEL_1?: string;
  LABEL?: string;
  COUNT_ONE?: string;
  INCLUDED_TYPES?: string;
  NAME?: string;
  PROBLEM: string;
  IS_ANIMAL?: boolean;
  DE: ModeValue;
  OMNI: ModeValue;
  VEGGIE: ModeValue;
  VEGAN: ModeValue;
}

export interface ModeValue {
  PER_YEAR: number;
  UNIT?: string;
  CALCULATION?: string;
  FACTOR?: number;
  SOURCES: ModeValueSource[];
}
export interface ModeValueSource {
  SOURCE: string;
  SOURCE_URL: string;
}



export const MODES = [
  {
    id: "DE",
    niceName: "Deutschland",
    niceNameFull: "Deutschland"
  },
  {
    id: "OMNI",
    niceName: "konventionell",
    niceNameFull: "konventionelle Ernährung"
  },
  {
    id: "VEGGIE",
    niceName: "vegetarisch",
    niceNameFull: "vegetarische Ernährung"
  },
  {
    id: "VEGAN",
    niceName: "vegan",
    niceNameFull: "vegane Ernährung"
  }
];

export const FACT_TYPES_CONST: Types  = {
  HUHNER: {
    ID: "huhner",
    LABEL_1: "Huhn",
    LABEL: "Hühner",
    INCLUDED_TYPES: "mit Küken, Legehennen und Hähnen",
    PROBLEM: "",
    IS_ANIMAL: true,
    DE: {
      PER_YEAR: (5000000 * 1.07) + 18000000 + 44000000, // 18 Mio Legehennen von Import
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
    OMNI: {
      PER_YEAR: 20,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGGIE: {
      PER_YEAR: 10,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGAN: {
      PER_YEAR: 0,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    }
  },
  SCHWEINE: {
    ID: "schweine",
    LABEL_1: "Schwein",
    LABEL: "Schweine",
    PROBLEM: "",
    IS_ANIMAL: true,
    DE: {
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
    OMNI: {
      PER_YEAR: 5,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGGIE: {
      PER_YEAR: 0,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGAN: {
      PER_YEAR: 0,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    }
  },
  FISCHE: {
    ID: "fische",
    LABEL_1: "Fisch",
    LABEL: "Fische",
    INCLUDED_TYPES: "mit Seefisch, Süßwasserfisch sowie Krebs- und Weichtiere",
    PROBLEM: "",
    IS_ANIMAL: true,
    DE: {
      PER_YEAR: 1243000000,
      CALCULATION: "Gesamtfanganzahl anhand anteiligem Fischgewicht und Beifang (1100 Fische pro 1 Tonne)",
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
    OMNI: {
      PER_YEAR: 50,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGGIE: {
      PER_YEAR: 0,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGAN: {
      PER_YEAR: 0,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    }
  },
  TRUTHAHNER: {
    ID: "truthahner",
    LABEL_1: "Truthahn",
    LABEL: "Truthähner",
    PROBLEM: "",
    IS_ANIMAL: true,
    DE: {
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
    OMNI: {
      PER_YEAR: 50,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGGIE: {
      PER_YEAR: 0,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGAN: {
      PER_YEAR: 0,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    }
  },
  ENTEN: {
    ID: "enten",
    LABEL_1: "Ente",
    LABEL: "Enten",
    PROBLEM: "",
    IS_ANIMAL: true,
    DE: {
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
    OMNI: {
      PER_YEAR: 15,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGGIE: {
      PER_YEAR: 0,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGAN: {
      PER_YEAR: 0,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    }
  },
  RINDER: {
    ID: "rinder",
    LABEL_1: "Rind",
    LABEL: "Rinder",
    PROBLEM: "",
    IS_ANIMAL: true,
    DE: {
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
    OMNI: {
      PER_YEAR: 5,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGGIE: {
      PER_YEAR: 5,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGAN: {
      PER_YEAR: 0,
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    }
  },
  GULLE: {
    ID: "gulle",
    LABEL: "l Gülle",
    NAME: "Gülle",
    PROBLEM: "",
    DE: {
      PER_YEAR: 2080000000,
      UNIT: "Liter",
      CALCULATION: "als Dünger auf Weiden und Äckern ausgebracht (ohne Importe)",
      SOURCES: [
        {
          SOURCE: "Heinrich Böll Stiftung (2019)",
          SOURCE_URL: "https://www.boell.de/sites/default/files/2019-10/fleischatlas_2018_V.pdf"
        }
      ]
    },
    OMNI: {
      PER_YEAR: 5000,
      UNIT: "Liter",
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGGIE: {
      PER_YEAR: 3000,
      UNIT: "Liter",
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGAN: {
      PER_YEAR: 0,
      UNIT: "Liter",
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    }
  },
  SOY: {
    ID: "soy",
    LABEL_1: "Kilogramm Gen-Soja-Import",
    LABEL: "kg Gen-Soja-Import",
    COUNT_ONE: "eine",
    NAME: "Gen-Soja",
    INCLUDED_TYPES: "importiert aus den USA, Brasilien und Kanada",
    PROBLEM: "",
    DE: {
      PER_YEAR: 3063251,
      UNIT: "Tonnen",
      CALCULATION: "Futtermittel-Import zu 90% Gen-Soja-Schrot (ohne pfl. Öle)",
      FACTOR: 1000,
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
    OMNI: {
      PER_YEAR: 50,
      UNIT: "Tonnen",
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGGIE: {
      PER_YEAR: 10,
      UNIT: "Tonnen",
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGAN: {
      PER_YEAR: 0,
      UNIT: "Tonnen",
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    }
  },
  ANTIBIOTIKA: {
    ID: "antibiotika",
    LABEL_1: "Kilogramm Antibiotika",
    LABEL: "mg Antibiotika",
    NAME: "Antibiotika",
    PROBLEM: "Starker Einsatz von Antibiotika fördert sog. Antibiotikaresistenzen, welche selbst durch Reserveantibiotika nicht geheilt werden können.",
    DE: {
      PER_YEAR: 733000,
      UNIT: "Kilogramm",
      CALCULATION: "Abgabemenge an Tierärzte in Deutschland, ohne Fischzucht",
      FACTOR: 1000000,
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
    OMNI: {
      PER_YEAR: 5,
      UNIT: "Kilogramm",
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGGIE: {
      PER_YEAR: 3,
      UNIT: "Kilogramm",
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    },
    VEGAN: {
      PER_YEAR: 0,
      UNIT: "Kilogramm",
      SOURCES: [
        {
          SOURCE: "Fake-News (2020)",
          SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
        }
      ]
    }
  },
  CO2: {
    ID: "co2",
    LABEL_1: "Tonne CO<sub>2</sub>-Äquivalente",
    LABEL: "t CO<sub>2</sub>-Äquivalente",
    NAME: "CO<sub>2</sub>-Äquivalente",
    INCLUDED_TYPES: "berechnet aus emittiertem Kohlendioxid, Lachgas und Methan",
    PROBLEM: "",
    DE: {
      PER_YEAR: 20800000 * 5,
      UNIT: "Tonnen",
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
    },
    OMNI: {
      PER_YEAR: 1700,
      FACTOR: 0.001,
      UNIT: "Kilogramm",
      SOURCES: [
        {
          SOURCE: "Deutschlandfunk (2019)",
          SOURCE_URL: "https://www.deutschlandfunk.de/klima-serie-der-eigene-beitrag-veganes-leben-als-co2.697.de.html?dram:article_id=456541"
        }
      ]
    },
    VEGGIE: {
      PER_YEAR: 1100,
      FACTOR: 0.001,
      UNIT: "Kilogramm",
      SOURCES: [
        {
          SOURCE: "Deutschlandfunk (2019)",
          SOURCE_URL: "https://www.deutschlandfunk.de/klima-serie-der-eigene-beitrag-veganes-leben-als-co2.697.de.html?dram:article_id=456541"
        }
      ]
    },
    VEGAN: {
      PER_YEAR: 640,
      FACTOR: 0.001,
      UNIT: "Kilogramm",
      SOURCES: [
        {
          SOURCE: "Deutschlandfunk (2019)",
          SOURCE_URL: "https://www.deutschlandfunk.de/klima-serie-der-eigene-beitrag-veganes-leben-als-co2.697.de.html?dram:article_id=456541"
        }
      ]
    }
  }
};
