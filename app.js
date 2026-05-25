const TOPICS = {
  diffusion: {
    title: "Video Diffusion",
    query: "Video Diffusion 是如何生成连贯视频的？",
    whyTitle: "视频生成跨过“每帧都好看”的阶段",
    whyBody: "模型开始把时间一致性纳入生成过程，使创作、仿真和训练数据生成出现新的可行路径。",
    trend: "时序一致性 + 可控生成",
    lab: "Diffusion 去噪过程",
    attention: "Temporal Attention",
    tag: "frames",
    map: ["噪声初始化", "Latent Video Diffusion", "Temporal Attention", "运动控制", "一致性评估", "视频编辑"],
    depths: [
      ["直觉入口", "它像从一片雪花噪点中，逐渐显影出会连续运动的小电影。"],
      ["基础概念", "生成器反复擦除随机噪声，同时保持人物和场景在连续画面中不跳变。"],
      ["本科理工科", "模型在噪声空间逐步恢复视频，并借助跨帧注意力约束相邻画面的主体与运动关系。"],
      ["工程实现", "在压缩 latent 上运行时空去噪网络，结合条件控制与采样调度，平衡速度、清晰度和 motion fidelity。"],
      ["科研前沿", "核心挑战位于长程 temporal coherence、物理一致性、可控 camera/motion conditioning 与高效评估。"]
    ],
    audiences: {
      beginner: "从“逐帧画图”为何会闪烁开始，建立时间一致性的直觉。",
      researcher: "聚焦 latent video diffusion、temporal attention 与评估瓶颈。",
      product: "关注内容生产成本、可控性门槛与版权及安全边界。"
    },
    terms: ["主体", "运动", "帧 t", "帧 t+1", "背景"],
    readings: [
      ["PAPER", "Video diffusion 的基础方法与演进路线"],
      ["VIDEO", "从噪声到连续运动的视觉讲解"],
      ["TREND", "生成视频如何进入仿真与机器人数据"]
    ],
    hues: ["#142f37", "#1d5661", "#49bbb7", "#8bdccb"]
  },
  mcp: {
    title: "Model Context Protocol",
    query: "MCP 为什么突然火了？",
    whyTitle: "AI 应用终于有了连接工具的共同接口",
    whyBody: "统一的上下文与工具接入方式，降低了 Agent 连接数据源和业务能力的集成成本。",
    trend: "标准协议 + 工具生态",
    lab: "上下文连接路径",
    attention: "Tool Routing",
    tag: "tools",
    map: ["上下文源", "MCP Protocol", "Client", "Server", "Tool 调用", "Agent Workflow"],
    depths: [
      ["直觉入口", "它像给 AI 准备的通用插座，让不同工具不必各配一条专用线。"],
      ["基础概念", "应用通过一致协议把文件、数据库和操作能力安全地提供给模型。"],
      ["本科理工科", "MCP 把客户端、服务端、资源与工具调用抽象成可复用的互操作协议。"],
      ["工程实现", "关键在连接生命周期、capability discovery、权限边界与可观测的 tool execution。"],
      ["科研前沿", "协议普及后的问题转向可信授权、组合工具规划、上下文压缩和跨 Agent 互操作。"]
    ],
    audiences: {
      beginner: "从“AI 如何使用外部资料和工具”理解统一接口的价值。",
      researcher: "聚焦 tool-use agent、context grounding 与权限约束。",
      product: "关注生态网络效应、集成成本下降与企业授权治理。"
    },
    terms: ["意图", "资源", "工具", "权限", "结果"],
    readings: [
      ["DOCS", "协议结构：资源、工具与 prompts"],
      ["BUILD", "将一个数据源接入 Agent 的实现范式"],
      ["TREND", "为何工具协议成为应用层竞争焦点"]
    ],
    hues: ["#142e31", "#226363", "#58cfc1", "#f0bb69"]
  },
  world: {
    title: "World Model",
    query: "World Model 如何帮助机器人？",
    whyTitle: "模型开始预演行动，而不只生成内容",
    whyBody: "通过学习环境变化与行动后果，智能体能在执行前模拟可能结果，连接机器人和具身智能。",
    trend: "预测环境 + 行动规划",
    lab: "未来状态预测",
    attention: "Action Planning",
    tag: "states",
    map: ["感知输入", "World Model", "状态预测", "行动策略", "奖励信号", "机器人控制"],
    depths: [
      ["直觉入口", "它让机器人先在脑中试走几步，再决定现实里该怎么动。"],
      ["基础概念", "模型学习动作会如何改变世界，用预测结果筛选更好的下一步。"],
      ["本科理工科", "世界模型编码当前状态并预测转移，通过规划或策略学习选择能达到目标的动作。"],
      ["工程实现", "系统组合视觉表征、latent dynamics、rollout planning 与真实环境反馈闭环。"],
      ["科研前沿", "开放难点是可泛化物理预测、长时域误差累积、不确定性估计及安全现实部署。"]
    ],
    audiences: {
      beginner: "从人类“先想后做”的能力理解机器人预测未来的必要性。",
      researcher: "聚焦 latent dynamics、rollout planning 和 sim-to-real 泛化。",
      product: "关注机器人训练成本、部署可靠性与可验证安全收益。"
    },
    terms: ["观测", "状态", "动作", "预测", "目标"],
    readings: [
      ["PAPER", "从 latent dynamics 到具身规划"],
      ["DEMO", "机器人在模拟未来中选择动作"],
      ["TREND", "生成模型与 robotics 的交叉方向"]
    ],
    hues: ["#162d35", "#255a63", "#52b9c3", "#8cdeac"]
  }
};

const state = {
  topic: "diffusion",
  audience: "researcher",
  activeTerm: 2
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function setText(selector, value) {
  $(selector).textContent = value;
}

function renderMap(topic) {
  const points = [
    [18, 30],
    [48, 49],
    [50, 18],
    [82, 27],
    [19, 77],
    [81, 73]
  ];
  const links = [[0, 1], [2, 1], [1, 3], [1, 4], [1, 5], [3, 5]];
  const container = $("#concept-map");
  const lines = links
    .map(([from, to]) => {
      const a = points[from];
      const b = points[to];
      return `<line x1="${a[0]}%" y1="${a[1]}%" x2="${b[0]}%" y2="${b[1]}%"></line>`;
    })
    .join("");
  const nodes = topic.map
    .map((label, index) => {
      const type = index === 1 ? " core" : index === 4 ? " signal" : "";
      return `<span class="map-node${type}" style="--x:${points[index][0]}%;--y:${points[index][1]}%">${label}</span>`;
    })
    .join("");
  container.innerHTML = `<svg aria-hidden="true">${lines}</svg>${nodes}`;
}

function renderDepth() {
  const value = Number($("#depth-slider").value);
  const [title, body] = TOPICS[state.topic].depths[value - 1];
  setText("#depth-level", String(value).padStart(2, "0"));
  setText("#depth-title", title);
  setText("#depth-body", body);
  $("#depth-slider").style.setProperty("--progress", `${((value - 1) / 4) * 100}%`);
}

function renderAudience() {
  setText("#audience-output", TOPICS[state.topic].audiences[state.audience]);
  $$(".audience-toggle button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.audience === state.audience);
  });
}

function renderAttention(topic) {
  const terms = $("#attention-terms");
  terms.innerHTML = topic.terms
    .map(
      (term, index) =>
        `<button type="button" data-term="${index}" class="${index === state.activeTerm ? "is-active" : ""}">${term}</button>`
    )
    .join("");
  const cells = [];
  for (let row = 0; row < 5; row += 1) {
    for (let col = 0; col < 5; col += 1) {
      const focus = Math.max(0.06, 0.84 - Math.abs(col - state.activeTerm) * 0.18 - Math.abs(row - state.activeTerm) * 0.13);
      cells.push(`<span class="attention-cell" style="--heat:${focus.toFixed(2)}"></span>`);
    }
  }
  $("#attention-grid").innerHTML = cells.join("");
  terms.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTerm = Number(button.dataset.term);
      renderAttention(TOPICS[state.topic]);
    });
  });
}

function renderReading(topic) {
  $("#reading-list").innerHTML = topic.readings
    .map(([type, title]) => `<div class="reading-item"><span>${type}</span><p>${title}</p></div>`)
    .join("");
}

function renderNoise() {
  const topic = TOPICS[state.topic];
  const step = Number($("#stage-slider").value);
  const progress = step / 40;
  const noise = Math.round((1 - progress) * 100);
  const structure = Math.round(progress * 100);
  const motion = Math.round(Math.pow(progress, 1.32) * 100);
  const cells = [];
  for (let index = 0; index < 72; index += 1) {
    const x = index % 12;
    const y = Math.floor(index / 12);
    const centerPath = Math.abs(y - (2.8 + Math.sin(x * 0.72) * 1.25)) < 1.2;
    const deterministicNoise = ((index * 37 + step * 17) % 100) / 100;
    const signal = centerPath && progress > deterministicNoise * 0.76;
    const paletteIndex = signal ? 2 + (x % 2) : deterministicNoise > progress ? 0 : 1;
    const opacity = signal ? 0.94 : (0.2 + deterministicNoise * (1 - progress) * 0.8).toFixed(2);
    cells.push(`<span class="noise-cell" style="background:${topic.hues[paletteIndex]};opacity:${opacity}"></span>`);
  }
  $("#noise-board").innerHTML = cells.join("");
  setText("#stage-value", `Step ${String(step).padStart(2, "0")} / 40`);
  setText("#noise-metric", `${noise}%`);
  setText("#form-metric", `${structure}%`);
  setText("#motion-metric", `${motion}%`);
  $("#stage-slider").style.setProperty("--progress", `${progress * 100}%`);
}

function renderTopic(key) {
  state.topic = key;
  state.activeTerm = 2;
  const topic = TOPICS[key];
  setText("#topic-title", topic.title);
  setText("#why-title", topic.whyTitle);
  setText("#why-body", topic.whyBody);
  setText("#trend-text", topic.trend);
  setText("#lab-title", topic.lab);
  setText("#attention-title", topic.attention);
  setText("#attention-tag", topic.tag);
  $("#curiosity").value = topic.query;
  $$(".topic-tabs button").forEach((button) => {
    const active = button.dataset.topic === key;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  renderMap(topic);
  renderDepth();
  renderAudience();
  renderAttention(topic);
  renderReading(topic);
  renderNoise();
}

function topicFromQuery(value) {
  const normalized = value.toLowerCase();
  if (normalized.includes("mcp") || normalized.includes("context")) return "mcp";
  if (normalized.includes("world") || normalized.includes("机器人")) return "world";
  return "diffusion";
}

function initializeEvents() {
  $$(".topic-tabs button").forEach((button) => {
    button.addEventListener("click", () => renderTopic(button.dataset.topic));
  });
  $$(".suggestions button").forEach((button) => {
    button.addEventListener("click", () => {
      $("#curiosity").value = button.dataset.query;
      renderTopic(button.dataset.topic);
    });
  });
  $$(".audience-toggle button").forEach((button) => {
    button.addEventListener("click", () => {
      state.audience = button.dataset.audience;
      renderAudience();
    });
  });
  $("#depth-slider").addEventListener("input", renderDepth);
  $("#stage-slider").addEventListener("input", renderNoise);
  $("#query-form").addEventListener("submit", (event) => {
    event.preventDefault();
    renderTopic(topicFromQuery($("#curiosity").value));
    $("#playground").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.addEventListener("scroll", () => {
    $("[data-header]").classList.toggle("is-scrolled", window.scrollY > 14);
  }, { passive: true });
}

function initializeReveal() {
  const elements = $$(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  elements.forEach((element) => observer.observe(element));
}

renderTopic("diffusion");
initializeEvents();
initializeReveal();
