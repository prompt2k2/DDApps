import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { isOpen } from '@/access/access'
import { StatusBar } from '@/app/Shell'
import { useStudio } from '@/app/studio'
import type { AppLink } from '@/data/types'
import { useT } from '@/i18n'
import { useArea } from '@/progress/usage'
import { ItemTile } from '@/rewards/ItemTile'
import { clock } from '@/shared/clock'
import { Emoji } from '@/shared/Emoji'
import '@/games/Games.css'
import './Apps.css'

/**
 * Other apps and sites a parent approved (Mathletics, a browser…): locked until earned, like games and videos.
 * A plain tile leaves the app to open it, so unlike games and videos, time spent there afterwards is not metered
 * (no page in another tab can be watched or controlled by this one). A tile marked `embed` opens inside the app
 * instead, full screen, and is metered exactly like a game: time ticks down and it closes when earned time runs
 * out. Only some sites allow being shown this way (most apps from the Play Store never do).
 */
export function AppsScreen() {
  const t = useT()
  const { accessOf, settings } = useStudio()
  const state = accessOf('apps')
  const [open, setOpen] = useState<AppLink | null>(null)
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
      {settings.apps.map((a) =>
        a.embed ? (
          <button key={a.id} className="play-tile" onClick={() => setOpen(a)}>
            <Emoji name="game" size={64} />
            <b>{a.name}</b>
          </button>
        ) : (
          <a key={a.id} className="play-tile" href={a.url} target="_blank" rel="noopener noreferrer">
            <Emoji name="game" size={64} />
            <b>{a.name}</b>
          </a>
        ),
      )}
      {open && <AppFrame app={open} onClose={() => setOpen(null)} />}
    </div>
  )
}

function AppFrame({ app, onClose }: { app: AppLink; onClose: () => void }) {
  const t = useT()
  const { accessOf, earnedLeft } = useStudio()
  const state = accessOf('apps')
  const earned = state === 'earned'
  const open = isOpen(state)
  useArea(`app:${app.id}`, earned)
  // Earned time used up (or apps switched off) while one is open: it closes, same as a video.
  useEffect(() => {
    if (!open) onClose()
  }, [open, onClose])
  if (!open) return null
  return (
    <div className="game-frame">
      <StatusBar
        left={
          <>
            <button onClick={onClose}>
              <ArrowLeft /> {t.common.back}
            </button>
            <h2>{app.name}</h2>
            {earned && <span className="pill">{clock(earnedLeft)}</span>}
          </>
        }
      />
      {/* No popups and no navigating the app itself away. */}
      <iframe className="app-embed" src={app.url} title={app.name} allow="autoplay; fullscreen; gamepad" allowFullScreen sandbox="allow-scripts allow-same-origin allow-pointer-lock" />
    </div>
  )
}
