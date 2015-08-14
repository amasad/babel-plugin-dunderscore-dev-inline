export default function({ Plugin, types: t }) {
  return new Plugin('dunderscore-dev-inline', {
    metadata: {
      group: 'builtin-pre',
    },

    visitor: {
      Identifier(node) {
        if (node.name === '__DEV__' &&
          !this.parentPath.isAssignmentExpression() &&
          !this.parentPath.isVariableDeclarator()) {
            this.replaceWith(t.valueToNode(process.env.NODE_ENV === 'development'));
        }
      }
    }
  });
};
