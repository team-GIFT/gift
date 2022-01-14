/* 컬러 변환 -------------------------------------------------------------------- */

const hex2RgbValue = (
  hex: string
): { red: number; green: number; blue: number } => {
  if (hex[0] === '#') hex = hex.slice(1);
  if (hex.length === 3) hex = hex.repeat(2);

  return {
    red: parseInt(hex[0] + hex[1], 16),
    green: parseInt(hex[2] + hex[3], 16),
    blue: parseInt(hex[4] + hex[5], 16),
  };
};

export const hex2rgb = (hex: string) => {
  const { red, green, blue } = hex2RgbValue(hex);
  return `rgb(${red}, ${green}, ${blue})`;
};

export const hex2rgba = (hex: string, alpha: number | string = '100%') => {
  if (!alpha.toString().includes('%')) alpha = `${(alpha as number) * 100}%`;
  const { red, green, blue } = hex2RgbValue(hex);
  return `rgba(${red} ${green} ${blue} / ${alpha})`;
};
