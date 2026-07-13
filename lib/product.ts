export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  "name": "RegexLint",
  "slug": "regexlinter",
  "tagline": "Test and understand any regex",
  "description": "Paste a regular expression and a test string; get matches plus a plain-English explanation of what the pattern does. For developers who want regex to stop being a black box.",
  "toolTitle": "Test your regex",
  "resultLabel": "Result",
  "ctaLabel": "Run regex",
  "features": [
    "Live match check",
    "Plain-English explanation",
    "Common-pitfall warnings",
    "Copy the pattern"
  ],
  "inputs": [
    {
      "key": "pattern",
      "label": "Pattern",
      "type": "input",
      "placeholder": "e.g. [a-z]+"
    },
    {
      "key": "test",
      "label": "Test string",
      "type": "textarea",
      "placeholder": "e.g. Hello world 123"
    },
    {
      "key": "flags",
      "label": "Flags",
      "type": "select",
      "options": [
        "none",
        "g",
        "i",
        "gi",
        "m"
      ]
    }
  ],
  "systemPrompt": "You are a regex expert. Given a pattern, flags, and a test string, explain in 2-3 plain sentences what the regex matches and warn about common mistakes.",
  "pricing": [
    {
      "tier": "Free",
      "price": "$0",
      "desc": "Unlimited tests"
    },
    {
      "tier": "Pro",
      "price": "$9/mo",
      "desc": "AI explanation, saved patterns"
    },
    {
      "tier": "Team",
      "price": "$29/mo",
      "desc": "Shared library, API"
    }
  ],
  mock: (inputs: Record<string, string>): string => {
  const re = inputs['pattern'] || '[a-z]+'
  const test = inputs['test'] || 'Hello world 123'
  const flags = inputs['flags'] || 'none'
  const reFlags = flags !== 'none' ? flags : ''
  let m = []
  try {
    const rx = new RegExp(re, reFlags)
    m = test.match(rx) || []
  } catch (e) {
    return `Invalid pattern: ${re}\nError: ${e.message}`
  }
  const matched = m.length ? m.join(', ') : '(no match)'
  return `Pattern: /${re}/${reFlags}
Test string: ${test}
Matches: ${matched}
Explanation: This pattern matches sequences of lowercase letters in your test string.
---
(Mock check. Add OPENAI_API_KEY for a full plain-English explanation of any regex.)`
  }
}
