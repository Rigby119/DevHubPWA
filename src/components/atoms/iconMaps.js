import {
    LuFolder, LuRocket, LuSettings, LuFlaskConical, LuPackage,
    LuGlobe, LuPlug, LuSmartphone, LuBot, LuChartBar, LuPaintbrush, LuFileText,
    LuLink, LuBriefcase, LuDollarSign, LuClipboardList, LuChartPie,
    LuReceipt, LuCalendarDays, LuMessageCircle, LuMail, LuBuilding2, LuPin,
} from 'react-icons/lu'

export const PROJECT_ICONS = [
    { value: 'folder', label: 'Carpeta', Icon: LuFolder },
    { value: 'rocket', label: 'Lanzamiento', Icon: LuRocket },
    { value: 'settings', label: 'Config / Tool', Icon: LuSettings },
    { value: 'flask', label: 'Experimento', Icon: LuFlaskConical },
    { value: 'package', label: 'Paquete / Librería', Icon: LuPackage },
    { value: 'globe', label: 'Web / Frontend', Icon: LuGlobe },
    { value: 'plug', label: 'API / Backend', Icon: LuPlug },
    { value: 'smartphone', label: 'Mobile', Icon: LuSmartphone },
    { value: 'bot', label: 'Bot / Automatización', Icon: LuBot },
    { value: 'barchart', label: 'Dashboard / Data', Icon: LuChartBar },
    { value: 'paintbrush', label: 'Diseño / UI', Icon: LuPaintbrush },
    { value: 'filetext', label: 'Docs / Notes', Icon: LuFileText },
]

export const LINK_ICONS = [
    { value: 'link', label: 'Link general', Icon: LuLink },
    { value: 'briefcase', label: 'Trabajo / CRM', Icon: LuBriefcase },
    { value: 'dollar', label: 'Precios', Icon: LuDollarSign },
    { value: 'clipboard', label: 'Información / Catálogo', Icon: LuClipboardList },
    { value: 'piechart', label: 'Reportes / Métricas', Icon: LuChartPie },
    { value: 'receipt', label: 'Facturas / Admin', Icon: LuReceipt },
    { value: 'calendar', label: 'Calendario / Agenda', Icon: LuCalendarDays },
    { value: 'message', label: 'Chat / Soporte', Icon: LuMessageCircle },
    { value: 'mail', label: 'Correo / Contacto', Icon: LuMail },
    { value: 'building', label: 'Portal empresa', Icon: LuBuilding2 },
    { value: 'pin', label: 'Referencia rápida', Icon: LuPin },
]

// Lookup: dado un value, devuelve el componente Icon
export function getProjectIcon(value) {
    return (PROJECT_ICONS.find(i => i.value === value) ?? PROJECT_ICONS[0]).Icon
}

export function getLinkIcon(value) {
    return (LINK_ICONS.find(i => i.value === value) ?? LINK_ICONS[0]).Icon
}