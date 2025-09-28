---
title: How to think about tests when using coding agents
pubDatetime: 2025-09-28T08:33:18Z
modDatetime: 2025-09-28T08:33:33Z
featured: true
draft: false
description: Some thoughts about using TDD with claude code.
---

First, a quick history lesson of my approach to testing during most of my years working as a software engineer and why it works ok for me, but why it's not, in my opinion good practice to transfer over to working with a coding agent. What I have ended up with is not TDD. I have tried it a couple of times, but it never sticks. Instead, I like to start coding very early when I maybe don't even have a solution in my head, and I then experiment myself towards a solution. Forcing a rigid TDD structure onto that process has not worked out well for me.

So what do I do? Well, I write tests when I need them, for example to automate away manual testing and reduce iteration time. So its mostly about increasing development velocity and less about proving the code is correct.

I don't think too much about if the tests are brittle, testing behavior versus internals and so on, but rather about what will help me in the moment. This has worked fine, I'm not saying it's a perfect way to work by any means, but it gets the job done most of the time. I guess you can call it a pragmatic approach. For example when doing something that involves a database, I always write tests that spin up a real database instance, and test my queries and logic that way, because this saves lots of time and mental energy. As a contrast, due to my limited frontend chops, I never test my own React code, I just don't understand how to get values from those kinds of tests, e.g. I have never found that it saves me much time or reduces manual work.

These practices do not at all transfer over well when pairing with the current generation of agentic coding tools. Especially not when letting them drive their own development process. If you don't rein in, you will end up with massive test suites with useless tests that no one will ever read. And they will be mostly brittle tests that focus on the wrong things. If we instead force the coding agent into a harness where it must produce the right kinds of tests, and the tests are verified and understood by the human, then the tests themselves are now the spec, they describe the behavior we want from the system we are building, thus whatever implementation the coding agent can come up with, it will at least adhere to that spec. The spec can be wrong of course, the human driver might not have a good enough grasp of the requirements and the system, but in that case you iterate, change the spec and thus write new tests.

This was a long-winded way of landing at my recommendation for how to use claude code in particular, and for code that you care about maintaining over time.

The recommendation: Just accept TDD and try to do every task by having claude code produce a failing test _FIRST_ that _MUST_ test behavior and not internals. It must not be brittle. If you as a human don't understand this distinction, then slop will be produced. So you need to read the produced test and possibly reprompt to test behavior at the right level. If this is not possible then the code should be restructured to facilitate. Claude is pretty good at producing the right kinds of tests if given right steering and context, but it will not do this as a default. All of this ceremony requires large effort and focus from the human. So if this does not sound appealing, it's probably better to just write the code yourself.

Now, this recommendation is for the time of writing, in the year of our lord 2025. Anthropic has had various incidents with claude. I have recently churned my $200 MAX subscription, but still have a couple of weeks of usage left. Right now I much prefer using codex cli instead. Lots of the intuition that has been built up using claude code are much less relevant. The TDD harness might not be needed. My feeling is codex can work for long periods of time from fairly simple prompts and not produce slop at all. But it is still early for codex, more experimentation is needed.
