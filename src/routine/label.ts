import type { RoutineActivity, RoutineActivityId } from '@/data/types'
import type { Strings } from '@/i18n'

/** A builtin activity is named by i18n (translated); a parent's own addition keeps its own label. */
export function activityLabel(a: RoutineActivity, t: Strings): string {
  if (!a.builtin) return a.label ?? a.id
  return t.routine.activities[a.id as RoutineActivityId] ?? a.id
}
