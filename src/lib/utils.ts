export function formattedDate(dateInput: string | Date): string {
  const date = new Date(dateInput);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric"
  }).format(date);

  return formattedDate;
}
