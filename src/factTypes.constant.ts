// tslint:disable:max-line-length
// https://de.statista.com/statistik/daten/studie/273406/umfrage/entwicklung-der-lebenserwartung-bei-geburt--in-deutschland-nach-geschlecht/
export const AVERAGE_LIFE_SPAN: number = 81;

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
    [ key: string ]: Type;
}

export interface Type {
    ID: string;
    LABEL_1?: string;
    LABEL?: string;
    COUNT_ONE?: string;
    INCLUDED_TYPES?: string;
    NAME?: string;
    PROBLEM?: string;
    IS_ANIMAL?: boolean;
    DE: ModeValue;
    OMNI: ModeValue;
    VEGGIE: ModeValue;
    VEGAN: ModeValue;
}

export interface ModeValue {
    PER_YEAR: number;
    UNIT?: string;
    INCLUDED_TYPES?: string;
    CALCULATION?: string;
    FACTOR?: number;
    SOURCES: ModeValueSource[];
}
export interface ModeValueSource {
    SOURCE: string;
    SOURCE_URL: string;
}

export const MODES: Mode[] = [
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

export const FACT_TYPES_CONST: Types = {
    HUHNER: {
        ID: "huhner",
        LABEL_1: "Huhn",
        LABEL: "Hühner",
        INCLUDED_TYPES: "mit Küken, Legehennen und Hähnen",
        IS_ANIMAL: true,
        DE: {
            PER_YEAR: (622492000 * 1.07) + (18000000 * 1.07) + 44000000, // 18 Mio Legehennen von Import-Eiern
            CALCULATION: "Schlachtzahlen sowie Eierproduktion",
            SOURCES: [
                {
                    SOURCE: "DESTATIS (2020)",
                    SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2020/02/PD20_036_413.html"
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
                    SOURCE: "Albert Schweitzer Stiftung (2019)",
                    SOURCE_URL: "https://albert-schweitzer-stiftung.de/massentierhaltung/masthuehner"
                },
                {
                    SOURCE: "Bianca Baumgart (2005)",
                    SOURCE_URL: "https://edoc.ub.uni-muenchen.de/3746/1/Baumgart_Bianca.pdf"
                }
            ]
        },
        OMNI: {
            PER_YEAR: 6.5858701 + 0.915920706,
            SOURCES: [
                {
                    SOURCE: "BLE (2017)",
                    SOURCE_URL: "https://www.ble.de/SharedDocs/Pressemitteilungen/DE/2017/170317_Eier.html"
                },
                {
                    SOURCE: "Hühner Haltung (2019)",
                    SOURCE_URL: "https://www.huehner-haltung.de/haltung/produktive-huhn/#Was_kommt_nach_dem_Ei_ Legeleistung"
                },
                {
                    SOURCE: "DESTATIS (2019)",
                    SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
                },
                {
                    SOURCE: "DESTATIS (2019)",
                    SOURCE_URL: "https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Landwirtschaft-Forstwirtschaft-Fischerei/Tiere-Tierische-Erzeugung/Tabellen/gefluegelfleisch.html"
                },
                {
                    SOURCE: "BVDF (2019)",
                    SOURCE_URL: "https://www.bvdf.de/aktuell/geschaeftsbericht-2018-19"
                },
                {
                    SOURCE: "Bianca Baumgart (2005)",
                    SOURCE_URL: "https://edoc.ub.uni-muenchen.de/3746/1/Baumgart_Bianca.pdf"
                }
            ]
        },
        VEGGIE: {
            PER_YEAR: 0.915920706 * 1.15, // + 15% da ausschließlich vegetarische Nahrung
            SOURCES: [
                {
                    SOURCE: "BLE (2017)",
                    SOURCE_URL: "https://www.ble.de/SharedDocs/Pressemitteilungen/DE/2017/170317_Eier.html"
                },
                {
                    SOURCE: "Hühner Haltung (2019)",
                    SOURCE_URL: "https://www.huehner-haltung.de/haltung/produktive-huhn/#Was_kommt_nach_dem_Ei_ Legeleistung"
                },
                {
                    SOURCE: "Bianca Baumgart (2005)",
                    SOURCE_URL: "https://edoc.ub.uni-muenchen.de/3746/1/Baumgart_Bianca.pdf"
                }
            ]
        },
        VEGAN: {
            PER_YEAR: 0,
            SOURCES: []
        }
    },
    SCHWEINE: {
        ID: "schweine",
        LABEL_1: "Schwein",
        LABEL: "Schweine",
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
            PER_YEAR: 0.493428873,
            SOURCES: [
                {
                    SOURCE: "Statista (2019)",
                    SOURCE_URL: "https://de.statista.com/statistik/daten/studie/163421/umfrage/schweine---schlachtgewicht/"
                },
                {
                    SOURCE: "BVDF (2019)",
                    SOURCE_URL: "https://www.bvdf.de/aktuell/geschaeftsbericht-2018-19"
                }
            ]
        },
        VEGGIE: {
            PER_YEAR: 0,
            SOURCES: []
        },
        VEGAN: {
            PER_YEAR: 0,
            SOURCES: []
        }
    },
    FISCHE: {
        ID: "fische",
        LABEL_1: "Fisch",
        LABEL: "Fische",
        INCLUDED_TYPES: "mit Seefisch, Süßwasserfisch sowie Krebs- und Weichtiere",
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
            PER_YEAR: 151.6821258,
            SOURCES: [
                {
                    SOURCE: "Albert Schweitzer (2010)",
                    SOURCE_URL: "https://albert-schweitzer-stiftung.de/aktuell/deutsche-essen-uber-12-milliarden-tiere-pro-jahr"
                },
                {
                    SOURCE: "DESTATIS (2011)",
                    SOURCE_URL: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/liste-zensus-geschlecht-staatsangehoerigkeit.html"
                },
                {
                    SOURCE: "Wikipedia (2020)",
                    SOURCE_URL: "https://de.wikipedia.org/wiki/Beifang_(Fischerei)"
                }
            ]
        },
        VEGGIE: {
            PER_YEAR: 0,
            SOURCES: []
        },
        VEGAN: {
            PER_YEAR: 0,
            SOURCES: []
        }
    },
    TRUTHAHNER: {
        ID: "truthahner",
        LABEL_1: "Truthahn",
        LABEL: "Truthähne",
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
            PER_YEAR: 0.372996533,
            SOURCES: [
                {
                    SOURCE: "DESTATIS (2019)",
                    SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
                },
                {
                    SOURCE: "DESTATIS (2019)",
                    SOURCE_URL: "https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Landwirtschaft-Forstwirtschaft-Fischerei/Tiere-Tierische-Erzeugung/Tabellen/gefluegelfleisch.html"
                },
                {
                    SOURCE: "BVDF (2019)",
                    SOURCE_URL: "https://www.bvdf.de/aktuell/geschaeftsbericht-2018-19"
                }
            ]
        },
        VEGGIE: {
            PER_YEAR: 0,
            SOURCES: []
        },
        VEGAN: {
            PER_YEAR: 0,
            SOURCES: []
        }
    },
    ENTEN: {
        ID: "enten",
        LABEL_1: "Ente",
        LABEL: "Enten",
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
            PER_YEAR: 0.178190837,
            SOURCES: [
                {
                    SOURCE: "DESTATIS (2019)",
                    SOURCE_URL: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2019/02/PD19_043_413.html"
                },
                {
                    SOURCE: "DESTATIS (2019)",
                    SOURCE_URL: "https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Landwirtschaft-Forstwirtschaft-Fischerei/Tiere-Tierische-Erzeugung/Tabellen/gefluegelfleisch.html"
                },
                {
                    SOURCE: "BVDF (2019)",
                    SOURCE_URL: "https://www.bvdf.de/aktuell/geschaeftsbericht-2018-19"
                }
            ]
        },
        VEGGIE: {
            PER_YEAR: 0,
            SOURCES: []
        },
        VEGAN: {
            PER_YEAR: 0,
            SOURCES: []
        }
    },
    RINDER: {
        ID: "rinder",
        LABEL_1: "Rind",
        LABEL: "Rinder",
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
            PER_YEAR: 0.036057358 + 0.412689932,
            SOURCES: [
                {
                    SOURCE: "LFL Bayern (2018)",
                    SOURCE_URL: "https://www.lfl.bayern.de/mam/cms07/publikationen/daten/informationen/fleisch-gefluegelwirtschaft-bayern-2018_lfl-information.pdf"
                },
                {
                    SOURCE: "BVDF (2019)",
                    SOURCE_URL: "https://www.bvdf.de/aktuell/geschaeftsbericht-2018-19"
                },
                {
                    SOURCE: "Milchindustrie (2020)",
                    SOURCE_URL: "https://milchindustrie.de/wp-content/uploads/2018/11/ProkopfDeutschland_Mopro_2010-2018x_Homepage.pdf"
                },
                {
                    SOURCE: "Milch Thüringen (2020)",
                    SOURCE_URL: "https://www.milch-thueringen.de/content/milchverarbeitung"
                },
                {
                    SOURCE: "Meine Milch (2020)",
                    SOURCE_URL: "https://www.meine-milch.de/milkipedia/butter"
                },
                {
                    SOURCE: "Statista (2020)",
                    SOURCE_URL: "https://de.statista.com/statistik/daten/studie/153061/umfrage/durchschnittlicher-milchertrag-je-kuh-in-deutschland-seit-2000/"
                },
                {
                    SOURCE: "Dialog Milch (2020)",
                    SOURCE_URL: "https://www.dialog-milch.de/7-wie-alt-wird-eine-milchkuh/"
                }
            ]
        },
        VEGGIE: {
            PER_YEAR: 0.412689932 * 1.15, // + 15% da ausschließlich vegetarische Nahrung
            SOURCES: [
                {
                    SOURCE: "Milchindustrie (2020)",
                    SOURCE_URL: "https://milchindustrie.de/wp-content/uploads/2018/11/ProkopfDeutschland_Mopro_2010-2018x_Homepage.pdf"
                },
                {
                    SOURCE: "Milch Thüringen (2020)",
                    SOURCE_URL: "https://www.milch-thueringen.de/content/milchverarbeitung"
                },
                {
                    SOURCE: "Meine Milch (2020)",
                    SOURCE_URL: "https://www.meine-milch.de/milkipedia/butter"
                },
                {
                    SOURCE: "Statista (2020)",
                    SOURCE_URL: "https://de.statista.com/statistik/daten/studie/153061/umfrage/durchschnittlicher-milchertrag-je-kuh-in-deutschland-seit-2000/"
                },
                {
                    SOURCE: "Dialog Milch (2020)",
                    SOURCE_URL: "https://www.dialog-milch.de/7-wie-alt-wird-eine-milchkuh/"
                }
            ]
        },
        VEGAN: {
            PER_YEAR: 0,
            SOURCES: []
        }
    },
    GULLE: {
        ID: "gulle",
        LABEL: "l Gülle",
        NAME: "Gülle",
        PROBLEM: "Zu viel Düngung durch Gülle führt zu Stickstoffüberschüssen, welche das Grundwasser mit Nitrat und die Umgebungsluft mit Ammoniak belasten",
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
            PER_YEAR: 9.818461727 * 1000, // Umrechnung von Kubikmeter in Litern
            UNIT: "Liter",
            SOURCES: [
                {
                    SOURCE: "LFL Bayern (2019)",
                    SOURCE_URL: "https://www.lfl.bayern.de/mam/cms07/iab/dateien/basisdaten_20190131_4b.pdf"
                }
            ]
        },
        VEGGIE: {
            PER_YEAR: 7.039600935 * 1000, // Umrechnung von Kubikmeter in Litern
            UNIT: "Liter",
            SOURCES: [
                {
                    SOURCE: "LFL Bayern (2019)",
                    SOURCE_URL: "https://www.lfl.bayern.de/mam/cms07/iab/dateien/basisdaten_20190131_4b.pdf"
                }
            ]
        },
        VEGAN: {
            PER_YEAR: 0,
            SOURCES: []
        }
    },
    SOY: {
        ID: "soy",
        LABEL_1: "Kilogramm Gen-Soja-Import",
        LABEL: "kg Gen-Soja-Import",
        COUNT_ONE: "eine",
        NAME: "Gen-Soja",
        INCLUDED_TYPES: "importiert aus den USA, Brasilien und Kanada",
        PROBLEM: "Der Import führt neben der bedenklichen Genmanipulation zu Abholzung von Regenwäldern sowie Monokulturen.",
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
            PER_YEAR: 128.398954,
            UNIT: "Kilogramm",
            CALCULATION: "Annäherung anhand Tierbestand und Futtermittel-Import zu 90% Gen-Soja-Schrot (ohne pfl. Öle)",
            SOURCES: [
                {
                    SOURCE: "BMEL (2018)",
                    SOURCE_URL: "https://www.bmel-statistik.de/fileadmin/daten/DFT-0601010-2018.xlsx"
                },
                {
                    SOURCE: "Statista (2018)",
                    SOURCE_URL: "https://de.statista.com/statistik/daten/studie/659045/umfrage/nutztierbestand-in-deutschland/"
                }
            ]
        },
        VEGGIE: {
            PER_YEAR: 21.809637,
            UNIT: "Kilogramm",
            CALCULATION: "Annäherung anhand Tierbestand und Futtermittel-Import zu 90% Gen-Soja-Schrot (ohne pfl. Öle)",
            SOURCES: [
                {
                    SOURCE: "BMEL (2018)",
                    SOURCE_URL: "https://www.bmel-statistik.de/fileadmin/daten/DFT-0601010-2018.xlsx"
                },
                {
                    SOURCE: "Statista (2018)",
                    SOURCE_URL: "https://de.statista.com/statistik/daten/studie/659045/umfrage/nutztierbestand-in-deutschland/"
                }
            ]
        },
        VEGAN: {
            PER_YEAR: 0,
            SOURCES: []
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
            PER_YEAR: 53688.788,
            UNIT: "Milligramm",
            CALCULATION: "gemeldete Antibiotika-Einsätze (Mast) durch Landwirte in DE, Hochrechnung bei Nutztiere für Milch- und Eierproduktion",
            SOURCES: [
                {
                    SOURCE: "Tagesschau (2019)",
                    SOURCE_URL: "https://www.tagesschau.de/investigativ/ndr/antibiotika-landwirtschaft-101.html"
                },
                {
                    SOURCE: "Milchindustrie (2019)",
                    SOURCE_URL: "https://milchindustrie.de/wp-content/uploads/2018/11/Milchkuhbestände-_Haltungen_DE-2000-2019_Homepage.pdf"
                },
                {
                    SOURCE: "LGL Bayern (2014)",
                    SOURCE_URL: "https://www.lgl.bayern.de/aus_fort_weiterbildung/veranstaltungen/kongresse_veranstaltungen/doc/2014_lare_symp_wallmann.pdf"
                }
            ]
        },
        VEGGIE: {
            PER_YEAR: 7676.19,
            UNIT: "Milligramm",
            CALCULATION: "Hochrechnung bei Nutztiere für Milch- und Eierproduktion",
            SOURCES: [
                {
                    SOURCE: "Milchindustrie (2019)",
                    SOURCE_URL: "https://milchindustrie.de/wp-content/uploads/2018/11/Milchkuhbestände-_Haltungen_DE-2000-2019_Homepage.pdf"
                },
                {
                    SOURCE: "LGL Bayern (2014)",
                    SOURCE_URL: "https://www.lgl.bayern.de/aus_fort_weiterbildung/veranstaltungen/kongresse_veranstaltungen/doc/2014_lare_symp_wallmann.pdf"
                }
            ]
        },
        VEGAN: {
            PER_YEAR: 0,
            SOURCES: []
        }
    },
    CO2: {
        ID: "co2",
        LABEL_1: "Tonne CO<sub>2</sub>-Äquivalente",
        LABEL: "t CO<sub>2</sub>-Äquivalente",
        NAME: "CO<sub>2</sub>-Äquivalente",
        PROBLEM: "Kohlendioxid ist ein Treibhausgas und führt bei zunehmender Konzentration in der Atmosphäre zu einer Erwärmung des Erdklimas.",
        DE: {
            PER_YEAR: 20800000 * 5,
            UNIT: "Tonnen",
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
        },
        OMNI: {
            PER_YEAR: 2484,
            FACTOR: 0.001,
            UNIT: "Kilogramm",
            INCLUDED_TYPES: "berechnet aus emittiertem Kohlendioxid, Lachgas und Methan inklusive Kohlenstoffsenke und Savannenverbrennung",
            SOURCES: [
                {
                    SOURCE: "Joseph Poore (2018)",
                    SOURCE_URL: "https://ora.ox.ac.uk/objects/uuid:a63fb28c-98f8-4313-add6-e9eca99320a5"
                }
            ]
        },
        VEGGIE: {
            PER_YEAR: 770,
            FACTOR: 0.001,
            UNIT: "Kilogramm",
            INCLUDED_TYPES: "berechnet aus emittiertem Kohlendioxid, Lachgas und Methan inklusive Kohlenstoffsenke und Savannenverbrennung",
            SOURCES: [
                {
                    SOURCE: "Joseph Poore (2018)",
                    SOURCE_URL: "https://ora.ox.ac.uk/objects/uuid:a63fb28c-98f8-4313-add6-e9eca99320a5"
                }
            ]
        },
        VEGAN: {
            PER_YEAR: 415,
            FACTOR: 0.001,
            UNIT: "Kilogramm",
            INCLUDED_TYPES: "berechnet aus emittiertem Kohlendioxid, Lachgas und Methan inklusive Kohlenstoffsenke und Savannenverbrennung",
            SOURCES: [
                {
                    SOURCE: "Joseph Poore (2018)",
                    SOURCE_URL: "https://ora.ox.ac.uk/objects/uuid:a63fb28c-98f8-4313-add6-e9eca99320a5"
                }
            ]
        }
    }
};
