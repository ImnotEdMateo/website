export interface FormattedDate {
  date: string;
  time: string;
}

export function formatDate(iso: string): FormattedDate {
  const d = new Date(iso);

  return {
    date: d.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }),
    time: d.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit"
    })
  };
}

