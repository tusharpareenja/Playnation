'use server'

import { signIn } from '@/auth'  // Import your signIn logic

export async function handleGoogleSignIn() {
  await signIn("google")  // Perform GitHub sign-in on the server
}
