export const parseSection = (section) => {
  const [title, ...content] = section.split('\n');

  const cleanTitle = title.startsWith('#') ? title.substring(1).trim() : title.trim();

  const points = [];

  let currentPoint = '';

  content.forEach((line) => {
    const trimedLine = line.trim();
    if (trimedLine.startsWith('•')) {
      if (currentPoint) points.push(currentPoint.trim());
      currentPoint = trimedLine;
    } else if (!trimedLine) {
      if (currentPoint) points.push(currentPoint.trim());
      currentPoint = '';
    } else {
      currentPoint += ' ' + trimedLine;
    }
  });

  if (currentPoint) points.push(currentPoint.trim());

  return {
    title: cleanTitle,
    points: points.filter(
      (point) => point && !point.startsWith('#') && !point.startsWith('[Choose'),
    ),
  };
};

export function parsePoint(point) {
  const isNumbered = /^d+\./.test(point);
  const isMainPoint = /^•/.test(point);
  const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/u;
  const hasEmoji = emojiRegex.test(point);
  const isEmpty = !point.trim();
  return { isNumbered, isMainPoint, hasEmoji, isEmpty };
}

export function parseEmojiPoint(content) {
  const cleanContent = content.replace(/^[•]\s*/, '').trim();
  const match = cleanContent.match(/^(\p{Emoji}+)(.+)$/u);
  if (!match) return null;
  const [_, emoji, text] = match;
  return {
    emoji: emoji.trim(),
    text: text.trim(),
  };
}
