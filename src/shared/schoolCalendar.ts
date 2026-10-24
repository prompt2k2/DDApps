import type { RoutineActivity, RoutineHoliday, Settings } from '@/data/types'
import { isoDate } from './date'

// Whether a day counts as a school day, for "School days" routine activities. Pure (tested in schoolCalendar.test.ts).

/** `start` and `end` are "YYYY-MM-DD", inclusive. */
export function isHoliday(day: string, holidays: RoutineHoliday[]): boolean {
  return holidays.some((h) => h.start <= day && day <= h.end)
}

/** A weekday counted as a school day (`schoolDays`) and not in a school holiday. */
export function isSchoolDay(d: Date, schoolDays: number[], holidays: RoutineHoliday[]): boolean {
  return schoolDays.includes(d.getDay()) && !isHoliday(isoDate(d), holidays)
}

/** Whether `activity` is due on `d`, given the routine settings. */
export function isDue(activity: RoutineActivity, d: Date, routine: Settings['routine']): boolean {
  return activity.schedule === 'everyday' || isSchoolDay(d, routine.schoolDays, routine.holidays)
}

/** The number of days in a month (1-12). */
export const daysInMonth = (year: number, month: number): number => new Date(year, month, 0).getDate()

/** Every date of a month (1-12), in order. */
export function monthDates(year: number, month: number): Date[] {
  const n = daysInMonth(year, month)
  return Array.from({ length: n }, (_, i) => new Date(year, month - 1, i + 1))
}
