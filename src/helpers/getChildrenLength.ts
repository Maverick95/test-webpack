const getChildrenLength = (container: HTMLElement) : string => {
  const children = container?.children?.length ?? 0;
  return `You have currently ${children} children in the body.`;
}

export default getChildrenLength;

