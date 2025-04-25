import { Plugin } from 'vite'
import less from 'less'
import fs from 'fs'
import path from 'path'

interface InputOptions {
  fileName: string
  output?: string
}

export interface Less2cssStrOptions {
  outputDir: string
  input: (InputOptions | string)[]
}

async function compileSingleLess(fileName: string, outputFileName: string) {
  const lessFilePath = path.resolve(process.cwd(), fileName)
  const cssOutputPath = path.resolve(process.cwd(), outputFileName)

  // 读取 Less 文件内容
  const lessContent = fs.readFileSync(lessFilePath, 'utf-8')

  // 将 Less 编译为 CSS
  const output = await less.render(lessContent, {
    filename: lessFilePath, // 对于解析 @import 路径很重要
    javascriptEnabled: true,
    compress: true, // 添加压缩选项
  })

  // 确保输出目录存在
  const outputDir = path.dirname(cssOutputPath)
  fs.mkdirSync(outputDir, { recursive: true })

  // 将 CSS 写入输出文件 - 注意：这里的文件路径应该是 cssOutputPath，而不是模板字符串
  fs.writeFileSync(cssOutputPath, `export default \`${output.css}\``, 'utf-8') // 修正写入逻辑
}

export const less2JSStringCompiler = ({ input, outputDir }: Less2cssStrOptions): Plugin => {
  return {
    name: 'less-to-css-string',
    enforce: 'post', // 确保在其他构建步骤之后运行
    async closeBundle() {
      if (fs.existsSync(outputDir)) {
        fs.rmSync(outputDir, { recursive: true, force: true })
      }

      fs.mkdirSync(outputDir, { recursive: true })

      await Promise.all(
        input.map((item) => {
          const inputConfig: InputOptions = typeof item === 'string' ? { fileName: item } : item

          let outputFileName = ''

          if (inputConfig.output) {
            if (path.isAbsolute(inputConfig.fileName)) {
              outputFileName = inputConfig.output
            } else {
              outputFileName = path.resolve(outputDir, inputConfig.output)
            }
          } else {
            const fileName = path.basename(inputConfig.fileName, '.less')
            outputFileName = path.join(outputDir, `${fileName}.js`)
          }

          return compileSingleLess(inputConfig.fileName, outputFileName)
        })
      ).catch((error) => {
        console.error(`编译失败: ${error}`)
        throw error
      })
    },
  }
}
