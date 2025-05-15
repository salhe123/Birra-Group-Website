export function formatCustomDate(dateString: string): string {
  const date = new Date(dateString);
  const options = { month: "short" } as const;
  const month = date.toLocaleString("en-US", options);
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}
