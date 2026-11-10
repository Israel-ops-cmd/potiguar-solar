/** Máscara simples para celular/fixo brasileiro: (84) 9 1234-5678 */
export function formatPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3, 7)}-${d.slice(7)}`;
}

export function isValidPhone(value: string) {
  const d = value.replace(/\D/g, "");
  return d.length === 10 || (d.length === 11 && d[2] === "9");
}
