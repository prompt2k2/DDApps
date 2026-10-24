import { useState } from 'react'
import { useStudio } from '@/app/studio'
import type { ActivityStats } from './stats'
import { LOCALES, useLang, useT } from '@/i18n'
import { Emoji } from '@/shared/Emoji'
import { isDue } from '@/shared/schoolCalendar'
import { activityLabel } from './label'
import { yearStats } from './stats'
import './Routine.css'

/** The Routine tab: today's checklist, and a Progress view of the year (mirrors a paper tracker). */
export function RoutineScreen() {
  const t = useT()
  const [tab, setTab] = useState<'today' | 'progress'>('today')
  return (
    <div className="routine-screen">
      <div className="segmented">
        <button className={tab === 'today' ? '' : 'secondary'} onClick={() => setTab('today')}>
          {t.routine.tabs.today}
        </button>
        <button className={tab === 'progress' ? '' : 'secondary'} onClick={() => setTab('progress')}>
          {t.routine.tabs.progress}
        </button>
      </div>
      {tab === 'today' ? <TodayTab /> : <ProgressTab />}
    </div>
  )
}

function TodayTab() {
  const t = useT()
  const { now, today, settings, routine, updateRoutine } = useStudio()
  const activities = settings.routine.activities.filter((a) => a.enabled && isDue(a, now, settings.routine))
  const todayDone = routine.days[today] ?? {}
  const doneCount = activities.filter((a) => todayDone[a.id]).length
  const toggle = (id: string) =>
    updateRoutine((r) => ({ ...r, days: { ...r.days, [today]: { ...r.days[today], [id]: !r.days[today]?.[id] } } }))

  if (activities.length === 0) return <p className="muted">{t.routine.noneToday}</p>
  return (
    <div className="routine-today">
      <p className="pill">{t.routine.doneOf(doneCount, activities.length)}</p>
      {doneCount === activities.length && (
        <p className="routine-alldone">
          <Emoji name="sparkles" size={30} /> {t.routine.allDone}
        </p>
      )}
      <div className="routine-list">
        {activities.map((a) => {
          const done = Boolean(todayDone[a.id])
          return (
            <button key={a.id} className={`routine-row ${done ? 'done' : ''}`} onClick={() => toggle(a.id)} aria-pressed={done}>
              <Emoji name={a.icon} size={48} />
              <span className="routine-name">{activityLabel(a, t)}</span>
              <span className="routine-check" aria-hidden="true">
                {done ? '✓' : ''}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ProgressTab() {
  const t = useT()
  const locale = LOCALES[useLang()]
  const { now, settings, routine } = useStudio()
  const activities = settings.routine.activities.filter((a) => a.enabled)
  const year = now.getFullYear()
  const y = yearStats(activities, routine, settings.routine, year)
  const pct = (n: number) => `${Math.round(n * 100)}%`
  const monthName = (m: number) => new Date(year, m - 1, 1).toLocaleDateString(locale, { month: 'long' })
  const labelFor = (stat: ActivityStats) => {
    const activity = activities.find((a) => a.id === stat.id)
    return activity ? activityLabel(activity, t) : stat.id
  }

  if (activities.length === 0) return <p className="muted">{t.routine.noneToday}</p>
  return (
    <div className="report routine-progress">
      <div className="report-figures">
        <Figure emoji="chart" value={y.done} label={t.routine.table.done} />
        <Figure emoji="calendar" value={y.possible} label={t.routine.table.possible} />
        <Figure emoji="glowstar" value={pct(y.completion)} label={t.routine.table.completion} />
      </div>
      <table className="report-table">
        <thead>
          <tr>
            <th>{t.routine.table.month}</th>
            <th>{t.routine.table.done}</th>
            <th>{t.routine.table.possible}</th>
            <th>{t.routine.table.completion}</th>
          </tr>
        </thead>
        <tbody>
          {y.months.map((m) => (
            <tr key={m.month}>
              <td>{monthName(m.month)}</td>
              <td>{m.done}</td>
              <td>{m.possible}</td>
              <td>{pct(m.completion)}</td>
            </tr>
          ))}
          <tr>
            <td>
              <b>{t.routine.yearTotal}</b>
            </td>
            <td>
              <b>{y.done}</b>
            </td>
            <td>
              <b>{y.possible}</b>
            </td>
            <td>
              <b>{pct(y.completion)}</b>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="report-table">
        <thead>
          <tr>
            <th>{t.routine.table.activity}</th>
            <th>{t.routine.table.done}</th>
            <th>{t.routine.table.possible}</th>
            <th>{t.routine.table.completion}</th>
          </tr>
        </thead>
        <tbody>
          {y.activities.map((a) => (
            <tr key={a.id}>
              <td>{labelFor(a)}</td>
              <td>{a.done}</td>
              <td>{a.possible}</td>
              <td>{pct(a.completion)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Figure({ emoji, value, label }: { emoji: string; value: number | string; label: string }) {
  return (
    <div className="figure">
      <Emoji name={emoji} size={34} />
      <b>{value}</b>
      <small>{label}</small>
    </div>
  )
}
