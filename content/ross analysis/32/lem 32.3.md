---
title: Lemma 32.3
tags:
  - lemma
---
*If $f$ is a bounded function on $[a,b]$, and if $P$ and $Q$ are partitions of $[a,b]$, then $L(f,P) \leq U(f,P)$.*

## Proof

The set $P \cup Q$ is also a partition of $[a,b]$. Since $P \subseteq P \cup Q$ and $Q \subseteq P \cup Q$, we can apply [[ross analysis/32/lem 32.2|Lemma 32.2]] to obtain

$$
L(f,P) \leq L(f,P \cup Q) \leq U(f,P \cup Q) \leq U(f,Q)
$$

Thus

$$
L(f,P) \leq U(f,Q) \tag*{$\blacksquare$}
$$



