import type { Lang } from '@/i18n'

// Physical geography: rivers, oceans, volcanoes and rock types, each with a real photo
// (public/photos/earth/<id>.jpg, credits in photo-credits.json) and two short facts in each language.
// Rivers and volcanoes are tied to the country/countries they're in (ids from lessons/data.ts COUNTRIES),
// so a country's library card can mention what's nearby. Oceans and rock types have no single country.

export type EarthCategory = 'river' | 'ocean' | 'volcano' | 'rock'

export interface EarthEntry {
  id: string
  category: EarthCategory
  /** Country id(s) from COUNTRIES this is in or right next to (rivers, volcanoes only). */
  countries?: string[]
  text: Record<Lang, { name: string; about: string }>
}

const e = (id: string, category: EarthCategory, countries: string[] | undefined, en: [string, string], de: [string, string], fr: [string, string]): EarthEntry => ({
  id,
  category,
  countries,
  text: { en: { name: en[0], about: en[1] }, de: { name: de[0], about: de[1] }, fr: { name: fr[0], about: fr[1] } },
})

export const EARTH: EarthEntry[] = [
  // Rivers
  e('nile', 'river', ['eg'],
    ['The Nile', 'The longest river in Africa, flowing north through Egypt to the Mediterranean Sea.'],
    ['Der Nil', 'Der längste Fluss Afrikas. Er fließt nordwärts durch Ägypten ins Mittelmeer.'],
    ['Le Nil', 'Le plus long fleuve d’Afrique. Il coule vers le nord, à travers l’Égypte, jusqu’à la mer Méditerranée.']),
  e('amazon', 'river', ['br'],
    ['The Amazon', 'The river carrying more water than any other in the world, flowing through the rainforest in Brazil.'],
    ['Der Amazonas', 'Der wasserreichste Fluss der Welt. Er fließt durch den Regenwald in Brasilien.'],
    ['L’Amazone', 'Le fleuve qui transporte le plus d’eau au monde. Il traverse la forêt tropicale au Brésil.']),
  e('yangtze', 'river', ['cn'],
    ['The Yangtze', 'The longest river in Asia, flowing right across China to the East China Sea.'],
    ['Der Jangtse', 'Der längste Fluss Asiens. Er fließt quer durch China bis zum Ostchinesischen Meer.'],
    ['Le Yangtsé', 'Le plus long fleuve d’Asie. Il traverse toute la Chine jusqu’à la mer de Chine orientale.']),
  e('mississippi', 'river', ['us'],
    ['The Mississippi', 'One of the longest rivers in North America, flowing through the middle of the United States.'],
    ['Der Mississippi', 'Einer der längsten Flüsse Nordamerikas. Er fließt mitten durch die Vereinigten Staaten.'],
    ['Le Mississippi', 'L’un des plus longs fleuves d’Amérique du Nord. Il traverse le centre des États-Unis.']),
  e('danube', 'river', ['at'],
    ['The Danube', 'A long river flowing through many countries of Europe, including Austria and Hungary.'],
    ['Die Donau', 'Ein langer Fluss, der durch viele Länder Europas fließt, auch durch Österreich und Ungarn.'],
    ['Le Danube', 'Un long fleuve qui traverse de nombreux pays d’Europe, dont l’Autriche et la Hongrie.']),
  e('niger', 'river', ['ng', 'ml'],
    ['The Niger', 'A major river of West Africa, flowing through Mali and Nigeria before reaching the sea.'],
    ['Der Niger', 'Ein bedeutender Fluss Westafrikas. Er fließt durch Mali und Nigeria, bevor er das Meer erreicht.'],
    ['Le fleuve Niger', 'Un grand fleuve d’Afrique de l’Ouest. Il traverse le Mali et le Nigeria avant d’atteindre la mer.']),
  e('ganges', 'river', ['in'],
    ['The Ganges', 'A river in India that begins high in the Himalaya mountains and flows to the Bay of Bengal.'],
    ['Der Ganges', 'Ein Fluss in Indien. Er entspringt hoch im Himalaya und fließt bis zum Golf von Bengalen.'],
    ['Le Gange', 'Un fleuve d’Inde qui prend sa source tout en haut de l’Himalaya et se jette dans le golfe du Bengale.']),
  // Oceans
  e('pacific', 'ocean', undefined,
    ['The Pacific Ocean', 'The biggest and deepest ocean, stretching between Asia, Australia and the Americas.'],
    ['Der Pazifik', 'Der größte und tiefste Ozean. Er erstreckt sich zwischen Asien, Australien und Amerika.'],
    ['L’océan Pacifique', 'Le plus grand et le plus profond des océans. Il s’étend entre l’Asie, l’Australie et les Amériques.']),
  e('atlantic', 'ocean', undefined,
    ['The Atlantic Ocean', 'The second-biggest ocean, between the Americas, Europe and Africa.'],
    ['Der Atlantik', 'Der zweitgrößte Ozean, zwischen Amerika, Europa und Afrika.'],
    ['L’océan Atlantique', 'Le deuxième plus grand océan, entre les Amériques, l’Europe et l’Afrique.']),
  e('indian-ocean', 'ocean', undefined,
    ['The Indian Ocean', 'The warmest ocean, between Africa, Asia and Australia.'],
    ['Der Indische Ozean', 'Der wärmste Ozean, zwischen Afrika, Asien und Australien.'],
    ['L’océan Indien', 'L’océan le plus chaud, entre l’Afrique, l’Asie et l’Australie.']),
  e('southern-ocean', 'ocean', undefined,
    ['The Southern Ocean', 'The ocean around Antarctica, only agreed on as its own ocean by mapmakers in 2000.'],
    ['Der Südliche Ozean', 'Der Ozean rund um die Antarktis. Erst im Jahr 2000 einigten sich Kartografen, ihn als eigenen Ozean zu zählen.'],
    ['L’océan Austral', 'L’océan qui entoure l’Antarctique. Les cartographes ne l’ont reconnu comme océan à part qu’en 2000.']),
  e('arctic', 'ocean', undefined,
    ['The Arctic Ocean', 'The smallest and coldest ocean, around the North Pole.'],
    ['Der Arktische Ozean', 'Der kleinste und kälteste Ozean, rund um den Nordpol.'],
    ['L’océan Arctique', 'Le plus petit et le plus froid des océans, autour du pôle Nord.']),
  // Volcanoes
  e('vesuvius', 'volcano', ['it'],
    ['Mount Vesuvius', 'A volcano in Italy that buried the Roman city of Pompeii in ash nearly 2,000 years ago.'],
    ['Der Vesuv', 'Ein Vulkan in Italien, der die römische Stadt Pompeji vor fast 2.000 Jahren unter Asche begrub.'],
    ['Le Vésuve', 'Un volcan italien qui a enseveli la ville romaine de Pompéi sous la cendre, il y a presque 2 000 ans.']),
  e('krakatoa', 'volcano', ['id'],
    ['Krakatoa', 'A volcano in Indonesia whose huge 1883 eruption was heard thousands of kilometres away.'],
    ['Krakatau', 'Ein Vulkan in Indonesien. Sein gewaltiger Ausbruch im Jahr 1883 war Tausende Kilometer weit zu hören.'],
    ['Le Krakatoa', 'Un volcan d’Indonésie dont l’énorme éruption de 1883 s’est entendue à des milliers de kilomètres.']),
  e('maunaloa', 'volcano', ['us'],
    ['Mauna Loa', 'One of the biggest active volcanoes on Earth, on the island of Hawaii.'],
    ['Mauna Loa', 'Einer der größten aktiven Vulkane der Erde, auf der Insel Hawaii.'],
    ['Le Mauna Loa', 'L’un des plus grands volcans actifs de la Terre, sur l’île d’Hawaï.']),
  e('sthelens', 'volcano', ['us'],
    ['Mount St. Helens', 'A volcano in the United States whose 1980 eruption blew the top off the mountain.'],
    ['Mount St. Helens', 'Ein Vulkan in den USA. Bei seinem Ausbruch 1980 wurde die Bergspitze weggesprengt.'],
    ['Le mont St. Helens', 'Un volcan des États-Unis dont l’éruption de 1980 a arraché le sommet de la montagne.']),
  e('etna', 'volcano', ['it'],
    ['Mount Etna', 'The tallest active volcano in Europe, on the island of Sicily in Italy.'],
    ['Der Ätna', 'Der höchste aktive Vulkan Europas, auf der italienischen Insel Sizilien.'],
    ['L’Etna', 'Le plus haut volcan actif d’Europe, sur l’île italienne de Sicile.']),
  e('popocatepetl', 'volcano', ['mx'],
    ['Popocatépetl', 'An active volcano near Mexico City, one of the most watched volcanoes in the world.'],
    ['Popocatépetl', 'Ein aktiver Vulkan nahe Mexiko-Stadt, einer der am meisten beobachteten Vulkane der Welt.'],
    ['Le Popocatépetl', 'Un volcan actif près de Mexico, l’un des volcans les plus surveillés au monde.']),
  // Rock types
  e('igneous', 'rock', undefined,
    ['Igneous rock', 'Rock formed when hot, melted rock called magma cools down and turns solid. Granite and basalt are both igneous rocks.'],
    ['Magmatisches Gestein', 'Gestein, das entsteht, wenn heißes, geschmolzenes Magma abkühlt und fest wird. Granit und Basalt sind magmatische Gesteine.'],
    ['Roche magmatique', 'Une roche formée quand le magma, de la roche fondue très chaude, refroidit et durcit. Le granite et le basalte sont des roches magmatiques.']),
  e('sedimentary', 'rock', undefined,
    ['Sedimentary rock', 'Rock formed from layers of sand, mud or shells, pressed together over millions of years. Sandstone and limestone are both sedimentary rocks.'],
    ['Sedimentgestein', 'Gestein, das aus Schichten von Sand, Schlamm oder Muscheln entsteht, über Millionen Jahre zusammengepresst. Sandstein und Kalkstein sind Sedimentgesteine.'],
    ['Roche sédimentaire', 'Une roche formée de couches de sable, de boue ou de coquillages, comprimées pendant des millions d’années. Le grès et le calcaire sont des roches sédimentaires.']),
  e('metamorphic', 'rock', undefined,
    ['Metamorphic rock', 'Rock that has been changed by great heat and pressure deep underground. Marble and slate are both metamorphic rocks.'],
    ['Metamorphes Gestein', 'Gestein, das sich tief unter der Erde durch große Hitze und großen Druck verändert hat. Marmor und Schiefer sind metamorphe Gesteine.'],
    ['Roche métamorphique', 'Une roche transformée par une grande chaleur et une forte pression, loin sous terre. Le marbre et l’ardoise sont des roches métamorphiques.']),
]

/** The oceans came through as PNG maps (there's no single "photo" of an ocean); everything else is JPEG. */
const PNG = new Set(['pacific', 'atlantic', 'indian-ocean', 'southern-ocean', 'arctic'])

/** Photo address of an Earth entry (relative to the app). */
export const earthPhoto = (id: string) => `photos/earth/${id}.${PNG.has(id) ? 'png' : 'jpg'}`
