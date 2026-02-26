#!/usr/bin/env node

import { connectBrowser, getActivePage } from "./browser-connection.js";

const b = await connectBrowser().catch((e) => {
	console.error("✗ Could not connect to browser:", e.message);
	console.error("  Run: browser-start.js");
	process.exit(1);
});

const p = getActivePage(b);

if (!p) {
	console.error("✗ No active tab found");
	process.exit(1);
}

const cookies = await p.context().cookies([p.url()]);

for (const cookie of cookies) {
	console.log(`${cookie.name}: ${cookie.value}`);
	console.log(`  domain: ${cookie.domain}`);
	console.log(`  path: ${cookie.path}`);
	console.log(`  httpOnly: ${cookie.httpOnly}`);
	console.log(`  secure: ${cookie.secure}`);
	console.log("");
}

await b.close();
