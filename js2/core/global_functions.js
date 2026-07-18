function insert_style(css) {
  let css_element = document.createElement('style');
  css_element.type = 'text/css';
  css_element.textContent = css;
  console.log(css_element);
  document.head.append(css_element);
}
