export function item(name: string, link: string) {
  // const text = name.replace(/(-|^[a-z])/g, (str) => {
  //   return `${str[0] ? ' ' : ''}${str[1].toUpperCase()}`;
  // });
  const text = name;
  return { text, link };
}