import { describe, it, expect } from 'vitest';
import { changeLanguage, useTranslations, isLanguageKey, getLocale } from './i18n.ts';

describe('useTranslations', () => {
  it('should return the translation for the given key in the target language', () => {
    const t = useTranslations('en');
    expect(t('Debug-1')).toBe('Hello, World');
  });

  it('should replace placeholders with actual values in the translation', () => {
    const t = useTranslations('en');
    expect(t('Debug-2', { name: 'Joe' })).toBe('Hello, Joe');
  });

  it('should fallback to English translation if the target language is not found', () => {
    const t = useTranslations();
    expect(t('Debug-1')).toBe('你好世界繁體中文');
  });
});

describe('changeLanguage', () => {
  it('should change the language prefix in the path to the target locale', () => {
    const path = '/zh-cn/about';
    const newPath = changeLanguage('en', path);
    expect(newPath).toBe('/en/about');
  });

  it('should add the language prefix to the path if prefixDefaultLocale is true', () => {
    const path = '/about';
    const newPath = changeLanguage('zh-tw', path, true);
    expect(newPath).toBe('/zh-tw/about');
  });

  it('should not add the language prefix to the path if prefixDefaultLocale is false and targetLocale is defaultLocale', () => {
    const path = '/zh-tw/about';
    const newPath = changeLanguage('zh-tw', path);
    expect(newPath).toBe('/about');
  });
});

describe('isLanguageKey', () => {
  it('should return true for valid language keys', () => {
    expect(isLanguageKey('en')).toBe(true);
    expect(isLanguageKey('zh-cn')).toBe(true);
    expect(isLanguageKey('zh-tw')).toBe(true);
  });

  it('should return false for invalid language keys', () => {
    expect(isLanguageKey('fr')).toBe(false);
    expect(isLanguageKey('')).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isLanguageKey(undefined)).toBe(false);
  });
});

describe('getLocale', () => {
  it('should return the locale if it is a valid LanguageKey', () => {
    expect(getLocale('zh-tw')).toBe('zh-tw');
  });

  it('should fallback to defaultLocale for invalid locale', () => {
    expect(getLocale('fr')).toBe('en');
  });

  it('should fallback to defaultLocale for undefined', () => {
    expect(getLocale(undefined)).toBe('en');
  });
});