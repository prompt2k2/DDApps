import { describe, expect, it } from 'vitest'
import { DEFAULT_ROUTINE_ACTIVITIES, type Routine, type RoutineActivity, type Settings } from '@/data/types'
import { monthStats, yearStats } from './stats'

const settings: Settings['routine'] = { enabled: true, activities: [], schoolDays: [1, 2, 3, 4, 5], holidays: [] }
const everyday: RoutineActivity = { id: 'brushTeeth', icon: 'sparkles', schedule: 'everyday', enabled: true, builtin: true }
const schoolOnly: RoutineActivity = { id: 'uniformOn', icon: 'school', schedule: 'schooldays', enabled: true, builtin: true }

describe('routine stats', () => {
  it('an "every day" activity is possible every day of the month', () => {
    const routine: Routine = { days: {}, updatedAt: 0 }
    const m = monthStats([everyday], routine, settings, 2026, 10)
    expect(m.activities[0]).toMatchObject({ id: 'brushTeeth', done: 0, possible: 31, completion: 0 })
  })
  it('a "school days" activity is possible only on weekdays, October 2026 has 22', () => {
    const routine: Routine = { days: {}, updatedAt: 0 }
    const m = monthStats([schoolOnly], routine, settings, 2026, 10)
    expect(m.activities[0].possible).toBe(22)
  })
  it('counts ticked days as done, and computes completion', () => {
    const routine: Routine = { days: { '2026-10-01': { brushTeeth: true }, '2026-10-02': { brushTeeth: true } }, updatedAt: 0 }
    const m = monthStats([everyday], routine, settings, 2026, 10)
    expect(m.activities[0]).toMatchObject({ done: 2, possible: 31 })
    expect(m.done).toBe(2)
    expect(m.possible).toBe(31)
  })
  it('a holiday removes a school day from "possible"', () => {
    const withHoliday = { ...settings, holidays: [{ id: 'h', start: '2026-10-05', end: '2026-10-09', label: 'Half term' }] }
    const routine: Routine = { days: {}, updatedAt: 0 }
    const m = monthStats([schoolOnly], routine, withHoliday, 2026, 10)
    expect(m.activities[0].possible).toBe(17) // 22 weekdays minus the 5 weekdays in the holiday week
  })
  it('yearStats totals 12 months and matches a full year of DEFAULT_ROUTINE_ACTIVITIES', () => {
    const routine: Routine = { days: {}, updatedAt: 0 }
    const y = yearStats(DEFAULT_ROUTINE_ACTIVITIES, routine, settings, 2026)
    expect(y.months).toHaveLength(12)
    expect(y.done).toBe(0)
    const everydayTotal = y.activities.find((a) => a.id === 'brushTeeth')
    expect(everydayTotal?.possible).toBe(365) // 2026 is not a leap year
  })
})
