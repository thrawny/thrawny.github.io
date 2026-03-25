---
title: How I work with Niri and coding agents
pubDatetime: 2026-03-25T11:14:01Z
modDatetime:
featured: true
draft: false
tags: ["agents", "linux", "niri", "nix"]
description: My recent adventures with Niri, NixOS and coding agents
---

---

### TLDR

Niri is an infinite scrolling window manager for Linux that replaces the need to use specific agent orchestration apps or terminal multiplexers. Since its not an app but a window manager (I guess wayland compositor is the strictly correct term), it does not enforce any specific terminal, editor, agent harness, browser etc. The user can setup any workspace as they wish with any combination and layout of apps. In contrast, specific orchestration apps cant support any app and for what I have seen, dont attempt to do much more than embed a browser. If you work a lot with parallel agents, and are not tied to a specific OS, I highly recommend Niri.

https://github.com/niri-wm/niri

---

Last year I started really getting on the hype train that yes, 2025 would in fact be the year of the Linux desktop. [Omarchy](https://github.com/basecamp/omarchy) was out and I was suddenly aware of modern Linux with Wayland and [Hyprland](https://github.com/hyprwm/hyprland) and similar setups. I had always really liked using tiling WMs, and was using [Aerospace](https://github.com/nikitabobko/AeroSpace) on all my macs at this time. I would still recommend Aerospace very much for those who want a tiling experience on MacOS. But I also had very good memories of using Arch and i3 from 7-8 years ago, which for various reasons did not stick and I had long since reverted back to macs for all development work.

All of this also coincided with the rise of coding agents and my usage of them. My [dotfiles repo](https://github.com/thrawny/dotfiles) which I previously committed to like a few times a month suddenly started getting commits every day as I realized I could fix everything I wanted, no detail or task too small or too hard. I had been using Ansible for a while to automate the setup of my machines, symlinking config files etc but I wanted more. And I wanted Linux. And I wanted to leverage coding agents to do most of the work to set this up. NixOS with its declarative approach felt like the perfect fit. The end result of Omarchy I thought was great, but it also felt bloated and I only needed a fraction of what it offered at the time. It was and still is afaik based on Arch and bash scripts. NixOS just seemed way more appealing. So I set off to oversee some agents doing some work.

My nix config grew organically as I learned about the distro and system itself, but I never really learned how to, and still almost never handtype any of the code for the setup. I just try to steer the overall direction towards a good place, enforcing good software engineering practices and nix idioms as I learn about them, trying to keep the whole setup from a becoming a vibe coded monster. Started with converting my Ansible setup with as few changes as possible, still keeping both paths available for macs I hadnt yet converted to using nix and home-manager. At the same time I remixed a [nix remix of Omarchy](https://github.com/henrysipp/omarchy-nix) and built out my first setup out of that and started using it on my desktop gaming PC along with an old thinkpad I had lying around. That initial setup was using Hyprland, Waybar, Walker etc. And it was mostly amazing. It was so smooth and minimal.

In December 2025 I was away for Christmas and wanted to play Monkey Island on Steam, but I only had my Macbook Air with M1 with me. So I was researching Asahi a bit and which WMs you could use on that. At the time, it turned out that both Hyprland and Sway were basically no gos for reasons I cant remember right now. But there was an option I had heard about, that was supposed to work well; [Niri](https://github.com/niri-wm/niri). I didn't know much about scrolling WMs, but read posts like were people were saying stuff like "tried niri after hyprland and never went back". So I thought I should at least try. Setting up gaming failed miserably but that didnt really matter as I just ended up learning Niri and tinkered with a Asahi+Fedora+Nix home manager setup. I liked it, so I converted my default NixOS config to use Niri.

This was not strictly planned, but basically I stumbled upon a setup that is perfect for working with coding agents. On macs I was using tmux with some support commands and scripts to quickly switch between sessions and windows. So naturally I started reimplementing similar functionality using scripts and the Niri IPC while learning how to actually use the WM and what its strengths and opinions are. Here is my pitch for why this setup is so good;

Everyone is building multi agent and multi project orchestration apps, tuis, ides etc to support the constant context switching that you often end up doing when working with coding agents. Some examples that come to mind is [conductor](https://docs.conductor.build/), [codex app](https://openai.com/index/introducing-the-codex-app/), [t3 code](https://github.com/pingdotgg/t3code), [cmux](https://github.com/manaflow-ai/cmux) and like 1000 more. My sales pitch is that you can basically move all of this to the WM layer, which is amazing because you are not bound to what a specific app offers. The most obvious one is browsers. Its so common to have a project where you want a running browser close by. I think for example cmux has an embedded chromium thing, which may or may not work well, I have not tried it myself. The point is, all these apps have to implement support for every kind of app you need and make it least good enough for basic use.

But with Niri, and any tiling WM for that matter, instead of a single app, you can have workspaces per project or even multiple per project via worktrees, You can switch between them with either standard keybinds like mod+1 etc, or any custom tool that can integrate with the Niri IPC. The switcher I'm using in the screenshot is a custom gtk app to show my current agent sessions (in all workspaces), their state (working, waiting, idle) and binds for instant jumps to them. Super handy when you are running many sessions. Code here: https://github.com/thrawny/agent-switch

![A typical Niri workspace with an agent session and nvim and the agent switcher popup](@/assets/niri-workspace.jpg)

When inside a workspace, its obviously Niri, and you can do whatever you want in there, and I think infinite scrolling is way more ergonomic than what you can do with stock Hyprland where you need to use tabs and such when you run out of screen real estate. My typical setup is to either show 2 or 3 columns, depending on the current screen im using. I like to have a scratch column (you can stack multiple windows as tabs or just split in a single column) to the left with various terminals, and nvim furthest to the right to just check what the agent is doing, reading diffs etc. And in between I can do multiple agents, or agent+browser or whatever fits well with that codebase. There are various in workspace keybinds you can use to quickly switch between columns, resize, move etc, everything you would expect. Its keyboard driven and fully customizable and it is a wayland compositor, so there are few limits to what you can do. In my mind, this is the current state of the art, not custom apps that lock you in to specific harnesses and tools.

![Writing this post in Niri with Claude Code, nvim, and a browser preview](@/assets/niri-workspace-2.jpg)

As for the specific apps I use the most, its short, and is mostly comprised of terminal based apps;

- Terminal emulator: [Ghostty](https://github.com/ghostty-org/ghostty)
- Editor: [Neovim](https://github.com/neovim/neovim)
- Browser: [Zen](https://github.com/zen-browser/desktop) or [Helium](https://github.com/imputnet/helium)
- Bonus: [zmx](https://github.com/neurosnap/zmx) (tmux alternative without tiling features) for terminal tasks where me and the agent want to watch the same output
