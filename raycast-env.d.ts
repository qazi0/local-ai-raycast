/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Provider - Local AI provider to connect to */
  "provider": "ollama" | "lmstudio" | "llamacpp" | "custom",
  /** Server URL - Server base URL (leave empty to use provider default) */
  "serverUrl"?: string,
  /** Default Model - Preferred model name (auto-detected if empty) */
  "defaultModel"?: string,
  /** Temperature - Response creativity (0.0-2.0) */
  "temperature": string,
  /** Max Tokens - Maximum response length in tokens */
  "maxTokens": string,
  /** System Prompt - Default system prompt for all chats */
  "systemPrompt"?: string,
  /** Stream Responses - Enable streaming for real-time token display */
  "streamResponses": boolean,
  /** Auto-Paste Results - Automatically paste AI results back and copy to clipboard as fallback (for text transform commands) */
  "autoPasteResult": boolean,
  /** Web Search - Allow AI to search the web for up-to-date information (requires Brave Search API key below) */
  "webSearchEnabled": boolean,
  /** Brave Search API Key - Brave Search API key (free: 2000 queries/month). Get one at https://brave.com/search/api/ */
  "searchApiKey"?: string,
  /** Tool Calling Mode - Use native OpenAI-compatible tool calling instead of prompt injection (requires llama3.1+, qwen2.5+, or mistral v0.3+) */
  "toolCallingEnabled": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `chat` command */
  export type Chat = ExtensionPreferences & {}
  /** Preferences accessible in the `quick-ask` command */
  export type QuickAsk = ExtensionPreferences & {}
  /** Preferences accessible in the `models` command */
  export type Models = ExtensionPreferences & {}
  /** Preferences accessible in the `conversations` command */
  export type Conversations = ExtensionPreferences & {}
  /** Preferences accessible in the `fix-grammar` command */
  export type FixGrammar = ExtensionPreferences & {}
  /** Preferences accessible in the `improve-writing` command */
  export type ImproveWriting = ExtensionPreferences & {}
  /** Preferences accessible in the `make-shorter` command */
  export type MakeShorter = ExtensionPreferences & {}
  /** Preferences accessible in the `make-longer` command */
  export type MakeLonger = ExtensionPreferences & {}
  /** Preferences accessible in the `tone-professional` command */
  export type ToneProfessional = ExtensionPreferences & {}
  /** Preferences accessible in the `tone-casual` command */
  export type ToneCasual = ExtensionPreferences & {}
  /** Preferences accessible in the `tone-friendly` command */
  export type ToneFriendly = ExtensionPreferences & {}
  /** Preferences accessible in the `tone-confident` command */
  export type ToneConfident = ExtensionPreferences & {}
  /** Preferences accessible in the `explain-code` command */
  export type ExplainCode = ExtensionPreferences & {}
  /** Preferences accessible in the `explain-simply` command */
  export type ExplainSimply = ExtensionPreferences & {}
  /** Preferences accessible in the `translate` command */
  export type Translate = ExtensionPreferences & {}
  /** Preferences accessible in the `summarize` command */
  export type Summarize = ExtensionPreferences & {}
  /** Preferences accessible in the `rephrase-tweet` command */
  export type RephraseTweet = ExtensionPreferences & {}
  /** Preferences accessible in the `proofread` command */
  export type Proofread = ExtensionPreferences & {}
  /** Preferences accessible in the `send-screen` command */
  export type SendScreen = ExtensionPreferences & {}
  /** Preferences accessible in the `send-screen-area` command */
  export type SendScreenArea = ExtensionPreferences & {}
  /** Preferences accessible in the `send-selected-text` command */
  export type SendSelectedText = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `chat` command */
  export type Chat = {}
  /** Arguments passed to the `quick-ask` command */
  export type QuickAsk = {
  /** Ask anything... */
  "query": string
}
  /** Arguments passed to the `models` command */
  export type Models = {}
  /** Arguments passed to the `conversations` command */
  export type Conversations = {}
  /** Arguments passed to the `fix-grammar` command */
  export type FixGrammar = {}
  /** Arguments passed to the `improve-writing` command */
  export type ImproveWriting = {}
  /** Arguments passed to the `make-shorter` command */
  export type MakeShorter = {}
  /** Arguments passed to the `make-longer` command */
  export type MakeLonger = {}
  /** Arguments passed to the `tone-professional` command */
  export type ToneProfessional = {}
  /** Arguments passed to the `tone-casual` command */
  export type ToneCasual = {}
  /** Arguments passed to the `tone-friendly` command */
  export type ToneFriendly = {}
  /** Arguments passed to the `tone-confident` command */
  export type ToneConfident = {}
  /** Arguments passed to the `explain-code` command */
  export type ExplainCode = {}
  /** Arguments passed to the `explain-simply` command */
  export type ExplainSimply = {}
  /** Arguments passed to the `translate` command */
  export type Translate = {}
  /** Arguments passed to the `summarize` command */
  export type Summarize = {}
  /** Arguments passed to the `rephrase-tweet` command */
  export type RephraseTweet = {}
  /** Arguments passed to the `proofread` command */
  export type Proofread = {}
  /** Arguments passed to the `send-screen` command */
  export type SendScreen = {}
  /** Arguments passed to the `send-screen-area` command */
  export type SendScreenArea = {}
  /** Arguments passed to the `send-selected-text` command */
  export type SendSelectedText = {}
}

