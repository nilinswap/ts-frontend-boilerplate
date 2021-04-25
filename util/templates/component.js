module.exports = componentName => ({
  content: `import React from "react";

import { ${componentName}Props } from "./${componentName}.types";

import { SampleStyle } from "./${componentName}.styles";

const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
    <SampleStyle data-testid="${componentName}" className="foo-bar">{foo}</SampleStyle>
);

export default ${componentName};

`,
  extension: `.tsx`,
  name: `${componentName}.tsx`,
})
