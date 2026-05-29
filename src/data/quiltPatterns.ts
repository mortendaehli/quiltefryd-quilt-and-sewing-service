export interface QuiltPattern {
  nr: number
  name: string
  price: number
  src: string
  filename: string
}

export const quiltPatternFiles: string[] = [
  'nr 1 continuous-baptist-fan_2 kr 325 m2.jpg',
  'nr 2 Jessies Continiuous Baptist Fan kr 325 m2.jpg',
  'nr 3 Baptist Swirl kr 325 m2.png',
  'nr 4 AngelWings kr 320 m2.jpg',
  'nr 5 BOXTROT kr 325 m2.png',
  'nr 6 Starlight kr 325 m2.jpg',
  'nr 8 spring in spades kr 325 m2.webp',
  'nr 9 Daisies-Galore kr 325 m2.webp',
  'nr 10 Jester kr 325 m2.png',
  'nr 11 Lather Rinse Repeat kr 380 m2.png',
  'nr 12 Wandering-Daisies kr 325 m2.jpg',
  'nr 13 butterfly-charm kr 325 m2.png',
  'nr 15 dainty-lady-floral kr 325 m2.png',
  'nr 17 Looseleaf kr 325 m2.jpg',
  'nr 18 periwinkle petite kr 325 m2.png',
  'nr 19 Butterfly Beauty kr 325 m2.jpg',
  'nr 21 fish-net 325 m2.png',
  'nr 22 Good Vibrations kr 390 m2.jpg',
  'nr 23 Paradox kr 325 m2.png',
  'nr 24 Illusion kr 325 m2.png',
  'nr 25 Daisy-Delight kr 325 m2.jpg',
  'nr 26 Cotton kr 300 m2.png',
  'nr 27 flower-of-life kr 325 m2.png',
  'nr 28 Elephants kr 325 m2.jpg',
  'nr 30 blowing-in-the-wind kr 325 m2.png',
  'nr 31 apricot-moons-bubbles kr 325 m2.png',
  'nr 32 aqua-flame kr 325 m2 .png',
  'nr 35 Fractal kr 325 m2.jpg',
  'nr 36 Daisy-Bounce kr 325 m2.webp',
  'nr 37 Infinite-Flame kr 325 m2.webp',
  'nr 38 ForeverDaisies 325 m2.webp',
  'nr 39 Puddles kr 325 m2.webp',
  'nr 40 OneCloudyDay kr 320 m2.jpg',
  'nr 41 WaterDipper kr 325 m2.webp',
  'nr 42 Herringbone kr 325 m2.webp',
  'nr 43 Flirtatious-Leaves kr 310 m2.webp',
  'nr 44 APRICOT-MOONS-RIBBON-N-BOWS kr 380 m2.png',
  'nr 45 FANCIFUL-FLYERS kr 325 m2.png',
  'nr 47 DIAGONAL-PLAID-HEXIES kr 325 m2.png',
  'nr 49 SCOTTISH-PLAID-DIAMOND-CUT kr 325 m2.png',
  'nr 51 Spring-Vine kr 325 m2.png',
  'nr 52 CHANTILLY kr 380 m2.png',
  'nr 53 triangle-tangle kr 325 m2.png',
  'nr 54 AMETHYST kr 380 m2.png',
  'nr 55 DIAGONAL-PLAID-BIAS-CUT kr 325 m2.png',
  'nr 56 EASY-ORANGE-PEEL kr 325 m2.png',
  'nr 57 KUDZU kr 325 m2.png',
  'Nr 58 Contempo kr 325 m2.jpg',
  'nr 59 KP-Beadsies-1 kr 325 m2.gif',
  'Nr 60 carpetleaves kr 325 m2.jpg',
  'nr 61 Oscillating Ovals kr 325 m2.gif',
  'nr 62 Snow Clams kr 380 m2.png',
  'nr 63 Funky Fans kr 325 m2.gif',
  'nr 64 KE-chevrons-2 kr 340 m2.gif',
]

const FILENAME_RE = /^[Nn]r\s+(\d+)\s+(.+?)\s+(?:kr\s+)?(\d+)\s+m2\s*\.[a-z]+$/i

function prettifyName(raw: string): string {
  return raw
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((w) => (w.length > 0 ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
    .join(' ')
}

export function parseQuiltPattern(filename: string): QuiltPattern {
  const match = FILENAME_RE.exec(filename)
  if (!match) {
    throw new Error(`Klarte ikke parse mønsterfilnavn: ${filename}`)
  }
  const [, nrStr, rawName, priceStr] = match
  return {
    nr: parseInt(nrStr, 10),
    name: prettifyName(rawName),
    price: parseInt(priceStr, 10),
    src: `${import.meta.env.BASE_URL}images/quilt-patterns/${filename}`,
    filename,
  }
}

export const quiltPatterns: QuiltPattern[] = quiltPatternFiles
  .map(parseQuiltPattern)
  .sort((a, b) => a.nr - b.nr)
