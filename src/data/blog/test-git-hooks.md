---
author: Test Author
pubDatetime: 2025-09-07T13:05:47Z
modDatetime: 2025-09-07T13:06:15Z
title: Testing Git Hooks for Auto Dating
featured: false
draft: false
tags:
  - test
  - git-hooks
description: This is a test post to verify that Git hooks automatically update dates
---

# Testing Git Hooks

This is a test post to verify that our Git hooks are working correctly.

## What We're Testing

When we commit this file, the pre-commit hook should:

1. Automatically update the `pubDatetime` field to the current timestamp
2. Leave the `modDatetime` field empty (since it's a new file)

## Expected Behavior

- New files get their `pubDatetime` set to the current time
- Modified files with `draft: false` get their `modDatetime` updated
- Files with `draft: first` get converted to `draft: false` with cleared `modDatetime`

Let's see if it works!

## Update Test

This line was added to test the modDatetime update functionality.