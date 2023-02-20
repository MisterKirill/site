export default function Button({ text, bg = 'white', fg = 'black', Icon }) {
    return (
        <button style={{backgroundColor: bg, color: fg}} className={`flex items-center px-3 py-1 gap-2 rounded-md transition-[padding] duration-200 hover:px-6`}>
            <Icon className="text-[30px]" />
            <span className="button-font">{text}</span>
        </button>
    )
}