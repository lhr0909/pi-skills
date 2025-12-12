---
name: transcribe
description: Speech-to-text transcription using Groq Whisper API. Supports m4a, mp3, wav, ogg, flac, webm.
---

# Transcribe

Speech-to-text using Groq Whisper API.

## Setup

```bash
cd {baseDir}
```

If `{baseDir}/config` doesn't exist, ask the user for their Groq API key, then create the config file:

```bash
echo 'GROQ_API_KEY="<api-key>"' > {baseDir}/config
```

Get an API key at https://console.groq.com/

## Usage

```bash
{baseDir}/transcribe.sh <audio-file>
```

## Supported Formats

- m4a, mp3, wav, ogg, flac, webm
- Max file size: 25MB

## Output

Returns plain text transcription with punctuation and proper capitalization to stdout.
