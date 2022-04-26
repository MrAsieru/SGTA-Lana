import { Duration } from 'moment';
import { Garraiobidea } from './garraiobidea';

export interface Aukera {
    id: number; // Identifikazioa
    hasiera: string; // Hasiera lekua
    amaiera: string; // Amaiera lekua
    denbora: {
        hasiera: string; // Hasiera ordua
        amaiera: string; // Amaiera ordua
        iraupena: Duration; // Iraupena ddhhmmss
    };
    informazioa?: string; // Adibidez, "18:52 desde Mimetiz"
    garraiobideak: Garraiobidea[]; // Garraiobideak
}

export interface Garraiobidea {
    id: number; // Identifikazioa (barnekoa)
    izena: string;
    helmuga: string; // Linearen helmuga
    mota: GarraioMota;

    hasiera: string; // Hasiera lekua
    amaiera: string; // Amaiera lekua
    denbora: {
        hasiera: string;
        amaiera: string;
    };
}

enum GarraioMota {
    bus,
    tren,
    metro,
    tranvia
}