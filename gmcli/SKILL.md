---
name: gmcli
description: Gmail CLI for searching emails, reading threads, sending messages, managing drafts, and handling labels/attachments.
---

# Gmail CLI

Command-line interface for Gmail operations.

## Installation

```bash
npm install -g @mariozechner/gmcli
```

## Setup

### Google Cloud Console (one-time)

1. [Create a new project](https://console.cloud.google.com/projectcreate) (or select existing)
2. [Enable the Gmail API](https://console.cloud.google.com/apis/api/gmail.googleapis.com)
3. [Set app name](https://console.cloud.google.com/auth/branding) in OAuth branding
4. [Add test users](https://console.cloud.google.com/auth/audience) (all Gmail addresses you want to use)
5. [Create OAuth client](https://console.cloud.google.com/auth/clients):
   - Click "Create Client"
   - Application type: "Desktop app"
   - Download the JSON file

### Configure gmcli

```bash
gmcli accounts credentials ~/path/to/credentials.json
gmcli accounts add <email> [--manual]
```

Use `--manual` for browserless OAuth flow.

## Usage

Run `gmcli --help` for full command reference.

Common operations:
- `gmcli <email> search "<query>"` - Search emails using Gmail query syntax
- `gmcli <email> thread <threadId>` - Read a thread with all messages
- `gmcli <email> send --to <emails> --subject <s> --body <b>` - Send email
- `gmcli <email> labels list` - List all labels
- `gmcli <email> drafts list` - List drafts

## Data Storage

- `~/.gmcli/credentials.json` - OAuth client credentials
- `~/.gmcli/accounts.json` - Account tokens
- `~/.gmcli/attachments/` - Downloaded attachments
