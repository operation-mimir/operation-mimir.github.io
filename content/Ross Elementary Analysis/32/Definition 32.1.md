---
title: Definition 32.1
tags:
  - definition
---

Let $f$ be a bounded function on a closed interval $[a,b]$. For $S\subseteq[a,b]$, we adopt the notation $M(f,S) = \sup\{f(x):x\in S\}$ and $m(f,S) = \inf\{f(x):x\in S\}$.

A *partition* of $[a,b]$  is any finite ordered subset $P$ having the form

$$
P=\{a=t_0<t_1<\cdots<t_n=b\}
$$

The *upper Darboux sum* $U(f,P)$ of $f$ with respect to $P$ is the sum

$$
U(f,P)=\sum_{k=1}^n M(f,[t_{k-1},t_k])\cdot (t_k-t_{k-1})
$$

and the *lower Darboux sum* $L(f,P)$ is

$$
L(f,P)=\sum_{k=1}^n m(f,[t_{k-1},t_k])\cdot (t_k-t_{k-1})
$$

Note

$$
U(f,P) \leq \sum_{k=1}^n M(f,[a,b])\cdot (t_k - t_{k-1}) = M(f,[a,b])\cdot (b-a)
$$

likewise $L(f,P) \geq m(f,[a,b])\cdot (b-a)$, so

$$
m(f,[a,b])\cdot (b-a) \leq L(f,P) \leq U(f,P) \leq M(f,[a,b])\cdot (b-a) \tag{1}
$$

The *upper Darboux integral* $U(f)$ of $f$ over $[a,b]$ is defined by

$$
U(f) = \inf\{U(f,P) : P \text{ is a partition of } [a,b]\}
$$

and the *lower Darboux integral* is

$$
L(f) = \sup\{L(f,P) : P \text{ is a partition of } [a,b]\}
$$

In view of $(1)$, $U(f)$ and $L(f)$ are real numbers.

We say $f$ is *integrable* on $[a,b]$ provided $L(f)=U(f)$. In this case, we write $\int_a^b f$ or $\int_a^b f(x) dx$ for this common value:

$$
\int_a^b f = \int_a^b f(x) dx = L(f) = U(f) \tag{2}
$$
