import { useState } from 'react';
import MyComponent from './components/MyCompont';
import PropTypes from 'prop-types';

import './App.less';

function Label(props) {
  return (
    <div className="label">
      <MyComponent width={18} height={18} name={props.name} />
      <span className="label-key">{props.label}:</span>
      <span className="label-value">{props.value}</span>
    </div>
  );
}
Label.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
};
const list = [
  { label: '邮箱', value: 'lyw360145@gmail.com', name: 'mail' },
  { label: '电话', value: '15761687026', name: 'phone' },
  { label: '现居', value: '海南.澄迈', name: 'address' },
  { label: '出生日期', value: '1993.04.27', name: 'date' },
];
const contentList = [
  {
    icon: 'xx',
    label: '个人优势',
    content: [
      '熟练掌握HTML5,CSS3,JavaSript前端基础， 熟悉移动端(H5)，PC端开发，能够快速搭建Web前端项目',
      '熟练掌握 Vue以及相关生态技术，并对Vue原理有一定了解，使用过Vue3',
      '熟悉React Hooks，熟悉常用的api及优化方法',
      '熟悉浏览器原理以及计算机网络相关技术,有性能优化方面实践经验',
      '熟悉Node.js服务端语言，能够通过Egg.js、Express框架快速构建服务',
      '熟悉Webpack、Vite、Less/Scss、Git、Jenkins工具使用',
      '工作积极主动，执行力强，能够推动项目与技术方案落地',
    ],
  },

  {
    icon: 'xx',
    label: '工作经历',
    child: [
      {
        className: 'title',
        bussiness: '华为研发OD(德科)',
        range: '2022.07~2023.08',
        engineer: '前端开发工程师',
        content: [
          '负责公司产品Web前端功能设计、开发和实现',
          '负责3ms平台项目的优化，升级，维护',
          '参与团队工程化建设，探讨与解决团队在开发过程中遇到的难点',
        ],
      },

      {
        className: 'title',
        bussiness: ' 中电金信软件有限公司 ',
        range: '2019.06~2022.06',
        engineer: '前端开发工程师',
        content: ['负责项目组需求开发，参与项目组技术评审，提供建议与技术方案'],
      },
      {
        className: 'title',
        bussiness: ' 深圳纵横通信息技术有限公司 ',
        range: '2017.07~2019.06',
        engineer: '技术支持工程师',
        content: [
          '负责机房中央空调、温湿度传感器、UPS、气体传感器等微机模块协议开发，调试，接入到公司提供的监控系统',
        ],
      },
    ],
  },
  {
    icon: 'xx',
    label: '项目经历',
    child: [
      {
        className: 'title',
        bussiness: '3ms平台项目',
        range: '2022.08~2023.05',
        descript:
          '3ms平台是面向华为员工的知识管理平台，目的是为了帮助华为员工有效地组织、存储、共享和利用知识资源；主要模块有博客，文档库，图库，网络专家，复盘，纪要服务，我的想法，白皮书等',
        technologyStack:
          '所有模块都用React开发，部分模块涉及Node服务（Experss + GraphQL）',
        content: [
          '使用React独立完成纪要服务，我的想法、白皮书新模块开发，并且按时交付99%的需求',
          '排查定位线上问题，并与产品沟通后，提供解决方案',
          '通过Webpack重新构建项目，模块启动时间从3分钟降到1分钟；新模块开发改成SPA模式，提高用户体验与减少资源请求',
          '安装配置Jenkins，实现3ms项目前端自动化部署，代码部署时间缩短1.5小时',
          '前端代码迁移',
        ],
        content1: [
          '前端资源与Node服务迁移云服务器，下线没有流量的应用和删除冗余代码',
          '安装Nginx,重新配置静态资源服务与负载均衡；安装PM2,重新配置Node服务；配置ALB代理服务异常电话与短信告警',
          '以流程图方式记录前端代码部署情况，并上传的部门wiki',
        ],
      },

      {
        className: 'title',
        bussiness: '时习知项目',
        range: '2023.06~2023.08',
        descript:
          '时习知是面向企业的数字化在线学习平台，目的是帮助企业新员工培训、通用能力培养、职位能力提升、企业知识沉淀等，主要有学堂管理、课程、考试、直播课堂、知识、教学、我的学习、数据报表八大功能模块，是大型Web项目',
        technologyStack:
          '项目由用户侧与管理侧，还有H5组成; 用户侧与管理侧技术方案分别是Egg.js + React + Vue 与 qiankun + React + Vue;H5重新技术选型Vue3 + TypeScript',
        visitAddress: 'https://shixizhi.huawei.com/',
        content: [
          '负责项目组需求开发，参与项目组技术评审，提供建议与技术方案',
          '为团队开发了图标管理平台（Egg.js + Mysql + React）,避免重复引入图标',
          '解决海外节点CDN缓存问题，避免手动刷CDN，缩短了发包时间半个小时',
        ],
      },
    ],
  },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="header-container">
          <div className="radius"></div>
          <div className="name">
            王禄玉
            <div className="engineer">求职意向：前端开发工程师</div>
          </div>
          <div className="infomation">
            {list.map((item, index) => (
              <Label {...item} key={index} />
            ))}
          </div>
        </div>
      </header>
      {contentList.map((item, index) => (
        <section key={index} className="resume-content">
          <div className="content-left">{item.label}</div>
          <div className="content-right">
            {item.child ? (
              item.child.map((node) => (
                <div style={{marginBottom:'20px'}} key={node.range}>
                  <div key={node.bussiness} className="title">
                    <span>{node.range}</span>
                    <span>{node.bussiness}</span>
                    <span>{node.engineer}</span>
                  </div>
                  {node.descript ? (
                    <div className="descript">
                      <span>项目描述：</span>
                      {node.descript}
                    </div>
                  ) : null}
                  {node.technologyStack ? (
                    <div className="descript">
                      <span>技术栈：</span>
                      {node.technologyStack}
                    </div>
                  ) : null}{' '}
                  {node.visitAddress ? (
                    <div className="descript">
                      <span>访问地址：</span>
                      <a href="https://shixizhi.huawei.com/">
                        https://shixizhi.huawei.com/
                      </a>
                    </div>
                  ) : null}
                  <ul>
                    {node.content.map((content, i) => (
                      <li key={content}>
                        <div
                          className={`text ${
                            i === node.content.length - 1 && node.content1
                              ? 'weight'
                              : null
                          }`}
                        >
                          {content}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ul className="level-ul">
                    {node.content1
                      ? node.content1.map((content) => (
                          <li className="level3" key={content}>
                            <div className="text">{content}</div>
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              ))
            ) : (
              <ul>
                {item.content.map((content) => (
                  <li key={content}>
                    <div className="text">{content}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </>
  );
}

export default App;
