---
title: Theorem 5.2 Disjoint Cycles Commute
tags:
  - theorem
---
*If the pair of cycles $\alpha = (a_1,a_2,\ldots,a_m)$ and $\beta = (b_1,b_2,\ldots,b_n)$ have no entries in common, then $\alpha\beta = \beta\alpha$.*

## Proof

For definiteness, let us say that $\alpha$ and $\beta$ are permutations of the set
$$
S = \{ a_1, a_2, \ldots, a_m, b_1, b_2, \ldots, b_n, c_1, c_2, \ldots, c_k \}
$$
where the $c$'s are the members of $S$ which  are fixed by $S$.

To show that $\alpha\beta = \beta\alpha$ we must show that $\alpha\beta(x) = \beta\alpha(x)$ for all $x$ in $S$.

If $x$ is one of the $a_i$'s then
$$
\alpha\beta(a_i) = \alpha(a_i) = a_{i+1}
$$
since $\beta$ fixes $a_i$ and $\alpha$ maps $a_i$ to $a_{i+1}$ (we interpret $a_{i+1} = a_1$ when $i=m$).

Also
$$
\beta\alpha(a_i) = \beta(a_{i+1}) = a_{i+1}
$$
So $\alpha\beta(x) = \beta\alpha(x)$ when $x$ is one of the $a_i$'s.

A similar argument show that $\alpha\beta(x) = \alpha\beta(x)$ when $x$ is one of the $b_i$'s.

Finally if $x$ is one of the $c_i$'s then it is fixed by both $\alpha$ and $\beta$.

So

$$
\alpha\beta(c_i) = \alpha(c_i) = c_i
$$

and

$$
\beta\alpha(c_i) = \beta(c_i) = c_i.
$$

So from all above cases $\alpha\beta = \beta\alpha$.