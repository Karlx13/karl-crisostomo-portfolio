import { HighlightMap } from '@/constants';

export interface HighlightedPart {
  text: string;
  className?: string;
  isHighlighted: boolean;
}

export const highlightWords = (text: string): HighlightedPart[] => {
  // Sort keys by length (longest first) to avoid partial matches
  const sortedKeys = Object.keys(HighlightMap).sort((a, b) => b.length - a.length);

  const regex = new RegExp(`(${sortedKeys.join('|')})`, 'gi');

  return text.split(regex).map((part) => {
    const key = sortedKeys.find((word) => word.toLowerCase() === part.toLowerCase());

    if (key) {
      return {
        text: part,
        className: HighlightMap[key],
        isHighlighted: true,
      };
    }

    return {
      text: part,
      className: undefined,
      isHighlighted: false,
    };
  });
};
