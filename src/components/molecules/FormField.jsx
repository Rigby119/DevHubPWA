import Label from '@components/atoms/Label'

export default function FormField({ label, children }) {
    return (
        <div className="flex flex-col gap-1.5 mb-3">
            <Label>{label}</Label>
            {children}
        </div>
    )
}