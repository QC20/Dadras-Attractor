# Dadras-Attractor


## What is an Attractor 

An attractor is a fundamental concept in dynamical systems and chaos theory. It's essentially a set of values that a dynamic system evolves toward over time, regardless of where it starts from (within reason).

### An Analogy

Think of it like this: imagine a marble rolling around in a bowl. No matter where you drop the marble on the sides of the bowl, it will eventually settle at the bottom. The bottom of the bowl is an attractor - specifically, a "point attractor" because everything converges to a single point.

## Types of Attractors

- Point Attractors
Everything converges to a single point (like the marble in a bowl).

- Periodic Attractors
The system cycles through a repeating pattern (like a pendulum swinging back and forth).

- Strange Attractors
These form complex, often fractal-like patterns. They never exactly repeat but remain within bounded regions. This is where chaos and beauty meet.

## The Dadras Attractor

The Dadras Attractor is a chaotic or strange attractor. The system is governed by the following equations:

```cpp
nx[i] = y[i] - p * x[i] + o * y[i] * z[i];
ny[i] = q * y[i] - x[i] * z[i] + z[i];
nz[i] = c * x[i] * y[i] - e * z[i];
```

These equations define a deterministic system - each particle follows precise mathematical rules. However, the system is highly sensitive to initial conditions. Tiny differences in starting points lead to dramatically different paths.

Despite the apparent chaos, there's an underlying order. The particles never escape to infinity; instead, they are attracted to a bounded, swirling structure - the attractor.

