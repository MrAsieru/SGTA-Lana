export interface Aukera {
    id: number, // Barne identifikazioa
    pref?: string, // Aukeratutako preferentzia
    iterazioak?: {
        img: string,
        text: string
    }[],
    denbora: Denbora, 
    xehetasunak: {
        informazioa?: string, // Adibidez, "18:52 desde Mimetiz"
        ibilbideak: Ibilbidea[] // Garraiobideak
    }
}

export interface Ibilbidea {
    id: number, // Barne identifikazioa
    izena?: string, // Linearen izena
    helmuga?: string, // Linearen helmuga
    mota: IbilbideMota,
    kokapenak: { // Bilaketaren hasiera eta amaiera kokapenak
        hasiera: string,
        amaiera: string
    },
    denbora: Denbora
}

export interface Lekua {
    izena: string,
    koord?: Koordenatuak
}

export interface Koordenatuak {
    lat: number,
    lng: number
}

export interface Denbora {
    hasiera: string, // Hasiera ordua (hh:mm)
    amaiera: string, // Amaiera ordua (hh:mm)
    iraupena?: string // Iraupena (dd:hh:mm)
}

export enum IbilbideMota {
    bus,
    tren,
    metro,
    tranvia,
    oinez
}

export enum ordenMota {
    azkarragoa,
    lehenaAilegatzeko
}
  
