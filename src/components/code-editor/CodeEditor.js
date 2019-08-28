import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Editor from 'react-simple-code-editor';
import classNames from 'classnames';
import hljs from 'highlight.js';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/dracula.css';

hljs.registerLanguage('json', json);

const code = `
{
  "rooms": [
    {
      "name": "home",
      "doors": [
        {
          "name": "math",
          "task": "1+1=?",
          "hint": "Try to change the URL address...",
          "key": "2",
          "redirect": "/room/neworld"
        }
      ]
    },
    {
      "name": "neworld",
      "hint": "hello, to new world!"
    }
  ]
}
`;

const styles = theme => ({
  area: {
    height: '100%',
    maxHeight: '100%',
    overflow: 'auto'
  },
  editor: {
    minHeight: '100%',
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: 12
  }
});

class CodeEditor extends PureComponent {
  state = { code };

  render() {
    const { code } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.area}>
        <Editor
          value={code}
          onValueChange={code => this.setState({ code })}
          highlight={code => hljs.highlight('json', code).value}
          padding={10}
          className={classNames('makefile', 'hljs', classes.editor)}
        />
      </div>
    );
  }
}

export default withStyles(styles)(CodeEditor);
