const zeroShotData = [
  {
    lang: "ZH",
    prompt: "audio/zh_prompt.wav",
    text: "这个记者俱乐部将成为该部门发布资讯的唯一渠道。",
    results: [
      "audio/zh_cv2.wav",
      "audio/zh_cv3_05b.wav",
      "audio/zh_cv3_15b.wav"
    ]
  },
  {
    lang: "EN",
    prompt: "audio/en_prompt.wav",
    text: "There is no lock but a golden key will open it.",
    results: [
      "audio/en_cv2.wav",
      "audio/en_cv3_05b.wav",
      "audio/en_cv3_15b.wav"
    ]
  }
];
const mixedData = [
  {
    prompt: "audio/mixed_prompt.wav",
    text: "今晚吃了韩国泡菜火锅，味道真的很好。I can't wait to try it again!",
    results: [
      "audio/mixed_cv2.wav",
      "audio/mixed_cv3_05b.wav",
      "audio/mixed_cv3_15b.wav"
    ]
  }
];
function audioCell(src) {
  return src
    ? `<audio controls src="${src}"></audio>`
    : `<span class="ns">Not supported</span>`;
}

// Zero-shot
const zeroBody = document.getElementById("zero-shot-body");
zeroShotData.forEach(d => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${d.lang}</td>
    <td>${audioCell(d.prompt)}</td>
    <td>${d.text}</td>
    ${d.results.map(audioCell).join("")}
  `;
  zeroBody.appendChild(tr);
});

// Mixed-lingual
const mixedBody = document.getElementById("mixed-body");
mixedData.forEach(d => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${audioCell(d.prompt)}</td>
    <td>${d.text}</td>
    ${d.results.map(audioCell).join("")}
  `;
  mixedBody.appendChild(tr);
});
