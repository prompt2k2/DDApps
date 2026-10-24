import { isOpen } from '@/access/access'
import { useStudio } from '@/app/studio'
import { useT } from '@/i18n'
import { ItemTile } from '@/rewards/ItemTile'
import { Emoji } from '@/shared/Emoji'
import '@/games/Games.css'
import './Apps.css'

/**
 * Other apps and sites a parent approved (Mathletics, a browser…): locked until earned, like games and videos.
 * Tapping a tile leaves the app to open it, so unlike games and videos, time spent there afterwards is not metered.
 */
export function AppsScreen() {
  const t = useT()
  const { accessOf, settings } = useStudio()
  const state = accessOf('apps')
  if (state === 'hidden') return null
  if (!isOpen(state)) {
    return (
      <div className="apps-locked">
        <ItemTile id="apps" onOpen={() => {}} />
      </div>
    )
  }
  if (settings.apps.length === 0) return <p className="muted">{t.apps.none}</p>
  return (
    <div className="games-screen">
      {settings.apps.map((a) => (
        <a key={a.id} className="play-tile" href={a.url} target="_blank" rel="noopener noreferrer">
          <Emoji name="game" size={64} />
          <b>{a.name}</b>
        </a>
      ))}
    </div>
  )
}
