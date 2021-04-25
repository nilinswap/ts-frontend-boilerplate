module.exports = componentName => ({
  content: `import ${componentName} from "./${componentName}";
export default ${componentName};
`,
  extension: `.tsx`,
  name: `index.tsx`,
})
