---
title: Theorem 5.1 Products of Disjoint Cycles
tags:
  - theorem
---
*Every permutation of a finite set can be written as a cycle or as a product of disjoint cycles.*

## Proof
Let $\alpha$ be a permutation on $A = \{1,2,\ldots,n \}$. To write $\alpha$ in disjoint cycle form, we start by choosing any member of $A$, say $a_1$, and let
$$
a_2 = \alpha(a_1), \quad a_3 = \alpha(\alpha(a_1)) = \alpha^2(a_1)
$$
and so on, until we arrive at $a_1 = \alpha^m(a_1)$ for some $m$. We know that such a $m$ exists because the sequence $a_1$,$\alpha(a_1)$, $\alpha^2(a_1)$, $\ldots$ must be finite; so there must eventually be a repetition, say $\alpha^i(a_1) = \alpha^j(a_1)$ for some $i$ and $j$ with $i < j$. Then $a_1 = \alpha^m a(a_1)$, where $m = j - i$. We express this relationship among $a_1, a_2, \ldots, a_m$ as
$$
\alpha = (a_1, a_2,\ldots, a_m)\cdots
$$

The three dots at the end indicate the possibility that we may not have exhausted the set $A$ in this process. In such a case, we merely choose any element $b_1$ of $A$ not appearing in the first cycle and proceed to create a new cycle as before. That is, we let $b_2 = \alpha(b_1)$, $b_3 = \alpha^2(b_1)$, and so on, until we reach $b_1 = \alpha^k(b_1)$ for some $k$. This new cycle will have no elements in common with the previously constructed cycle. For, if so, then $\alpha^i(a_1) = \alpha^j(b_1)$ for some $i$ and $j$. But then $\alpha^{i - j}(a_1) = b_1$, and therefore $b_1 = a_t$ for some $t$. This contradicts the way $b_1$ was chosen. Continuing this process until we run out of elements of $A$, our permutation will appear as
$$
\alpha = (a_1,a_2,\ldots,a_m)(b_1,b_2,\ldots,b_k)\cdots(c_1,c_2,\ldots,c_s)
$$

In this way, we see that every permutation can be written as a product of disjoint cycles.
$$
\tag*{$\blacksquare$}
$$
