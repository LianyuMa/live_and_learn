function escape(s) {
  return s.replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/'/g, '&apos;')
          .replace(/"/g, '&quot;');
}

function html(pieces, ...substitutions) {
  let result = pieces[0];
  let i = 0;
  for (i; i < substitutions.length; ++i) {
    result += escape(substitutions[i]) + pieces[i + 1];
  }
  return result;
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
