export function ThinRule({
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      role="separator"
      className={`h-px w-full bg-current opacity-10 ${className}`.trim()}
      {...props}
    />
  );
}
