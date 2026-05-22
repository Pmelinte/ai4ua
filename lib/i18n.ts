export const SUPPORTED_LOCALES = ["en", "ro"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

type Messages = Record<string, unknown>;
const cache: Partial<Record<Locale, Messages>> = {};

export async function getMessages(locale: Locale): Promise<Messages> {
  if (cache[locale]) return cache[locale]!;
  try {
    const messages = await import(`../messages/${locale}.json`);
    cache[locale] = messages as Messages;
    return messages as Messages;
  } catch {
    if (locale !== DEFAULT_LOCALE) return getMessages(DEFAULT_LOCALE);
    return {};
  }
}

export function t(
  messages: Messages,
  key: string,
  fallback = key
): string {
  const parts = key.split(".");
  let current: unknown = messages;
  for (const part of parts) {
    if (typeof current !== "object" || current === null) return fallback;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === "string" ? current : fallback;
}
