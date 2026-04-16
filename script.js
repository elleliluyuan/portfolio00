const projects=[
  {id:2,title:'极氪汽车 · 全渠道数字触点策略',desc:'2000+ 定量问卷 + 20+ 深度访谈，主导极氪001官网改版及 APP/小程序等5大触点设计。官网用户平均留时长 +40%，UX Design Awards 2023 提名。',industry:['auto','toC','web','app'],skills:['research','strategy','1-10'],emoji:'🚗',bg:'#eefff4',award:true,cover:'images/极氪汽车.png'},
  {id:3,title:'中国卫星网络 · 用户驱动的数字化体验评估',desc:'面向政企用户开展深度研究，构建多维体验评估指标体系，输出产品体验优化策略与落地方案。',industry:['toB'],skills:['research','competitive','system'],emoji:'🛰',bg:'#eef0ff',cover:'images/中国卫星网络.png'},
  {id:1,title:'建设银行 · 消费金融平台的体验创新',desc:'主导授信、借款、商城、账户四大核心模块的交互设计。推动首版MVP在3个月内上线，用户注册转化率超出行业基准15%。',industry:['finance','toC','app'],skills:['strategy','workshop','0-1'],tags:['金融','APP','WEB','C端'],cover:'images/建设银行.png',bg:'#e8edff'},
  {id:4,title:'山东城商行联盟 · 个人网银体验策略创新',desc:'主导5个核心业务流程概念重塑，重建导航结构与反馈机制，建立统一交互规范组件库，推广至联盟旗下全部银行。',industry:['finance','toC','web'],skills:['strategy','competitive','1-10'],emoji:'🏛',bg:'#f0eeff',cover:'images/山东城商行联盟.png'},
  {id:5,title:'全国工会 · 职工书屋 APP 产品策略升级',desc:'梳理阅读全链路需求，重新规划功能架构与核心场景，设计 AI 导读、阅读工具和成长体系等关键能力。',industry:['toC','app','culture'],skills:['research','strategy','0-1'],emoji:'📚',bg:'#eef8ff',cover:'images/全国工会.png'},
  {id:6,title:'数云科技 · CRM 产品的设计体系搭建',desc:'从零搭建 CRM 产品设计体系，统一组件规范，推动设计与研发协作提效，覆盖核心业务模块。',industry:['toB'],skills:['system','1-10'],emoji:'📐',bg:'#f0f4ff',cover:'images/数云.png'},
  {id:7,title:'深蓝汽车 · 手机 APP 体验焕新',desc:'全面评估现有 APP 体验问题，重塑信息架构与核心用车场景，输出视觉焕新方案。',industry:['auto','toC','app'],skills:['research','competitive','1-10'],emoji:'🚙',bg:'#edfff6',cover:'images/深蓝汽车.png'},
  {id:8,title:'硅基仿生 · 动态血糖仪 APP 体验优化',desc:'针对慢病管理用户研究，优化数据可读性与任务流，提升医疗设备配套 APP 整体易用性。',industry:['medical','toC','app'],skills:['research','1-10'],emoji:'💉',bg:'#f0fff8',cover:'images/硅基.png'},
  {id:9,title:'宝武钢铁 · 司库系统多角色体验架构',desc:'从零构建面向多角色的企业级司库系统体验框架，梳理业务流程，制定设计规范与原型方案。',industry:['toB'],skills:['strategy','0-1'],emoji:'🏭',bg:'#fff8ee',cover:'images/宝武.png'},
  {id:10,title:'netAbrain · 海外网络运维平台的体验升级',desc:'针对海外 B 端用户场景，重构运维平台的信息架构与操作流程，提升复杂任务的操作效率。',industry:['toB','web'],skills:['1-10'],emoji:'🌐',bg:'#eef4ff',cover:'images/netabrain.png'},
  {id:11,title:'新东方文旅 · 小程序体验优化设计',desc:'基于用户旅程分析，优化预订核心链路与内容消费场景，提升小程序留存与转化。',industry:['consume','toC'],skills:['research','1-10'],emoji:'✈️',bg:'#fff0f8',cover:'images/新东方.png'},
  {id:12,title:'敦煌研究院 · 数字敦煌藏经洞官网体验设计',desc:'为世界级文化遗产数字化项目设计官网体验方案，兼顾学术严谨性与大众可及性。',industry:['culture','web'],skills:['strategy','0-1'],emoji:'🏛',bg:'#fff8f0',cover:'images/敦煌.png'}
];;
const iLabel={finance:'金融',auto:'出行',medical:'医疗',culture:'文化',toB:'B 端',toC:'C 端',web:'WEB',app:'APP',consume:'消费'};
const sLabel={research:'用研',system:'设计体系',competitive:'竞品分析',workshop:'共创工作坊',strategy:'产品策略','0-1':'0-1','1-10':'设计优化'};
const ALL_INDUSTRIES=['finance','auto','medical','culture','toB','toC','web','app','consume'];
const ALL_SKILLS=['research','system','competitive','workshop','strategy','0-1','1-10'];

let industryState=null, skillState=null;
function matchIndustry(p){return industryState===null||(Array.isArray(p.industry)?p.industry.some(i=>industryState.has(i)):industryState.has(p.industry));}
function matchSkill(p){return skillState===null||p.skills.some(s=>skillState.has(s));}

// ═══════════════════════════════════════
//  I18N / Language Toggle
// ═══════════════════════════════════════
let currentLang = 'zh';

const i18n = {
  zh: {
    'nav.home': 'Home', 'nav.works': 'Works', 'nav.about': 'About', 'nav.ai_match': 'AI Match',
    'hero.role': 'Product Designer / Researcher / Vibe Coder',
    'filter.all': '全部', 'filter.industry.toB': 'B 端', 'filter.industry.toC': 'C 端',
    'filter.industry.web': 'WEB', 'filter.industry.app': 'APP', 'filter.industry.finance': '金融',
    'filter.industry.auto': '出行', 'filter.industry.medical': '医疗',
    'filter.industry.consume': '消费', 'filter.industry.culture': '文化',
    'filter.skill.research': '用研', 'filter.skill.system': '设计体系',
    'filter.skill.competitive': '竞品分析', 'filter.skill.workshop': '共创工作坊',
    'filter.skill.strategy': '产品策略', 'filter.skill.0-1': '0-1', 'filter.skill.1-10': '设计优化',
    'filter.clear': '清除',
    'about.core_skills': '核心能力', 'about.skills.research': '用户研究',
    'about.skills.usability': '可用性测试', 'about.skills.strategy': '产品策略',
    'about.skills.service': '服务设计', 'about.skills.ia': '信息架构',
    'about.skills.ux': 'UX 设计', 'about.skills.ui': 'UI 设计',
    'about.tools': '工具', 'about.experience': '工作经历',
    'about.exp1.role': '独立设计师', 'about.exp1.co': 'Remote',
    'about.exp1.desc': '开展多项设计与咨询实践，涵盖AI产品设计、品牌视觉、移动端应用及出版编辑等领域，积累了跨行业设计经验。',
    'about.exp2.role': '资深用户体验设计师', 'about.exp2.co': '大邦创新设计咨询 · 上海',
    'about.exp2.desc': '参与金融、汽车、医疗、消费等多领域策略咨询与全流程设计，关键项目获 UX Design Awards 提名。',
    'about.exp3.role': '交互设计实习生', 'about.exp3.co': 'Verynice.co · 旧金山',
    'about.exp3.desc': '参与多个公益项目网站交互设计优化，主持共创工作坊，独立提出交互优化方案。',
    'about.exp4.role': '交互设计实习生', 'about.exp4.co': 'Oxford Community Arts Center · Oxford',
    'about.exp4.desc': '独立完成网站设计优化。上线3个月：浏览量 +15%，购票转化率 +200%。',
    'about.education': '教育背景', 'about.edu1.major': 'MFA · 交互设计',
    'about.edu2.major': 'BA · 交互媒体研究 · Magna Cum Laude（前5%）',
    'footer.name': '李鹿原', 'footer.tagline': '产品设计师 · 用研驱动体验策略',
    'footer.copyright': '© 2026 李鹿原. All rights reserved.', 'footer.wechat': '微信',
    'modal.title': '匹配 JD', 'modal.manual': '手动选择', 'modal.ai': 'AI 匹配',
    'modal.job_placeholder': '岗位名称（如：高级产品设计师）',
    'modal.jd_placeholder': '粘贴职位描述（JD）…',
    'modal.cancel': '取消', 'modal.share': '生成分享页 →', 'modal.ai_match_btn': 'AI 匹配 →',
    'share.copy_link': '复制链接', 'share.greeting': 'Hi there 😊！',
    'share.intro_before': '这是李鹿原的作品集，以下是与 ', 'share.intro_after': ' 较为匹配的项目。',
    'share.job': '该岗位',
    'share.cta_main': '想看其他作品？', 'share.cta_sub': '看看吧，很有意思的 →',
    'work.empty': '// 暂无匹配项目',
  },
  en: {
    'nav.home': 'Home', 'nav.works': 'Works', 'nav.about': 'About', 'nav.ai_match': 'AI Match',
    'hero.role': 'Product Designer / Researcher / Vibe Coder',
    'filter.all': 'All', 'filter.industry.toB': 'B2B', 'filter.industry.toC': 'B2C',
    'filter.industry.web': 'WEB', 'filter.industry.app': 'APP', 'filter.industry.finance': 'Finance',
    'filter.industry.auto': 'EV', 'filter.industry.medical': 'Healthcare',
    'filter.industry.consume': 'Consumer', 'filter.industry.culture': 'Culture',
    'filter.skill.research': 'User Research', 'filter.skill.system': 'Design System',
    'filter.skill.competitive': 'Competitive Analysis', 'filter.skill.workshop': 'Co-Design Workshop',
    'filter.skill.strategy': 'Product Strategy', 'filter.skill.0-1': '0-1', 'filter.skill.1-10': 'Design Optimization',
    'filter.clear': 'Clear',
    'about.core_skills': 'Core Skills', 'about.skills.research': 'User Research',
    'about.skills.usability': 'Usability Testing', 'about.skills.strategy': 'Product Strategy',
    'about.skills.service': 'Service Design', 'about.skills.ia': 'Information Architecture',
    'about.skills.ux': 'UX Design', 'about.skills.ui': 'UI Design',
    'about.tools': 'Tools', 'about.experience': 'Experience',
    'about.exp1.role': 'Independent Designer', 'about.exp1.co': 'Freelancing',
    'about.exp1.desc': 'Leading design and consulting projects across AI product design, brand visual identity, mobile apps, and publishing — building cross-industry expertise.',
    'about.exp2.role': 'Senior UX Designer', 'about.exp2.co': 'DaBang Innovation Consulting · Shanghai',
    'about.exp2.desc': 'Delivered strategy consulting and end-to-end design across finance, automotive, healthcare, and consumer sectors. Key project nominated for UX Design Awards.',
    'about.exp3.role': 'Interaction Design Intern', 'about.exp3.co': 'Verynice.co · San Francisco',
    'about.exp3.desc': 'Optimized interaction design for non-profit websites, facilitated co-design workshops, and independently proposed UX improvement solutions.',
    'about.exp4.role': 'Interaction Design Intern', 'about.exp4.co': 'Oxford Community Arts Center · Oxford',
    'about.exp4.desc': 'Led website redesign independently. Within 3 months: page views +15%, ticket conversion rate +200%.',
    'about.education': 'Education', 'about.edu1.major': 'MFA · Interaction Design',
    'about.edu2.major': 'BA · Interactive Media Studies · Magna Cum Laude (Top 5%)',
    'footer.name': 'Liyuan Lu', 'footer.tagline': 'Product Designer · Research-driven UX Strategy',
    'footer.copyright': '© 2026 Liyuan Lu. All rights reserved.', 'footer.wechat': 'WeChat',
    'modal.title': 'Match JD', 'modal.manual': 'Manual Select', 'modal.ai': 'AI Match',
    'modal.job_placeholder': 'Job title (e.g. Senior Product Designer)',
    'modal.jd_placeholder': 'Paste job description (JD)…',
    'modal.cancel': 'Cancel', 'modal.share': 'Generate Share Page →', 'modal.ai_match_btn': 'AI Match →',
    'share.copy_link': 'Copy Link', 'share.greeting': 'Hi there 😊!',
    'share.intro_before': "This is Liyuan Lu's portfolio. Here are projects matching ",
    'share.intro_after': '.',
    'share.job': 'this role',
    'share.cta_main': 'Want to see more?', 'share.cta_sub': 'Take a look, it\'s interesting →',
    'work.empty': '// No matching projects',
  }
};

const heroTexts = {
  zh: '拥有5年全链路体验设计经验，具备跨行业的业务场景积累与快速学习能力。以用户调研与数据分析为设计起点，通过体系化的方法推动产品价值持续增长。',
  en: 'With 6 years of end-to-end UX experience, building cross-industry expertise and fast learning agility. Starting design from user research and data analysis, systematically driving continuous product value growth.',
};
const heroTriggers = {
  zh: ['全链路', '用户调研', '数据分析', '产品价值持续增长'],
  en: ['end-to-end', 'user research', 'data analysis', 'continuous product value growth'],
};

function buildGreeting(lang) {
  const greetingEl = document.querySelector('.hero-greeting');
  if (!greetingEl) return;
  const texts = lang === 'en'
    ? { hi: "Hi,", name: "I'm Luyuan!" }
    : { hi: "Hi,", name: "I'm Luyuan!" };
  greetingEl.innerHTML = texts.hi +
    '<img class="hero-photo" src="dog.png" alt="Luyuan" /> ' +
    texts.name;
}

function applyLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];

  buildGreeting(lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.placeholder = dict[key];
  });

  document.getElementById('lang-btn').textContent = lang === 'zh' ? 'EN' : '中文';

  // Hero text rebuild
  const bio = heroTexts[lang];
  window._hyperTriggers = heroTriggers[lang];
  const container = document.getElementById('hyper-paragraph');
  if (container && window.makeWordEl) {
    container.innerHTML = '';
    const breakPoint = lang === 'en' ? 'agility. ' : '学习能力。';
    const pointerText = lang === 'en' ? 'continuous product value growth' : '产品价值持续增长';
    const pointerSvg = '<svg class="ph-cursor" stroke="currentColor" fill="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 16 16" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path></svg>';
    const starWords = ['用户调研', '数据分析'];
    const lines = bio.split(breakPoint);
    lines.forEach((line, lineIdx) => {
      const textToParse = line + (lineIdx < lines.length - 1 ? breakPoint : '');
      const segments = window.parseBio(textToParse, window._hyperTriggers);
      segments.forEach(seg => {
        if (!seg.text) return;
        const showStar = seg.highlight && starWords.includes(seg.text);
        const wordEl = window.makeWordEl(seg.text, seg.highlight, showStar);
        if (seg.highlight && seg.text === pointerText) {
          const wrapper = document.createElement('span');
          wrapper.className = 'pointer-highlight';
          wrapper.innerHTML = '<span class="ph-rect"></span>' + pointerSvg;
          wrapper.appendChild(wordEl);
          container.appendChild(wrapper);
          const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) { wrapper.classList.add('in-view'); obs.unobserve(wrapper); } });
          }, { threshold: 0.5 });
          obs.observe(wrapper);
        } else {
          container.appendChild(wordEl);
        }
      });
      if (lineIdx < lines.length - 1) {
        container.appendChild(document.createElement('br'));
      }
    });
  }

  const clearBtn = document.getElementById('filter-clear-all');
  if (clearBtn) clearBtn.textContent = dict['filter.clear'];

  const shareIntro = document.querySelector('.share-intro > p:last-of-type');
  if (shareIntro) {
    shareIntro.innerHTML = dict['share.intro_before'] +
      '<mark id="share-job-name">' + dict['share.job'] + '</mark>' +
      dict['share.intro_after'];
  }

  try { localStorage.setItem('lang', lang); } catch(e) {}
}

function copyText(text, label, btn) {
  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied');
    setTimeout(() => btn.classList.remove('copied'), 1500);
  });
}

// TODO: re-enable language toggle
/*
function toggleLang() {
  applyLang(currentLang === 'zh' ? 'en' : 'zh');
}

// Restore saved language on load
(function(){
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en') setTimeout(() => applyLang('en'), 50);
  } catch(e) {}
})();
*/

// ── PDF DATA ──
const projectPDFUrls={
  1:'./pdfs/%E5%BB%BA%E8%AE%BE%E9%93%B6%E8%A1%8C.pdf',
  2:'./pdfs/%E6%9E%81%E6%B0%AA.pdf',
  3:'./pdfs/%E4%B8%AD%E5%9B%BD%E5%8D%AB%E6%98%9F%E7%BD%91%E7%BB%9C.pdf',
  4:'./pdfs/%E5%B1%B1%E4%B8%9C%E5%9F%8E%E5%95%86%E8%A1%8C%E8%81%94%E7%9B%9F.pdf',
  5:'./pdfs/%E5%85%A8%E5%9B%BD%E5%B7%A5%E4%BC%9A%E8%81%8C%E5%B7%A5%E4%B9%A6%E5%B1%8B.pdf',
  6:'./pdfs/%E6%95%B0%E4%BA%91.pdf',
  7:'./pdfs/%E6%B7%B1%E8%93%9D.pdf',
  8:'./pdfs/%E7%A1%85%E5%9F%BA.pdf',
  9:'./pdfs/%E5%AE%9D%E6%AD%A6.pdf',
  10:'./pdfs/netabrain.pdf',
  11:'./pdfs/%E6%96%B0%E4%B8%9C%E6%96%B9.pdf',
  12:'./pdfs/%E6%95%A6%E7%85%8C.pdf'
};

// Bento grid size map: wide = col-span 2, tall = row-span 2
const bentoSizes={1:'tall',2:'wide',7:'tall'};
function buildCard(p){
  const coverSrc = p.cover || null;
  const thumbContent = coverSrc
    ? '<img src="'+coverSrc+'" class="thumb-img">'
    : '<div class="thumb-placeholder"><span>'+(p.emoji||'📁')+'</span></div>';
  const allTags = [
    ...(Array.isArray(p.industry)?p.industry:[p.industry]).map(i=>iLabel[i]||i),
    ...p.skills.map(s=>sLabel[s]||s),
  ];
  if (p.award) allTags.push('🏆');
  const tagText = allTags.join(' · ');
  const isToC = (Array.isArray(p.industry)?p.industry:[p.industry]).includes('toC') && p.id !== 2 && p.id !== 4;
  const rotateClass = isToC ? ' thumb-rotate' : '';
  const sizeClass = bentoSizes[p.id]?' bento-'+bentoSizes[p.id]:'';
  return '<div class="work-card'+sizeClass+'" data-id="'+p.id+'">'
    +'<div class="work-thumb' + rotateClass + '">'
    +'<div class="work-card-label">'+p.title+'</div>'
    +thumbContent
    +'<div class="work-card-footer">'+tagText+'</div>'
    +'</div>'
    +'</div>';
}

function renderWork(){
  const grid=document.getElementById('work-grid');
  const f=projects.filter(p=>matchIndustry(p)&&matchSkill(p));
  if(!f.length){grid.innerHTML='<div class="work-empty">// 暂无匹配项目</div>';return;}
  grid.innerHTML=f.map(p=>buildCard(p)).join('');
}

// Event delegation — survives re-renders
document.addEventListener('click',function(e){
  const card=e.target.closest('.work-card');
  if(!card) return;
  card.classList.toggle('selected');
  const id=parseInt(card.dataset.id);
  const proj=projects.find(p=>p.id===id);
  openPDFModal(id,proj?proj.title:'');
});

function isWeChat(){
  return /MicroMessenger/i.test(navigator.userAgent);
}

function openPDFModal(id, title){
  if(projectPDFUrls[id]){
    if(isWeChat()){
      showWeChatTip();
      return;
    }
    window.open(projectPDFUrls[id], '_blank');
    return;
  }

  // No PDF available
  console.error('no pdf for id', id);
}
function closePDFModal(){
  document.getElementById('pdf-modal').classList.remove('open');
  document.getElementById('pdf-iframe').src = '';
}

function showWeChatTip(){
  let tip = document.getElementById('wechat-tip');
  if(!tip){
    tip = document.createElement('div');
    tip.id = 'wechat-tip';
    tip.innerHTML = '<div class="wechat-tip-content"><div class="wechat-tip-arrow">↗</div><p>点击右上角 <b>···</b></p><p>选择「在浏览器中打开」</p></div>';
    document.body.appendChild(tip);
  }
  tip.style.display = 'block';
  setTimeout(() => { tip.style.display = 'none'; }, 5000);
}

function syncFilterUI(){
  const anyActive=industryState!==null||skillState!==null;
  // "全部" active only when nothing selected
  document.getElementById('filter-all-btn').classList.toggle('active',!anyActive);
  // industry buttons
  document.querySelectorAll('#industry-filter .filter-btn').forEach(b=>{
    b.classList.toggle('active',industryState!==null&&industryState.has(b.dataset.filter));
  });
  // skill buttons
  document.querySelectorAll('#skill-filter .filter-btn').forEach(b=>{
    b.classList.toggle('active',skillState!==null&&skillState.has(b.dataset.filter));
  });
  // global clear button
  const clearBtn=document.getElementById('filter-clear-all');
  if(clearBtn) clearBtn.style.display=anyActive?'':'none';
}


// 全部 button — reset all filters
document.getElementById('filter-all-btn').addEventListener('click',()=>{
  industryState=null; skillState=null; syncFilterUI(); renderWork();
});

// Global clear button
document.getElementById('filter-clear-all').addEventListener('click',()=>{
  industryState=null; skillState=null; syncFilterUI(); renderWork();
});

// Industry buttons
document.querySelectorAll('#industry-filter .filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const v=btn.dataset.filter;
    if(industryState===null) industryState=new Set([v]);
    else{
      if(industryState.has(v)){if(industryState.size===1){industryState=null;}else{industryState.delete(v);}}
      else{ industryState.add(v); }
    }
    syncFilterUI(); renderWork();
  });
});

// Skill buttons
document.querySelectorAll('#skill-filter .filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const v=btn.dataset.filter;
    if(skillState===null) skillState=new Set([v]);
    else{
      if(skillState.has(v)){if(skillState.size===1){skillState=null;}else{skillState.delete(v);}}
      else{ skillState.add(v); }
    }
    syncFilterUI(); renderWork();
  });
});

const navLinks=document.querySelectorAll('.nav-pill a[href^="#"]');
const navHomeBtn=document.querySelector('.nav-home-btn');
const navLimelight=document.getElementById('nav-limelight');
let _limelightReady=false;

function positionLimelight(el){
  if(!navLimelight||!el) return;
  const cx=el.offsetLeft+el.offsetWidth/2;
  const lw=navLimelight.offsetWidth||44;
  navLimelight.style.left=(cx-lw/2)+'px';
  if(!_limelightReady){
    // delay so initial placement has no slide animation
    setTimeout(()=>{
      navLimelight.style.transition='left .35s cubic-bezier(.25,.46,.45,.94)';
      _limelightReady=true;
    },60);
  }
}

function setNavActive(id){
  navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));
  if(navHomeBtn) navHomeBtn.classList.toggle('active',!id);
  // slide limelight to active item
  const activeEl=id
    ?document.querySelector('.nav-pill a[href="#'+id+'"]')
    :navHomeBtn;
  positionLimelight(activeEl);
}

// Click: set immediately
navLinks.forEach(a=>{
  a.addEventListener('click',()=>{
    const id=a.getAttribute('href').slice(1);
    setNavActive(id);
  });
});

// Scroll: use section top positions
function updateNavOnScroll(){
  if(window.scrollY<80){ setNavActive(null); return; }
  const sections=['work','about'];
  let current=null;
  sections.forEach(id=>{
    const el=document.getElementById(id);
    if(el&&el.getBoundingClientRect().top<=window.innerHeight*0.45) current=id;
  });
  setNavActive(current);
}
window.addEventListener('scroll',updateNavOnScroll,{passive:true});
setNavActive(null); // home active on load

syncFilterUI();
renderWork();

// ── MATCH MODAL ──
let _aiMatchData = null;

function openMatchModal() {
  const list = document.getElementById('match-project-list');
  list.innerHTML = projects.map(p =>
    '<label class="match-project-item"><input type="checkbox" value="'+p.id+'"><span>'+p.title+'</span></label>'
  ).join('');
  switchMatchTab('ai');
  document.getElementById('match-modal').classList.add('open');
}
function closeMatchModal() {
  document.getElementById('match-modal').classList.remove('open');
}
document.addEventListener('click', function(e) {
  if (e.target === document.getElementById('match-modal')) closeMatchModal();
});
function switchMatchTab(tab) {
  document.getElementById('panel-manual').style.display = tab === 'manual' ? 'block' : 'none';
  document.getElementById('panel-ai').style.display = tab === 'ai' ? 'block' : 'none';
  document.getElementById('tab-btn-manual').classList.toggle('active', tab === 'manual');
  document.getElementById('tab-btn-ai').classList.toggle('active', tab === 'ai');
}
function generateShareFromManual() {
  const checked = [...document.querySelectorAll('#match-project-list input:checked')];
  if (!checked.length) { alert('请至少选择一个项目'); return; }
  const ids = checked.map(cb => parseInt(cb.value));
  const job = document.getElementById('manual-job-title').value.trim() || '该岗位';
  openShareLink(ids, job, '');
  closeMatchModal();
}
async function runAIMatch() {
  const jd = document.getElementById('jd-textarea').value.trim();
  if (!jd) { document.getElementById('jd-textarea').focus(); return; }
  const runBtn = document.getElementById('modal-run-btn');
  const resultDiv = document.getElementById('ai-result-modal');
  runBtn.textContent = '分析中…'; runBtn.disabled = true;
  resultDiv.style.display = 'none'; resultDiv.classList.remove('visible');
  document.getElementById('modal-share-btn').classList.remove('visible');
  try {
    const res = await fetch('/api/match', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ jd })
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'API error');
    }
    _aiMatchData = await res.json();
    openShareLink(_aiMatchData.matched_ids, _aiMatchData.job_title||'该岗位', _aiMatchData.reason||'');
    closeMatchModal();
  } catch(err) {
    resultDiv.textContent = '匹配失败：' + err.message;
    resultDiv.style.display = 'block'; resultDiv.classList.add('visible');
    _aiMatchData = null;
  }
  runBtn.textContent = '重新匹配 →'; runBtn.disabled = false;
}
function generateShareFromAI() {
  if (!_aiMatchData) return;
  openShareLink(_aiMatchData.matched_ids, _aiMatchData.job_title||'该岗位', _aiMatchData.reason||'');
  closeMatchModal();
}
function generateShareURL(ids, job, reason) {
  const url = new URL(location.href);
  url.search = '';
  url.searchParams.set('share', ids.join(','));
  url.searchParams.set('job', job);
  if (reason) url.searchParams.set('reason', reason);
  return url.toString();
}
const _arrowSVG='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" style="display:inline-block;vertical-align:middle;flex-shrink:0"><path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// ── Project showcase (ported from project-showcase.tsx) ─────────────────

function buildShareShowcase(matched) {
  if (!matched.length) return '';

  const listHTML = matched.map((p, i) => {
    const title = p.title.split(' · ')[0].trim();
    const subtitle = p.title.includes(' · ') ? p.title.split(' · ').slice(1).join(' · ') : p.desc;
    const industries = (Array.isArray(p.industry) ? p.industry : [p.industry])
      .filter(ind => ALL_INDUSTRIES.includes(ind))
      .map(ind => iLabel[ind] || ind)
      .join(' · ');
    const coverSrc = p.cover || null;
    const bg = p.bg || '#efefed';
    return '<div class="sp-project" data-index="' + i + '" data-id="' + p.id + '">'
      + '<div class="sp-project-inner">'
      + '<div class="sp-project-bg"></div>'
      + '<div class="sp-project-info">'
      + '<h3><span class="sp-project-title-line"></span>' + title + '</h3>'
      + '<div class="sp-project-sub-row"><p>' + subtitle + '</p><span class="sp-project-tags">' + industries + '</span></div>'
      + '</div>'
      + '<div class="sp-project-right">'
      + '<span class="sp-project-arrow"></span>'
      + '</div>'
      + '</div></div>';
  }).join('');

  return '<div class="sp-showcase">'
    + listHTML
    + '</div>';
}

function initShareShowcase(container, matched, floatEl) {
  const items = Array.from(container.querySelectorAll('.sp-project'));

  // Get container rect once (like the reference code)
  function getContainerRect() {
    return container.closest('.share-page').getBoundingClientRect();
  }

  items.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
      const idx = parseInt(item.dataset.index);
      items.forEach(it => it.classList.remove('sp-active'));
      item.classList.add('sp-active');
      if (floatEl) {
        const rect = getContainerRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const p = matched[idx];
        floatEl.style.opacity = '1';
        floatEl.style.transform = 'translate3d(' + (mx + 20) + 'px,' + (my - 100) + 'px,0)';
        if (p.cover) {
          floatEl.innerHTML = '<img src="' + p.cover + '" alt="' + p.title + '" style="display:block;max-width:320px;max-height:360px;border-radius:12px">';
        } else {
          floatEl.innerHTML = '<div style="width:200px;height:200px;background:' + (p.bg || '#efefed') + ';border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:48px">' + (p.emoji || '📁') + '</div>';
        }
      }
    });

    item.addEventListener('mouseleave', (e) => {
      item.classList.remove('sp-active');
      if (floatEl) {
        floatEl.style.opacity = '0';
      }
    });

    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(item.dataset.id);
      if (projectPDFUrls[id]) {
        const proj = projects.find(p => p.id === id);
        openPDFModal(id, proj ? proj.title : '');
      }
    });
  });

  const sharePage = container.closest('.share-page');
  const rect = sharePage.getBoundingClientRect();
  floatEl.style.left = rect.left + 'px';
  floatEl.style.top = rect.top + 'px';

  sharePage.addEventListener('mousemove', (e) => {
    if (!floatEl || floatEl.style.opacity === '0') return;
    const rect = getContainerRect();
    floatEl.style.left = rect.left + 'px';
    floatEl.style.top = rect.top + 'px';
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    floatEl.style.transform = 'translate3d(' + (mx + 20) + 'px,' + (my - 100) + 'px,0)';
  });
}

function initHeroHighlight() {
  const el = document.getElementById('hero-highlight');
  if (!el) return;
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mx', x + 'px');
    el.style.setProperty('--my', y + 'px');
  });
}

function initCTAMarquee() {
  const track = document.getElementById('share-cta-track');
  const tooltip = document.getElementById('share-cta-tooltip');
  if (!track) return;

  // Build repeated text (2 copies for seamless loop)
  const text = '想看更多项目？';
  const repeated = Array(6).fill(text + '  ✦  ').join('');
  track.innerHTML = '<span>' + repeated + '</span><span aria-hidden="true">' + repeated + '</span>';

  // Tooltip follows cursor with rotation
  const maxRotation = 20;
  let isHovered = false;

  const marquee = track.closest('.share-cta-marquee');
  marquee.addEventListener('mouseenter', () => {
    isHovered = true;
    tooltip.style.opacity = '1';
  });
  marquee.addEventListener('mouseleave', () => {
    isHovered = false;
    tooltip.style.opacity = '0';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isHovered) return;
    const midpoint = window.innerWidth / 2;
    const distance = Math.abs(e.clientX - midpoint);
    const rotation = (distance / midpoint) * maxRotation;
    const rot = e.clientX > midpoint ? rotation : -rotation;
    tooltip.style.top = e.clientY + 'px';
    tooltip.style.left = e.clientX + 'px';
    tooltip.style.transform = 'rotateZ(' + rot + 'deg) translate(-50%, -140%)';
  });
}

function openShareLink(ids, job, reason) {
  const url = generateShareURL(ids, job, reason);
  window.open(url, '_blank');
}

function showSharePage(ids, job, reason) {
  document.getElementById('share-job-name').textContent = job;
  const reasonEl = document.getElementById('share-reason-text');
  reasonEl.textContent = reason || '';
  reasonEl.style.display = reason ? 'block' : 'none';
  const matched = projects.filter(p => ids.includes(p.id));
  const grid = document.getElementById('share-cards');
  grid.style.minHeight = '';
  grid.innerHTML = buildShareShowcase(matched);

  // Floating image – append to share-page for correct fixed positioning
  const sharePage = document.querySelector('.share-page');
  let floatEl = document.getElementById('sp-float');
  if (!floatEl) {
    floatEl = document.createElement('div');
    floatEl.id = 'sp-float';
    floatEl.style.cssText = 'position:fixed;left:0;top:0;z-index:99999;pointer-events:none;opacity:0;transition:opacity .3s cubic-bezier(.4,0,.2,1)';
    sharePage.appendChild(floatEl);
  }
  floatEl.style.display = 'block';

  initShareShowcase(grid, matched, floatEl);
  initHeroHighlight();
  initCTAMarquee();
  document.getElementById('share-overlay').style.display = 'block';
  window.scrollTo(0, 0);
}
function closeShareOverlay() {
  document.getElementById('share-overlay').style.display = 'none';
  const floatEl = document.getElementById('sp-float');
  if (floatEl) floatEl.style.display = 'none';
  const tooltip = document.getElementById('share-cta-tooltip');
  if (tooltip) tooltip.style.opacity = '0';
  history.pushState({}, '', location.pathname);
}
function copyShareLink() {
  navigator.clipboard.writeText(location.href).then(() => {
    const btn = document.querySelector('.share-copy-btn');
    const orig = btn.textContent;
    btn.textContent = '已复制 ✓';
    setTimeout(() => btn.textContent = orig, 2000);
  });
}
document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(location.search);
  const shareParam = params.get('share');
  if (!shareParam) return;
  const ids = shareParam.split(',').map(Number).filter(Boolean);
  const job = params.get('job') || '该岗位';
  const reason = params.get('reason') || '';
  if (ids.length) showSharePage(ids, job, reason);
});
