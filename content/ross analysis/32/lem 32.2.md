---
title: Lemma 32.2
tags:
  - lemma
---
*Let $f$ be a bounded function on $[a,b]$. If $P$ and $Q$ are partitions of $[a,b]$ and $P \subseteq Q$, then*

$$
L(f,P) \leq L(f,Q) \leq U(f,Q) \leq U(f,P) \tag{1}
$$

## Proof

The middle inequality is obvious. The proofs of the first and third inequalities are similar, so we prove

$$
L(f,P)\leq L(f,Q). \tag{2}
$$

An induction argument \[[[ross analysis/32/4|Exercises 32.4]]\] shows we may assume $Q$ has only one more point, say $u$, than $P$. If

$$
P=\{a=t_0<t_1<\cdots<t_n=b \}
$$

then

$$
Q = \{a=t_0<t_1<\cdots<t_{k-1}<u<t_k<\cdots<t_n=b\}
$$

for some $k\in\{1,2,\ldots,n\}$. The lower Darboux sums for $P$ and $Q$ are the same except for the terms involving $t_{k-1}$ or $t_k$. In fact, their difference is

$$
\begin{align*}
L(f,Q)-L(f,P)&=m(f,[t_{k-1},u])\cdot(u-t_{k-1})+m(f,u,t_k])\cdot(t_k-u)-m(f,t_{k-1},t_k])\cdot(t_k-t_{k-1}) \\
&\geq m(f,[t_{k-1},t_k])\cdot(u-t_{k-1})+m(f,[t_{k-1},t_k])\cdot(t_k-u)-m(f,t_{k-1},t_k])\cdot(t_k-t_{k-1}) \\
&= m(f,[t_{k-1},t_k])\cdot(u-t_{k-1}+t_k-u-t_k+t_{k-1}) \\
&=0
\end{align*}
$$

Thus we get $(2)$. 

$$
\ \tag*{$\blacksquare$}
$$
