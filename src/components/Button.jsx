export default function Button({ text, icon: Icon, color = "text-gray-400", bgColor = "bg-gray-100", bgHoverColor = "bg-gray-300", onClick }) {
  return (
    <button onClick={onClick} type="button" className={`inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-nowrap rounded ${bgColor} px-2 py-1 text-xs font-semibold ${color} shadow-sm ring-1 ring-inset ring-gray-300 hover:${bgHoverColor}`}>
      {text}
      {Icon && <Icon className="w-4 h-4" aria-hidden="true" />}
    </button>
  );
}
