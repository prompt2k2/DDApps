import type { Lang } from '@/i18n'

// The planets library: a real NASA/Commons photo of each planet (public/photos/planets/<id>.jpg, credits in
// photo-credits.json), its place from the Sun, its moons, and two short true facts in each language.
// Moon counts (Oct 2026): small, stable numbers given exactly; Jupiter and Saturn's are given as "more than"
// since new moons are still being confirmed there. Pluto is a bonus: a dwarf planet, not one of the eight.

export interface Planet {
  id: string
  /** 1-8 from the Sun; Pluto (a dwarf planet) has none. */
  order?: number
  moons: number
  dwarf?: boolean
}

export const PLANETS: Planet[] = [
  { id: 'mercury', order: 1, moons: 0 },
  { id: 'venus', order: 2, moons: 0 },
  { id: 'earth', order: 3, moons: 1 },
  { id: 'mars', order: 4, moons: 2 },
  { id: 'jupiter', order: 5, moons: 95 },
  { id: 'saturn', order: 6, moons: 146 },
  { id: 'uranus', order: 7, moons: 28 },
  { id: 'neptune', order: 8, moons: 16 },
  { id: 'pluto', moons: 5, dwarf: true },
]

export const PLANET_TEXT: Record<string, Record<Lang, { name: string; facts: [string, string] }>> = {
  mercury: {
    en: { name: 'Mercury', facts: ['The smallest planet, and the closest to the Sun.', 'A year there (once around the Sun) takes only 88 Earth days.'] },
    de: { name: 'Merkur', facts: ['Der kleinste Planet und der Sonne am nächsten.', 'Ein Jahr dort (einmal um die Sonne) dauert nur 88 Erdtage.'] },
    fr: { name: 'Mercure', facts: ['La plus petite planète, et la plus proche du Soleil.', 'Une année là-bas (un tour du Soleil) ne dure que 88 jours terrestres.'] },
  },
  venus: {
    en: { name: 'Venus', facts: ['The hottest planet, even hotter than Mercury, because of its thick clouds.', 'It spins so slowly that one day there is longer than its year.'] },
    de: { name: 'Venus', facts: ['Der heißeste Planet, heißer sogar als Merkur, wegen seiner dicken Wolken.', 'Sie dreht sich so langsam, dass ein Tag dort länger ist als ihr Jahr.'] },
    fr: { name: 'Vénus', facts: ['La planète la plus chaude, plus encore que Mercure, à cause de ses épais nuages.', 'Elle tourne si lentement qu’un jour là-bas dure plus longtemps que son année.'] },
  },
  earth: {
    en: { name: 'Earth', facts: ['Our home, and the only planet we know of with life.', 'About seven-tenths of its surface is covered in water.'] },
    de: { name: 'Erde', facts: ['Unser Zuhause, und der einzige Planet, auf dem wir Leben kennen.', 'Etwa sieben Zehntel ihrer Oberfläche sind von Wasser bedeckt.'] },
    fr: { name: 'Terre', facts: ['Notre maison, et la seule planète où l’on connaisse la vie.', 'Environ sept dixièmes de sa surface sont couverts d’eau.'] },
  },
  mars: {
    en: { name: 'Mars', facts: ['Called the Red Planet because of the rusty dust that covers it.', 'It has two small moons, Phobos and Deimos.'] },
    de: { name: 'Mars', facts: ['Der Rote Planet, benannt nach dem rostroten Staub, der ihn bedeckt.', 'Er hat zwei kleine Monde, Phobos und Deimos.'] },
    fr: { name: 'Mars', facts: ['Surnommée la planète rouge à cause de la poussière rouille qui la couvre.', 'Elle a deux petites lunes, Phobos et Déimos.'] },
  },
  jupiter: {
    en: { name: 'Jupiter', facts: ['The biggest planet: more than 1,300 Earths could fit inside it.', 'It has more than 90 moons, and a giant storm called the Great Red Spot.'] },
    de: { name: 'Jupiter', facts: ['Der größte Planet: Mehr als 1.300 Erden würden in ihn hineinpassen.', 'Er hat mehr als 90 Monde und einen riesigen Sturm, den Großen Roten Fleck.'] },
    fr: { name: 'Jupiter', facts: ['La plus grande planète : plus de 1 300 Terres tiendraient à l’intérieur.', 'Elle a plus de 90 lunes, et une tempête géante appelée la Grande Tache rouge.'] },
  },
  saturn: {
    en: { name: 'Saturn', facts: ['Famous for its wide, bright rings made of ice and rock.', 'It has more moons than any other planet: more than 140.'] },
    de: { name: 'Saturn', facts: ['Berühmt für seine breiten, hellen Ringe aus Eis und Gestein.', 'Er hat mehr Monde als jeder andere Planet: mehr als 140.'] },
    fr: { name: 'Saturne', facts: ['Célèbre pour ses larges anneaux brillants faits de glace et de roche.', 'Elle a plus de lunes que toute autre planète : plus de 140.'] },
  },
  uranus: {
    en: { name: 'Uranus', facts: ['It spins on its side, almost like a rolling ball.', 'It looks pale blue because of a gas called methane in its air.'] },
    de: { name: 'Uranus', facts: ['Er dreht sich quer, fast wie ein rollender Ball.', 'Er wirkt blassblau wegen eines Gases namens Methan in seiner Luft.'] },
    fr: { name: 'Uranus', facts: ['Elle tourne sur le côté, presque comme une balle qui roule.', 'Elle paraît bleu pâle à cause d’un gaz appelé méthane dans son air.'] },
  },
  neptune: {
    en: { name: 'Neptune', facts: ['The farthest planet from the Sun, and one of the windiest places we know.', 'It was found by mathematics before anyone ever saw it through a telescope.'] },
    de: { name: 'Neptun', facts: ['Der sonnenfernste Planet und einer der windigsten Orte, die wir kennen.', 'Er wurde durch Mathematik entdeckt, bevor ihn je jemand durch ein Teleskop sah.'] },
    fr: { name: 'Neptune', facts: ['La planète la plus éloignée du Soleil, et l’un des endroits les plus venteux connus.', 'Elle a été découverte par le calcul avant que personne ne la voie au télescope.'] },
  },
  pluto: {
    en: { name: 'Pluto', facts: ['Once called the ninth planet; today it is called a dwarf planet.', 'It is so far away that sunlight takes about five and a half hours to reach it.'] },
    de: { name: 'Pluto', facts: ['Früher der neunte Planet genannt; heute heißt er Zwergplanet.', 'Er ist so weit weg, dass Sonnenlicht etwa fünfeinhalb Stunden braucht, um ihn zu erreichen.'] },
    fr: { name: 'Pluton', facts: ['Autrefois appelée neuvième planète, on l’appelle aujourd’hui planète naine.', 'Elle est si loin que la lumière du Soleil met environ cinq heures et demie à l’atteindre.'] },
  },
}

/** Most astronomy photos on Commons are PNG; a few (Mercury, Venus, Earth) came through as JPEG. */
const PNG = new Set(['mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'])

/** Photo address of a planet (relative to the app). */
export const planetPhoto = (id: string) => `photos/planets/${id}.${PNG.has(id) ? 'png' : 'jpg'}`
