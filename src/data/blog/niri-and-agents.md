---
title: How I work with Niri and coding agents
pubDatetime: 2026-03-25T11:14:01Z
modDatetime:
featured: true
draft: true
description: My recent adventures with Niri, NixOS and coding agents
---

---

### TLDR

Niri is an infinite scrolling window manager for Linux that replaces the need to use specific agent orchestration apps or terminal multiplexers. Since its not an app but a window manager, it does not enforce any specific terminal, editor, agent harness, browser etc. The user can setup any workspace as they wish with any combination and layout of app they can think of that works with Niri. In contrast, specific orchestration apps cant integate everything and probably stop at an embedded browser. If you work a lot with parallel agents, and are not tied to a specific OS, I highly recommend Niri.

https://github.com/niri-wm/niri

---

Sometime last year I started really getting on the then current hype train that yes, 2025 would in fact be the year of the Linux desktop. Omarchy was out and I was suddenly aware of modern Linux with wayland and hyprland and similar setups. I had always really liked using tiling WMs, and was using Aerospace on all my macs at this time. But I also had very good memories of using arch and i3 7-8 years ago, which for various reasons did not stick and I had long since reverted back to macs for all development work.

All of this also coincided with the rise of coding agents and my usage of them. My dotfiles repo which I previously comitted to like a few times a month suddenly started getting commits every day as I realized I could fix everything I wanted, no detail too small (this is a double edeged sword). I had been using ansible for a while to automate the setup of my machines, symlinking config files etc but I wanted more. And I wanted Linux. And I wanted to leverage coding agents to do most of the work to set this up. NixOS felt like the perfect fit. The end result of Omarchy I thought was great, but it also felt bloated, I only needed a fraction of what it offered at the time, and it was and still is afaik based on Arch and bash scripts. NixOS just seemed way more appealing. So I set my agents to work.

My nix config grew organically as I learned about the os and system itself, but of course I never really learned how to, and still almost never handtype any of the code for my nix setup. I just try to steer the overall direction to a good place, enforcing good software engineering practises and nix idioms as I learn about them, trying to keep the whole setup from a becoming a vibe coded monster basically. Started with converting my ansible setup as simply as possible, still keeping both paths available for macs I hadnt yet converted to using nix and home manager and at the same time I copied a nix fork of omarchy and built out my first setup out of that and started using it on my desktop gaming PC along with an old thinkpad I had lying around.

The initial setup was mostly remixing omarchy and I was using hyprland, waybar, walker etc. And it was mostly amazing. It was so smooth and minimal.

In december 2025 I was away for Christmas and wanted to play monkey island on steam, but I only had my macbook air with me. So I was researching Asahi a bit and which WMs you could use on that. At the time, it turned out that both hyprland and sway were basically no gos for reasons I cant remember right now. But there was an option I had heard about, that was supposed to work well; Niri. I didnt know much about scrolling WMs, but read posts like were people were saying stuff like "tried niri after hyprland and never went back". So I thought I should at least try. I got everything except steam and monkey island up and running in asahi with fedora and a nix home manager only setup. I liked it, so I converted my full config to use Niri.

This was not strictly planned, but basically I stumpled upon a setup that in my mind is perfect for working with coding agents. On macs I was using tmux with some support flows to quickly switch between sessions and windows, I started converting some of them to Niri while learning how to actually use the WM and what its strengths are. Here is my long winded pitch for why this setup is good;

Everyone is building multiagent and multiproject orchestration apps, tuis, ides etc to support the constant context switching that you often end up doing when working with coding agents. For example these kinds of apps is conductor, codex app, t3 code, cmux and like 1000 more. My sales pitch is that you can basically move all of this to the WM layer, which is amazing because you are not bound to what a specific app offers. The most obvious one is browsers. Its so common to have a project where want a running browser close by. I think for example cmux has an embedded chromium thing. The point is, all these apps have to implement support for every kind of app you need, and it needs to be done in a good enough way. With Niri, I have workspaces per project even multiple per project via worktrees, I can switch between them with either standard keybinds like mod+1 etc, or any custom tool I want to build that can integrate with the niri IPC. The main one I'm building using right now is a agent-switch which is a gtk app to show my current agent sessions (in all workpaces), their state and instant jumps to them. Super handy when you are running 4+ sessions.

When inside a workspace, its obviously Niri, and you do wever you want in there, and infinite scrolling is way more ergonomic then what you can do with stock hyprland where you need to use tabs and such when you run out of screen real estate. My typical setup is to either show 2 or 3 columns, depending on the current screen im using. I like to have a scratch column to the left with various terminals, and nvim furthest to the right to just check what the agent is doing, reading diffs etc. And in between I can do multiple agents, or agent+browser or whatever fits well with that codebase. There are various in workspace keybinds you can use to quickly switch between columns, resize, move etc, everything you would expect. Its keyboard driven and fully customizable and it is a wayland compositor, so there are no limits. In my mind, this is the current state of the art, not custom apps that lock you in to specifc harnesses and tools.
