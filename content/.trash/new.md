$$
To demonstrate a one-to-one correspondence (bijection) between \( \mathbb{R} \times \mathbb{R} \) and \( \mathbb{R} \), we can use a mapping that transforms each pair of real numbers \( (x, y) \) into a single real number and vice versa.

### Strategy Overview
The idea is to find a function \( f: \mathbb{R} \times \mathbb{R} \rightarrow \mathbb{R} \) and a function \( g: \mathbb{R} \rightarrow \mathbb{R} \times \mathbb{R} \) such that both \( f \) and \( g \) are bijective (i.e., each function is both injective and surjective).

### Constructing the Functions

1. **Interleaving the Decimal Expansions:**

   One approach is to interleave the decimal digits of \( x \) and \( y \) to construct a single real number.

   - Given \( x \in \mathbb{R} \) and \( y \in \mathbb{R} \), express their decimal expansions:
     \[
     x = 0.x_1x_2x_3\ldots \quad \text{and} \quad y = 0.y_1y_2y_3\ldots
     \]
   - Define a function \( f \) that maps the pair \( (x, y) \) to a single real number by interleaving the digits of \( x \) and \( y \):
     \[
     f(x, y) = 0.x_1y_1x_2y_2x_3y_3\ldots
     \]

   This interleaving process creates a real number whose decimal expansion alternates between the digits of \( x \) and \( y \).

2. **Inverse Function:**

   - Given a real number \( z \in \mathbb{R} \) with a decimal expansion \( z = 0.z_1z_2z_3\ldots \), the inverse function \( g(z) \) separates the digits of \( z \) into two sequences:
     \[
     g(z) = (x, y) \quad \text{where} \quad x = 0.z_1z_3z_5\ldots \quad \text{and} \quad y = 0.z_2z_4z_6\ldots
     \]
   - This separates \( z \) back into two real numbers \( x \) and \( y \), recovering the original pair.

### Properties of the Functions

- **Injectivity:**
  - \( f(x_1, y_1) = f(x_2, y_2) \) implies \( x_1 = x_2 \) and \( y_1 = y_2 \), because if the interleaved sequence is the same, the corresponding sequences \( x_1 \) and \( y_1 \) must be the same as \( x_2 \) and \( y_2 \), respectively.
  
- **Surjectivity:**
  - For any real number \( z \), the inverse function \( g(z) \) will produce a pair \( (x, y) \) such that \( f(x, y) = z \), ensuring that every real number is mapped to by some pair \( (x, y) \).

### Conclusion
This
$$