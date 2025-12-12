---
name: gccli
description: Google Calendar CLI for listing calendars, viewing/creating/updating events, and checking availability.
---

# Google Calendar CLI

Command-line interface for Google Calendar operations.

## Installation

```bash
npm install -g @mariozechner/gccli
```

## Setup

### Google Cloud Console (one-time)

1. [Create a new project](https://console.cloud.google.com/projectcreate) (or select existing)
2. [Enable the Google Calendar API](https://console.cloud.google.com/apis/api/calendar-json.googleapis.com)
3. [Set app name](https://console.cloud.google.com/auth/branding) in OAuth branding
4. [Add test users](https://console.cloud.google.com/auth/audience) (all Gmail addresses you want to use)
5. [Create OAuth client](https://console.cloud.google.com/auth/clients):
   - Click "Create Client"
   - Application type: "Desktop app"
   - Download the JSON file

### Configure gccli

```bash
gccli accounts credentials ~/path/to/credentials.json
gccli accounts add <email> [--manual]
```

Use `--manual` for browserless OAuth flow.

## Usage

Run `gccli --help` for full command reference.

Common operations:
- `gccli <email> calendars` - List all calendars
- `gccli <email> events <calendarId> [--from <dt>] [--to <dt>]` - List events
- `gccli <email> event <calendarId> <eventId>` - Get event details
- `gccli <email> create <calendarId> --summary <s> --start <dt> --end <dt>` - Create event
- `gccli <email> freebusy <calendarIds> --from <dt> --to <dt>` - Check availability

Use `primary` as calendarId for the main calendar.

## Date/Time Format

- Timed events: `YYYY-MM-DDTHH:MM:SSZ` (UTC) or `YYYY-MM-DDTHH:MM:SS` (local)
- All-day events: `YYYY-MM-DD` with `--all-day` flag

## Data Storage

- `~/.gccli/credentials.json` - OAuth client credentials
- `~/.gccli/accounts.json` - Account tokens
