---
title: Welcome to My Blog
author: Your Name
pubDatetime: 2025-09-07T13:18:24Z
modDatetime:
featured: true
draft: false
tags:
  - welcome
  - introduction
description: Welcome to my personal blog where I share my thoughts on technology, projects, and life experiences.
---

Welcome to my blog! This is my first post on my new personal website.

## What to Expect

I'll be writing about:

- Technology and development
- Personal projects
- Learning experiences
- Interesting discoveries

## Why I Started This Blog

[Share your motivation for starting a blog]

## A Quick Code Example

Here's a simple Python snippet to demonstrate code highlighting in this blog:

```python
def fibonacci(n):
    """Generate Fibonacci sequence up to n terms."""
    fib_sequence = []
    a, b = 0, 1

    for _ in range(n):
        fib_sequence.append(a)
        a, b = b, a + b

    return fib_sequence

# Example usage
if __name__ == "__main__":
    n_terms = 10
    result = fibonacci(n_terms)
    print(f"First {n_terms} Fibonacci numbers: {result}")

    # Calculate the golden ratio from the sequence
    if len(result) > 1:
        golden_ratio = result[-1] / result[-2] if result[-2] != 0 else 0
        print(f"Approximation of golden ratio: {golden_ratio:.6f}")
```

This blog supports syntax highlighting for various programming languages including Python, JavaScript, TypeScript, and many more!

## Get in Touch

Feel free to reach out through the social links at the bottom of the page. I'm always happy to connect with fellow developers and tech enthusiasts!

---

_Note: This is a template post. Replace this content with your own introduction or delete this file to start fresh. Remember that the Git hooks will automatically manage the `pubDatetime` and `modDatetime` fields when you commit._
