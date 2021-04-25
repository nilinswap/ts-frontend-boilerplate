require("colors")
const fs = require("fs")
const templates = require("./templates/templates")
const { isTaggedTemplateExpression } = require("typescript")

const componentName = process.argv[2]

if (!componentName) {
  console.error("Require a valid component name".red)
  process.exit(1)
}

if (!componentName.match(/^[A-Z]/)) {
  console.error("Component name must start with capital letters".red)
  process.exit(1)
}

console.log("Creating Component Template: " + componentName)
const componentDirectoryName = componentName //.toLowerCase()
const componentDirectory = `./src/components/${componentDirectoryName}`

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red)
  process.exit(1)
}

fs.mkdirSync(componentDirectory)

const generatedTemplates = templates.map(template => template(componentName))

generatedTemplates.forEach(template => {
  console.log("template", template.name)
  if (template.name == "index.tsx") {
    fs.writeFileSync(`${componentDirectory}/index.tsx`, template.content)
  } else {
    fs.writeFileSync(
      `${componentDirectory}/${componentName}${template.extension}`,
      template.content
    )
  }
})

console.log("Successfully created component: " + componentDirectory.green)
