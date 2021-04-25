import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

// Create your style.
const style = {
  myButton: {
    backgroundColor: 'green'
  }
}

// Compile styles, apply plugins.
const sheet = jss.createStyleSheet(style)

const { classes } = sheet.attach();
console.log( classes);
// If you want to render on the client, insert it into DOM.
export {classes}



