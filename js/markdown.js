function miniMarkdown(text) {
  if (!text) return "";

  // HTML escape – biztonság

  const escapeMap = {
    "&": "&amp;",
    '"': "&quot;",
    "'": "&#39;"
  };

  text = text.replace(/[&"']/g, m => escapeMap[m]);

  // CODE: `code`
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");

  // BOLD-ITALIC: ***text***
  text = text.replace(/\*\*\*([^*]+)\*\*\*/g, "<strong><em>$1</em></strong>");

  // BOLD: **text**
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

  // ITALIC: *text*
  text = text.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  // STRIKETHROUGH: ~~text~~
  text = text.replace(/~~([^~]+)~~/g, "<del>$1</del>");

  // SUPERSCRIPT: ^text^
  text = text.replace(/\^([^ ^]+)\^/g, "<sup>$1</sup>");
  // SUBSCRIPT: H~2~O → H<sub>2</sub>O
  
  // SUBSCRIPT: ~text~
   text = text.replace(/~([0-9]+)~/g, "<sub>$1</sub>");


    return text;
}

quiz.forEach(q => {
  q.question = miniMarkdown(q.question);
  q.hint = miniMarkdown(q.hint);
  q.expl = miniMarkdown(q.expl);
  q.correct_answer = miniMarkdown(q.correct_answer);

//  q.incorrect_answers = q.incorrect_answers.map(a => miniMarkdown(a));
});
