import type { ItemId, Subject } from '@/access/catalogue'
import type { Lang } from '@/i18n'
import type { SchoolSystem } from '@/lessons/classes'
import type { ThemeMode } from '@/shared/theme'

// The documents saved on the device (IndexedDB, see kv.ts). All three go into a backup file.
// Changing a shape later: add fields as optional, or give them a default in DEFAULT_SETTINGS / EMPTY_PROGRESS
// (useLocalDoc fills missing fields from the defaults), so older backups still restore.

/** Access control for one item. Layer 1: enabled (off = hidden). Layer 2: locked (opens with earned time) or unlocked. */
export interface AccessRule {
  enabled: boolean
  /** true = always open; false = locked until earned. */
  unlocked: boolean
  /** A parent unlocked it for this day only ("YYYY-MM-DD"). */
  unlockedOn?: string
}

export interface FamilyBirthday {
  id: string
  name: string
  /** 1-12 */
  month: number
  /** 1-31 */
  day: number
}

/** A home routine activity (brush teeth, reading, screen time…): a daily checklist, separate from missions. */
export type RoutineSchedule = 'everyday' | 'schooldays'

export interface RoutineActivity {
  id: string
  /** A name in public/emoji. */
  icon: string
  schedule: RoutineSchedule
  /** Off = hidden from the checklist (not deleted, so a parent can switch it back on). */
  enabled: boolean
  /** Built from the app (named via i18n `routine.activities`); false for a parent's own addition. */
  builtin: boolean
  /** Only set for a parent's own addition (builtin activities are named by `routine.activities[id]`). */
  label?: string
}

/** A school holiday date range ("YYYY-MM-DD"), excluded from "School days" activities. */
export interface RoutineHoliday {
  id: string
  start: string
  end: string
  label: string
}

/** An approved app or site (Mathletics, a game site…). */
export interface AppLink {
  id: string
  name: string
  url: string
  /** Shown inside the app (full screen, time ticking and cut off like a game) instead of leaving to open it.
   *  Only some sites allow this (most apps and many sites refuse to be shown inside another page). */
  embed?: boolean
}

/** The ids the app ships with, matching a paper daily checklist: hygiene, school uniform, reading, screen time. */
export const ROUTINE_ACTIVITY_IDS = ['brushTeeth', 'makeBed', 'breakfast', 'bath', 'vitaminC', 'uniformOn', 'readBook1', 'uniformOff', 'device1', 'lunch', 'device2', 'readBook2'] as const
export type RoutineActivityId = (typeof ROUTINE_ACTIVITY_IDS)[number]

export interface Settings {
  /** The setup wizard has been finished (or a backup restored). */
  setupDone: boolean
  /** Sample data from "Try the demo"; leaving the demo deletes everything. */
  demo: boolean
  child: {
    /** First name or nickname, shown in the greeting. May stay empty. */
    name: string
    /** Birth month (1-12) and year only, never the day: for the age (birthdays, what is switched on). */
    birthMonth: number
    birthYear: number
    /**
     * The school class the parent chose (its system for the name, and its stage on the skills ladder); it sets
     * the lesson level. null until chosen: then the class is guessed from the age.
     */
    school: { system: SchoolSystem; stage: number } | null
    /** The child's colour (buttons, menu). */
    accent: string
  }
  theme: ThemeMode
  /** The app language; null = the device language. */
  lang: Lang | null
  /** Reading aloud: the chosen voice (null = best available on the device) and speed. */
  voice: { name: string | null; rate: number }
  /** The parent PIN, stored only as a salted PBKDF2 hash (see parent/pin.ts). null until the wizard sets it. */
  pin: { salt: string; hash: string; iterations: number } | null
  /** The recovery code for a forgotten PIN, stored only as a hash like the PIN. null on devices set up before it. */
  recovery: { salt: string; hash: string; iterations: number } | null
  /** A reset asked for without the recovery code: possible 24 hours after `requestedAt`; the right PIN cancels it. */
  pinReset: { requestedAt: number } | null
  access: Record<ItemId, AccessRule>
  rewards: {
    /** Missions a day (1-4). */
    missionsPerDay: number
    /** Questions in one mission (10, 25 or 50); a passed mission gives one star per 10 questions. */
    questionsPerMission: number
    /** Earned minutes per star. */
    minutesPerStar: number
    /** Most earned minutes in one day. */
    maxMinutesPerDay: number
    /** Stars needed this week for the weekly reward, and the reward (shown to the child as the goal). */
    weeklyGoal: number
    weeklyReward: string
  }
  report: {
    /** Where "Email report" sends to (opens the parent's own mail app). Empty = ask in the mail app. */
    email: string
    period: 'day' | 'week' | 'month'
  }
  birthdays: FamilyBirthday[]
  routine: {
    /** Shows the Routine tab in the menu. */
    enabled: boolean
    activities: RoutineActivity[]
    /** Weekdays counted as school days, 0 (Sunday) to 6 (Saturday). Default Monday-Friday. */
    schoolDays: number[]
    holidays: RoutineHoliday[]
  }
  /** Reading speed of the stories (1 = as recorded; 0.75 and 0.9 slower). Live radio always plays at 1. */
  storyRate: number
  /** Extra radio stations a parent added (any HTTPS audio stream). */
  stations: { id: string; name: string; url: string }[]
  /** Show the built-in video library (how things are made and work, live animal cams: media/library.ts). */
  videoLibrary: boolean
  /** YouTube videos or playlists a parent picked. */
  videos: { id: string; kind: 'video' | 'playlist'; title: string }[]
  /** One-tap calls: a name and a link (tel:, a WhatsApp or FaceTime link). */
  contacts: { id: string; name: string; link: string }[]
  /** Other apps and sites, unlocked by earned time like games and videos (the `apps` item). */
  apps: AppLink[]
  backup: {
    /** ms since 1970 of the last backup file, or null. */
    lastAt: number | null
    /** Days after which the parent screen reminds to back up. */
    remindDays: number
  }
  updatedAt: number
}

/** A mission result: answers right out of all questions (one try per question). */
export interface Score {
  right: number
  total: number
}

/** A wrong answer, kept so parents can see what their child finds hard. */
export interface Mistake {
  /** "YYYY-MM-DD" */
  day: string
  subject: Subject
  /** The ladder step (skill) the question came from. */
  step: string
  prompt: string
  given: string
  answer: string
}

export interface Progress {
  /** Stars earned per day, "YYYY-MM-DD" → count. */
  stars: Record<string, number>
  /** Missions finished per day, "YYYY-MM-DD" → subjects. */
  missions: Record<string, string[]>
  /** Best score per subject per day. */
  scores: Record<string, Record<string, Score>>
  /** Every answer counted per day and skill step ("YYYY-MM-DD" → step id → right/total): for reports. */
  attempts: Record<string, Record<string, Score>>
  /** The most recent wrong answers (newest last, at most MAX_MISTAKES). */
  mistakes: Mistake[]
  /** Current step on each subject's skills ladder (index into lessons/ladder.ts). */
  levels: Partial<Record<Subject, number>>
  /** Recent results per subject (share right at first try, 0-1, newest last): drives the adaptive level. */
  recent: Partial<Record<Subject, number[]>>
  updatedAt: number
}

/** Seconds per area per day ("YYYY-MM-DD" → area → seconds). Areas: "mission:maths", "game:snake", "home"… */
export interface Usage {
  days: Record<string, Record<string, number>>
  /** Earned time used per day, in seconds. */
  earnedUsed: Record<string, number>
  updatedAt: number
}

/** The routine checklist, ticked per day ("YYYY-MM-DD" → activity id → done). */
export interface Routine {
  days: Record<string, Record<string, boolean>>
  updatedAt: number
}

export const ACCENTS = ['#5b6cf0', '#e2557e', '#178c84', '#e08a1e', '#8b5cf6', '#22a06b'] as const

/** Icon and schedule for each builtin activity; names come from i18n `routine.activities` at render time. */
const ROUTINE_ICON_AND_SCHEDULE: Record<RoutineActivityId, { icon: string; schedule: RoutineSchedule }> = {
  brushTeeth: { icon: 'sparkles', schedule: 'everyday' },
  makeBed: { icon: 'moon', schedule: 'everyday' },
  breakfast: { icon: 'cocoa', schedule: 'everyday' },
  bath: { icon: 'droplet', schedule: 'everyday' },
  vitaminC: { icon: 'tangerine', schedule: 'everyday' },
  uniformOn: { icon: 'school', schedule: 'schooldays' },
  readBook1: { icon: 'openbook', schedule: 'everyday' },
  uniformOff: { icon: 'backpack', schedule: 'schooldays' },
  device1: { icon: 'computer', schedule: 'everyday' },
  lunch: { icon: 'fruit-apple', schedule: 'everyday' },
  device2: { icon: 'tv', schedule: 'everyday' },
  readBook2: { icon: 'scroll', schedule: 'everyday' },
}

export const DEFAULT_ROUTINE_ACTIVITIES: RoutineActivity[] = ROUTINE_ACTIVITY_IDS.map((id) => ({
  id,
  icon: ROUTINE_ICON_AND_SCHEDULE[id].icon,
  schedule: ROUTINE_ICON_AND_SCHEDULE[id].schedule,
  enabled: true,
  builtin: true,
}))

export const DEFAULT_SETTINGS: Settings = {
  setupDone: false,
  demo: false,
  child: { name: '', birthMonth: 1, birthYear: new Date().getFullYear() - 6, school: null, accent: ACCENTS[0] },
  theme: 'system',
  lang: null,
  voice: { name: null, rate: 0.9 },
  pin: null,
  recovery: null,
  pinReset: null,
  // Filled by the setup wizard (access/starter.ts); this default only matters before the wizard has run.
  access: {} as Record<ItemId, AccessRule>,
  rewards: { missionsPerDay: 3, questionsPerMission: 10, minutesPerStar: 10, maxMinutesPerDay: 45, weeklyGoal: 12, weeklyReward: '' },
  report: { email: '', period: 'week' },
  birthdays: [],
  routine: { enabled: true, activities: DEFAULT_ROUTINE_ACTIVITIES, schoolDays: [1, 2, 3, 4, 5], holidays: [] },
  storyRate: 1,
  videoLibrary: true,
  stations: [],
  videos: [],
  contacts: [],
  apps: [
    { id: 'mathletics', name: 'Mathletics', url: 'https://www.mathletics.com' },
    { id: 'crazygames', name: 'CrazyGames', url: 'https://www.crazygames.com' },
    { id: 'browser', name: 'Browser', url: 'https://www.google.com' },
  ],
  backup: { lastAt: null, remindDays: 7 },
  updatedAt: 0,
}

export const EMPTY_PROGRESS: Progress = { stars: {}, missions: {}, scores: {}, attempts: {}, mistakes: [], levels: {}, recent: {}, updatedAt: 0 }

export const MAX_MISTAKES = 200
export const EMPTY_USAGE: Usage = { days: {}, earnedUsed: {}, updatedAt: 0 }
export const EMPTY_ROUTINE: Routine = { days: {}, updatedAt: 0 }
