const WorkingProcessCard = ({ id, title, text, bgColor = 'var(--color-gray-light)' }) => {
  return (
    <div
      className="rounded-3xl p-8 shadow-[0_4px_0_0_var(--color-dark)] border border-[var(--color-dark)]"
      style={{ backgroundColor: bgColor }}
    >
      {/* Header Row */}
      <div className="flex items-start gap-4 mb-4">
        <p className="text-3xl font-bold text-[var(--color-dark)] flex-shrink-0">{id}</p>
        <div>
          <h3 className="text-xl font-bold mb-3 text-[var(--color-dark)]">{title}</h3>
          <p className="text-base leading-relaxed text-gray-700">{text}</p>
        </div>
      </div>
    </div>
  );
};
export default WorkingProcessCard;
