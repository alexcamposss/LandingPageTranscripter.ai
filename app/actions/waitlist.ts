'use server'

import { db } from '@/lib/db'
import { waitlist } from '@/lib/db/schema'

export type WaitlistState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const raw = formData.get('email')
  const email = typeof raw === 'string' ? raw.trim().toLowerCase() : ''

  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  try {
    await db.insert(waitlist).values({ email }).onConflictDoNothing({ target: waitlist.email })
    return {
      status: 'success',
      message: "You're on the list. We'll email you on October 15th.",
    }
  } catch (error) {
    console.error('Failed to join waitlist:', error)
    return { status: 'error', message: 'Something went wrong. Please try again.' }
  }
}
