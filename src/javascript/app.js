const ATTRACTORS = {
  dadras: {
    name: "Dadras",
    description:
      "A five-parameter chaotic system with twisting wing-like structure and strong sensitivity to initial conditions.",
    dt: 0.002,
    scale: 22,
    hueShift: 0,
    lineMode: false,
    randomRange: 4,
    params: { p: 3, o: 2.7, q: 1.7, c: 2, e: 9 },
    derivative: ({ p, o, q, c, e }, x, y, z) => ({
      dx: y - p * x + o * y * z,
      dy: q * y - x * z + z,
      dz: c * x * y - e * z,
    }),
  },
  lorenz: {
    name: "Lorenz",
    description:
      "The classic butterfly-shaped strange attractor arising from simplified atmospheric convection equations.",
    dt: 0.005,
    scale: 40,
    hueShift: 35,
    lineMode: true,
    randomRange: 1,
    params: { sigma: 10, rho: 28, beta: 8 / 3 },
    derivative: ({ sigma, rho, beta }, x, y, z) => ({
      dx: sigma * (y - x),
      dy: x * (rho - z) - y,
      dz: x * y - beta * z,
    }),
  },
  rossler: {
    name: "Rossler",
    description:
      "A ribbon-like attractor with elegant spirals and a simple three-equation chaotic form.",
    dt: 0.01,
    scale: 24,
    hueShift: 65,
    lineMode: true,
    randomRange: 2,
    params: { a: 0.2, b: 0.2, c: 5.7 },
    derivative: ({ a, b, c }, x, y, z) => ({
      dx: -y - z,
      dy: x + a * y,
      dz: b + z * (x - c),
    }),
  },
  chen: {
    name: "Chen",
    description:
      "A Lorenz-like chaotic attractor with sharper folding and more angular motion through phase space.",
    dt: 0.003,
    scale: 45,
    hueShift: 110,
    lineMode: true,
    randomRange: 1.5,
    params: { a: 35, b: 3, c: 28 },
    derivative: ({ a, b, c }, x, y, z) => ({
      dx: a * (y - x),
      dy: (c - a) * x - x * z + c * y,
      dz: x * y - b * z,
    }),
  },
  aizawa: {
    name: "Aizawa",
    description:
      "A richly folded attractor producing shell-like swirls and intricate layered loops.",
    dt: 0.01,
    scale: 2.8,
    hueShift: 150,
    lineMode: true,
    randomRange: 0.2,
    params: { a: 0.95, b: 0.7, c: 0.6, d: 3.5, e: 0.25, f: 0.1 },
    derivative: ({ a, b, c, d, e, f }, x, y, z) => ({
      dx: (z - b) * x - d * y,
      dy: d * x + (z - b) * y,
      dz: c + a * z - Math.pow(z, 3) / 3 - (x * x + y * y) * (1 + e * z) + f * z * Math.pow(x, 3),
    }),
  },
  thomas: {
    name: "Thomas",
    description:
      "A smooth symmetric strange attractor built from cyclic sine coupling between all axes.",
    dt: 0.07,
    scale: 12,
    hueShift: 185,
    lineMode: true,
    randomRange: 0.5,
    params: { b: 0.208186 },
    derivative: ({ b }, x, y, z) => ({
      dx: Math.sin(y) - b * x,
      dy: Math.sin(z) - b * y,
      dz: Math.sin(x) - b * z,
    }),
  },
  halvorsen: {
    name: "Halvorsen",
    description:
      "A tri-symmetric attractor with broad curved sheets and pronounced rotational motion.",
    dt: 0.004,
    scale: 14,
    hueShift: 220,
    lineMode: true,
    randomRange: 1,
    params: { a: 1.4 },
    derivative: ({ a }, x, y, z) => ({
      dx: -a * x - 4 * y - 4 * z - y * y,
      dy: -a * y - 4 * z - 4 * x - z * z,
      dz: -a * z - 4 * x - 4 * y - x * x,
    }),
  },
  chua: {
    name: "Chua",
    description:
      "An electronic-circuit-inspired double-scroll attractor with dramatic transitions between lobes.",
    dt: 0.006,
    scale: 3,
    hueShift: 260,
    lineMode: true,
    randomRange: 0.4,
    params: { alpha: 15.6, beta: 28, m0: -1.143, m1: -0.714 },
    derivative: ({ alpha, beta, m0, m1 }, x, y, z) => {
      const fx = m1 * x + 0.5 * (m0 - m1) * (Math.abs(x + 1) - Math.abs(x - 1));
      return {
        dx: alpha * (y - x - fx),
        dy: x - y + z,
        dz: -beta * y,
      };
    },
  },
  dequanli: {
    name: "Dequan Li",
    description:
      "A highly energetic chaotic system with stretched lobes and strong nonlinear coupling.",
    dt: 0.0015,
    scale: 60,
    hueShift: 300,
    lineMode: true,
    randomRange: 0.4,
    params: { a: 40, c: 1.833, d: 0.16, e: 0.65, k: 55 },
    derivative: ({ a, c, d, e, k }, x, y, z) => ({
      dx: a * (y - x) + d * x * z,
      dy: k * x + e * y - x * z,
      dz: c * z + x * y - 10,
    }),
  },
  rabinovichfabrikant: {
    name: "Rabinovich-Fabrikant",
    description:
      "A complex attractor known for dramatic bursts, unstable regions, and sculptural loops.",
    dt: 0.0008,
    scale: 1.6,
    hueShift: 330,
    lineMode: true,
    randomRange: 0.1,
    params: { alpha: 0.14, gamma: 0.1 },
    derivative: ({ alpha, gamma }, x, y, z) => ({
      dx: y * (z - 1 + x * x) + gamma * x,
      dy: x * (3 * z + 1 - x * x) + gamma * y,
      dz: -2 * z * (alpha + x * y),
    }),
  },
  dejong: {
    name: "De Jong",
    description:
      "A discrete chaotic map that produces dense ornamental point clouds rather than continuous flow lines.",
    dt: 1,
    scale: 4,
    hueShift: 20,
    lineMode: false,
    randomRange: 1,
    discrete: true,
    params: { a: 1.4, b: -2.3, c: 2.4, d: -2.1 },
    iterate: ({ a, b, c, d }, x, y, z) => ({
      x: Math.sin(a * y) - Math.cos(b * x),
      y: Math.sin(c * x) - Math.cos(d * y),
      z: Math.sin(a * x) + Math.cos(d * y),
    }),
  },
};

const state = {
  attractorKey: "dadras",
  particles: [],
  targetParticles: 6500,
  projection: "xz",
  lineMode: false,
  depthWeight: true,
  zoom: 1,
  rotationX: -0.35,
  rotationY: 0.55,
  autoRotate: false,
  dragging: false,
  lastMouseX: 0,
  lastMouseY: 0,
  targetFps: 60,
  fpsSamples: [],
  currentFps: 0,
  adaptiveParticleCount: 6500,
  fadeAlpha: 0.08,
};

const ui = {};
let sketchInstance;

function getCurrentAttractor() {
  return ATTRACTORS[state.attractorKey];
}

function buildUiReferences() {
  ui.attractorSelect = document.getElementById("attractor-select");
  ui.projectionSelect = document.getElementById("projection-select");
  ui.particleSlider = document.getElementById("particle-slider");
  ui.particleValue = document.getElementById("particle-value");
  ui.trailSlider = document.getElementById("trail-slider");
  ui.trailValue = document.getElementById("trail-value");
  ui.speedSlider = document.getElementById("speed-slider");
  ui.speedValue = document.getElementById("speed-value");
  ui.lineModeToggle = document.getElementById("line-mode-toggle");
  ui.weightToggle = document.getElementById("weight-toggle");
  ui.autoRotateToggle = document.getElementById("auto-rotate-toggle");
  ui.resetButton = document.getElementById("reset-button");
  ui.randomizeButton = document.getElementById("randomize-button");
  ui.activeParticles = document.getElementById("active-particles");
  ui.fpsValue = document.getElementById("fps-value");
  ui.systemName = document.getElementById("system-name");
  ui.systemDescription = document.getElementById("system-description");
}

function populateAttractorOptions() {
  Object.entries(ATTRACTORS).forEach(([key, attractor]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = attractor.name;
    ui.attractorSelect.appendChild(option);
  });
}

function syncUiWithState() {
  const attractor = getCurrentAttractor();
  ui.attractorSelect.value = state.attractorKey;
  ui.projectionSelect.value = state.projection;
  ui.particleSlider.value = String(state.targetParticles);
  ui.particleValue.textContent = state.targetParticles.toLocaleString();
  ui.trailSlider.value = String(state.fadeAlpha.toFixed(2));
  ui.trailValue.textContent = state.fadeAlpha.toFixed(2);
  ui.speedSlider.value = String(attractor.dt.toFixed(3));
  ui.speedValue.textContent = attractor.dt.toFixed(3);
  ui.lineModeToggle.checked = state.lineMode;
  ui.weightToggle.checked = state.depthWeight;
  ui.autoRotateToggle.checked = state.autoRotate;
  ui.systemName.textContent = attractor.name;
  ui.systemDescription.textContent = attractor.description;
  ui.activeParticles.textContent = Math.min(
    state.adaptiveParticleCount,
    state.particles.length
  ).toLocaleString();
  ui.fpsValue.textContent = state.currentFps.toFixed(1);
}

function bindUiEvents() {
  ui.attractorSelect.addEventListener("change", (event) => {
    state.attractorKey = event.target.value;
    applyAttractorDefaults();
    regenerateParticles();
  });

  ui.projectionSelect.addEventListener("change", (event) => {
    state.projection = event.target.value;
  });

  ui.particleSlider.addEventListener("input", (event) => {
    state.targetParticles = Number(event.target.value);
    state.adaptiveParticleCount = state.targetParticles;
    regenerateParticles();
    syncUiWithState();
  });

  ui.trailSlider.addEventListener("input", (event) => {
    state.fadeAlpha = Number(event.target.value);
    syncUiWithState();
  });

  ui.speedSlider.addEventListener("input", (event) => {
    ATTRACTORS[state.attractorKey].dt = Number(event.target.value);
    syncUiWithState();
  });

  ui.lineModeToggle.addEventListener("change", (event) => {
    state.lineMode = event.target.checked;
  });

  ui.weightToggle.addEventListener("change", (event) => {
    state.depthWeight = event.target.checked;
  });

  ui.autoRotateToggle.addEventListener("change", (event) => {
    state.autoRotate = event.target.checked;
  });

  ui.resetButton.addEventListener("click", () => {
    regenerateParticles();
  });

  ui.randomizeButton.addEventListener("click", () => {
    const keys = Object.keys(ATTRACTORS);
    state.attractorKey = keys[Math.floor(Math.random() * keys.length)];
    applyAttractorDefaults();
    regenerateParticles();
  });
}

function applyAttractorDefaults() {
  const attractor = getCurrentAttractor();
  state.lineMode = attractor.lineMode;
  state.rotationX = -0.35;
  state.rotationY = 0.55;
  state.zoom = 1;
  syncUiWithState();
}

function randomInRange(range) {
  return (Math.random() * 2 - 1) * range;
}

function createParticle() {
  const attractor = getCurrentAttractor();
  const range = attractor.randomRange;
  return {
    x: randomInRange(range),
    y: randomInRange(range),
    z: randomInRange(range),
    px: 0,
    py: 0,
    pz: 0,
    hue: (Math.random() * 360 + attractor.hueShift) % 360,
  };
}

function regenerateParticles() {
  state.particles = [];
  for (let index = 0; index < state.targetParticles; index += 1) {
    state.particles.push(createParticle());
  }
  state.adaptiveParticleCount = state.targetParticles;
  syncUiWithState();
}

function rk4Step(particle, attractor) {
  const dt = attractor.dt;
  const deriv1 = attractor.derivative(attractor.params, particle.x, particle.y, particle.z);
  const deriv2 = attractor.derivative(
    attractor.params,
    particle.x + deriv1.dx * dt * 0.5,
    particle.y + deriv1.dy * dt * 0.5,
    particle.z + deriv1.dz * dt * 0.5
  );
  const deriv3 = attractor.derivative(
    attractor.params,
    particle.x + deriv2.dx * dt * 0.5,
    particle.y + deriv2.dy * dt * 0.5,
    particle.z + deriv2.dz * dt * 0.5
  );
  const deriv4 = attractor.derivative(
    attractor.params,
    particle.x + deriv3.dx * dt,
    particle.y + deriv3.dy * dt,
    particle.z + deriv3.dz * dt
  );

  particle.px = particle.x;
  particle.py = particle.y;
  particle.pz = particle.z;

  particle.x += ((deriv1.dx + 2 * deriv2.dx + 2 * deriv3.dx + deriv4.dx) / 6) * dt;
  particle.y += ((deriv1.dy + 2 * deriv2.dy + 2 * deriv3.dy + deriv4.dy) / 6) * dt;
  particle.z += ((deriv1.dz + 2 * deriv2.dz + 2 * deriv3.dz + deriv4.dz) / 6) * dt;
}

function discreteStep(particle, attractor) {
  const next = attractor.iterate(attractor.params, particle.x, particle.y, particle.z);
  particle.px = particle.x;
  particle.py = particle.y;
  particle.pz = particle.z;
  particle.x = next.x;
  particle.y = next.y;
  particle.z = next.z;
}

function updateParticles() {
  const attractor = getCurrentAttractor();
  const activeCount = Math.min(state.adaptiveParticleCount, state.particles.length);

  for (let index = 0; index < activeCount; index += 1) {
    const particle = state.particles[index];
    if (attractor.discrete) {
      discreteStep(particle, attractor);
    } else {
      rk4Step(particle, attractor);
    }

    if (!Number.isFinite(particle.x) || !Number.isFinite(particle.y) || !Number.isFinite(particle.z)) {
      state.particles[index] = createParticle();
    }
  }
}

function rotate3d(x, y, z) {
  const cosX = Math.cos(state.rotationX);
  const sinX = Math.sin(state.rotationX);
  const cosY = Math.cos(state.rotationY);
  const sinY = Math.sin(state.rotationY);

  const y1 = y * cosX - z * sinX;
  const z1 = y * sinX + z * cosX;
  const x2 = x * cosY + z1 * sinY;
  const z2 = -x * sinY + z1 * cosY;

  return { x: x2, y: y1, z: z2 };
}

function projectPoint(point, extent) {
  if (state.projection === "xy") {
    return { x: point.x, y: point.y, depth: point.z };
  }
  if (state.projection === "yz") {
    return { x: point.y, y: point.z, depth: point.x };
  }
  return { x: point.x, y: point.z, depth: point.y };
}

function renderParticles(p) {
  const attractor = getCurrentAttractor();
  const extent = attractor.scale;
  const activeCount = Math.min(state.adaptiveParticleCount, state.particles.length);

  p.push();
  p.translate(p.width / 2, p.height / 2);
  p.scale(state.zoom);

  for (let index = 0; index < activeCount; index += 1) {
    const particle = state.particles[index];
    const current = projectPoint(rotate3d(particle.x, particle.y, particle.z), extent);
    const previous = projectPoint(rotate3d(particle.px, particle.py, particle.pz), extent);

    const hue = (particle.hue + index * 0.015) % 360;
    const strokeWeight = state.depthWeight
      ? p.map(current.depth, -extent, extent, 0.4, 2.6, true)
      : 1.2;

    p.stroke(hue, 80, 100, 0.9);
    p.strokeWeight(strokeWeight);

    const currentX = p.map(current.x, -extent, extent, -p.width * 0.35, p.width * 0.35, true);
    const currentY = p.map(current.y, -extent, extent, p.height * 0.35, -p.height * 0.35, true);

    if (state.lineMode) {
      const previousX = p.map(previous.x, -extent, extent, -p.width * 0.35, p.width * 0.35, true);
      const previousY = p.map(previous.y, -extent, extent, p.height * 0.35, -p.height * 0.35, true);
      p.line(previousX, previousY, currentX, currentY);
    } else {
      p.point(currentX, currentY);
    }
  }

  p.pop();
}

function updateAdaptiveQuality() {
  if (state.fpsSamples.length < 20) {
    return;
  }

  const avgFps =
    state.fpsSamples.reduce((total, sample) => total + sample, 0) / state.fpsSamples.length;

  if (avgFps < state.targetFps * 0.75 && state.adaptiveParticleCount > 1500) {
    state.adaptiveParticleCount = Math.max(1500, Math.floor(state.adaptiveParticleCount * 0.92));
  } else if (avgFps > state.targetFps * 0.95 && state.adaptiveParticleCount < state.targetParticles) {
    state.adaptiveParticleCount = Math.min(
      state.targetParticles,
      Math.floor(state.adaptiveParticleCount * 1.05 + 10)
    );
  }
}

function createSketch() {
  return (p) => {
    p.setup = () => {
      const container = document.getElementById("canvas-container");
      const canvas = p.createCanvas(container.clientWidth, container.clientHeight);
      canvas.parent(container);
      p.colorMode(p.HSB, 360, 100, 100, 1);
      p.background(230, 30, 5);
      regenerateParticles();
      syncUiWithState();
    };

    p.draw = () => {
      if (state.autoRotate) {
        state.rotationY += 0.0035;
      }

      p.background(230, 30, 5, Math.max(0.02, Math.min(1, state.fadeAlpha)));
      updateParticles();
      renderParticles(p);

      state.currentFps = p.frameRate();
      state.fpsSamples.push(state.currentFps);

      if (state.fpsSamples.length > 30) {
        state.fpsSamples.shift();
      }

      updateAdaptiveQuality();
      ui.activeParticles.textContent = Math.min(
        state.adaptiveParticleCount,
        state.particles.length
      ).toLocaleString();
      ui.fpsValue.textContent = state.currentFps.toFixed(1);
    };

    p.windowResized = () => {
      const container = document.getElementById("canvas-container");
      p.resizeCanvas(container.clientWidth, container.clientHeight);
    };

    p.mousePressed = () => {
      if (
        p.mouseX < 0 ||
        p.mouseX > p.width ||
        p.mouseY < 0 ||
        p.mouseY > p.height
      ) {
        return;
      }
      state.dragging = true;
      state.lastMouseX = p.mouseX;
      state.lastMouseY = p.mouseY;
    };

    p.mouseReleased = () => {
      state.dragging = false;
    };

    p.mouseDragged = () => {
      if (!state.dragging) {
        return;
      }
      const deltaX = p.mouseX - state.lastMouseX;
      const deltaY = p.mouseY - state.lastMouseY;
      state.rotationY += deltaX * 0.01;
      state.rotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, state.rotationX + deltaY * 0.01));
      state.lastMouseX = p.mouseX;
      state.lastMouseY = p.mouseY;
    };

    p.mouseWheel = (event) => {
      const nextZoom = state.zoom * (1 - event.delta * 0.001);
      state.zoom = Math.max(0.35, Math.min(4, nextZoom));
      return false;
    };
  };
}

function initializeApp() {
  buildUiReferences();
  populateAttractorOptions();
  bindUiEvents();
  applyAttractorDefaults();
  syncUiWithState();
  sketchInstance = new p5(createSketch());
}

window.addEventListener("DOMContentLoaded", initializeApp);
