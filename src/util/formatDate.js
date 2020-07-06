import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function formatDate(unformatedDate, withHour = false) {
  if (withHour) {
    return format(parseISO(unformatedDate), 'dd/MM/yyyy HH:mm', {
      locale: ptBR,
    });
  }
  return format(parseISO(unformatedDate), 'dd/MM/yyyy', {
    locale: ptBR,
  });
}
