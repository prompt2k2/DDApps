import { describe, expect, it } from 'vitest'
import type { RoutineActivity, RoutineHoliday } from '@/data/types'
import { daysInMonth, isDue, isHoliday, isSchoolDay, monthDates } from './schoolCalendar'

const schoolDays = [1, 2, 3, 4, 5]
const holidays: RoutineHoliday[] = [{ id: 'h', start: '2026-10-05', end: '2026-10-09', label: 'Half term' }]

describe('schoolCalendar', () => {
  it('school days are Monday-Friday and not a holiday', () => {
    expect(isSchoolDay(new Date(2026, 9, 1), schoolDays, [])).toBe(true) // Thursday
    expect(isSchoolDay(new Date(2026, 9, 3), schoolDays, [])).toBe(false) // Saturday
    expect(isSchoolDay(new Date(2026, 9, 4), schoolDays, [])).toBe(false) // Sunday
  })
  it('a holiday range removes otherwise-school days', () => {
    expect(isHoliday('2026-10-06', holidays)).toBe(true)
    expect(isHoliday('2026-10-10', holidays)).toBe(false)
    expect(isSchoolDay(new Date(2026, 9, 6), schoolDays, holidays)).toBe(false) // Tuesday, in the holiday
  })
  it('an "every day" activity is due every day; "school days" follows the calendar', () => {
    const everyday: RoutineActivity = { id: 'a', icon: 'star', schedule: 'everyday', enabled: true, builtin: true }
    const schoolOnly: RoutineActivity = { ...everyday, id: 'b', schedule: 'schooldays' }
    const settings = { enabled: true, activities: [], schoolDays, holidays }
    expect(isDue(everyday, new Date(2026, 9, 3), settings)).toBe(true) // Saturday
    expect(isDue(schoolOnly, new Date(2026, 9, 3), settings)).toBe(false)
    expect(isDue(schoolOnly, new Date(2026, 9, 1), settings)).toBe(true)
  })
  it('daysInMonth and monthDates agree, including February in a leap year', () => {
    expect(daysInMonth(2026, 10)).toBe(31)
    expect(daysInMonth(2024, 2)).toBe(29)
    expect(monthDates(2026, 10)).toHaveLength(31)
    expect(monthDates(2026, 10)[0].getDate()).toBe(1)
  })
})
