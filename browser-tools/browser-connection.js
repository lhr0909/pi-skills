import { chromium } from "patchright";

const CDP_ENDPOINT = "http://127.0.0.1:9222";

export function connectBrowser(timeout = 5000) {
	return chromium.connectOverCDP(CDP_ENDPOINT, { timeout });
}

export function getDefaultContext(browser) {
	return browser.contexts()[0] ?? null;
}

export function getActivePage(browser) {
	const pages = browser.contexts().flatMap((context) => context.pages());
	return pages.at(-1) ?? null;
}
