import map from 'unist-util-map';
export function kompendiumCode() {
  return transformer;
}
function transformer(tree) {
  return map(tree, mapCodeNode);
}
function mapCodeNode(node) {
  if (node.type !== 'element') {
    return node;
  }
  if (node.tagName !== 'code') {
    return node;
  }
  const language = getLanguage(node.properties);
  if (!language) {
    return node;
  }
  return Object.assign(Object.assign({}, node), { type: 'element', tagName: 'kompendium-code', properties: {
      language: language,
    }, children: [] });
}
function getLanguage(props) {
  if (!props) {
    return;
  }
  if (!('className' in props)) {
    return;
  }
  const languageClass = props.className.find((name) => name.startsWith('language-'));
  if (!languageClass) {
    return;
  }
  return languageClass.replace('language-', '');
}