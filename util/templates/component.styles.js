module.exports = componentName => ({
  content: `import styled from "styled-components"

export const SampleStyle = styled.div\`
    width: 360px;
\`
`,
  extension: `.styles.js`,
  name: `${componentName}.styles.js`,
})
