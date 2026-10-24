// A small "where is it" map: a blank world map (public/maps/world.svg, equirectangular projection) with a pin
// at the given coordinates, placed by simple linear projection (that's what this map image is built for).

export function WorldMap({ lat, lon }: { lat: number; lon: number }) {
  const x = ((lon + 180) / 360) * 100
  const y = ((90 - lat) / 180) * 100
  return (
    <div className="world-map">
      <img src={`${import.meta.env.BASE_URL}maps/world.svg`} alt="" draggable={false} />
      <span className="world-map-pin" style={{ left: `${x}%`, top: `${y}%` }} aria-hidden="true" />
    </div>
  )
}
