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
        ? "bg-blue-600 text-white border border-blue-600 shadow-md shadow-blue-500/25 hover:bg-blue-700 hover:-translate-y-0.5 dark:bg-blue-500 dark:border-blue-400 dark:hover:bg-blue-400"
        : "filter-inactive border border-blue-200 bg-white text-blue-700 hover:bg-blue-50 hover:-translate-y-0.5"
      : "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/30 hover:from-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/40 dark:from-blue-500 dark:to-blue-700 dark:hover:from-blue-400 dark:hover:to-blue-600";

  const iconClasses =
    variant === "filter"
      ? "flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-current/30 transition-all duration-300 group-hover:rotate-6"
      : "flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-white/60 transition-all duration-300 group-hover:rotate-6";

  const content = (
    <>
      {Icon && (
        <span className={iconClasses}>
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
