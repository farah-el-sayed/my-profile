const ToolChip: React.FC<{ name: string }> = ({ name }) => (
  <span className="rounded-full border border-marrsgreen/30 bg-bglight px-4 py-2 text-sm font-medium text-marrsdark shadow-sm transition-[border-color,background-color,box-shadow] duration-300 hover:border-marrsgreen hover:bg-marrsgreen/5 hover:shadow-[0_8px_20px_rgba(0,122,122,0.12)] dark:border-carrigreen/30 dark:bg-carddark dark:text-carrilight dark:hover:border-carrigreen dark:hover:bg-carrigreen/5 dark:hover:shadow-[0_8px_20px_rgba(5,206,145,0.12)]">
    {name}
  </span>
);

export default ToolChip;
