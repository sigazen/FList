import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { FileList } from './src/node/index.js'
import { githubReleasesFilesAnalysis } from "./src/node/analysis/githubReleasesFilesAnalysis/index.js";
import { cloudflarePagesDownProxy } from "./src/node/proxy/cloudflarePagesDownProxy/index.js";
import { fileUrlTreeAnalysis } from "./src/node/analysis/fileUrlTreeAnalysis/index.js";
import { huggingFaceDatasetsAnalysis } from "./src/node/analysis/huggingFaceDatasetsAnalysis/index.js";
import { vercelDownProxy } from './src/node/proxy/vercelDownProxy/index.js';
import { netlifyDownProxy } from './src/node/proxy/netlifyDownProxy/index.js';
import { giteeReleasesFilesAnalysis } from './src/node/analysis/giteeReleasesFilesAnalysis/index.js';
import { githubReposAnalysis } from './src/node/analysis/githubReposAnalysis/index.js';
import { giteeReposAnalysis } from './src/node/analysis/giteeReposAnalysis/index.js';


/**
 * 站点配置文件，没有注释的选项如果不知道有什么作用不建议修改，有注释的选项可以根据注释修改
 * */
export default defineUserConfig({
  bundler: viteBundler(),
  pagePatterns: [],
  lang: 'zh-CN',
  public: `./public`,
  // 网站标题，标题颜色可在 src/client/css/main.css 中修改
  title: 'siga-MCresources',
  // 网站的简介，有助于搜索引擎收录
  description: '私人我的世界资源下载站。',
  // 页面 <head> 标签内添加的额外标签。 不要修改/logo.png可以替换掉这个文件，删除logo.png会导致构建出错。
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  // 页面预加载，所有其它页面所需的文件都会被预拉取。这对于小型站点来说是十分有帮助的，因为它会大大提升页面切换的速度。但是在你的网站有很多页面时不建议你这么做。
  // 简单来说就是，如果你的文件不多就可以打开这个选项，可以大大提高页面切换的速度，如果文件非常多就不建议打开。建议超过100个文件就不要打开这个选项。
  shouldPrefetch: true,
  // 主题配置 FileList 是 vuepress 的一个主题，文件展示的功能全部由这个主题提供。
  theme: FileList([
    {
  mountPath:"/地图",
  analysis:fileUrlTreeAnalysis({
    "/【1.20.4】逃离失落之城.zip":"https://huggingface.co/datasets/backumc/mapu/resolve/main/%5B1.20.4%5D%E9%80%83%E7%A6%BB%E5%A4%B1%E8%90%BD%E4%B9%8B%E5%8E%85%20-%20v4.0.zip"
    "/【1.11】惊天矿工团.zip":"https://huggingface.co/datasets/backumc/mapu/resolve/main/%5B1.11%5D%E6%83%8A%E5%A4%A9%E7%9F%BF%E5%B7%A5%E5%9B%A2.zip"
    "/【1.19.2】蛋糕塔 可装fabric版本mod.zip":"https://huggingface.co/datasets/backumc/mapu/resolve/main/%5B1.19.2%5D%E8%9B%8B%E7%B3%95%E5%A1%94%20%E5%8F%AF%E8%A3%85fabric%E7%89%88%E6%9C%ACmod.zip"
    "/【1.20.1】灾难之星2.zip":"https://huggingface.co/datasets/backumc/mapu/resolve/main/%5B1.20.1%5D%E7%81%BE%E9%9A%BE%E4%B9%8B%E6%98%9F2.zip"
    "/【1.21.4】起床战争地图+资源包.zip":"https://huggingface.co/datasets/backumc/mapu/resolve/main/%5B1.21.4%5D%E8%B5%B7%E5%BA%8A%E6%88%98%E4%BA%89%E5%9C%B0%E5%9B%BE%2B%E8%B5%84%E6%BA%90%E5%8C%85.zip"
    "/【1.21.4】马里奥竞速 v1.6.3.zip":"https://huggingface.co/datasets/backumc/mapu/resolve/main/%5B1.21.4%5D%E9%A9%AC%E9%87%8C%E5%A5%A5%E7%AB%9E%E9%80%9F%20v1.6.3.zip"
    "/【整合包】伪神的沙盒：异域黎明v1.5.6.zip":"https://huggingface.co/datasets/backumc/mapu/resolve/main/%5BMinecraft%5D%E4%BC%AA%E7%A5%9E%E7%9A%84%E6%B2%99%E7%9B%92%EF%BC%9A%E5%BC%82%E5%9F%9F%E9%BB%8E%E6%98%8Ev1.5.6.zip"
    "/【整合包】超级像素派对.zip":"https://huggingface.co/datasets/backumc/mapu/resolve/main/%5B%E6%95%B4%E5%90%88%E5%8C%85%5D%E8%B6%85%E7%BA%A7%E5%83%8F%E7%B4%A0%E6%B4%BE%E5%AF%B9.zip"
    }),
    downProxy:cloudflarePagesDownProxy(),
  }
    // ... 可以配置多个挂载路径和仓库，以此类推
  ])
})
