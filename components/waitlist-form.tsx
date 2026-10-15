'use client'

import { useActionState, useId } from 'react'
import { Loader2 } from 'lucide-react'
import { joinWaitlist, type WaitlistState } from '@/app/actions/waitlist'
import { cn } from '@/lib/utils'

const initialState: WaitlistState = { status: 'idle', message: '' }

export function WaitlistForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(joinWaitlist, initialState)
  const inputId = useId()
  const messageId = useId()
  const done = state.status === 'success'

  return (
    <form action={formAction} className={cn('mx-auto w-full max-w-[480px]', className)} noValidate>
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          disabled={pending || done}
          aria-invalid={state.status === 'error'}
          aria-describedby={messageId}
          className="min-w-0 flex-1 rounded-full border border-border bg-surface px-5 py-3 text-[15px] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={pending || done}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-[22px] py-3 text-[15px] font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_var(--primary)] disabled:pointer-events-none disabled:opacity-70"
        >
          {pending ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
          {done ? "You're in" : 'Notify me'}
        </button>
      </div>
      <p
        id={messageId}
        role="status"
        aria-live="polite"
        className={cn('mt-3 min-h-[22px] text-sm', state.status === 'error' ? 'text-destructive' : 'text-primary')}
      >
        {state.message}
      </p>
    </form>
  )
}
