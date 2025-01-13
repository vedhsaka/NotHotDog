import Anthropic from '@anthropic-ai/sdk'

if (!process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY) {
  throw new Error('Missing NEXT_PUBLIC_ANTHROPIC_API_KEY environment variable')
}

const anthropic = new Anthropic({
  apiKey: process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY,
})

export const MODEL = "claude-3-sonnet-20240229"

export { anthropic }