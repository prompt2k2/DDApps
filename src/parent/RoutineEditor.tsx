import { Plus, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useStudio } from '@/app/studio'
import type { RoutineActivity, RoutineHoliday, RoutineSchedule } from '@/data/types'
import { LOCALES, useLang, useT } from '@/i18n'
import { activityLabel } from '@/routine/label'
import { Emoji } from '@/shared/Emoji'
import './Parent.css'

/** Daily routine: on/off, the activity checklist, school days of the week, and school holidays. */
export function RoutineEditor() {
  const t = useT()
  const { settings, updateSettings } = useStudio()
  const on = settings.routine.enabled
  const setEnabled = (enabled: boolean) => updateSettings((s) => ({ ...s, routine: { ...s.routine, enabled } }))
  return (
    <div className="editor">
      <div className="stepper-row">
        <span>{t.nav.routine}</span>
        <div className="segmented compact">
          <button className={on ? '' : 'secondary'} onClick={() => setEnabled(true)}>
            {t.common.on}
          </button>
          <button className={on ? 'secondary' : ''} onClick={() => setEnabled(false)}>
            {t.common.off}
          </button>
        </div>
      </div>
      <span className="field-label">{t.routine.enabledTitle}</span>
      <ActivityList />
      <WeekdayPicker />
      <HolidayList />
    </div>
  )
}

function ActivityList() {
  const t = useT()
  const { settings, updateSettings } = useStudio()
  const activities = settings.routine.activities
  const update = (id: string, change: Partial<RoutineActivity>) =>
    updateSettings((s) => ({ ...s, routine: { ...s.routine, activities: s.routine.activities.map((a) => (a.id === id ? { ...a, ...change } : a)) } }))
  const remove = (id: string) => updateSettings((s) => ({ ...s, routine: { ...s.routine, activities: s.routine.activities.filter((a) => a.id !== id) } }))
  const [name, setName] = useState('')
  const [schedule, setSchedule] = useState<RoutineSchedule>('everyday')
  const add = () => {
    if (!name.trim()) return
    const a: RoutineActivity = { id: crypto.randomUUID(), icon: 'star', schedule, enabled: true, builtin: false, label: name.trim() }
    updateSettings((s) => ({ ...s, routine: { ...s.routine, activities: [...s.routine.activities, a] } }))
    setName('')
  }
  return (
    <div className="access-editor">
      {activities.map((a) => {
        const on = a.enabled
        return (
          <div key={a.id} className={`access-row ${on ? '' : 'off'}`}>
            <Emoji name={a.icon} size={36} />
            <span className="access-name">
              <b>{activityLabel(a, t)}</b>
            </span>
            <div className="routine-activity-controls">
              <div className="segmented compact">
                <button className={on ? '' : 'secondary'} onClick={() => update(a.id, { enabled: true })} aria-pressed={on}>
                  {t.common.on}
                </button>
                <button className={on ? 'secondary' : ''} onClick={() => update(a.id, { enabled: false })} aria-pressed={!on}>
                  {t.common.off}
                </button>
              </div>
              <div className="segmented compact">
                <button className={a.schedule === 'everyday' ? '' : 'secondary'} onClick={() => update(a.id, { schedule: 'everyday' })}>
                  {t.routine.schedule.everyday}
                </button>
                <button className={a.schedule === 'schooldays' ? '' : 'secondary'} onClick={() => update(a.id, { schedule: 'schooldays' })}>
                  {t.routine.schedule.schooldays}
                </button>
              </div>
            </div>
            {!a.builtin && (
              <button className="secondary" aria-label={t.common.remove} onClick={() => remove(a.id)}>
                <Trash2 />
              </button>
            )}
          </div>
        )
      })}
      <div className="link-add">
        <input value={name} maxLength={30} placeholder={t.routine.customPlaceholder} onChange={(e) => setName(e.target.value)} />
        <div className="segmented compact">
          <button className={schedule === 'everyday' ? '' : 'secondary'} onClick={() => setSchedule('everyday')}>
            {t.routine.schedule.everyday}
          </button>
          <button className={schedule === 'schooldays' ? '' : 'secondary'} onClick={() => setSchedule('schooldays')}>
            {t.routine.schedule.schooldays}
          </button>
        </div>
        <button onClick={add} disabled={!name.trim()} aria-label={t.routine.addActivity}>
          <Plus />
        </button>
      </div>
    </div>
  )
}

/** Monday (1) to Sunday (0), the weekdays counted as school days. */
function WeekdayPicker() {
  const t = useT()
  const locale = LOCALES[useLang()]
  const { settings, updateSettings } = useStudio()
  const days = settings.routine.schoolDays
  const toggle = (day: number) =>
    updateSettings((s) => ({ ...s, routine: { ...s.routine, schoolDays: days.includes(day) ? days.filter((d) => d !== day) : [...days, day].sort() } }))
  const order = [1, 2, 3, 4, 5, 6, 0]
  // 1 Jan 2024 is a Monday, so day-of-month n (1-7) is weekday n (Sunday as 7).
  const name = (day: number) => new Date(2024, 0, day === 0 ? 7 : day).toLocaleDateString(locale, { weekday: 'short' })
  return (
    <>
      <span className="field-label">
        <Emoji name="calendar" size={28} /> {t.routine.schoolDaysTitle}
      </span>
      <small className="muted">{t.routine.schoolDaysNote}</small>
      <div className="segmented" role="group" aria-label={t.routine.schoolDaysTitle}>
        {order.map((day) => (
          <button key={day} className={days.includes(day) ? '' : 'secondary'} onClick={() => toggle(day)} aria-pressed={days.includes(day)}>
            {name(day)}
          </button>
        ))}
      </div>
    </>
  )
}

function HolidayList() {
  const t = useT()
  const locale = LOCALES[useLang()]
  const { settings, updateSettings } = useStudio()
  const holidays = settings.routine.holidays
  const [name, setName] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const add = () => {
    if (!name.trim() || !start || !end || start > end) return
    const h: RoutineHoliday = { id: crypto.randomUUID(), start, end, label: name.trim() }
    updateSettings((s) => ({ ...s, routine: { ...s.routine, holidays: [...s.routine.holidays, h] } }))
    setName('')
    setStart('')
    setEnd('')
  }
  const remove = (id: string) => updateSettings((s) => ({ ...s, routine: { ...s.routine, holidays: s.routine.holidays.filter((h) => h.id !== id) } }))
  return (
    <>
      <span className="field-label">
        <Emoji name="calendar" size={28} /> {t.routine.holidaysTitle}
      </span>
      <small className="muted">{t.routine.holidaysNote}</small>
      <ul className="birthday-list">
        {holidays.map((h) => (
          <li key={h.id}>
            <span>
              <b>{h.label}</b>{' '}
              <small className="muted">
                {new Date(`${h.start}T12:00:00`).toLocaleDateString(locale, { day: 'numeric', month: 'short' })} –{' '}
                {new Date(`${h.end}T12:00:00`).toLocaleDateString(locale, { day: 'numeric', month: 'short' })}
              </small>
            </span>
            <button className="secondary" aria-label={t.common.remove} onClick={() => remove(h.id)}>
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
      <div className="holiday-add">
        <input value={name} maxLength={30} placeholder={t.routine.holidayName} onChange={(e) => setName(e.target.value)} />
        <label className="field">
          <span>{t.routine.holidayFrom}</span>
          <input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
        </label>
        <label className="field">
          <span>{t.routine.holidayTo}</span>
          <input type="date" value={end} min={start || undefined} onChange={(e) => setEnd(e.target.value)} />
        </label>
        <button onClick={add} disabled={!name.trim() || !start || !end || start > end} aria-label={t.common.add}>
          <Plus />
        </button>
      </div>
    </>
  )
}
