import { COUNTRIES, flagPhoto } from '@/lessons/data'

/** The flag of a country by its id ("fr"), a real image (public/flags/<id>.svg), or nothing for an unknown id. */
export function CountryFlag({ id, width = 120 }: { id: string; width?: number }) {
  const c = COUNTRIES.find((x) => x.id === id)
  if (!c) return null
  return (
    <img
      src={`${import.meta.env.BASE_URL}${flagPhoto(id)}`}
      width={width}
      style={{ aspectRatio: '3 / 2', objectFit: 'contain', border: '1px solid rgb(0 0 0 / 18%)' }}
      alt=""
      draggable={false}
      className="flag"
    />
  )
}
