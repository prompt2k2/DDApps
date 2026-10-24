import type { Routine, RoutineActivity, Settings } from '@/data/types'
import { isoDate } from '@/shared/date'
import { isDue, monthDates } from '@/shared/schoolCalendar'

// Done/Possible/Completion, per activity, per month and for the year. Pure (tested in stats.test.ts).

export interface ActivityStats {
  id: string
  done: number
  possible: number
  completion: number
}

export interface MonthStats {
  year: number
  /** 1-12 */
  month: number
  activities: ActivityStats[]
  done: number
  possible: number
  completion: number
}

export interface YearStats {
  year: number
  months: MonthStats[]
  activities: ActivityStats[]
  done: number
  possible: number
  completion: number
}

const completionOf = (done: number, possible: number) => (possible > 0 ? done / possible : 0)

const totalOf = (stats: ActivityStats[]) => {
  const done = stats.reduce((sum, a) => sum + a.done, 0)
  const possible = stats.reduce((sum, a) => sum + a.possible, 0)
  return { done, possible, completion: completionOf(done, possible) }
}

/** Done/Possible/Completion for every enabled activity in one month, plus the month's total. */
export function monthStats(activities: RoutineActivity[], routine: Routine, settings: Settings['routine'], year: number, month: number): MonthStats {
  const dates = monthDates(year, month)
  const perActivity = activities.map((a): ActivityStats => {
    let done = 0
    let possible = 0
    for (const d of dates) {
      if (!isDue(a, d, settings)) continue
      possible++
      if (routine.days[isoDate(d)]?.[a.id]) done++
    }
    return { id: a.id, done, possible, completion: completionOf(done, possible) }
  })
  return { year, month, activities: perActivity, ...totalOf(perActivity) }
}

/** Twelve months of `monthStats`, plus each activity's and the year's total (the Annual Summary view). */
export function yearStats(activities: RoutineActivity[], routine: Routine, settings: Settings['routine'], year: number): YearStats {
  const months = Array.from({ length: 12 }, (_, i) => monthStats(activities, routine, settings, year, i + 1))
  const perActivity = activities.map((a): ActivityStats => {
    const done = months.reduce((sum, m) => sum + (m.activities.find((x) => x.id === a.id)?.done ?? 0), 0)
    const possible = months.reduce((sum, m) => sum + (m.activities.find((x) => x.id === a.id)?.possible ?? 0), 0)
    return { id: a.id, done, possible, completion: completionOf(done, possible) }
  })
  const done = months.reduce((sum, m) => sum + m.done, 0)
  const possible = months.reduce((sum, m) => sum + m.possible, 0)
  return { year, months, activities: perActivity, done, possible, completion: completionOf(done, possible) }
}
