const SILICONFLOW_API_KEY = process.env.SILICONFLOW_API_KEY;

const iLabel = {auto:'出行',finance:'金融',tech:'互联网',gov:'政府',commerce:'电商',media:'传媒',education:'教育',healthcare:'医疗健康'};
const sLabel = {ux:'UX设计',research:'用户研究',strategy:'设计策略',visual:'视觉设计',motion:'动效设计',brand:'品牌设计'};

const projects = [
  {id:1,title:'建设银行 · 手机银行适老化改造',desc:'针对老年用户群体的手机银行APP适老化改造设计，通过用户调研、信息架构重组和界面简化，提升老年用户的操作效率和使用体验。',industry:['finance'],skills:['ux','research'],emoji:'🏦'},
  {id:2,title:'极氪汽车 · 智能座舱HMI设计',desc:'为极氪汽车设计智能座舱的人机交互界面，包括导航、媒体控制和车辆设置等核心功能，实现驾驶场景下的安全高效交互。',industry:['auto'],skills:['ux','visual'],emoji:'🚗'},
  {id:3,title:'中国卫星网络 · 品牌视觉升级',desc:'为中国卫星网络集团进行品牌视觉系统升级，包括logo设计、色彩体系和应用规范，塑造科技感和国际化的品牌形象。',industry:['tech'],skills:['brand','visual'],emoji:'🛰️'},
  {id:4,title:'山东城商行联盟 · 数字化中台设计',desc:'为山东省城市商业银行联盟设计数字化中台系统，整合多个城商行的业务流程，实现统一的数据管理和业务协同。',industry:['finance'],skills:['ux','strategy'],emoji:'🏛️'},
  {id:5,title:'全国工会职工书屋 · 数字阅读平台',desc:'为全国工会职工书屋设计数字阅读平台，整合图书资源和阅读数据，为工会会员提供便捷的在线阅读服务。',industry:['gov'],skills:['ux','visual'],emoji:'📚'},
  {id:6,title:'数云 · 消费者运营平台 redesign',desc:'对数云消费者运营平台进行重新设计，优化数据可视化和用户操作流程，提升商家的消费者管理效率。',industry:['tech'],skills:['ux','research'],emoji:'📊'},
  {id:7,title:'深蓝汽车 · 用户社区APP',desc:'为深蓝汽车设计用户社区APP，包括用车分享、活动报名和售后服务等功能，构建品牌与用户之间的互动桥梁。',industry:['auto'],skills:['ux','visual'],emoji:''},
  {id:8,title:'硅基流动 · AI平台官网',desc:'为硅基流动设计AI平台官网，展示模型能力和应用场景，通过清晰的信息架构和视觉设计传达技术实力。',industry:['tech'],skills:['ux','visual','brand'],emoji:'🤖'},
  {id:9,title:'宝武集团 · 智慧供应链平台',desc:'为宝武钢铁集团设计智慧供应链管理平台，整合采购、物流和库存数据，实现供应链全流程的数字化管理。',industry:['finance'],skills:['ux','strategy'],emoji:'⚙️'},
  {id:10,title:'NetaBrain · 智能家居中枢',desc:'为NetaBrain设计智能家居中枢应用的交互和视觉，实现设备管理、场景联动和数据分析等功能。',industry:['tech'],skills:['ux','visual','motion'],emoji:'🏠'},
  {id:11,title:'新东方 · 在线学习平台',desc:'为新东方设计在线学习平台的用户体验，优化课程浏览、学习进度跟踪和互动功能，提升在线学习效果。',industry:['education'],skills:['ux','research'],emoji:'🎓'},
  {id:12,title:'敦煌文创 · 数字化品牌体验',desc:'为敦煌文创设计数字化品牌体验，结合传统文化元素和现代设计语言，打造沉浸式的线上文化体验。',industry:['media'],skills:['brand','visual','motion'],emoji:'🏺'},
];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!SILICONFLOW_API_KEY) {
    return res.status(500).json({ error: 'SILICONFLOW_API_KEY not configured' });
  }

  const { jd } = await req.json();
  if (!jd) {
    return res.status(400).json({ error: 'JD text is required' });
  }

  const projectList = projects.map(p => {
    const ind = Array.isArray(p.industry) ? p.industry.map(i => iLabel[i]||i).join('/') : (iLabel[p.industry]||p.industry);
    return '['+p.id+'] '+p.title+'（'+ind+'，技能：'+p.skills.map(s=>sLabel[s]||s).join('、')+'）：'+p.desc;
  }).join('\n');

  try {
    const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + SILICONFLOW_API_KEY,
      },
      body: JSON.stringify({
        model: 'Qwen/Qwen2.5-72B-Instruct',
        max_tokens: 400,
        messages: [
          { role: 'system', content: '你是帮助招聘方了解候选人作品集的助手。根据JD从项目列表找出最相关的2-3个项目，并从JD提取岗位名称。只输出JSON，不要输出其他文字：{"matched_ids":[1,2],"job_title":"产品设计师","reason":"一句话说明匹配原因"}' },
          { role: 'user', content: 'JD：\n' + jd + '\n\n项目列表：\n' + projectList },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: 'SiliconFlow API error: ' + errText });
    }

    const data = await response.json();
    const text = data.choices[0].message.content;
    const result = JSON.parse(text.replace(/```json|```/g, '').trim());
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
