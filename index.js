jQuery(() => {

    console.log("RPG System Window Loaded");

    // ป้องกันการสร้างซ้ำ
    if ($("#rpg-system-window").length) return;

    const html = `
<div id="rpg-system-window">


<style>
.Q{font-family:'Sarabun',sans-serif;width:340px;min-width:340px;max-width:340px;background:linear-gradient(145deg,#1e2024,#141619);border-radius:10px;padding:12px;border:1px solid #44aaff40;box-shadow:0 4px 20px rgba(0,0,0,.6);color:#e0e0e0;box-sizing:border-box}
.Q input[type=radio]{display:none}
.Q label{font-size:10px;padding:6px 14px;border-radius:6px 6px 0 0;color:#8899a6;cursor:pointer;display:inline-block;transition:all .2s;font-weight:600}
.Q input:checked+label{background:#44aaff15;color:#44aaff;border-bottom:2px solid #44aaff}
.P{display:none;background:rgba(0,0,0,.25);border-radius:0 6px 6px 6px;padding:10px;margin-top:-1px;border:1px solid #44aaff20;height:180px;box-sizing:border-box;overflow:hidden}
#q1:checked~.P1,#q2:checked~.P2,#q3:checked~.P3,#q4:checked~.P4,#q5:checked~.P5,#q6:checked~.P6{display:flex;flex-direction:column;animation:sI .3s ease}
@keyframes sI{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}
.H{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #44aaff30}
.T{font-size:11px;font-weight:700;color:#44aaff;letter-spacing:1px;text-transform:uppercase}
.M{font-size:9px;background:rgba(255,255,255,.05);padding:3px 8px;border-radius:4px;border:1px solid rgba(255,255,255,.08)}
.SC{flex:1;overflow-y:auto;scrollbar-width:thin;scrollbar-color:#44aaff40 transparent}
.SC::-webkit-scrollbar{width:3px}
.SC::-webkit-scrollbar-track{background:transparent}
.SC::-webkit-scrollbar-thumb{background:#44aaff40;border-radius:2px}
.QI{margin-bottom:8px;background:rgba(255,255,255,.03);border-radius:6px;padding:9px;border-left:3px solid #666;transition:background .2s}
.QI:hover{background:rgba(255,255,255,.06)}
.QN{font-size:11px;font-weight:700;color:#fff;margin-bottom:2px}
.QT{font-size:8px;color:#8899a6}
details{margin-top:6px}
summary{font-size:8px;color:#44aaff;cursor:pointer;list-style:none;display:flex;align-items:center;gap:4px;opacity:.85;transition:opacity .2s}
summary:hover{opacity:1;text-decoration:underline}
summary::before{content:'◇';font-size:9px}
details[open] summary::before{content:'◆'}
details[open] summary{margin-bottom:6px}
.DT{font-size:9px;color:#b0b0b0;padding:8px;background:rgba(0,0,0,.3);border-radius:4px;border:1px solid rgba(255,255,255,.05)}
.NW{animation:pulse 2s infinite}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(68,170,255,.4)}70%{box-shadow:0 0 0 4px rgba(68,170,255,0)}100%{box-shadow:0 0 0 0 rgba(68,170,255,0)}}
.F{font-size:8px;color:#556677;text-align:right;margin-top:10px;padding-top:5px;border-top:1px solid #ffffff08}
.SC .QI:last-child{margin-bottom:0}
</style>

<div class=Q>
  <div class=H>
    <div class=T>◈ SYSTEM WINDOW</div>
    <span class=M>Coin: (Number Current Coin)</span>
  </div>

  <input type=radio name=q id=q1 checked><label for=q1>📊 Status</label>
  <input type=radio name=q id=q2><label for=q2>➕ Point</label>
  <input type=radio name=q id=q3><label for=q3>🤝 Affinity</label>
  <input type=radio name=q id=q4><label for=q4>🌟 Skills</label>
  <input type=radio name=q id=q5><label for=q5>🎒 Inventory</label>
  <input type=radio name=q id=q6><label for=q6>📜 Quest</label>

  <!-- TAB 1 -->
  <div class="P P1">
    <div class=SC>
      <div style="padding:4px 0">
        <div class=QN>HP: (Current HP)/(Max HP)</div>
        <div class=QN>MP: (Current MP)/(Max MP)</div>
        <div class=QN>Class: (Current Class)</div>
        <div class=QN>Level: (Current Level)</div>
        <div class=QN>EXP: (Current EXP)/(Level Up)</div>
      </div>
      <details>
        <summary></summary>
        <div class=DT>ข้อมูลเกี่ยวกับสถานะของร่างกายในปัจจุบัน เช่น ได้บัฟ ได้รับดีบัฟ หรือ อาการบาดเจ็บ เป็นต้น</div>
      </details>
    </div>
  </div>

  <!-- TAB 2 -->
  <div class="P P2">
    <div class=SC>
      <div style="padding:4px 0">
        <div class=QN>Point: (Current Point, Earn 5 Point Every More Level Up)</div>
      </div>
      <details>
        <summary></summary>
        <div class=DT>
          <div class=QN>STR: (STR)</div><div class=QT>(+ or - STR Point)</div>
          <div class=QN>DEX: (DEX)</div><div class=QT>(+ or - DEX Point)</div>
          <div class=QN>CON: (CON)</div><div class=QT>(+ or - CON Point)</div>
          <div class=QN>INT: (INT)</div><div class=QT>(+ or - INT Point)</div>
          <div class=QN>WIS: (WIS)</div><div class=QT>(+ or - WIS Point)</div>
          <div class=QN>CHA: (CHA)</div><div class=QT>(+ or - CHA Point)</div>
        </div>
      </details>
    </div>
  </div>

  <!-- TAB 3 -->
  <div class="P P3">
    <div class=SC>
      <div class="QI NW" style="border-left-color:#44AAFF">
        <div class=QN>NPC Name 1</div>
        <div class=QT>Affinity: (Current NPC Affinity, -100 to +100)</div>
        <div class=QT>Think: (Current NPC Think of {{user}})</div>
      </div>
      <div class=QI style="border-left-color:#44AAFF">
        <div class=QN>NPC Name 2</div>
        <div class=QT>Affinity: (Current NPC Affinity, -100 to +100)</div>
        <div class=QT>Think: (Current NPC Think of {{user}})</div>
      </div>
    </div>
  </div>

  <!-- TAB 4 -->
  <div class="P P4">
    <div class=SC>
      <div class="QI NW" style="border-left-color:#44AAFF">
        <div class=QN>SKILL Name 1</div>
        <div class=QT>Level: (Proficiency 1–10)</div>
        <div class=QT>Type: (Active or Passive)</div>
      <details>
        <summary>Info</summary>
        <div class=DT>Skill Info</div>
      </details>
      </div>
      <div class=QI style="border-left-color:#44AAFF">
        <div class=QN>SKILL Name 2</div>
        <div class=QT>Level: (Proficiency 1–10)</div>
        <div class=QT>Type: (Active or Passive)</div>
      <details>
        <summary>Info</summary>
        <div class=DT>Skill Info</div>
      </details>
      </div>
    </div>
  </div>

  <!-- TAB 5 -->
  <div class="P P5">
    <div class=SC>
      <div class="QI NW" style="border-left-color:#44AAFF">
        <div class=QN>ITEM Name 1</div>
        <div class=QT>Number: (Current Number)</div>
      <details>
        <summary>Info</summary>
        <div class=DT>Item Info</div>
      </details>
      </div>
      <div class=QI style="border-left-color:#44AAFF">
        <div class=QN>ITEM Name 2</div>
        <div class=QT>Number: (Current Number)</div>
      <details>
        <summary>Info</summary>
        <div class=DT>Item Info</div>
      </details>
      </div>
    </div>
  </div>

  <!-- TAB 6 -->
  <div class="P P6">
    <div class=SC>
      <div class="QI NW" style="border-left-color:#44AAFF">
        <div class=QN>QUEST Name 1</div>
        <div class=QT>Type: (Quest Type)</div>
        <div class=QT>Status: (Quest Status)</div>
      <details>
        <summary>Info</summary>
        <div class=DT>Quest Info</div>
      </details>
      </div>
      <div class=QI style="border-left-color:#44AAFF">
        <div class=QN>QUEST Name 2</div>
        <div class=QT>Type: (Quest Type)</div>
        <div class=QT>Status: (Quest Status)</div>
      <details>
        <summary>Info</summary>
        <div class=DT>Quest Info</div>
      </details>
      </div>
    </div>
  </div>
</div>
`;

    $("body").append(html);

    // ลากหน้าต่างได้
    if ($.fn.draggable) {
        $("#rpg-system-window").draggable({
            handle: ".H"
        });
    }

});
