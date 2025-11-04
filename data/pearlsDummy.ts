import { pearlImages } from "../constants/pearlImage";
import { Pearl } from "../types/pearl"

export const DummyPearls: Pearl[] = [
    {
        id: "p1",
        title: "Fredriksten Festning",
        description: "Fredriksten festning, et historisk landemerke og populært utfartssted i Halden. Her kan du utforske de gamle bygningene, lære mer om festningens rolle som grensevern gjennom flere hundre år, og ta del i konserter, festivaler og ulike kulturarrangementer. Festningsområdet er åpent for alle, med fine turstier, utsiktspunkter og hyggelige serveringssteder hvor du kan nyte en kaffepause eller et godt måltid.",
        imageLocal: pearlImages.fredriksten,
        rating: 3.7,
        createdBy: "Ole Nordman"
    },
    {
        id: "p2",
        title: "Lofoten",
        description: "En øyegruppe i Nordland.",
        imageLocal: pearlImages.lofoten,
        rating: 4.8,
        createdBy: "Nora",
    },
    {
        id: "p3",
        title: "Høgskolen i Østfold",
        description: "En statlig høgskole i Norge.",
        imageLocal: pearlImages.hiof,
        createdBy: "Meg"
    },
    {
        id: "p4",
        title: "Vigelandsparken",
        description: "Skulpturalegget i Frognerparen i Oslo.",
        imageLocal: pearlImages.vigelandsparken,
        createdBy: "Deg"
    },

]