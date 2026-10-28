import React from "react";

const ProjectButton = ({
  icon: Icon,
  text,
  link,
  label,
  onClick,
  className = "",
  active = false,
  variant = "default",
}) => {
  const baseClasses =
    "group inline-flex items-center justify-center gap-3 rounded-full font-semibold transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500";

  const variantClasses =
    variant === "filter"
      ? active
        ? "bg-blue-500 text-white shadow-md shadow-blue-500/30 hover:bg-blue-600 hover:-translate-y-0.5"
        : "border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:-translate-y-0.5"
      : "bg-linear-to-r from-blue-400 to-blue-600 text-white shadow-md shadow-blue-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/40";

  const content = (
    <>
      {Icon && (
        <span
          className={
            variant === "filter"
              ? "flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-current/40 transition-transform duration-300 group-hover:rotate-6"
              : "flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-white/70 transition-transform duration-300 group-hover:rotate-6"
          }
        >
          <Icon size={20} />
        </span>
      )}

      <span>{text ?? label}</span>
    </>
  );

  const classes = `${baseClasses} ${
    variant === "filter" ? "px-5 py-2.5 text-sm" : "px-5 py-2"
  } ${variantClasses} ${className}`;

  if (link) {
    return (
      <a href={link} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={variant === "filter" ? active : undefined}
      className={classes}
    >
      {content}
    </button>
  );
};

export default ProjectButton;
