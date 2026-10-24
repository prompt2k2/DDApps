// Words, animals and countries used by the lessons and games. Pictures: public/emoji/<emoji>.png.
// Facts are kept simple and true for young children; each was checked against general reference sources
// (to verify again before the v1 release: see ROADMAP).

export interface Fruit {
  /** public/emoji/fruit-<id>.png */
  id: string
  name: string
}

export const FRUITS: Fruit[] = [
  { id: 'apple', name: 'apple' },
  { id: 'banana', name: 'banana' },
  { id: 'grapes', name: 'grapes' },
  { id: 'strawberry', name: 'strawberry' },
  { id: 'cherries', name: 'cherries' },
  { id: 'watermelon', name: 'watermelon' },
  { id: 'pear', name: 'pear' },
  { id: 'pineapple', name: 'pineapple' },
  { id: 'lemon', name: 'lemon' },
  { id: 'kiwi', name: 'kiwi' },
  { id: 'peach', name: 'peach' },
  { id: 'mango', name: 'mango' },
  { id: 'blueberries', name: 'blueberries' },
  { id: 'coconut', name: 'coconut' },
]

export interface Animal {
  /** public/emoji/animal-<id>.png */
  id: string
  name: string
  /** One simple, true fact, written with "It" so it can be asked as "Which animal is this?". */
  fact: string
  /**
   * Animals the fact is also true of (or nearly, for a child): they are never offered as a wrong answer to it,
   * so every fact question has exactly one right answer. Checked by content.test.ts.
   */
  notWith?: string[]
  sea?: boolean
}

export const ANIMALS: Animal[] = [
  { id: 'fox', name: 'fox', fact: 'It hears so well that it can hear a mouse under the snow.', notWith: ['owl'] },
  { id: 'owl', name: 'owl', fact: 'It can turn its head a very long way round.' },
  { id: 'hedgehog', name: 'hedgehog', fact: 'It has thousands of spines on its back.' },
  { id: 'elephant', name: 'elephant', fact: 'It sucks up water with its trunk and squirts it into its mouth.' },
  { id: 'giraffe', name: 'giraffe', fact: 'It is the tallest animal on land.' },
  { id: 'penguin', name: 'penguin', fact: 'It is a bird that cannot fly, but it swims very well.' },
  { id: 'dolphin', name: 'dolphin', fact: 'It is a clever sea animal that clicks and whistles to talk to others.', notWith: ['spouting-whale'], sea: true },
  { id: 'lion', name: 'lion', fact: 'It lives in a group called a pride.' },
  { id: 'panda', name: 'panda', fact: 'It eats almost nothing but bamboo.' },
  { id: 'koala', name: 'koala', fact: 'It eats the leaves of eucalyptus trees.' },
  { id: 'turtle', name: 'turtle', fact: 'It has a hard shell and can live for a very long time.', notWith: ['snail', 'crab'] },
  { id: 'butterfly', name: 'butterfly', fact: 'It used to be a caterpillar.' },
  { id: 'honeybee', name: 'bee', fact: 'It makes honey from the nectar of flowers.' },
  { id: 'octopus', name: 'octopus', fact: 'It has eight arms.', sea: true },
  { id: 'frog', name: 'frog', fact: 'As a baby it was a tadpole in the water.' },
  { id: 'rabbit', name: 'rabbit', fact: 'It hops, has long ears and loves to nibble plants.', notWith: ['kangaroo'] },
  { id: 'chipmunk', name: 'chipmunk', fact: 'It carries nuts in its cheeks.' },
  { id: 'bear', name: 'bear', fact: 'It is very big and furry, and in winter it sleeps for a long time in a den.', notWith: ['panda'] },
  { id: 'tiger', name: 'tiger', fact: 'It is the biggest wild cat in the world.' },
  { id: 'zebra', name: 'zebra', fact: 'It lives in a big herd and has black and white stripes.' },
  { id: 'kangaroo', name: 'kangaroo', fact: 'It carries its baby in a pouch on its tummy.', notWith: ['koala'] },
  { id: 'spouting-whale', name: 'whale', fact: 'The blue one is the biggest animal in the world.', sea: true },
  { id: 'parrot', name: 'parrot', fact: 'Some of them can copy words.' },
  { id: 'flamingo', name: 'flamingo', fact: 'It is pink because it eats tiny pink shrimps.' },
  { id: 'snail', name: 'snail', fact: 'Its eyes sit on top of its feelers.' },
  { id: 'lady-beetle', name: 'ladybird', fact: 'It eats tiny bugs called aphids and so helps plants.' },
  { id: 'crab', name: 'crab', fact: 'It often walks sideways.', sea: true },
  { id: 'horse', name: 'horse', fact: 'People ride on it, and it eats hay and grass.', notWith: ['camel', 'elephant'] },
  { id: 'cow', name: 'cow', fact: 'It eats grass and gives us milk.', notWith: ['camel', 'horse'] },
  { id: 'hippopotamus', name: 'hippo', fact: "Its name means 'river horse'." },
  { id: 'camel', name: 'camel', fact: 'It has a hump on its back and can go a long time without water.' },
  { id: 'bat', name: 'bat', fact: 'It flies at night and finds its way with sounds.', notWith: ['owl'] },
  { id: 'peacock', name: 'peacock', fact: 'The male has colourful tail feathers.' },
  { id: 'shark', name: 'shark', fact: 'It keeps growing new teeth.', sea: true },
  { id: 'sloth', name: 'sloth', fact: 'It moves very, very slowly and hangs upside down in trees.' },
  { id: 'otter', name: 'otter', fact: 'Some of them float on their backs and hold paws while they sleep.' },
  { id: 'beaver', name: 'beaver', fact: 'It builds dams out of branches.' },
  { id: 'seal', name: 'seal', fact: 'On land it moves by wriggling along on its tummy.', notWith: ['snail'], sea: true },
  { id: 'swan', name: 'swan', fact: 'Its babies are grey.' },
  { id: 'mouse', name: 'mouse', fact: 'It is small, has a long thin tail and squeaks.', notWith: ['chipmunk'] },
]

/** Days since 1 Jan 1970 in local time. */
const dayNumber = (d: Date) => Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86_400_000)

/** Today's animal: a new one every day, all of them before one comes again. */
export const animalOfTheDay = (d: Date): Animal => ANIMALS[dayNumber(d) % ANIMALS.length]

/** A word with a picture (animals and fruit), for spelling and the word games. */
export interface Word {
  emoji: string
  word: string
}

export const WORDS: Word[] = [...ANIMALS.map((a) => ({ emoji: `animal-${a.id}`, word: a.name })), ...FRUITS.map((f) => ({ emoji: `fruit-${f.id}`, word: f.name }))]

// ---- Countries ----

// Flags are real photos of the flag (public/flags/<id>.svg, from Wikimedia Commons; see flag-sources.json
// and scripts/fetch-flags.mjs), not drawn by the app.

export type Continent = 'Europe' | 'Africa' | 'Asia' | 'North America' | 'South America' | 'Oceania'

export interface Country {
  id: string
  name: string
  capital: string
  continent: Continent
  /** A smaller area within the continent, for a two-level "where is it" picture (e.g. "West Africa"). */
  region: string
  /** What the people of this country are called (e.g. "Nigerians"). */
  demonym: string
  /** Language codes spoken there (see LANGUAGES), simplified to the handful a child would recognise. */
  languages: string[]
}

export const COUNTRIES: Country[] = [
  // Europe
  { id: 'de', name: 'Germany', capital: 'Berlin', continent: 'Europe', region: 'Western Europe', demonym: 'Germans', languages: ['de'] },
  { id: 'fr', name: 'France', capital: 'Paris', continent: 'Europe', region: 'Western Europe', demonym: 'French', languages: ['fr'] },
  { id: 'it', name: 'Italy', capital: 'Rome', continent: 'Europe', region: 'Southern Europe', demonym: 'Italians', languages: ['it'] },
  { id: 'ie', name: 'Ireland', capital: 'Dublin', continent: 'Europe', region: 'Northern Europe', demonym: 'Irish', languages: ['en', 'ga'] },
  { id: 'be', name: 'Belgium', capital: 'Brussels', continent: 'Europe', region: 'Western Europe', demonym: 'Belgians', languages: ['nl', 'fr', 'de'] },
  { id: 'at', name: 'Austria', capital: 'Vienna', continent: 'Europe', region: 'Western Europe', demonym: 'Austrians', languages: ['de'] },
  { id: 'nl', name: 'the Netherlands', capital: 'Amsterdam', continent: 'Europe', region: 'Western Europe', demonym: 'Dutch', languages: ['nl'] },
  { id: 'pl', name: 'Poland', capital: 'Warsaw', continent: 'Europe', region: 'Eastern Europe', demonym: 'Poles', languages: ['pl'] },
  { id: 'ua', name: 'Ukraine', capital: 'Kyiv', continent: 'Europe', region: 'Eastern Europe', demonym: 'Ukrainians', languages: ['uk'] },
  { id: 'hu', name: 'Hungary', capital: 'Budapest', continent: 'Europe', region: 'Eastern Europe', demonym: 'Hungarians', languages: ['hu'] },
  { id: 'ee', name: 'Estonia', capital: 'Tallinn', continent: 'Europe', region: 'Northern Europe', demonym: 'Estonians', languages: ['et'] },
  { id: 'se', name: 'Sweden', capital: 'Stockholm', continent: 'Europe', region: 'Northern Europe', demonym: 'Swedes', languages: ['sv'] },
  { id: 'dk', name: 'Denmark', capital: 'Copenhagen', continent: 'Europe', region: 'Northern Europe', demonym: 'Danes', languages: ['da'] },
  { id: 'fi', name: 'Finland', capital: 'Helsinki', continent: 'Europe', region: 'Northern Europe', demonym: 'Finns', languages: ['fi'] },
  { id: 'ch', name: 'Switzerland', capital: 'Bern', continent: 'Europe', region: 'Western Europe', demonym: 'Swiss', languages: ['de', 'fr', 'it'] },
  { id: 'gb', name: 'the United Kingdom', capital: 'London', continent: 'Europe', region: 'Northern Europe', demonym: 'British', languages: ['en'] },
  { id: 'es', name: 'Spain', capital: 'Madrid', continent: 'Europe', region: 'Southern Europe', demonym: 'Spaniards', languages: ['es'] },
  { id: 'pt', name: 'Portugal', capital: 'Lisbon', continent: 'Europe', region: 'Southern Europe', demonym: 'Portuguese', languages: ['pt'] },
  // Africa
  { id: 'ng', name: 'Nigeria', capital: 'Abuja', continent: 'Africa', region: 'West Africa', demonym: 'Nigerians', languages: ['en', 'yo', 'ha', 'ig'] },
  { id: 'ml', name: 'Mali', capital: 'Bamako', continent: 'Africa', region: 'West Africa', demonym: 'Malians', languages: ['fr', 'bm'] },
  { id: 'gn', name: 'Guinea', capital: 'Conakry', continent: 'Africa', region: 'West Africa', demonym: 'Guineans', languages: ['fr', 'su'] },
  { id: 'td', name: 'Chad', capital: "N'Djamena", continent: 'Africa', region: 'Central Africa', demonym: 'Chadians', languages: ['fr', 'ar'] },
  { id: 'ci', name: "Côte d'Ivoire", capital: 'Yamoussoukro', continent: 'Africa', region: 'West Africa', demonym: 'Ivorians', languages: ['fr'] },
  { id: 'sl', name: 'Sierra Leone', capital: 'Freetown', continent: 'Africa', region: 'West Africa', demonym: 'Sierra Leoneans', languages: ['en', 'kri'] },
  { id: 'ga', name: 'Gabon', capital: 'Libreville', continent: 'Africa', region: 'Central Africa', demonym: 'Gabonese', languages: ['fr'] },
  { id: 'eg', name: 'Egypt', capital: 'Cairo', continent: 'Africa', region: 'North Africa', demonym: 'Egyptians', languages: ['ar'] },
  { id: 'gh', name: 'Ghana', capital: 'Accra', continent: 'Africa', region: 'West Africa', demonym: 'Ghanaians', languages: ['en', 'ak'] },
  { id: 'ke', name: 'Kenya', capital: 'Nairobi', continent: 'Africa', region: 'East Africa', demonym: 'Kenyans', languages: ['sw', 'en'] },
  { id: 'za', name: 'South Africa', capital: 'Pretoria', continent: 'Africa', region: 'Southern Africa', demonym: 'South Africans', languages: ['en', 'zu', 'xh', 'af'] },
  { id: 'ma', name: 'Morocco', capital: 'Rabat', continent: 'Africa', region: 'North Africa', demonym: 'Moroccans', languages: ['ar', 'ber'] },
  // Asia
  { id: 'jp', name: 'Japan', capital: 'Tokyo', continent: 'Asia', region: 'East Asia', demonym: 'Japanese', languages: ['ja'] },
  { id: 'id', name: 'Indonesia', capital: 'Jakarta', continent: 'Asia', region: 'Southeast Asia', demonym: 'Indonesians', languages: ['id'] },
  { id: 'th', name: 'Thailand', capital: 'Bangkok', continent: 'Asia', region: 'Southeast Asia', demonym: 'Thai', languages: ['th'] },
  { id: 'ye', name: 'Yemen', capital: "Sana'a", continent: 'Asia', region: 'Middle East', demonym: 'Yemenis', languages: ['ar'] },
  { id: 'cn', name: 'China', capital: 'Beijing', continent: 'Asia', region: 'East Asia', demonym: 'Chinese', languages: ['zh'] },
  { id: 'in', name: 'India', capital: 'New Delhi', continent: 'Asia', region: 'South Asia', demonym: 'Indians', languages: ['hi', 'en', 'bn', 'ta'] },
  { id: 'ae', name: 'the United Arab Emirates', capital: 'Abu Dhabi', continent: 'Asia', region: 'Middle East', demonym: 'Emiratis', languages: ['ar'] },
  { id: 'kr', name: 'South Korea', capital: 'Seoul', continent: 'Asia', region: 'East Asia', demonym: 'South Koreans', languages: ['ko'] },
  // North America
  { id: 'us', name: 'the United States', capital: 'Washington, D.C.', continent: 'North America', region: 'North America', demonym: 'Americans', languages: ['en'] },
  { id: 'ca', name: 'Canada', capital: 'Ottawa', continent: 'North America', region: 'North America', demonym: 'Canadians', languages: ['en', 'fr'] },
  { id: 'mx', name: 'Mexico', capital: 'Mexico City', continent: 'North America', region: 'North America', demonym: 'Mexicans', languages: ['es'] },
  // South America
  { id: 'pe', name: 'Peru', capital: 'Lima', continent: 'South America', region: 'South America', demonym: 'Peruvians', languages: ['es', 'qu'] },
  { id: 'br', name: 'Brazil', capital: 'Brasília', continent: 'South America', region: 'South America', demonym: 'Brazilians', languages: ['pt'] },
  { id: 'ar', name: 'Argentina', capital: 'Buenos Aires', continent: 'South America', region: 'South America', demonym: 'Argentinians', languages: ['es'] },
  // Oceania
  { id: 'au', name: 'Australia', capital: 'Canberra', continent: 'Oceania', region: 'Oceania', demonym: 'Australians', languages: ['en'] },
  { id: 'nz', name: 'New Zealand', capital: 'Wellington', continent: 'Oceania', region: 'Oceania', demonym: 'New Zealanders', languages: ['en', 'mi'] },
]

export const CONTINENTS: Continent[] = ['Europe', 'Africa', 'Asia', 'North America', 'South America', 'Oceania']

/** Photo address of a country's flag (relative to the app): public/flags/<id>.svg. */
export const flagPhoto = (id: string) => `flags/${id}.svg`

/** A language's name in each app language, for "Which language is spoken in …?" and the countries library. */
export const LANGUAGES: Record<string, Record<'en' | 'de' | 'fr', string>> = {
  en: { en: 'English', de: 'Englisch', fr: 'anglais' },
  fr: { en: 'French', de: 'Französisch', fr: 'français' },
  de: { en: 'German', de: 'Deutsch', fr: 'allemand' },
  it: { en: 'Italian', de: 'Italienisch', fr: 'italien' },
  ga: { en: 'Irish', de: 'Irisch', fr: 'irlandais' },
  nl: { en: 'Dutch', de: 'Niederländisch', fr: 'néerlandais' },
  pl: { en: 'Polish', de: 'Polnisch', fr: 'polonais' },
  uk: { en: 'Ukrainian', de: 'Ukrainisch', fr: 'ukrainien' },
  hu: { en: 'Hungarian', de: 'Ungarisch', fr: 'hongrois' },
  et: { en: 'Estonian', de: 'Estnisch', fr: 'estonien' },
  sv: { en: 'Swedish', de: 'Schwedisch', fr: 'suédois' },
  da: { en: 'Danish', de: 'Dänisch', fr: 'danois' },
  fi: { en: 'Finnish', de: 'Finnisch', fr: 'finnois' },
  yo: { en: 'Yoruba', de: 'Yoruba', fr: 'yoruba' },
  ha: { en: 'Hausa', de: 'Hausa', fr: 'haoussa' },
  ig: { en: 'Igbo', de: 'Igbo', fr: 'igbo' },
  bm: { en: 'Bambara', de: 'Bambara', fr: 'bambara' },
  su: { en: 'Susu', de: 'Susu', fr: 'soussou' },
  ar: { en: 'Arabic', de: 'Arabisch', fr: 'arabe' },
  kri: { en: 'Krio', de: 'Krio', fr: 'krio' },
  ja: { en: 'Japanese', de: 'Japanisch', fr: 'japonais' },
  id: { en: 'Indonesian', de: 'Indonesisch', fr: 'indonésien' },
  th: { en: 'Thai', de: 'Thailändisch', fr: 'thaï' },
  es: { en: 'Spanish', de: 'Spanisch', fr: 'espagnol' },
  qu: { en: 'Quechua', de: 'Quechua', fr: 'quechua' },
  pt: { en: 'Portuguese', de: 'Portugiesisch', fr: 'portugais' },
  zu: { en: 'Zulu', de: 'Zulu', fr: 'zoulou' },
  xh: { en: 'Xhosa', de: 'Xhosa', fr: 'xhosa' },
  af: { en: 'Afrikaans', de: 'Afrikaans', fr: 'afrikaans' },
  ber: { en: 'Berber', de: 'Berberisch', fr: 'berbère' },
  zh: { en: 'Mandarin Chinese', de: 'Mandarin-Chinesisch', fr: 'chinois mandarin' },
  hi: { en: 'Hindi', de: 'Hindi', fr: 'hindi' },
  bn: { en: 'Bengali', de: 'Bengalisch', fr: 'bengali' },
  ta: { en: 'Tamil', de: 'Tamil', fr: 'tamoul' },
  ko: { en: 'Korean', de: 'Koreanisch', fr: 'coréen' },
  ak: { en: 'Akan (Twi)', de: 'Akan (Twi)', fr: 'akan (twi)' },
  sw: { en: 'Swahili', de: 'Swahili', fr: 'swahili' },
  mi: { en: 'Māori', de: 'Māori', fr: 'māori' },
}

// ---- English word lists ----

export const PLURALS: [string, string][] = [
  ['cat', 'cats'], ['dog', 'dogs'], ['fox', 'foxes'], ['bus', 'buses'], ['box', 'boxes'], ['dress', 'dresses'],
  ['brush', 'brushes'], ['peach', 'peaches'], ['baby', 'babies'], ['cherry', 'cherries'], ['toy', 'toys'],
  ['key', 'keys'], ['mouse', 'mice'], ['child', 'children'], ['foot', 'feet'], ['tooth', 'teeth'], ['man', 'men'],
  ['woman', 'women'], ['sheep', 'sheep'], ['leaf', 'leaves'], ['wolf', 'wolves'], ['knife', 'knives'],
  ['tomato', 'tomatoes'], ['potato', 'potatoes'],
]

export const PAST_TENSES: [string, string][] = [
  ['play', 'played'], ['jump', 'jumped'], ['walk', 'walked'], ['like', 'liked'], ['dance', 'danced'], ['hop', 'hopped'],
  ['stop', 'stopped'], ['cry', 'cried'], ['try', 'tried'], ['run', 'ran'], ['go', 'went'], ['see', 'saw'], ['eat', 'ate'],
  ['swim', 'swam'], ['sing', 'sang'], ['sit', 'sat'], ['make', 'made'], ['take', 'took'], ['write', 'wrote'],
  ['come', 'came'], ['have', 'had'], ['say', 'said'], ['find', 'found'], ['drink', 'drank'], ['fly', 'flew'],
]

export const OPPOSITES: [string, string][] = [
  ['big', 'small'], ['hot', 'cold'], ['up', 'down'], ['happy', 'sad'], ['fast', 'slow'], ['open', 'closed'],
  ['day', 'night'], ['full', 'empty'], ['wet', 'dry'], ['loud', 'quiet'], ['light', 'dark'], ['first', 'last'],
  ['in', 'out'], ['hard', 'soft'], ['early', 'late'], ['high', 'low'],
]

/** Words for "a" or "an" (no tricky ones like "hour" or "unicorn" at this stage). */
export const A_AN: { word: string; emoji?: string }[] = [
  { word: 'apple', emoji: 'fruit-apple' }, { word: 'owl', emoji: 'animal-owl' }, { word: 'elephant', emoji: 'animal-elephant' },
  { word: 'octopus', emoji: 'animal-octopus' }, { word: 'otter', emoji: 'animal-otter' }, { word: 'umbrella', emoji: 'umbrella' },
  { word: 'fox', emoji: 'animal-fox' }, { word: 'banana', emoji: 'fruit-banana' }, { word: 'lion', emoji: 'animal-lion' },
  { word: 'pear', emoji: 'fruit-pear' }, { word: 'bear', emoji: 'animal-bear' }, { word: 'snail', emoji: 'animal-snail' },
  { word: 'cake', emoji: 'cake' }, { word: 'bus', emoji: 'bus' },
]

/**
 * Common short English words. A "missing letter" question never offers a wrong letter that would make one of
 * these (b_t → "bet", "bit", "but"), so only the right letter makes a real word. Add words here when needed.
 */
export const COMMON_WORDS = new Set(
  `bad bag ban bar bash bat bean bear bed bee beer beg bet bid big bin bit boar bog bowl box bud bug bun bus bush
  but cab can cap car cash cat coal cool cot cow crab cram crib cub cup cut dad dear deer den did die dig dim dip
  dish dog door dot dug ear eat egg end fan far fat fax fear fed fig fin fish fit fix foal fog four fox frog from
  fun fur gap gas gear get goal got grab gum gun had ham hare has hat hen her here hid him hip hire his hit hog
  hole hop hot howl hug hut jam jar jet jog jug kid kit lamp lap leg let lid lie limp lion lip lit log loin lot
  lump mad male man map mare mash mat men met mile mire mix mole mop more mud mug mule nap near net nod not nut
  owl owls pan pat pear peer peg pen pet pie pier pig pin pit poor pot pub pup rag ram ran rat red rib rid rim
  rip rob rod rot row rub rug run sad sail sat seal sell set sit six sob soil sow sun tab tag tan tap ten tie tin
  tip toe ton top tour tow tub tug van vet wag web wet wig win wish wit yes yet zip`.split(/\s+/),
)
